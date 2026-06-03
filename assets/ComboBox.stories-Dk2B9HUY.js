import { i as __esmMin, s as __toESM } from "./preload-helper-D6TR99Xr.js";
import { R as require_react } from "./iframe-BAi17vnA.js";
import { t as require_jsx_runtime } from "./jsx-runtime-zKrvQtwx.js";
//#region src/components/ComboBox.tsx
function ComboBox({ label, description, id, name, options, value, defaultValue, onChange, onSelect, onOpenChange, fit = false, block = false, autoFocus = false, autoComplete = "off", onClick, zIndex, maxVisibleOptions = 10, noResultsText = "No results found", loading = false, loadingText = "Loading results", className, inputClassName, resultsClassName, disabled = false, readOnly = false, placeholder, onBlur, onFocus, onKeyDown, ref, style, "aria-describedby": ariaDescribedBy, ...inputProps }) {
	const generatedId = (0, import_react.useId)();
	const inputId = id ?? `combobox-${generatedId}`;
	const descriptionId = description ? `${inputId}-description` : void 0;
	const listboxId = `${inputId}-listbox`;
	const blurTimeoutRef = (0, import_react.useRef)(null);
	const isValueControlled = value !== void 0;
	const [internalValue, setInternalValue] = (0, import_react.useState)(value ?? defaultValue ?? "");
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(-1);
	const [showAllOptions, setShowAllOptions] = (0, import_react.useState)(false);
	const inputValue = (isValueControlled ? value : internalValue) ?? "";
	const normalisedInputValue = normalise(inputValue);
	const hasQuery = normalisedInputValue.length > 0;
	const selectedOption = findMatchingOptionByNormalisedValue(normalisedInputValue, options);
	const shouldBrowseOptions = showAllOptions && selectedOption !== null;
	const visibleDescriptionIds = [descriptionId, ariaDescribedBy].filter(Boolean).join(" ") || void 0;
	const filteredOptions = getFilteredOptions(options, normalisedInputValue, shouldBrowseOptions);
	const visibleOptions = maxVisibleOptions > 0 ? filteredOptions.slice(0, maxVisibleOptions) : filteredOptions;
	const showResults = isOpen && (loading || hasQuery);
	const activeOptionIndex = clampActiveIndex(activeIndex, visibleOptions.length);
	const clearPendingBlur = () => {
		if (blurTimeoutRef.current === null) return;
		window.clearTimeout(blurTimeoutRef.current);
		blurTimeoutRef.current = null;
	};
	(0, import_react.useEffect)(() => {
		return clearPendingBlur;
	}, []);
	const liveRegionMessage = getLiveRegionMessage({
		loading,
		loadingText,
		noResultsText,
		resultCount: visibleOptions.length,
		showResults
	});
	const rootClassNames = [
		"ons-field",
		"ons-autosuggest",
		"ons-autosuggest--initialised",
		showResults ? "ons-autosuggest--has-results" : "",
		className ?? ""
	].filter(Boolean).join(" ");
	const inputClassNames = [
		"ons-input",
		"ons-input--text",
		block ? "ons-input--block" : "",
		inputClassName ?? ""
	].filter(Boolean).join(" ");
	const resultsClassNames = ["ons-autosuggest__results", resultsClassName ?? ""].filter(Boolean).join(" ");
	const setOpen = (nextOpen) => {
		setIsOpen((currentOpen) => {
			if (currentOpen !== nextOpen) onOpenChange?.(nextOpen);
			return nextOpen;
		});
	};
	const setInputValueState = (nextValue) => {
		if (!isValueControlled) setInternalValue(nextValue);
	};
	const closeResults = () => {
		setOpen(false);
		setActiveIndex(-1);
		setShowAllOptions(false);
	};
	const selectOption = (option) => {
		setInputValueState(option.label);
		if (!areOptionsEqual(selectedOption, option)) onSelect?.(option);
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
	const handleChange = (event) => {
		const nextValue = event.target.value;
		const nextSelectedOption = findMatchingOption(nextValue, options);
		setShowAllOptions(false);
		setActiveIndex(-1);
		setInputValueState(nextValue);
		onChange?.(event, nextValue);
		if (!areOptionsEqual(selectedOption, nextSelectedOption)) onSelect?.(nextSelectedOption);
		if (!nextValue.trim()) {
			closeResults();
			return;
		}
		setOpen(true);
	};
	const handleFocus = (event) => {
		clearPendingBlur();
		if (selectedOption !== null) {
			setShowAllOptions(true);
			setOpen(true);
		} else if (hasQuery) setOpen(true);
		onFocus?.(event);
	};
	const handleBlur = (event) => {
		clearPendingBlur();
		blurTimeoutRef.current = window.setTimeout(() => {
			commitBlurValue();
			closeResults();
			blurTimeoutRef.current = null;
		}, 100);
		onBlur?.(event);
	};
	const handleKeyDown = (event) => {
		if (disabled || readOnly) {
			onKeyDown?.(event);
			return;
		}
		switch (event.key) {
			case "ArrowDown":
				if (!hasQuery && !loading) break;
				event.preventDefault();
				if (selectedOption !== null && !isOpen) setShowAllOptions(true);
				setOpen(true);
				if (visibleOptions.length > 0) setActiveIndex((currentIndex) => clampActiveIndex(currentIndex, visibleOptions.length) < visibleOptions.length - 1 ? clampActiveIndex(currentIndex, visibleOptions.length) + 1 : 0);
				break;
			case "ArrowUp":
				if (!hasQuery && !loading) break;
				event.preventDefault();
				if (selectedOption !== null && !isOpen) setShowAllOptions(true);
				setOpen(true);
				if (visibleOptions.length > 0) setActiveIndex((currentIndex) => clampActiveIndex(currentIndex, visibleOptions.length) > 0 ? clampActiveIndex(currentIndex, visibleOptions.length) - 1 : visibleOptions.length - 1);
				break;
			case "Home":
				if (showResults && visibleOptions.length > 0) {
					event.preventDefault();
					setActiveIndex(0);
				}
				break;
			case "End":
				if (showResults && visibleOptions.length > 0) {
					event.preventDefault();
					setActiveIndex(visibleOptions.length - 1);
				}
				break;
			case "Enter":
				if (showResults && activeOptionIndex >= 0 && visibleOptions[activeOptionIndex]) {
					event.preventDefault();
					selectOption(visibleOptions[activeOptionIndex]);
				}
				break;
			case "Escape":
				if (showResults) {
					event.preventDefault();
					closeResults();
				}
				break;
			default: break;
		}
		onKeyDown?.(event);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: rootClassNames,
		style,
		children: [
			label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "ons-label",
				htmlFor: inputId,
				children: label
			}) : null,
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ons-label__description",
				id: descriptionId,
				children: description
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ons-autosuggest__combobox",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					...inputProps,
					ref,
					id: inputId,
					name,
					type: "text",
					className: inputClassNames,
					autoComplete,
					autoFocus,
					disabled,
					readOnly,
					placeholder,
					value: inputValue,
					onChange: handleChange,
					onFocus: handleFocus,
					onBlur: handleBlur,
					onKeyDown: handleKeyDown,
					onClick,
					role: "combobox",
					"aria-autocomplete": "list",
					"aria-controls": showResults ? listboxId : void 0,
					"aria-expanded": showResults,
					"aria-activedescendant": showResults && activeOptionIndex >= 0 ? `${listboxId}-option-${activeOptionIndex}` : void 0,
					"aria-describedby": visibleDescriptionIds,
					style: getInputStyle({
						fit,
						zIndex
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: resultsClassNames,
				hidden: !showResults,
				style: zIndex !== void 0 ? { zIndex } : void 0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					id: listboxId,
					className: "ons-autosuggest__listbox",
					role: "listbox",
					children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "ons-autosuggest__option ons-autosuggest__option--no-results",
						role: "option",
						"aria-disabled": "true",
						children: loadingText
					}) : visibleOptions.length > 0 ? visibleOptions.map((option, index) => {
						const isActive = index === activeOptionIndex;
						const isSelected = areOptionsEqual(selectedOption, option);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							id: `${listboxId}-option-${index}`,
							className: ["ons-autosuggest__option", isActive ? "ons-autosuggest__option--focused" : ""].filter(Boolean).join(" "),
							role: "option",
							"aria-selected": isSelected,
							onMouseDown: (event) => {
								event.preventDefault();
								clearPendingBlur();
							},
							onClick: () => selectOption(option),
							children: option.label
						}, option.value);
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "ons-autosuggest__option ons-autosuggest__option--no-results",
						role: "option",
						"aria-disabled": "true",
						children: noResultsText
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-live": "polite",
				style: visuallyHiddenStyles,
				children: liveRegionMessage
			})
		]
	});
}
function normalise(value) {
	return value.trim().toLowerCase();
}
function findMatchingOption(value, options) {
	return findMatchingOptionByNormalisedValue(normalise(value), options);
}
function findMatchingOptionByNormalisedValue(normalisedValue, options) {
	if (!normalisedValue) return null;
	return options.find((option) => {
		return normalise(option.label) === normalisedValue || normalise(option.value) === normalisedValue;
	}) ?? null;
}
function getFilteredOptions(options, normalisedInputValue, shouldBrowseOptions) {
	if (shouldBrowseOptions) return options;
	if (!normalisedInputValue) return [];
	return options.filter((option) => {
		const label = normalise(option.label);
		const optionValue = normalise(option.value);
		return label.includes(normalisedInputValue) || optionValue.includes(normalisedInputValue);
	});
}
function areOptionsEqual(left, right) {
	if (left === right) return true;
	if (left === null || right === null) return false;
	return left.value === right.value;
}
function clampActiveIndex(index, optionCount) {
	if (optionCount === 0) return -1;
	if (index < 0) return -1;
	return index >= optionCount ? optionCount - 1 : index;
}
function getLiveRegionMessage({ loading, loadingText, noResultsText, resultCount, showResults }) {
	if (!showResults) return "";
	if (loading) return loadingText;
	if (resultCount === 0) return noResultsText;
	return `${resultCount} result${resultCount === 1 ? "" : "s"} available`;
}
function getInputStyle({ fit, zIndex }) {
	if (!fit && zIndex === void 0) return;
	return {
		...fit ? { width: "auto" } : {},
		...zIndex !== void 0 ? { zIndex } : {}
	};
}
var import_react, import_jsx_runtime, visuallyHiddenStyles;
var init_ComboBox = __esmMin((() => {
	import_react = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime = require_jsx_runtime();
	visuallyHiddenStyles = {
		position: "absolute",
		width: "1px",
		height: "1px",
		padding: 0,
		margin: "-1px",
		overflow: "hidden",
		clip: "rect(0 0 0 0)",
		whiteSpace: "nowrap",
		border: 0
	};
	try {
		ComboBox.displayName = "ComboBox";
		ComboBox.__docgenInfo = {
			"description": "",
			"displayName": "ComboBox",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/ComboBox.tsx",
			"methods": [],
			"props": {
				"label": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					}],
					"description": "Label text.",
					"name": "label",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"description": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					}],
					"description": "Hint text.",
					"name": "description",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"id": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					}],
					"description": "Element ID.",
					"name": "id",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"name": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					}],
					"description": "Name attribute.",
					"name": "name",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"options": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					}],
					"description": "Available options.",
					"name": "options",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					},
					"required": true,
					"tags": {},
					"type": { "name": "ComboBoxOption[]" }
				},
				"value": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					}],
					"description": "Controlled input value.",
					"name": "value",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"defaultValue": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					}],
					"description": "Uncontrolled initial input value.",
					"name": "defaultValue",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"onChange": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					}],
					"description": "Called when the input value changes.",
					"name": "onChange",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "((e: ChangeEvent<HTMLInputElement, Element>, value: string) => void) | undefined" }
				},
				"onSelect": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					}],
					"description": "Called when an option is selected or cleared.",
					"name": "onSelect",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "((option: ComboBoxOption | null) => void) | undefined" }
				},
				"onOpenChange": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					}],
					"description": "Called when the results list opens or closes.",
					"name": "onOpenChange",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "((open: boolean) => void) | undefined" }
				},
				"fit": {
					"defaultValue": { "value": "false" },
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					}],
					"description": "Whether to remove the default width.",
					"name": "fit",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "boolean | undefined" }
				},
				"block": {
					"defaultValue": { "value": "false" },
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					}],
					"description": "Whether to make the input span the container width.",
					"name": "block",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "boolean | undefined" }
				},
				"autoFocus": {
					"defaultValue": { "value": "false" },
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					}],
					"description": "Whether to focus the input on mount.",
					"name": "autoFocus",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "boolean | undefined" }
				},
				"autoComplete": {
					"defaultValue": { "value": "off" },
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					}],
					"description": "Autocomplete attribute.",
					"name": "autoComplete",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"onClick": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					}],
					"description": "Called when the input is clicked.",
					"name": "onClick",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "MouseEventHandler<HTMLInputElement> | undefined" }
				},
				"zIndex": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					}],
					"description": "Results z-index.",
					"name": "zIndex",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "number | undefined" }
				},
				"maxVisibleOptions": {
					"defaultValue": { "value": "10" },
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					}],
					"description": "Maximum number of visible options.",
					"name": "maxVisibleOptions",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "number | undefined" }
				},
				"noResultsText": {
					"defaultValue": { "value": "No results found" },
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					}],
					"description": "Text shown when there are no matching results.",
					"name": "noResultsText",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"loading": {
					"defaultValue": { "value": "false" },
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					}],
					"description": "Whether the options are loading.",
					"name": "loading",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "boolean | undefined" }
				},
				"loadingText": {
					"defaultValue": { "value": "Loading results" },
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					}],
					"description": "Text shown while loading.",
					"name": "loadingText",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"className": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					}],
					"description": "Root wrapper class name.",
					"name": "className",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"inputClassName": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					}],
					"description": "Input class name.",
					"name": "inputClassName",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"resultsClassName": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					}],
					"description": "Results wrapper class name.",
					"name": "resultsClassName",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"ref": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					}],
					"description": "Input ref.",
					"name": "ref",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ComboBox.tsx",
						"name": "ComboBoxProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "Ref<HTMLInputElement> | undefined" }
				}
			},
			"tags": {}
		};
	} catch (__react_docgen_typescript_loader_error) {}
}));
//#endregion
//#region src/components/ComboBox.stories.tsx
var tankOptions, meta, Default, LimitedResults, Loading, DefaultSelection, __namedExportsOrder;
//#endregion
__esmMin((() => {
	init_ComboBox();
	tankOptions = [
		{
			label: "D.Va",
			value: "d.va"
		},
		{
			label: "Domina",
			value: "domina"
		},
		{
			label: "Doomfist",
			value: "doomfist"
		},
		{
			label: "Hazard",
			value: "hazard"
		},
		{
			label: "Junker Queen",
			value: "junker queen"
		},
		{
			label: "Mauga",
			value: "mauga"
		},
		{
			label: "Orisa",
			value: "orisa"
		},
		{
			label: "Ramattra",
			value: "ramattra"
		},
		{
			label: "Reinhardt",
			value: "reinhardt"
		},
		{
			label: "Roadhog",
			value: "roadhog"
		},
		{
			label: "Sigma",
			value: "sigma"
		},
		{
			label: "Winston",
			value: "winston"
		},
		{
			label: "Wrecking Ball",
			value: "wrecking ball"
		},
		{
			label: "Zarya",
			value: "zarya"
		}
	];
	meta = {
		title: "Components/Combo Box",
		component: ComboBox,
		argTypes: {
			onChange: { action: "changed" },
			onClick: { action: "clicked" },
			onOpenChange: { action: "toggled" },
			onSelect: { action: "selected" },
			options: { control: false }
		}
	};
	Default = { args: {
		id: "combo-box",
		label: "Select tank",
		description: "Type to narrow the list and then choose an option.",
		placeholder: "Start typing tank name",
		options: tankOptions,
		autoFocus: true
	} };
	LimitedResults = { args: {
		...Default.args,
		id: "combo-box-limited-results",
		label: "Select tank",
		description: "Only the first 5 matching results are shown.",
		maxVisibleOptions: 5,
		autoFocus: false
	} };
	Loading = { args: {
		...Default.args,
		id: "combo-box-loading",
		label: "Select tank",
		description: "Type to search. Results will appear once the list has loaded.",
		loading: true,
		loadingText: "Loading available tanks",
		autoFocus: false
	} };
	DefaultSelection = { args: {
		...Default.args,
		id: "combo-box-default-selection",
		description: "An exact selection reopens the full list for browsing with arrow keys.",
		defaultValue: "Orisa",
		autoFocus: false
	} };
	Default.parameters = {
		...Default.parameters,
		docs: {
			...Default.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    id: \"combo-box\",\n    label: \"Select tank\",\n    description: \"Type to narrow the list and then choose an option.\",\n    placeholder: \"Start typing tank name\",\n    options: tankOptions,\n    autoFocus: true\n  }\n}",
				...Default.parameters?.docs?.source
			}
		}
	};
	LimitedResults.parameters = {
		...LimitedResults.parameters,
		docs: {
			...LimitedResults.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    ...Default.args,\n    id: \"combo-box-limited-results\",\n    label: \"Select tank\",\n    description: \"Only the first 5 matching results are shown.\",\n    maxVisibleOptions: 5,\n    autoFocus: false\n  }\n}",
				...LimitedResults.parameters?.docs?.source
			}
		}
	};
	Loading.parameters = {
		...Loading.parameters,
		docs: {
			...Loading.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    ...Default.args,\n    id: \"combo-box-loading\",\n    label: \"Select tank\",\n    description: \"Type to search. Results will appear once the list has loaded.\",\n    loading: true,\n    loadingText: \"Loading available tanks\",\n    autoFocus: false\n  }\n}",
				...Loading.parameters?.docs?.source
			}
		}
	};
	DefaultSelection.parameters = {
		...DefaultSelection.parameters,
		docs: {
			...DefaultSelection.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    ...Default.args,\n    id: \"combo-box-default-selection\",\n    description: \"An exact selection reopens the full list for browsing with arrow keys.\",\n    defaultValue: \"Orisa\",\n    autoFocus: false\n  }\n}",
				...DefaultSelection.parameters?.docs?.source
			}
		}
	};
	__namedExportsOrder = [
		"Default",
		"LimitedResults",
		"Loading",
		"DefaultSelection"
	];
}))();
export { Default, DefaultSelection, LimitedResults, Loading, __namedExportsOrder, meta as default };
