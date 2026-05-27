import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { type ComponentProps, useEffect, useRef, useState } from "react";

import { ComboBox, type ComboBoxOption } from "./ComboBox";

const defaultOptions = [
  { label: "Alpha Survey", value: "alpha" },
  { label: "Beta Survey", value: "beta" },
  { label: "Gamma Survey", value: "gamma" },
];

const setup = (overrideProps: Partial<ComponentProps<typeof ComboBox>> = {}) => {
  const props: ComponentProps<typeof ComboBox> = {
    id: "combo-box",
    label: "Select survey",
    options: defaultOptions,
    onChange: vi.fn(),
    onSelect: vi.fn(),
    ...overrideProps,
  };

  return {
    user: userEvent.setup(),
    props,
    ...render(<ComboBox {...props} />),
  };
};

const ComboBoxActionHarness = ({ onProcess }: { onProcess: (option: ComboBoxOption) => void }) => {
  const [selectedOption, setSelectedOption] = useState<ComboBoxOption | null>(null);

  return (
    <>
      <ComboBox
        id="combo-box-action"
        label="Select user"
        options={defaultOptions}
        onSelect={setSelectedOption}
      />
      <button
        type="button"
        disabled={selectedOption === null}
        onClick={() => {
          if (selectedOption === null) {
            return;
          }

          onProcess(selectedOption);
        }}
      >
        Process user
      </button>
    </>
  );
};

const ComboBoxObjectRefHarness = ({
  onRefReady,
}: {
  onRefReady: (element: HTMLInputElement | null) => void;
}) => {
  const objectRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    onRefReady(objectRef.current);
  }, [onRefReady]);

  return (
    <ComboBox
      ref={objectRef}
      id="object-ref-combo"
      label="Object ref survey"
      options={defaultOptions}
    />
  );
};

describe("ComboBox", () => {
  describe("accessibility", () => {
    it("keeps aria-selected in sync with the matched option instead of the active option", async () => {
      const { user } = setup({ defaultValue: defaultOptions[1].label });

      const input = screen.getByRole("combobox", { name: "Select survey" });

      await user.click(input);

      expect(screen.getByRole("option", { name: "Alpha Survey" })).toHaveAttribute(
        "aria-selected",
        "false",
      );
      expect(screen.getByRole("option", { name: "Beta Survey" })).toHaveAttribute(
        "aria-selected",
        "true",
      );
    });

    it("announces the number of results after the user starts typing", async () => {
      const { user } = setup();
      const input = screen.getByRole("combobox", { name: "Select survey" });

      await user.type(input, "a");

      expect(screen.getByText("3 results available")).toBeInTheDocument();
    });

    it("announces loading and empty states through the live region", () => {
      const { rerender } = render(
        <ComboBox
          id="combo-box-status"
          label="Status survey"
          options={defaultOptions}
          value="survey"
          loading
          loadingText="Loading surveys"
        />,
      );

      const input = screen.getByRole("combobox", { name: "Status survey" });

      fireEvent.focus(input);

      expect(screen.getByRole("option", { name: "Loading surveys" })).toHaveAttribute(
        "aria-disabled",
        "true",
      );
      expect(screen.getAllByText("Loading surveys")).toHaveLength(2);

      rerender(
        <ComboBox
          id="combo-box-status"
          label="Status survey"
          options={defaultOptions}
          value="missing"
          noResultsText="Nothing found"
        />,
      );

      fireEvent.focus(input);

      expect(screen.getByRole("option", { name: "Nothing found" })).toHaveAttribute(
        "aria-disabled",
        "true",
      );
      expect(screen.getAllByText("Nothing found")).toHaveLength(2);
    });

    it("keeps aria-activedescendant pointing at an existing option when options change", async () => {
      const user = userEvent.setup();
      const { rerender } = render(
        <ComboBox
          id="combo-box-dynamic"
          label="Dynamic survey"
          options={defaultOptions}
        />,
      );

      const input = screen.getByRole("combobox", { name: "Dynamic survey" });

      await user.type(input, "survey");
      await user.keyboard("{ArrowDown}{ArrowDown}");

      expect(input).toHaveAttribute("aria-activedescendant", "combo-box-dynamic-listbox-option-1");

      rerender(
        <ComboBox
          id="combo-box-dynamic"
          label="Dynamic survey"
          options={[defaultOptions[0]]}
          value="survey"
        />,
      );

      expect(input).toHaveAttribute("aria-activedescendant", "combo-box-dynamic-listbox-option-0");

      fireEvent.keyDown(input, { key: "ArrowUp" });

      expect(input).toHaveAttribute("aria-activedescendant", "combo-box-dynamic-listbox-option-0");
      expect(document.getElementById("combo-box-dynamic-listbox-option-0")).toBeInTheDocument();
    });

    it("continues keyboard navigation from the clamped visible option after options shrink", async () => {
      const user = userEvent.setup();
      const dynamicOptions = [
        { label: "Alpha Survey", value: "alpha" },
        { label: "Beta Survey", value: "beta" },
        { label: "Gamma Survey", value: "gamma" },
        { label: "Delta Survey", value: "delta" },
        { label: "Epsilon Survey", value: "epsilon" },
      ];
      const { rerender } = render(
        <ComboBox
          id="combo-box-shrink"
          label="Shrink survey"
          options={dynamicOptions}
        />,
      );

      const input = screen.getByRole("combobox", { name: "Shrink survey" });

      await user.type(input, "survey");
      await user.keyboard("{ArrowDown}{ArrowDown}{ArrowDown}{ArrowDown}{ArrowDown}");

      expect(input).toHaveAttribute("aria-activedescendant", "combo-box-shrink-listbox-option-4");

      rerender(
        <ComboBox
          id="combo-box-shrink"
          label="Shrink survey"
          options={dynamicOptions.slice(0, 3)}
          value="survey"
        />,
      );

      expect(input).toHaveAttribute("aria-activedescendant", "combo-box-shrink-listbox-option-2");

      fireEvent.keyDown(input, { key: "ArrowUp" });

      expect(input).toHaveAttribute("aria-activedescendant", "combo-box-shrink-listbox-option-1");

      fireEvent.keyDown(input, { key: "ArrowDown" });
      fireEvent.keyDown(input, { key: "ArrowDown" });

      expect(input).toHaveAttribute("aria-activedescendant", "combo-box-shrink-listbox-option-0");
    });
  });

  describe("interactions", () => {
    it("forwards refs and applies optional description, class, and style props", () => {
      const callbackRef = vi.fn();
      const onChange = vi.fn();
      const { unmount } = render(
        <ComboBox
          ref={callbackRef}
          id="styled-combo"
          label="Styled survey"
          description="Choose a survey"
          aria-describedby="external-help"
          name="survey"
          options={defaultOptions}
          value="survey"
          onChange={onChange}
          fit
          block
          className="root-class"
          inputClassName="input-class"
          resultsClassName="results-class"
          zIndex={20}
          placeholder="Search surveys"
          autoComplete="section-survey"
          maxVisibleOptions={0}
        />,
      );

      const input = screen.getByRole("combobox", { name: "Styled survey" });
      const root = input.closest(".ons-field") as HTMLElement;
      const results = root.querySelector(".ons-autosuggest__results") as HTMLElement;

      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "Alpha" } });

      expect(callbackRef).toHaveBeenCalledWith(input);
      expect(input).toHaveAttribute("aria-describedby", "styled-combo-description external-help");
      expect(screen.getByText("Choose a survey")).toHaveAttribute("id", "styled-combo-description");
      expect(input).toHaveClass("ons-input--block", "input-class");
      expect(input).toHaveStyle({ width: "auto", zIndex: "20" });
      expect(input).toHaveAttribute("name", "survey");
      expect(input).toHaveAttribute("placeholder", "Search surveys");
      expect(input).toHaveAttribute("autocomplete", "section-survey");
      expect(input).toHaveValue("survey");
      expect(onChange.mock.lastCall?.[1]).toBe("Alpha");
      expect(root).toHaveClass("root-class", "ons-autosuggest--has-results");
      expect(results).toHaveClass("results-class");
      expect(results).toHaveStyle({ zIndex: "20" });
      expect(screen.getAllByRole("option")).toHaveLength(defaultOptions.length);

      unmount();

      const onRefReady = vi.fn();

      render(<ComboBoxObjectRefHarness onRefReady={onRefReady} />);

      expect(onRefReady).toHaveBeenCalledWith(
        screen.getByRole("combobox", { name: "Object ref survey" }),
      );
    });

    it("renders without a label or description and applies z-index without fit", () => {
      render(
        <ComboBox
          id="combo-box-minimal"
          options={defaultOptions}
          zIndex={30}
        />,
      );

      const input = screen.getByRole("combobox");

      expect(input).not.toHaveAttribute("aria-describedby");
      expect(input).not.toHaveAttribute("aria-controls");
      expect(input).toHaveStyle({ zIndex: "30" });
      expect(input.style.width).toBe("");
    });

    it("generates ids and supports fit without z-index", () => {
      render(
        <ComboBox
          label="Generated survey"
          description="Generated description"
          options={defaultOptions}
          fit
          defaultValue={defaultOptions[0].label}
        />,
      );

      const input = screen.getByRole("combobox", { name: "Generated survey" });
      const label = screen.getByText("Generated survey");
      const description = screen.getByText("Generated description");

      expect(input.id).toMatch(/^combobox-/);
      expect(label).toHaveAttribute("for", input.id);
      expect(description).toHaveAttribute("id", `${input.id}-description`);
      expect(input).toHaveAttribute("aria-describedby", `${input.id}-description`);
      expect(input).toHaveStyle({ width: "auto" });
      expect(input.style.zIndex).toBe("");
      expect(input).toHaveValue(defaultOptions[0].label);
    });

    it("normalises query text when filtering options", () => {
      setup();

      const input = screen.getByRole("combobox", { name: "Select survey" });

      fireEvent.change(input, { target: { value: "  beTA  " } });

      expect(screen.getByRole("option", { name: "Beta Survey" })).toBeInTheDocument();
      expect(screen.queryByRole("option", { name: "Alpha Survey" })).not.toBeInTheDocument();
    });

    it("falls back to an empty string for a null controlled value", () => {
      render(
        <ComboBox
          id="combo-box-null"
          label="Null survey"
          options={defaultOptions}
          value={null as unknown as string}
        />,
      );

      expect(screen.getByRole("combobox", { name: "Null survey" })).toHaveValue("");
    });

    it("calls change, focus, blur, open, and select handlers", async () => {
      const onChange = vi.fn();
      const onSelect = vi.fn();
      const onOpenChange = vi.fn();
      const onFocus = vi.fn();
      const onBlur = vi.fn();
      const { user } = setup({ onChange, onSelect, onOpenChange, onFocus, onBlur });

      const input = screen.getByRole("combobox", { name: "Select survey" });

      await user.click(input);
      await user.type(input, "beta");

      expect(onFocus).toHaveBeenCalledTimes(1);
      expect(onChange.mock.lastCall?.[1]).toBe("beta");
      expect(onSelect).toHaveBeenLastCalledWith(defaultOptions[1]);
      expect(onOpenChange).toHaveBeenCalledWith(true);
      expect(screen.getByText("1 result available")).toBeInTheDocument();

      await user.tab();

      await waitFor(() => expect(input).toHaveValue("Beta Survey"));

      expect(onBlur).toHaveBeenCalledTimes(1);
      expect(onOpenChange).toHaveBeenLastCalledWith(false);
    });

    it("clears a previous selection when the user erases the value", async () => {
      const onSelect = vi.fn();
      const { user } = setup({ defaultValue: defaultOptions[0].label, onSelect });

      const input = screen.getByRole("combobox", { name: "Select survey" });

      await user.clear(input);
      await user.tab();

      await waitFor(() => expect(input).toHaveValue(""));
      expect(onSelect).toHaveBeenCalledWith(null);
    });

    it("supports action-button flows through onSelect state without waiting for blur", async () => {
      const onProcess = vi.fn();
      const user = userEvent.setup();

      render(<ComboBoxActionHarness onProcess={onProcess} />);

      const input = screen.getByRole("combobox", { name: "Select user" });
      const button = screen.getByRole("button", { name: "Process user" });

      expect(button).toBeDisabled();

      await user.type(input, defaultOptions[1].label);

      await waitFor(() => expect(button).toBeEnabled());

      await user.click(button);

      expect(onProcess).toHaveBeenCalledWith(defaultOptions[1]);

      await user.clear(input);

      await waitFor(() => expect(button).toBeDisabled());
    });

    it("does not emit a new selection when the current option is picked again", () => {
      const onSelect = vi.fn();

      render(
        <ComboBox
          id="combo-box-selected"
          label="Selected survey"
          options={defaultOptions}
          defaultValue={defaultOptions[1].label}
          onSelect={onSelect}
        />,
      );

      const input = screen.getByRole("combobox", { name: "Selected survey" });

      fireEvent.focus(input);
      fireEvent.click(screen.getByRole("option", { name: "Beta Survey" }));

      expect(onSelect).not.toHaveBeenCalled();
      expect(input).toHaveValue(defaultOptions[1].label);
    });

    it("handles option mouse down when there is no pending blur timeout", () => {
      render(
        <ComboBox
          id="combo-box-mousedown"
          label="Mouse down survey"
          options={defaultOptions}
          defaultValue={defaultOptions[1].label}
        />,
      );

      const input = screen.getByRole("combobox", { name: "Mouse down survey" });

      fireEvent.focus(input);

      const option = screen.getByRole("option", { name: "Alpha Survey" });

      fireEvent.mouseDown(option);
      fireEvent.click(option);

      expect(input).toHaveValue("Alpha Survey");
    });

    it("clears invalid text on blur because users must select from the list", async () => {
      const { user } = setup();
      const input = screen.getByRole("combobox", { name: "Select survey" });

      await user.type(input, "Unknown survey");
      await user.tab();

      await waitFor(() => expect(input).toHaveValue(""));
    });

    it("keeps an empty value empty on blur", () => {
      vi.useFakeTimers();

      try {
        setup();
        const input = screen.getByRole("combobox", { name: "Select survey" });

        fireEvent.focus(input);
        fireEvent.blur(input);
        vi.runAllTimers();

        expect(input).toHaveValue("");
      } finally {
        vi.useRealTimers();
      }
    });

    it("clears whitespace-only text on blur", () => {
      vi.useFakeTimers();

      try {
        setup();
        const input = screen.getByRole("combobox", { name: "Select survey" });

        fireEvent.focus(input);
        fireEvent.change(input, { target: { value: "   " } });
        fireEvent.blur(input);

        act(() => {
          vi.runAllTimers();
        });

        expect(input).toHaveValue("");
      } finally {
        vi.useRealTimers();
      }
    });

    it("handles direct keyboard navigation branches", async () => {
      const onSelect = vi.fn();

      setup({ onSelect });

      const input = screen.getByRole("combobox", { name: "Select survey" });

      fireEvent.change(input, { target: { value: "survey" } });

      await waitFor(() =>
        expect(screen.getAllByRole("option")).toHaveLength(defaultOptions.length),
      );

      fireEvent.keyDown(input, { key: "ArrowDown" });
      await waitFor(() =>
        expect(input).toHaveAttribute("aria-activedescendant", "combo-box-listbox-option-0"),
      );

      fireEvent.keyDown(input, { key: "ArrowDown" });
      await waitFor(() =>
        expect(input).toHaveAttribute("aria-activedescendant", "combo-box-listbox-option-1"),
      );

      fireEvent.keyDown(input, { key: "ArrowUp" });
      await waitFor(() =>
        expect(input).toHaveAttribute("aria-activedescendant", "combo-box-listbox-option-0"),
      );

      fireEvent.keyDown(input, { key: "ArrowUp" });
      await waitFor(() =>
        expect(input).toHaveAttribute("aria-activedescendant", "combo-box-listbox-option-2"),
      );

      fireEvent.keyDown(input, { key: "ArrowDown" });
      await waitFor(() =>
        expect(input).toHaveAttribute("aria-activedescendant", "combo-box-listbox-option-0"),
      );

      fireEvent.keyDown(input, { key: "Home" });
      await waitFor(() =>
        expect(input).toHaveAttribute("aria-activedescendant", "combo-box-listbox-option-0"),
      );

      fireEvent.keyDown(input, { key: "End" });
      await waitFor(() =>
        expect(input).toHaveAttribute("aria-activedescendant", "combo-box-listbox-option-2"),
      );

      fireEvent.keyDown(input, { key: "Enter" });
      await waitFor(() => expect(input).toHaveValue("Gamma Survey"));
      expect(onSelect).toHaveBeenLastCalledWith(defaultOptions[2]);

      fireEvent.change(input, { target: { value: "survey" } });
      fireEvent.keyDown(input, { key: "Escape" });
      expect(input).toHaveAttribute("aria-expanded", "false");
    });

    it("ignores home, end, and enter when results are open but empty, and ignores escape when closed", async () => {
      setup();

      const input = screen.getByRole("combobox", { name: "Select survey" });

      fireEvent.keyDown(input, { key: "Escape" });
      expect(input).toHaveAttribute("aria-expanded", "false");

      fireEvent.change(input, { target: { value: "zzz" } });

      await waitFor(() =>
        expect(screen.getByRole("option", { name: "No results found" })).toBeInTheDocument(),
      );

      fireEvent.keyDown(input, { key: "ArrowDown" });
      fireEvent.keyDown(input, { key: "ArrowUp" });
      fireEvent.keyDown(input, { key: "Home" });
      fireEvent.keyDown(input, { key: "End" });
      fireEvent.keyDown(input, { key: "Enter" });

      expect(input).toHaveValue("zzz");
      expect(input).not.toHaveAttribute("aria-activedescendant");
      expect(screen.getByRole("option", { name: "No results found" })).toBeInTheDocument();
    });

    it("supports keyboard navigation shortcuts, escape, and enter selection", async () => {
      const onSelect = vi.fn();
      const { user } = setup({ onSelect });

      const input = screen.getByRole("combobox", { name: "Select survey" });

      await user.type(input, "survey");
      await user.keyboard("{ArrowUp}");

      expect(input).toHaveAttribute("aria-activedescendant", "combo-box-listbox-option-2");

      await user.keyboard("{Home}");

      expect(input).toHaveAttribute("aria-activedescendant", "combo-box-listbox-option-0");

      await user.keyboard("{End}");

      expect(input).toHaveAttribute("aria-activedescendant", "combo-box-listbox-option-2");

      await user.keyboard("{Escape}");

      expect(input).toHaveAttribute("aria-expanded", "false");

      await user.keyboard("{ArrowDown}{Enter}");

      await waitFor(() => expect(input).toHaveValue("Alpha Survey"));
      expect(onSelect).toHaveBeenLastCalledWith(defaultOptions[0]);
    });

    it("opens browse mode from a matched value when navigating with arrow keys", async () => {
      setup({ defaultValue: defaultOptions[1].label });

      const input = screen.getByRole("combobox", { name: "Select survey" });

      fireEvent.keyDown(input, { key: "ArrowDown" });

      await waitFor(() =>
        expect(screen.getAllByRole("option")).toHaveLength(defaultOptions.length),
      );

      fireEvent.keyDown(input, { key: "Escape" });
      fireEvent.keyDown(input, { key: "ArrowUp" });

      await waitFor(() =>
        expect(screen.getAllByRole("option")).toHaveLength(defaultOptions.length),
      );
    });

    it("ignores navigation when empty, disabled, or read only while forwarding key events", () => {
      const onKeyDown = vi.fn();
      const { rerender } = render(
        <ComboBox
          id="combo-box-guard"
          label="Guard survey"
          options={defaultOptions}
          onKeyDown={onKeyDown}
        />,
      );

      const input = screen.getByRole("combobox", { name: "Guard survey" });

      fireEvent.keyDown(input, { key: "ArrowDown" });
      fireEvent.keyDown(input, { key: "ArrowUp" });
      fireEvent.keyDown(input, { key: "Tab" });

      expect(onKeyDown).toHaveBeenCalledTimes(3);
      expect(input).toHaveAttribute("aria-expanded", "false");

      rerender(
        <ComboBox
          id="combo-box-guard"
          label="Guard survey"
          options={defaultOptions}
          disabled
          onKeyDown={onKeyDown}
        />,
      );

      fireEvent.keyDown(input, { key: "ArrowDown" });

      rerender(
        <ComboBox
          id="combo-box-guard"
          label="Guard survey"
          options={defaultOptions}
          value="survey"
          readOnly
          onKeyDown={onKeyDown}
        />,
      );

      fireEvent.keyDown(input, { key: "ArrowDown" });

      expect(onKeyDown).toHaveBeenCalledTimes(5);
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    });

    it("clears pending blur timers when refocusing, clicking an option, and unmounting", () => {
      vi.useFakeTimers();

      try {
        const clearTimeoutSpy = vi.spyOn(window, "clearTimeout");
        const { unmount } = render(
          <ComboBox
            id="combo-box-timers"
            label="Timer survey"
            options={defaultOptions}
            defaultValue={defaultOptions[1].label}
          />,
        );

        const input = screen.getByRole("combobox", { name: "Timer survey" });

        fireEvent.focus(input);

        const option = screen.getByRole("option", { name: "Alpha Survey" });

        fireEvent.blur(input);
        fireEvent.focus(input);

        expect(clearTimeoutSpy).toHaveBeenCalled();

        fireEvent.blur(input);
        fireEvent.mouseDown(option);
        fireEvent.click(option);

        expect(clearTimeoutSpy.mock.calls.length).toBeGreaterThanOrEqual(2);
        expect(input).toHaveValue("Alpha Survey");

        fireEvent.blur(input);
        unmount();

        expect(clearTimeoutSpy.mock.calls.length).toBeGreaterThanOrEqual(3);
      } finally {
        vi.runOnlyPendingTimers();
        vi.useRealTimers();
      }
    });
  });
});
