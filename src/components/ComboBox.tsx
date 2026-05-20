import {
  type ChangeEvent,
  type CSSProperties,
  type FocusEvent,
  type InputHTMLAttributes,
  type KeyboardEvent,
  type MouseEventHandler,
  type ReactElement,
  type Ref,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

/** Combo box options. */
export interface ComboBoxOption {
  /** Visible option label. */
  label: string;
  /** Submitted option value. */
  value: string;
}

/** Props for combo box. */
interface ComboBoxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "defaultValue" | "onChange" | "onSelect" | "size" | "value"
> {
  /** Label text. */
  label?: string;
  /** Hint text. */
  description?: string;
  /** Element ID. */
  id?: string;
  /** Name attribute. */
  name?: string;
  /** Available options. */
  options: ComboBoxOption[];
  /** Controlled input value. */
  value?: string;
  /** Uncontrolled initial input value. */
  defaultValue?: string;
  /** Called when the input value changes. */
  onChange?: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
  /** Called when an option is selected or cleared. */
  onSelect?: (option: ComboBoxOption | null) => void;
  /** Called when the results list opens or closes. */
  onOpenChange?: (open: boolean) => void;
  /** Whether to remove the default width. */
  fit?: boolean;
  /** Whether to make the input span the container width. */
  block?: boolean;
  /** Whether to focus the input on mount. */
  autoFocus?: boolean;
  /** Autocomplete attribute. */
  autoComplete?: string;
  /** Called when the input is clicked. */
  onClick?: MouseEventHandler<HTMLInputElement>;
  /** Results z-index. */
  zIndex?: number;
  /** Maximum number of visible options. */
  maxVisibleOptions?: number;
  /** Text shown when there are no matching results. */
  noResultsText?: string;
  /** Whether the options are loading. */
  loading?: boolean;
  /** Text shown while loading. */
  loadingText?: string;
  /** Root wrapper class name. */
  className?: string;
  /** Input class name. */
  inputClassName?: string;
  /** Results wrapper class name. */
  resultsClassName?: string;
  /** Input ref. */
  ref?: Ref<HTMLInputElement>;
}

export function ComboBox({
  label,
  description,
  id,
  name,
  options,
  value,
  defaultValue,
  onChange,
  onSelect,
  onOpenChange,
  fit = false,
  block = false,
  autoFocus = false,
  autoComplete = "off",
  onClick,
  zIndex,
  maxVisibleOptions = 10,
  noResultsText = "No results found",
  loading = false,
  loadingText = "Loading results",
  className,
  inputClassName,
  resultsClassName,
  disabled = false,
  readOnly = false,
  placeholder,
  onBlur,
  onFocus,
  onKeyDown,
  ref,
  style,
  "aria-describedby": ariaDescribedBy,
  ...inputProps
}: ComboBoxProps): ReactElement {
  const generatedId = useId();
  const inputId = id ?? `combobox-${generatedId}`;
  const descriptionId = description ? `${inputId}-description` : undefined;
  const listboxId = `${inputId}-listbox`;
  const blurTimeoutRef = useRef<number | null>(null);

  const isValueControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState<string>(value ?? defaultValue ?? "");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showAllOptions, setShowAllOptions] = useState(false);

  const inputValue = (isValueControlled ? value : internalValue) ?? "";
  const normalisedInputValue = normalise(inputValue);
  const hasQuery = normalisedInputValue.length > 0;
  const selectedOption = findMatchingOptionByNormalisedValue(normalisedInputValue, options);
  const shouldBrowseOptions = showAllOptions && selectedOption !== null;

  const visibleDescriptionIds =
    [descriptionId, ariaDescribedBy].filter(Boolean).join(" ") || undefined;

  const filteredOptions = getFilteredOptions(options, normalisedInputValue, shouldBrowseOptions);

  const visibleOptions =
    maxVisibleOptions > 0 ? filteredOptions.slice(0, maxVisibleOptions) : filteredOptions;

  const showResults = isOpen && (loading || hasQuery);
  const activeOptionIndex = clampActiveIndex(activeIndex, visibleOptions.length);

  const clearPendingBlur = () => {
    if (blurTimeoutRef.current === null) {
      return;
    }

    window.clearTimeout(blurTimeoutRef.current);
    blurTimeoutRef.current = null;
  };

  useEffect(() => {
    return clearPendingBlur;
  }, []);

  const liveRegionMessage = getLiveRegionMessage({
    loading,
    loadingText,
    noResultsText,
    resultCount: visibleOptions.length,
    showResults,
  });

  const rootClassNames = [
    "ons-field",
    "ons-autosuggest",
    "ons-autosuggest--initialised",
    showResults ? "ons-autosuggest--has-results" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const inputClassNames = [
    "ons-input",
    "ons-input--text",
    block ? "ons-input--block" : "",
    inputClassName ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const resultsClassNames = ["ons-autosuggest__results", resultsClassName ?? ""]
    .filter(Boolean)
    .join(" ");

  const setOpen = (nextOpen: boolean) => {
    setIsOpen((currentOpen) => {
      if (currentOpen !== nextOpen) {
        onOpenChange?.(nextOpen);
      }

      return nextOpen;
    });
  };

  const setInputValueState = (nextValue: string) => {
    if (!isValueControlled) {
      setInternalValue(nextValue);
    }
  };

  const closeResults = () => {
    setOpen(false);
    setActiveIndex(-1);
    setShowAllOptions(false);
  };

  const selectOption = (option: ComboBoxOption) => {
    setInputValueState(option.label);

    if (!areOptionsEqual(selectedOption, option)) {
      onSelect?.(option);
    }

    closeResults();
  };

  const commitBlurValue = () => {
    const trimmedValue = inputValue.trim();

    if (!trimmedValue) {
      setInputValueState("");

      return;
    }

    const exactMatch = findMatchingOption(trimmedValue, options);

    if (exactMatch) {
      setInputValueState(exactMatch.label);

      return;
    }

    setInputValueState("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;
    const nextSelectedOption = findMatchingOption(nextValue, options);

    setShowAllOptions(false);
    setActiveIndex(-1);
    setInputValueState(nextValue);
    onChange?.(event, nextValue);

    if (!areOptionsEqual(selectedOption, nextSelectedOption)) {
      onSelect?.(nextSelectedOption);
    }

    if (!nextValue.trim()) {
      closeResults();

      return;
    }

    setOpen(true);
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    clearPendingBlur();

    if (selectedOption !== null) {
      setShowAllOptions(true);
      setOpen(true);
    } else if (hasQuery) {
      setOpen(true);
    }

    onFocus?.(event);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    clearPendingBlur();
    blurTimeoutRef.current = window.setTimeout(() => {
      commitBlurValue();
      closeResults();
      blurTimeoutRef.current = null;
    }, 100);

    onBlur?.(event);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (disabled || readOnly) {
      onKeyDown?.(event);

      return;
    }

    switch (event.key) {
      case "ArrowDown": {
        if (!hasQuery && !loading) {
          break;
        }

        event.preventDefault();

        if (selectedOption !== null && !isOpen) {
          setShowAllOptions(true);
        }

        setOpen(true);

        if (visibleOptions.length > 0) {
          setActiveIndex((currentIndex) =>
            clampActiveIndex(currentIndex, visibleOptions.length) < visibleOptions.length - 1
              ? clampActiveIndex(currentIndex, visibleOptions.length) + 1
              : 0,
          );
        }

        break;
      }

      case "ArrowUp": {
        if (!hasQuery && !loading) {
          break;
        }

        event.preventDefault();

        if (selectedOption !== null && !isOpen) {
          setShowAllOptions(true);
        }

        setOpen(true);

        if (visibleOptions.length > 0) {
          setActiveIndex((currentIndex) =>
            clampActiveIndex(currentIndex, visibleOptions.length) > 0
              ? clampActiveIndex(currentIndex, visibleOptions.length) - 1
              : visibleOptions.length - 1,
          );
        }

        break;
      }

      case "Home": {
        if (showResults && visibleOptions.length > 0) {
          event.preventDefault();
          setActiveIndex(0);
        }

        break;
      }

      case "End": {
        if (showResults && visibleOptions.length > 0) {
          event.preventDefault();
          setActiveIndex(visibleOptions.length - 1);
        }

        break;
      }

      case "Enter": {
        if (showResults && activeOptionIndex >= 0 && visibleOptions[activeOptionIndex]) {
          event.preventDefault();
          selectOption(visibleOptions[activeOptionIndex]);
        }

        break;
      }

      case "Escape": {
        if (showResults) {
          event.preventDefault();
          closeResults();
        }

        break;
      }

      default:
        break;
    }

    onKeyDown?.(event);
  };

  return (
    <div
      className={rootClassNames}
      style={style}
    >
      {label ? (
        <label
          className="ons-label"
          htmlFor={inputId}
        >
          {label}
        </label>
      ) : null}

      {description ? (
        <span
          className="ons-label__description"
          id={descriptionId}
        >
          {description}
        </span>
      ) : null}

      <div className="ons-autosuggest__combobox">
        <input
          {...inputProps}
          ref={ref}
          id={inputId}
          name={name}
          type="text"
          className={inputClassNames}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          disabled={disabled}
          readOnly={readOnly}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onClick={onClick}
          role="combobox"
          aria-autocomplete="list"
          aria-controls={showResults ? listboxId : undefined}
          aria-expanded={showResults}
          aria-activedescendant={
            showResults && activeOptionIndex >= 0
              ? `${listboxId}-option-${activeOptionIndex}`
              : undefined
          }
          aria-describedby={visibleDescriptionIds}
          style={getInputStyle({ fit, zIndex })}
        />
      </div>

      <div
        className={resultsClassNames}
        hidden={!showResults}
        style={zIndex !== undefined ? { zIndex } : undefined}
      >
        <ul
          id={listboxId}
          className="ons-autosuggest__listbox"
          role="listbox"
        >
          {loading ? (
            <li
              className="ons-autosuggest__option ons-autosuggest__option--no-results"
              role="option"
              aria-disabled="true"
            >
              {loadingText}
            </li>
          ) : visibleOptions.length > 0 ? (
            visibleOptions.map((option, index) => {
              const isActive = index === activeOptionIndex;
              const isSelected = areOptionsEqual(selectedOption, option);

              return (
                <li
                  key={option.value}
                  id={`${listboxId}-option-${index}`}
                  className={[
                    "ons-autosuggest__option",
                    isActive ? "ons-autosuggest__option--focused" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  role="option"
                  aria-selected={isSelected}
                  onMouseDown={(event) => {
                    event.preventDefault();
                    clearPendingBlur();
                  }}
                  onClick={() => selectOption(option)}
                >
                  {option.label}
                </li>
              );
            })
          ) : (
            <li
              className="ons-autosuggest__option ons-autosuggest__option--no-results"
              role="option"
              aria-disabled="true"
            >
              {noResultsText}
            </li>
          )}
        </ul>
      </div>

      <div
        aria-live="polite"
        style={visuallyHiddenStyles}
      >
        {liveRegionMessage}
      </div>
    </div>
  );
}

function normalise(value: string): string {
  return value.trim().toLowerCase();
}

function findMatchingOption(value: string, options: ComboBoxOption[]): ComboBoxOption | null {
  return findMatchingOptionByNormalisedValue(normalise(value), options);
}

function findMatchingOptionByNormalisedValue(
  normalisedValue: string,
  options: ComboBoxOption[],
): ComboBoxOption | null {
  if (!normalisedValue) {
    return null;
  }

  return (
    options.find((option) => {
      return (
        normalise(option.label) === normalisedValue || normalise(option.value) === normalisedValue
      );
    }) ?? null
  );
}

function getFilteredOptions(
  options: ComboBoxOption[],
  normalisedInputValue: string,
  shouldBrowseOptions: boolean,
): ComboBoxOption[] {
  if (shouldBrowseOptions) {
    return options;
  }

  if (!normalisedInputValue) {
    return [];
  }

  return options.filter((option) => {
    const label = normalise(option.label);
    const optionValue = normalise(option.value);

    return label.includes(normalisedInputValue) || optionValue.includes(normalisedInputValue);
  });
}

function areOptionsEqual(left: ComboBoxOption | null, right: ComboBoxOption | null): boolean {
  if (left === right) {
    return true;
  }

  if (left === null || right === null) {
    return false;
  }

  return left.value === right.value;
}

function clampActiveIndex(index: number, optionCount: number): number {
  if (optionCount === 0) {
    return -1;
  }

  if (index < 0) {
    return -1;
  }

  return index >= optionCount ? optionCount - 1 : index;
}

function getLiveRegionMessage({
  loading,
  loadingText,
  noResultsText,
  resultCount,
  showResults,
}: {
  loading: boolean;
  loadingText: string;
  noResultsText: string;
  resultCount: number;
  showResults: boolean;
}): string {
  if (!showResults) {
    return "";
  }

  if (loading) {
    return loadingText;
  }

  if (resultCount === 0) {
    return noResultsText;
  }

  return `${resultCount} result${resultCount === 1 ? "" : "s"} available`;
}

function getInputStyle({
  fit,
  zIndex,
}: {
  fit: boolean;
  zIndex?: number;
}): CSSProperties | undefined {
  if (!fit && zIndex === undefined) {
    return undefined;
  }

  return {
    ...(fit ? { width: "auto" } : {}),
    ...(zIndex !== undefined ? { zIndex } : {}),
  };
}

const visuallyHiddenStyles: CSSProperties = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
  border: 0,
};
