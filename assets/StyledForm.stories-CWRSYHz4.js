import { i as __esmMin, r as __commonJSMin, s as __toESM } from "./preload-helper-D6TR99Xr.js";
import { R as require_react } from "./iframe-DcM16Kr9.js";
import { t as require_jsx_runtime } from "./jsx-runtime-zKrvQtwx.js";
import { n as init_Button, t as Button } from "./Button-CqP--hrd.js";
import { i as init_textFormatting, t as capitaliseFirstLetter } from "./textFormatting-CU-sI5Wy.js";
//#region src/components/forms/example-form/FormValidation.tsx
/**
* Validates the questionnaire name field.
* @param value - The raw string value from the input.
* @returns An error message string if invalid, or undefined if valid.
*/
function validateQuestionnaireName(value) {
	if (!value) return "Enter a valid questionnaire name";
	if (value.length < 8) return "Enter a valid questionnaire name (longer than 7 characters)";
}
/**
* Validates the interviewer ID field.
* @param value - The raw string value from the input.
* @returns An error message string if empty, or undefined if valid.
*/
function validateInterviewerID(value) {
	if (!value || value.trim() === "") return "Enter an Interviewer ID";
}
/**
* Validates the name field.
* @param value - The raw string value from the input.
* @returns An error message string if invalid, or undefined if valid.
*/
function validateName(value) {
	if (!value) return "Enter a name";
	if (value.length < 3) return "Enter a name longer than 2 characters";
}
/**
* Validates the password field.
* @param value - The raw string value from the input.
* @returns An error message string if invalid, or undefined if valid.
*/
function validatePassword(value) {
	if (!value) return "Enter a password";
	if (value.length < 6) return "Enter a password longer than 5 characters";
}
/**
* Validates the email field using a regular expression.
* @param value - The raw string value from the input.
* @returns An error message string if invalid, or undefined if valid.
*/
function validateEmail(value) {
	if (!value) return "Enter an email";
	if (!EMAIL_REGEX.test(value)) return "Enter an email address in the correct format, such as name@example.com";
}
/**
* Validates a radio group selection.
* @param value - The selected value string.
* @returns An error message string if nothing is selected, or undefined if valid.
*/
function validateRadio(value) {
	if (!value || value.trim() === "") return "Select an option";
}
/**
* Validates a checkbox group selection.
* @param value - An array of selected strings.
* @returns An error message string if the array is empty, or undefined if valid.
*/
function validateCheckbox(value) {
	if (!value || value.length === 0) return "Select an option";
}
var EMAIL_REGEX;
var init_FormValidation = __esmMin((() => {
	EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
	try {
		validateQuestionnaireName.displayName = "validateQuestionnaireName";
		validateQuestionnaireName.__docgenInfo = {
			"description": "Validates the questionnaire name field.",
			"displayName": "validateQuestionnaireName",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/forms/example-form/FormValidation.tsx",
			"methods": [],
			"props": {},
			"tags": {
				"param": "value - The raw string value from the input.",
				"returns": "An error message string if invalid, or undefined if valid."
			}
		};
	} catch (__react_docgen_typescript_loader_error) {}
	try {
		validateInterviewerID.displayName = "validateInterviewerID";
		validateInterviewerID.__docgenInfo = {
			"description": "Validates the interviewer ID field.",
			"displayName": "validateInterviewerID",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/forms/example-form/FormValidation.tsx",
			"methods": [],
			"props": {},
			"tags": {
				"param": "value - The raw string value from the input.",
				"returns": "An error message string if empty, or undefined if valid."
			}
		};
	} catch (__react_docgen_typescript_loader_error) {}
	try {
		validateName.displayName = "validateName";
		validateName.__docgenInfo = {
			"description": "Validates the name field.",
			"displayName": "validateName",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/forms/example-form/FormValidation.tsx",
			"methods": [],
			"props": {},
			"tags": {
				"param": "value - The raw string value from the input.",
				"returns": "An error message string if invalid, or undefined if valid."
			}
		};
	} catch (__react_docgen_typescript_loader_error) {}
	try {
		validatePassword.displayName = "validatePassword";
		validatePassword.__docgenInfo = {
			"description": "Validates the password field.",
			"displayName": "validatePassword",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/forms/example-form/FormValidation.tsx",
			"methods": [],
			"props": {},
			"tags": {
				"param": "value - The raw string value from the input.",
				"returns": "An error message string if invalid, or undefined if valid."
			}
		};
	} catch (__react_docgen_typescript_loader_error) {}
	try {
		validateEmail.displayName = "validateEmail";
		validateEmail.__docgenInfo = {
			"description": "Validates the email field using a regular expression.",
			"displayName": "validateEmail",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/forms/example-form/FormValidation.tsx",
			"methods": [],
			"props": {},
			"tags": {
				"param": "value - The raw string value from the input.",
				"returns": "An error message string if invalid, or undefined if valid."
			}
		};
	} catch (__react_docgen_typescript_loader_error) {}
	try {
		validateRadio.displayName = "validateRadio";
		validateRadio.__docgenInfo = {
			"description": "Validates a radio group selection.",
			"displayName": "validateRadio",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/forms/example-form/FormValidation.tsx",
			"methods": [],
			"props": {},
			"tags": {
				"param": "value - The selected value string.",
				"returns": "An error message string if nothing is selected, or undefined if valid."
			}
		};
	} catch (__react_docgen_typescript_loader_error) {}
	try {
		validateCheckbox.displayName = "validateCheckbox";
		validateCheckbox.__docgenInfo = {
			"description": "Validates a checkbox group selection.",
			"displayName": "validateCheckbox",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/forms/example-form/FormValidation.tsx",
			"methods": [],
			"props": {},
			"tags": {
				"param": "value - An array of selected strings.",
				"returns": "An error message string if the array is empty, or undefined if valid."
			}
		};
	} catch (__react_docgen_typescript_loader_error) {}
}));
//#endregion
//#region node_modules/deepmerge/dist/es.js
function isNonNullObject(value) {
	return !!value && typeof value === "object";
}
function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);
	return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
	return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
	return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options);
	});
}
function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) Object.keys(target).forEach(function(key) {
		destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
	});
	Object.keys(source).forEach(function(key) {
		if (!options.isMergeableObject(source[key]) || !target[key]) destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		else destination[key] = deepmerge(target[key], source[key], options);
	});
	return destination;
}
function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	var sourceIsArray = Array.isArray(source);
	if (!(sourceIsArray === Array.isArray(target))) return cloneUnlessOtherwiseSpecified(source, options);
	else if (sourceIsArray) return options.arrayMerge(target, source, options);
	else return mergeObject(target, source, options);
}
var isMergeableObject, REACT_ELEMENT_TYPE, deepmerge_1;
var init_es = __esmMin((() => {
	isMergeableObject = function isMergeableObject(value) {
		return isNonNullObject(value) && !isSpecial(value);
	};
	REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for ? Symbol.for("react.element") : 60103;
	deepmerge.all = function deepmergeAll(array, options) {
		if (!Array.isArray(array)) throw new Error("first argument should be an array");
		return array.reduce(function(prev, next) {
			return deepmerge(prev, next, options);
		}, {});
	};
	deepmerge_1 = deepmerge;
}));
//#endregion
//#region node_modules/lodash-es/_freeGlobal.js
var freeGlobal;
var init__freeGlobal = __esmMin((() => {
	freeGlobal = typeof global == "object" && global && global.Object === Object && global;
}));
//#endregion
//#region node_modules/lodash-es/_root.js
var freeSelf, root;
var init__root = __esmMin((() => {
	init__freeGlobal();
	freeSelf = typeof self == "object" && self && self.Object === Object && self;
	root = freeGlobal || freeSelf || Function("return this")();
}));
//#endregion
//#region node_modules/lodash-es/_Symbol.js
var Symbol$1;
var init__Symbol = __esmMin((() => {
	init__root();
	Symbol$1 = root.Symbol;
}));
//#endregion
//#region node_modules/lodash-es/_getRawTag.js
/**
* A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
*
* @private
* @param {*} value The value to query.
* @returns {string} Returns the raw `toStringTag`.
*/
function getRawTag(value) {
	var isOwn = hasOwnProperty$10.call(value, symToStringTag$1), tag = value[symToStringTag$1];
	try {
		value[symToStringTag$1] = void 0;
		var unmasked = true;
	} catch (e) {}
	var result = nativeObjectToString$1.call(value);
	if (unmasked) if (isOwn) value[symToStringTag$1] = tag;
	else delete value[symToStringTag$1];
	return result;
}
var objectProto$4, hasOwnProperty$10, nativeObjectToString$1, symToStringTag$1;
var init__getRawTag = __esmMin((() => {
	init__Symbol();
	objectProto$4 = Object.prototype;
	hasOwnProperty$10 = objectProto$4.hasOwnProperty;
	nativeObjectToString$1 = objectProto$4.toString;
	symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
}));
//#endregion
//#region node_modules/lodash-es/_objectToString.js
/**
* Converts `value` to a string using `Object.prototype.toString`.
*
* @private
* @param {*} value The value to convert.
* @returns {string} Returns the converted string.
*/
function objectToString(value) {
	return nativeObjectToString.call(value);
}
var nativeObjectToString;
var init__objectToString = __esmMin((() => {
	nativeObjectToString = Object.prototype.toString;
}));
//#endregion
//#region node_modules/lodash-es/_baseGetTag.js
/**
* The base implementation of `getTag` without fallbacks for buggy environments.
*
* @private
* @param {*} value The value to query.
* @returns {string} Returns the `toStringTag`.
*/
function baseGetTag(value) {
	if (value == null) return value === void 0 ? undefinedTag : nullTag;
	return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var nullTag, undefinedTag, symToStringTag;
var init__baseGetTag = __esmMin((() => {
	init__Symbol();
	init__getRawTag();
	init__objectToString();
	nullTag = "[object Null]", undefinedTag = "[object Undefined]";
	symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
}));
//#endregion
//#region node_modules/lodash-es/_overArg.js
/**
* Creates a unary function that invokes `func` with its argument transformed.
*
* @private
* @param {Function} func The function to wrap.
* @param {Function} transform The argument transform.
* @returns {Function} Returns the new function.
*/
function overArg(func, transform) {
	return function(arg) {
		return func(transform(arg));
	};
}
var init__overArg = __esmMin((() => {}));
//#endregion
//#region node_modules/lodash-es/_getPrototype.js
var getPrototype;
var init__getPrototype = __esmMin((() => {
	init__overArg();
	getPrototype = overArg(Object.getPrototypeOf, Object);
}));
//#endregion
//#region node_modules/lodash-es/isObjectLike.js
/**
* Checks if `value` is object-like. A value is object-like if it's not `null`
* and has a `typeof` result of "object".
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is object-like, else `false`.
* @example
*
* _.isObjectLike({});
* // => true
*
* _.isObjectLike([1, 2, 3]);
* // => true
*
* _.isObjectLike(_.noop);
* // => false
*
* _.isObjectLike(null);
* // => false
*/
function isObjectLike(value) {
	return value != null && typeof value == "object";
}
var init_isObjectLike = __esmMin((() => {}));
//#endregion
//#region node_modules/lodash-es/isPlainObject.js
/**
* Checks if `value` is a plain object, that is, an object created by the
* `Object` constructor or one with a `[[Prototype]]` of `null`.
*
* @static
* @memberOf _
* @since 0.8.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
* @example
*
* function Foo() {
*   this.a = 1;
* }
*
* _.isPlainObject(new Foo);
* // => false
*
* _.isPlainObject([1, 2, 3]);
* // => false
*
* _.isPlainObject({ 'x': 0, 'y': 0 });
* // => true
*
* _.isPlainObject(Object.create(null));
* // => true
*/
function isPlainObject(value) {
	if (!isObjectLike(value) || baseGetTag(value) != objectTag$3) return false;
	var proto = getPrototype(value);
	if (proto === null) return true;
	var Ctor = hasOwnProperty$9.call(proto, "constructor") && proto.constructor;
	return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString$2.call(Ctor) == objectCtorString;
}
var objectTag$3, funcProto$1, objectProto$3, funcToString$2, hasOwnProperty$9, objectCtorString;
var init_isPlainObject = __esmMin((() => {
	init__baseGetTag();
	init__getPrototype();
	init_isObjectLike();
	objectTag$3 = "[object Object]";
	funcProto$1 = Function.prototype, objectProto$3 = Object.prototype;
	funcToString$2 = funcProto$1.toString;
	hasOwnProperty$9 = objectProto$3.hasOwnProperty;
	objectCtorString = funcToString$2.call(Object);
}));
//#endregion
//#region node_modules/lodash-es/_listCacheClear.js
/**
* Removes all key-value entries from the list cache.
*
* @private
* @name clear
* @memberOf ListCache
*/
function listCacheClear() {
	this.__data__ = [];
	this.size = 0;
}
var init__listCacheClear = __esmMin((() => {}));
//#endregion
//#region node_modules/lodash-es/eq.js
/**
* Performs a
* [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
* comparison between two values to determine if they are equivalent.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to compare.
* @param {*} other The other value to compare.
* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
* @example
*
* var object = { 'a': 1 };
* var other = { 'a': 1 };
*
* _.eq(object, object);
* // => true
*
* _.eq(object, other);
* // => false
*
* _.eq('a', 'a');
* // => true
*
* _.eq('a', Object('a'));
* // => false
*
* _.eq(NaN, NaN);
* // => true
*/
function eq(value, other) {
	return value === other || value !== value && other !== other;
}
var init_eq = __esmMin((() => {}));
//#endregion
//#region node_modules/lodash-es/_assocIndexOf.js
/**
* Gets the index at which the `key` is found in `array` of key-value pairs.
*
* @private
* @param {Array} array The array to inspect.
* @param {*} key The key to search for.
* @returns {number} Returns the index of the matched value, else `-1`.
*/
function assocIndexOf(array, key) {
	var length = array.length;
	while (length--) if (eq(array[length][0], key)) return length;
	return -1;
}
var init__assocIndexOf = __esmMin((() => {
	init_eq();
}));
//#endregion
//#region node_modules/lodash-es/_listCacheDelete.js
/**
* Removes `key` and its value from the list cache.
*
* @private
* @name delete
* @memberOf ListCache
* @param {string} key The key of the value to remove.
* @returns {boolean} Returns `true` if the entry was removed, else `false`.
*/
function listCacheDelete(key) {
	var data = this.__data__, index = assocIndexOf(data, key);
	if (index < 0) return false;
	if (index == data.length - 1) data.pop();
	else splice.call(data, index, 1);
	--this.size;
	return true;
}
var splice;
var init__listCacheDelete = __esmMin((() => {
	init__assocIndexOf();
	splice = Array.prototype.splice;
}));
//#endregion
//#region node_modules/lodash-es/_listCacheGet.js
/**
* Gets the list cache value for `key`.
*
* @private
* @name get
* @memberOf ListCache
* @param {string} key The key of the value to get.
* @returns {*} Returns the entry value.
*/
function listCacheGet(key) {
	var data = this.__data__, index = assocIndexOf(data, key);
	return index < 0 ? void 0 : data[index][1];
}
var init__listCacheGet = __esmMin((() => {
	init__assocIndexOf();
}));
//#endregion
//#region node_modules/lodash-es/_listCacheHas.js
/**
* Checks if a list cache value for `key` exists.
*
* @private
* @name has
* @memberOf ListCache
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function listCacheHas(key) {
	return assocIndexOf(this.__data__, key) > -1;
}
var init__listCacheHas = __esmMin((() => {
	init__assocIndexOf();
}));
//#endregion
//#region node_modules/lodash-es/_listCacheSet.js
/**
* Sets the list cache `key` to `value`.
*
* @private
* @name set
* @memberOf ListCache
* @param {string} key The key of the value to set.
* @param {*} value The value to set.
* @returns {Object} Returns the list cache instance.
*/
function listCacheSet(key, value) {
	var data = this.__data__, index = assocIndexOf(data, key);
	if (index < 0) {
		++this.size;
		data.push([key, value]);
	} else data[index][1] = value;
	return this;
}
var init__listCacheSet = __esmMin((() => {
	init__assocIndexOf();
}));
//#endregion
//#region node_modules/lodash-es/_ListCache.js
/**
* Creates an list cache object.
*
* @private
* @constructor
* @param {Array} [entries] The key-value pairs to cache.
*/
function ListCache(entries) {
	var index = -1, length = entries == null ? 0 : entries.length;
	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}
var init__ListCache = __esmMin((() => {
	init__listCacheClear();
	init__listCacheDelete();
	init__listCacheGet();
	init__listCacheHas();
	init__listCacheSet();
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype["delete"] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
}));
//#endregion
//#region node_modules/lodash-es/_stackClear.js
/**
* Removes all key-value entries from the stack.
*
* @private
* @name clear
* @memberOf Stack
*/
function stackClear() {
	this.__data__ = new ListCache();
	this.size = 0;
}
var init__stackClear = __esmMin((() => {
	init__ListCache();
}));
//#endregion
//#region node_modules/lodash-es/_stackDelete.js
/**
* Removes `key` and its value from the stack.
*
* @private
* @name delete
* @memberOf Stack
* @param {string} key The key of the value to remove.
* @returns {boolean} Returns `true` if the entry was removed, else `false`.
*/
function stackDelete(key) {
	var data = this.__data__, result = data["delete"](key);
	this.size = data.size;
	return result;
}
var init__stackDelete = __esmMin((() => {}));
//#endregion
//#region node_modules/lodash-es/_stackGet.js
/**
* Gets the stack value for `key`.
*
* @private
* @name get
* @memberOf Stack
* @param {string} key The key of the value to get.
* @returns {*} Returns the entry value.
*/
function stackGet(key) {
	return this.__data__.get(key);
}
var init__stackGet = __esmMin((() => {}));
//#endregion
//#region node_modules/lodash-es/_stackHas.js
/**
* Checks if a stack value for `key` exists.
*
* @private
* @name has
* @memberOf Stack
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function stackHas(key) {
	return this.__data__.has(key);
}
var init__stackHas = __esmMin((() => {}));
//#endregion
//#region node_modules/lodash-es/isObject.js
/**
* Checks if `value` is the
* [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
* of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an object, else `false`.
* @example
*
* _.isObject({});
* // => true
*
* _.isObject([1, 2, 3]);
* // => true
*
* _.isObject(_.noop);
* // => true
*
* _.isObject(null);
* // => false
*/
function isObject$1(value) {
	var type = typeof value;
	return value != null && (type == "object" || type == "function");
}
var init_isObject = __esmMin((() => {}));
//#endregion
//#region node_modules/lodash-es/isFunction.js
/**
* Checks if `value` is classified as a `Function` object.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a function, else `false`.
* @example
*
* _.isFunction(_);
* // => true
*
* _.isFunction(/abc/);
* // => false
*/
function isFunction$1(value) {
	if (!isObject$1(value)) return false;
	var tag = baseGetTag(value);
	return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var asyncTag, funcTag$2, genTag$1, proxyTag;
var init_isFunction = __esmMin((() => {
	init__baseGetTag();
	init_isObject();
	asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
}));
//#endregion
//#region node_modules/lodash-es/_coreJsData.js
var coreJsData;
var init__coreJsData = __esmMin((() => {
	init__root();
	coreJsData = root["__core-js_shared__"];
}));
//#endregion
//#region node_modules/lodash-es/_isMasked.js
/**
* Checks if `func` has its source masked.
*
* @private
* @param {Function} func The function to check.
* @returns {boolean} Returns `true` if `func` is masked, else `false`.
*/
function isMasked(func) {
	return !!maskSrcKey && maskSrcKey in func;
}
var maskSrcKey;
var init__isMasked = __esmMin((() => {
	init__coreJsData();
	maskSrcKey = function() {
		var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
		return uid ? "Symbol(src)_1." + uid : "";
	}();
}));
//#endregion
//#region node_modules/lodash-es/_toSource.js
/**
* Converts `func` to its source code.
*
* @private
* @param {Function} func The function to convert.
* @returns {string} Returns the source code.
*/
function toSource(func) {
	if (func != null) {
		try {
			return funcToString$1.call(func);
		} catch (e) {}
		try {
			return func + "";
		} catch (e) {}
	}
	return "";
}
var funcToString$1;
var init__toSource = __esmMin((() => {
	funcToString$1 = Function.prototype.toString;
}));
//#endregion
//#region node_modules/lodash-es/_baseIsNative.js
/**
* The base implementation of `_.isNative` without bad shim checks.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a native function,
*  else `false`.
*/
function baseIsNative(value) {
	if (!isObject$1(value) || isMasked(value)) return false;
	return (isFunction$1(value) ? reIsNative : reIsHostCtor).test(toSource(value));
}
var reRegExpChar, reIsHostCtor, funcProto, objectProto$2, funcToString, hasOwnProperty$8, reIsNative;
var init__baseIsNative = __esmMin((() => {
	init_isFunction();
	init__isMasked();
	init_isObject();
	init__toSource();
	reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	reIsHostCtor = /^\[object .+?Constructor\]$/;
	funcProto = Function.prototype, objectProto$2 = Object.prototype;
	funcToString = funcProto.toString;
	hasOwnProperty$8 = objectProto$2.hasOwnProperty;
	reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$8).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
}));
//#endregion
//#region node_modules/lodash-es/_getValue.js
/**
* Gets the value at `key` of `object`.
*
* @private
* @param {Object} [object] The object to query.
* @param {string} key The key of the property to get.
* @returns {*} Returns the property value.
*/
function getValue(object, key) {
	return object == null ? void 0 : object[key];
}
var init__getValue = __esmMin((() => {}));
//#endregion
//#region node_modules/lodash-es/_getNative.js
/**
* Gets the native function at `key` of `object`.
*
* @private
* @param {Object} object The object to query.
* @param {string} key The key of the method to get.
* @returns {*} Returns the function if it's native, else `undefined`.
*/
function getNative(object, key) {
	var value = getValue(object, key);
	return baseIsNative(value) ? value : void 0;
}
var init__getNative = __esmMin((() => {
	init__baseIsNative();
	init__getValue();
}));
//#endregion
//#region node_modules/lodash-es/_Map.js
var Map;
var init__Map = __esmMin((() => {
	init__getNative();
	init__root();
	Map = getNative(root, "Map");
}));
//#endregion
//#region node_modules/lodash-es/_nativeCreate.js
var nativeCreate;
var init__nativeCreate = __esmMin((() => {
	init__getNative();
	nativeCreate = getNative(Object, "create");
}));
//#endregion
//#region node_modules/lodash-es/_hashClear.js
/**
* Removes all key-value entries from the hash.
*
* @private
* @name clear
* @memberOf Hash
*/
function hashClear() {
	this.__data__ = nativeCreate ? nativeCreate(null) : {};
	this.size = 0;
}
var init__hashClear = __esmMin((() => {
	init__nativeCreate();
}));
//#endregion
//#region node_modules/lodash-es/_hashDelete.js
/**
* Removes `key` and its value from the hash.
*
* @private
* @name delete
* @memberOf Hash
* @param {Object} hash The hash to modify.
* @param {string} key The key of the value to remove.
* @returns {boolean} Returns `true` if the entry was removed, else `false`.
*/
function hashDelete(key) {
	var result = this.has(key) && delete this.__data__[key];
	this.size -= result ? 1 : 0;
	return result;
}
var init__hashDelete = __esmMin((() => {}));
//#endregion
//#region node_modules/lodash-es/_hashGet.js
/**
* Gets the hash value for `key`.
*
* @private
* @name get
* @memberOf Hash
* @param {string} key The key of the value to get.
* @returns {*} Returns the entry value.
*/
function hashGet(key) {
	var data = this.__data__;
	if (nativeCreate) {
		var result = data[key];
		return result === HASH_UNDEFINED$1 ? void 0 : result;
	}
	return hasOwnProperty$7.call(data, key) ? data[key] : void 0;
}
var HASH_UNDEFINED$1, hasOwnProperty$7;
var init__hashGet = __esmMin((() => {
	init__nativeCreate();
	HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
	hasOwnProperty$7 = Object.prototype.hasOwnProperty;
}));
//#endregion
//#region node_modules/lodash-es/_hashHas.js
/**
* Checks if a hash value for `key` exists.
*
* @private
* @name has
* @memberOf Hash
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function hashHas(key) {
	var data = this.__data__;
	return nativeCreate ? data[key] !== void 0 : hasOwnProperty$6.call(data, key);
}
var hasOwnProperty$6;
var init__hashHas = __esmMin((() => {
	init__nativeCreate();
	hasOwnProperty$6 = Object.prototype.hasOwnProperty;
}));
//#endregion
//#region node_modules/lodash-es/_hashSet.js
/**
* Sets the hash `key` to `value`.
*
* @private
* @name set
* @memberOf Hash
* @param {string} key The key of the value to set.
* @param {*} value The value to set.
* @returns {Object} Returns the hash instance.
*/
function hashSet(key, value) {
	var data = this.__data__;
	this.size += this.has(key) ? 0 : 1;
	data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
	return this;
}
var HASH_UNDEFINED;
var init__hashSet = __esmMin((() => {
	init__nativeCreate();
	HASH_UNDEFINED = "__lodash_hash_undefined__";
}));
//#endregion
//#region node_modules/lodash-es/_Hash.js
/**
* Creates a hash object.
*
* @private
* @constructor
* @param {Array} [entries] The key-value pairs to cache.
*/
function Hash(entries) {
	var index = -1, length = entries == null ? 0 : entries.length;
	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}
var init__Hash = __esmMin((() => {
	init__hashClear();
	init__hashDelete();
	init__hashGet();
	init__hashHas();
	init__hashSet();
	Hash.prototype.clear = hashClear;
	Hash.prototype["delete"] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
}));
//#endregion
//#region node_modules/lodash-es/_mapCacheClear.js
/**
* Removes all key-value entries from the map.
*
* @private
* @name clear
* @memberOf MapCache
*/
function mapCacheClear() {
	this.size = 0;
	this.__data__ = {
		"hash": new Hash(),
		"map": new (Map || ListCache)(),
		"string": new Hash()
	};
}
var init__mapCacheClear = __esmMin((() => {
	init__Hash();
	init__ListCache();
	init__Map();
}));
//#endregion
//#region node_modules/lodash-es/_isKeyable.js
/**
* Checks if `value` is suitable for use as unique object key.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is suitable, else `false`.
*/
function isKeyable(value) {
	var type = typeof value;
	return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var init__isKeyable = __esmMin((() => {}));
//#endregion
//#region node_modules/lodash-es/_getMapData.js
/**
* Gets the data for `map`.
*
* @private
* @param {Object} map The map to query.
* @param {string} key The reference key.
* @returns {*} Returns the map data.
*/
function getMapData(map, key) {
	var data = map.__data__;
	return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var init__getMapData = __esmMin((() => {
	init__isKeyable();
}));
//#endregion
//#region node_modules/lodash-es/_mapCacheDelete.js
/**
* Removes `key` and its value from the map.
*
* @private
* @name delete
* @memberOf MapCache
* @param {string} key The key of the value to remove.
* @returns {boolean} Returns `true` if the entry was removed, else `false`.
*/
function mapCacheDelete(key) {
	var result = getMapData(this, key)["delete"](key);
	this.size -= result ? 1 : 0;
	return result;
}
var init__mapCacheDelete = __esmMin((() => {
	init__getMapData();
}));
//#endregion
//#region node_modules/lodash-es/_mapCacheGet.js
/**
* Gets the map value for `key`.
*
* @private
* @name get
* @memberOf MapCache
* @param {string} key The key of the value to get.
* @returns {*} Returns the entry value.
*/
function mapCacheGet(key) {
	return getMapData(this, key).get(key);
}
var init__mapCacheGet = __esmMin((() => {
	init__getMapData();
}));
//#endregion
//#region node_modules/lodash-es/_mapCacheHas.js
/**
* Checks if a map value for `key` exists.
*
* @private
* @name has
* @memberOf MapCache
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function mapCacheHas(key) {
	return getMapData(this, key).has(key);
}
var init__mapCacheHas = __esmMin((() => {
	init__getMapData();
}));
//#endregion
//#region node_modules/lodash-es/_mapCacheSet.js
/**
* Sets the map `key` to `value`.
*
* @private
* @name set
* @memberOf MapCache
* @param {string} key The key of the value to set.
* @param {*} value The value to set.
* @returns {Object} Returns the map cache instance.
*/
function mapCacheSet(key, value) {
	var data = getMapData(this, key), size = data.size;
	data.set(key, value);
	this.size += data.size == size ? 0 : 1;
	return this;
}
var init__mapCacheSet = __esmMin((() => {
	init__getMapData();
}));
//#endregion
//#region node_modules/lodash-es/_MapCache.js
/**
* Creates a map cache object to store key-value pairs.
*
* @private
* @constructor
* @param {Array} [entries] The key-value pairs to cache.
*/
function MapCache(entries) {
	var index = -1, length = entries == null ? 0 : entries.length;
	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}
var init__MapCache = __esmMin((() => {
	init__mapCacheClear();
	init__mapCacheDelete();
	init__mapCacheGet();
	init__mapCacheHas();
	init__mapCacheSet();
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype["delete"] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
}));
//#endregion
//#region node_modules/lodash-es/_stackSet.js
/**
* Sets the stack `key` to `value`.
*
* @private
* @name set
* @memberOf Stack
* @param {string} key The key of the value to set.
* @param {*} value The value to set.
* @returns {Object} Returns the stack cache instance.
*/
function stackSet(key, value) {
	var data = this.__data__;
	if (data instanceof ListCache) {
		var pairs = data.__data__;
		if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
			pairs.push([key, value]);
			this.size = ++data.size;
			return this;
		}
		data = this.__data__ = new MapCache(pairs);
	}
	data.set(key, value);
	this.size = data.size;
	return this;
}
var LARGE_ARRAY_SIZE;
var init__stackSet = __esmMin((() => {
	init__ListCache();
	init__Map();
	init__MapCache();
	LARGE_ARRAY_SIZE = 200;
}));
//#endregion
//#region node_modules/lodash-es/_Stack.js
/**
* Creates a stack cache object to store key-value pairs.
*
* @private
* @constructor
* @param {Array} [entries] The key-value pairs to cache.
*/
function Stack(entries) {
	var data = this.__data__ = new ListCache(entries);
	this.size = data.size;
}
var init__Stack = __esmMin((() => {
	init__ListCache();
	init__stackClear();
	init__stackDelete();
	init__stackGet();
	init__stackHas();
	init__stackSet();
	Stack.prototype.clear = stackClear;
	Stack.prototype["delete"] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
}));
//#endregion
//#region node_modules/lodash-es/_arrayEach.js
/**
* A specialized version of `_.forEach` for arrays without support for
* iteratee shorthands.
*
* @private
* @param {Array} [array] The array to iterate over.
* @param {Function} iteratee The function invoked per iteration.
* @returns {Array} Returns `array`.
*/
function arrayEach(array, iteratee) {
	var index = -1, length = array == null ? 0 : array.length;
	while (++index < length) if (iteratee(array[index], index, array) === false) break;
	return array;
}
var init__arrayEach = __esmMin((() => {}));
//#endregion
//#region node_modules/lodash-es/_defineProperty.js
var defineProperty;
var init__defineProperty = __esmMin((() => {
	init__getNative();
	defineProperty = function() {
		try {
			var func = getNative(Object, "defineProperty");
			func({}, "", {});
			return func;
		} catch (e) {}
	}();
}));
//#endregion
//#region node_modules/lodash-es/_baseAssignValue.js
/**
* The base implementation of `assignValue` and `assignMergeValue` without
* value checks.
*
* @private
* @param {Object} object The object to modify.
* @param {string} key The key of the property to assign.
* @param {*} value The value to assign.
*/
function baseAssignValue(object, key, value) {
	if (key == "__proto__" && defineProperty) defineProperty(object, key, {
		"configurable": true,
		"enumerable": true,
		"value": value,
		"writable": true
	});
	else object[key] = value;
}
var init__baseAssignValue = __esmMin((() => {
	init__defineProperty();
}));
//#endregion
//#region node_modules/lodash-es/_assignValue.js
/**
* Assigns `value` to `key` of `object` if the existing value is not equivalent
* using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
* for equality comparisons.
*
* @private
* @param {Object} object The object to modify.
* @param {string} key The key of the property to assign.
* @param {*} value The value to assign.
*/
function assignValue(object, key, value) {
	var objValue = object[key];
	if (!(hasOwnProperty$5.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) baseAssignValue(object, key, value);
}
var hasOwnProperty$5;
var init__assignValue = __esmMin((() => {
	init__baseAssignValue();
	init_eq();
	hasOwnProperty$5 = Object.prototype.hasOwnProperty;
}));
//#endregion
//#region node_modules/lodash-es/_copyObject.js
/**
* Copies properties of `source` to `object`.
*
* @private
* @param {Object} source The object to copy properties from.
* @param {Array} props The property identifiers to copy.
* @param {Object} [object={}] The object to copy properties to.
* @param {Function} [customizer] The function to customize copied values.
* @returns {Object} Returns `object`.
*/
function copyObject(source, props, object, customizer) {
	var isNew = !object;
	object || (object = {});
	var index = -1, length = props.length;
	while (++index < length) {
		var key = props[index];
		var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
		if (newValue === void 0) newValue = source[key];
		if (isNew) baseAssignValue(object, key, newValue);
		else assignValue(object, key, newValue);
	}
	return object;
}
var init__copyObject = __esmMin((() => {
	init__assignValue();
	init__baseAssignValue();
}));
//#endregion
//#region node_modules/lodash-es/_baseTimes.js
/**
* The base implementation of `_.times` without support for iteratee shorthands
* or max array length checks.
*
* @private
* @param {number} n The number of times to invoke `iteratee`.
* @param {Function} iteratee The function invoked per iteration.
* @returns {Array} Returns the array of results.
*/
function baseTimes(n, iteratee) {
	var index = -1, result = Array(n);
	while (++index < n) result[index] = iteratee(index);
	return result;
}
var init__baseTimes = __esmMin((() => {}));
//#endregion
//#region node_modules/lodash-es/_baseIsArguments.js
/**
* The base implementation of `_.isArguments`.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an `arguments` object,
*/
function baseIsArguments(value) {
	return isObjectLike(value) && baseGetTag(value) == argsTag$2;
}
var argsTag$2;
var init__baseIsArguments = __esmMin((() => {
	init__baseGetTag();
	init_isObjectLike();
	argsTag$2 = "[object Arguments]";
}));
//#endregion
//#region node_modules/lodash-es/isArguments.js
var objectProto$1, hasOwnProperty$4, propertyIsEnumerable$1, isArguments;
var init_isArguments = __esmMin((() => {
	init__baseIsArguments();
	init_isObjectLike();
	objectProto$1 = Object.prototype;
	hasOwnProperty$4 = objectProto$1.hasOwnProperty;
	propertyIsEnumerable$1 = objectProto$1.propertyIsEnumerable;
	isArguments = baseIsArguments(function() {
		return arguments;
	}()) ? baseIsArguments : function(value) {
		return isObjectLike(value) && hasOwnProperty$4.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
	};
}));
//#endregion
//#region node_modules/lodash-es/isArray.js
var isArray;
var init_isArray = __esmMin((() => {
	isArray = Array.isArray;
}));
//#endregion
//#region node_modules/lodash-es/stubFalse.js
/**
* This method returns `false`.
*
* @static
* @memberOf _
* @since 4.13.0
* @category Util
* @returns {boolean} Returns `false`.
* @example
*
* _.times(2, _.stubFalse);
* // => [false, false]
*/
function stubFalse() {
	return false;
}
var init_stubFalse = __esmMin((() => {}));
//#endregion
//#region node_modules/lodash-es/isBuffer.js
var freeExports$2, freeModule$2, Buffer$1, isBuffer;
var init_isBuffer = __esmMin((() => {
	init__root();
	init_stubFalse();
	freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
	freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
	Buffer$1 = freeModule$2 && freeModule$2.exports === freeExports$2 ? root.Buffer : void 0;
	isBuffer = (Buffer$1 ? Buffer$1.isBuffer : void 0) || stubFalse;
}));
//#endregion
//#region node_modules/lodash-es/_isIndex.js
/**
* Checks if `value` is a valid array-like index.
*
* @private
* @param {*} value The value to check.
* @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
* @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
*/
function isIndex(value, length) {
	var type = typeof value;
	length = length == null ? MAX_SAFE_INTEGER$1 : length;
	return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
var MAX_SAFE_INTEGER$1, reIsUint;
var init__isIndex = __esmMin((() => {
	MAX_SAFE_INTEGER$1 = 9007199254740991;
	reIsUint = /^(?:0|[1-9]\d*)$/;
}));
//#endregion
//#region node_modules/lodash-es/isLength.js
/**
* Checks if `value` is a valid array-like length.
*
* **Note:** This method is loosely based on
* [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
* @example
*
* _.isLength(3);
* // => true
*
* _.isLength(Number.MIN_VALUE);
* // => false
*
* _.isLength(Infinity);
* // => false
*
* _.isLength('3');
* // => false
*/
function isLength(value) {
	return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var MAX_SAFE_INTEGER;
var init_isLength = __esmMin((() => {
	MAX_SAFE_INTEGER = 9007199254740991;
}));
//#endregion
//#region node_modules/lodash-es/_baseIsTypedArray.js
/**
* The base implementation of `_.isTypedArray` without Node.js optimizations.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
*/
function baseIsTypedArray(value) {
	return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
var argsTag$1, arrayTag$1, boolTag$2, dateTag$2, errorTag$1, funcTag$1, mapTag$4, numberTag$2, objectTag$2, regexpTag$2, setTag$4, stringTag$2, weakMapTag$2, arrayBufferTag$2, dataViewTag$3, float32Tag$2, float64Tag$2, int8Tag$2, int16Tag$2, int32Tag$2, uint8Tag$2, uint8ClampedTag$2, uint16Tag$2, uint32Tag$2, typedArrayTags;
var init__baseIsTypedArray = __esmMin((() => {
	init__baseGetTag();
	init_isLength();
	init_isObjectLike();
	argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$1 = "[object Error]", funcTag$1 = "[object Function]", mapTag$4 = "[object Map]", numberTag$2 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$2 = "[object RegExp]", setTag$4 = "[object Set]", stringTag$2 = "[object String]", weakMapTag$2 = "[object WeakMap]";
	arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
	typedArrayTags = {};
	typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
	typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$2] = typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$4] = typedArrayTags[numberTag$2] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$2] = typedArrayTags[setTag$4] = typedArrayTags[stringTag$2] = typedArrayTags[weakMapTag$2] = false;
}));
//#endregion
//#region node_modules/lodash-es/_baseUnary.js
/**
* The base implementation of `_.unary` without support for storing metadata.
*
* @private
* @param {Function} func The function to cap arguments for.
* @returns {Function} Returns the new capped function.
*/
function baseUnary(func) {
	return function(value) {
		return func(value);
	};
}
var init__baseUnary = __esmMin((() => {}));
//#endregion
//#region node_modules/lodash-es/_nodeUtil.js
var freeExports$1, freeModule$1, freeProcess, nodeUtil;
var init__nodeUtil = __esmMin((() => {
	init__freeGlobal();
	freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
	freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
	freeProcess = freeModule$1 && freeModule$1.exports === freeExports$1 && freeGlobal.process;
	nodeUtil = function() {
		try {
			var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
			if (types) return types;
			return freeProcess && freeProcess.binding && freeProcess.binding("util");
		} catch (e) {}
	}();
}));
//#endregion
//#region node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray, isTypedArray;
var init_isTypedArray = __esmMin((() => {
	init__baseIsTypedArray();
	init__baseUnary();
	init__nodeUtil();
	nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
}));
//#endregion
//#region node_modules/lodash-es/_arrayLikeKeys.js
/**
* Creates an array of the enumerable property names of the array-like `value`.
*
* @private
* @param {*} value The value to query.
* @param {boolean} inherited Specify returning inherited property names.
* @returns {Array} Returns the array of property names.
*/
function arrayLikeKeys(value, inherited) {
	var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
	for (var key in value) if ((inherited || hasOwnProperty$3.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) result.push(key);
	return result;
}
var hasOwnProperty$3;
var init__arrayLikeKeys = __esmMin((() => {
	init__baseTimes();
	init_isArguments();
	init_isArray();
	init_isBuffer();
	init__isIndex();
	init_isTypedArray();
	hasOwnProperty$3 = Object.prototype.hasOwnProperty;
}));
//#endregion
//#region node_modules/lodash-es/_isPrototype.js
/**
* Checks if `value` is likely a prototype object.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
*/
function isPrototype(value) {
	var Ctor = value && value.constructor;
	return value === (typeof Ctor == "function" && Ctor.prototype || objectProto);
}
var objectProto;
var init__isPrototype = __esmMin((() => {
	objectProto = Object.prototype;
}));
//#endregion
//#region node_modules/lodash-es/_nativeKeys.js
var nativeKeys;
var init__nativeKeys = __esmMin((() => {
	init__overArg();
	nativeKeys = overArg(Object.keys, Object);
}));
//#endregion
//#region node_modules/lodash-es/_baseKeys.js
/**
* The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
*/
function baseKeys(object) {
	if (!isPrototype(object)) return nativeKeys(object);
	var result = [];
	for (var key in Object(object)) if (hasOwnProperty$2.call(object, key) && key != "constructor") result.push(key);
	return result;
}
var hasOwnProperty$2;
var init__baseKeys = __esmMin((() => {
	init__isPrototype();
	init__nativeKeys();
	hasOwnProperty$2 = Object.prototype.hasOwnProperty;
}));
//#endregion
//#region node_modules/lodash-es/isArrayLike.js
/**
* Checks if `value` is array-like. A value is considered array-like if it's
* not a function and has a `value.length` that's an integer greater than or
* equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is array-like, else `false`.
* @example
*
* _.isArrayLike([1, 2, 3]);
* // => true
*
* _.isArrayLike(document.body.children);
* // => true
*
* _.isArrayLike('abc');
* // => true
*
* _.isArrayLike(_.noop);
* // => false
*/
function isArrayLike(value) {
	return value != null && isLength(value.length) && !isFunction$1(value);
}
var init_isArrayLike = __esmMin((() => {
	init_isFunction();
	init_isLength();
}));
//#endregion
//#region node_modules/lodash-es/keys.js
/**
* Creates an array of the own enumerable property names of `object`.
*
* **Note:** Non-object values are coerced to objects. See the
* [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
* for more details.
*
* @static
* @since 0.1.0
* @memberOf _
* @category Object
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
* @example
*
* function Foo() {
*   this.a = 1;
*   this.b = 2;
* }
*
* Foo.prototype.c = 3;
*
* _.keys(new Foo);
* // => ['a', 'b'] (iteration order is not guaranteed)
*
* _.keys('hi');
* // => ['0', '1']
*/
function keys(object) {
	return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
var init_keys = __esmMin((() => {
	init__arrayLikeKeys();
	init__baseKeys();
	init_isArrayLike();
}));
//#endregion
//#region node_modules/lodash-es/_baseAssign.js
/**
* The base implementation of `_.assign` without support for multiple sources
* or `customizer` functions.
*
* @private
* @param {Object} object The destination object.
* @param {Object} source The source object.
* @returns {Object} Returns `object`.
*/
function baseAssign(object, source) {
	return object && copyObject(source, keys(source), object);
}
var init__baseAssign = __esmMin((() => {
	init__copyObject();
	init_keys();
}));
//#endregion
//#region node_modules/lodash-es/_nativeKeysIn.js
/**
* This function is like
* [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
* except that it includes inherited enumerable properties.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
*/
function nativeKeysIn(object) {
	var result = [];
	if (object != null) for (var key in Object(object)) result.push(key);
	return result;
}
var init__nativeKeysIn = __esmMin((() => {}));
//#endregion
//#region node_modules/lodash-es/_baseKeysIn.js
/**
* The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
*/
function baseKeysIn(object) {
	if (!isObject$1(object)) return nativeKeysIn(object);
	var isProto = isPrototype(object), result = [];
	for (var key in object) if (!(key == "constructor" && (isProto || !hasOwnProperty$1.call(object, key)))) result.push(key);
	return result;
}
var hasOwnProperty$1;
var init__baseKeysIn = __esmMin((() => {
	init_isObject();
	init__isPrototype();
	init__nativeKeysIn();
	hasOwnProperty$1 = Object.prototype.hasOwnProperty;
}));
//#endregion
//#region node_modules/lodash-es/keysIn.js
/**
* Creates an array of the own and inherited enumerable property names of `object`.
*
* **Note:** Non-object values are coerced to objects.
*
* @static
* @memberOf _
* @since 3.0.0
* @category Object
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
* @example
*
* function Foo() {
*   this.a = 1;
*   this.b = 2;
* }
*
* Foo.prototype.c = 3;
*
* _.keysIn(new Foo);
* // => ['a', 'b', 'c'] (iteration order is not guaranteed)
*/
function keysIn(object) {
	return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var init_keysIn = __esmMin((() => {
	init__arrayLikeKeys();
	init__baseKeysIn();
	init_isArrayLike();
}));
//#endregion
//#region node_modules/lodash-es/_baseAssignIn.js
/**
* The base implementation of `_.assignIn` without support for multiple sources
* or `customizer` functions.
*
* @private
* @param {Object} object The destination object.
* @param {Object} source The source object.
* @returns {Object} Returns `object`.
*/
function baseAssignIn(object, source) {
	return object && copyObject(source, keysIn(source), object);
}
var init__baseAssignIn = __esmMin((() => {
	init__copyObject();
	init_keysIn();
}));
//#endregion
//#region node_modules/lodash-es/_cloneBuffer.js
/**
* Creates a clone of  `buffer`.
*
* @private
* @param {Buffer} buffer The buffer to clone.
* @param {boolean} [isDeep] Specify a deep clone.
* @returns {Buffer} Returns the cloned buffer.
*/
function cloneBuffer(buffer, isDeep) {
	if (isDeep) return buffer.slice();
	var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
	buffer.copy(result);
	return result;
}
var freeExports, freeModule, Buffer, allocUnsafe;
var init__cloneBuffer = __esmMin((() => {
	init__root();
	freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
	freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
	Buffer = freeModule && freeModule.exports === freeExports ? root.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
}));
//#endregion
//#region node_modules/lodash-es/_copyArray.js
/**
* Copies the values of `source` to `array`.
*
* @private
* @param {Array} source The array to copy values from.
* @param {Array} [array=[]] The array to copy values to.
* @returns {Array} Returns `array`.
*/
function copyArray(source, array) {
	var index = -1, length = source.length;
	array || (array = Array(length));
	while (++index < length) array[index] = source[index];
	return array;
}
var init__copyArray = __esmMin((() => {}));
//#endregion
//#region node_modules/lodash-es/_arrayFilter.js
/**
* A specialized version of `_.filter` for arrays without support for
* iteratee shorthands.
*
* @private
* @param {Array} [array] The array to iterate over.
* @param {Function} predicate The function invoked per iteration.
* @returns {Array} Returns the new filtered array.
*/
function arrayFilter(array, predicate) {
	var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
	while (++index < length) {
		var value = array[index];
		if (predicate(value, index, array)) result[resIndex++] = value;
	}
	return result;
}
var init__arrayFilter = __esmMin((() => {}));
//#endregion
//#region node_modules/lodash-es/stubArray.js
/**
* This method returns a new empty array.
*
* @static
* @memberOf _
* @since 4.13.0
* @category Util
* @returns {Array} Returns the new empty array.
* @example
*
* var arrays = _.times(2, _.stubArray);
*
* console.log(arrays);
* // => [[], []]
*
* console.log(arrays[0] === arrays[1]);
* // => false
*/
function stubArray() {
	return [];
}
var init_stubArray = __esmMin((() => {}));
//#endregion
//#region node_modules/lodash-es/_getSymbols.js
var propertyIsEnumerable, nativeGetSymbols, getSymbols;
var init__getSymbols = __esmMin((() => {
	init__arrayFilter();
	init_stubArray();
	propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
	nativeGetSymbols = Object.getOwnPropertySymbols;
	getSymbols = !nativeGetSymbols ? stubArray : function(object) {
		if (object == null) return [];
		object = Object(object);
		return arrayFilter(nativeGetSymbols(object), function(symbol) {
			return propertyIsEnumerable.call(object, symbol);
		});
	};
}));
//#endregion
//#region node_modules/lodash-es/_copySymbols.js
/**
* Copies own symbols of `source` to `object`.
*
* @private
* @param {Object} source The object to copy symbols from.
* @param {Object} [object={}] The object to copy symbols to.
* @returns {Object} Returns `object`.
*/
function copySymbols(source, object) {
	return copyObject(source, getSymbols(source), object);
}
var init__copySymbols = __esmMin((() => {
	init__copyObject();
	init__getSymbols();
}));
//#endregion
//#region node_modules/lodash-es/_arrayPush.js
/**
* Appends the elements of `values` to `array`.
*
* @private
* @param {Array} array The array to modify.
* @param {Array} values The values to append.
* @returns {Array} Returns `array`.
*/
function arrayPush(array, values) {
	var index = -1, length = values.length, offset = array.length;
	while (++index < length) array[offset + index] = values[index];
	return array;
}
var init__arrayPush = __esmMin((() => {}));
//#endregion
//#region node_modules/lodash-es/_getSymbolsIn.js
var getSymbolsIn;
var init__getSymbolsIn = __esmMin((() => {
	init__arrayPush();
	init__getPrototype();
	init__getSymbols();
	init_stubArray();
	getSymbolsIn = !Object.getOwnPropertySymbols ? stubArray : function(object) {
		var result = [];
		while (object) {
			arrayPush(result, getSymbols(object));
			object = getPrototype(object);
		}
		return result;
	};
}));
//#endregion
//#region node_modules/lodash-es/_copySymbolsIn.js
/**
* Copies own and inherited symbols of `source` to `object`.
*
* @private
* @param {Object} source The object to copy symbols from.
* @param {Object} [object={}] The object to copy symbols to.
* @returns {Object} Returns `object`.
*/
function copySymbolsIn(source, object) {
	return copyObject(source, getSymbolsIn(source), object);
}
var init__copySymbolsIn = __esmMin((() => {
	init__copyObject();
	init__getSymbolsIn();
}));
//#endregion
//#region node_modules/lodash-es/_baseGetAllKeys.js
/**
* The base implementation of `getAllKeys` and `getAllKeysIn` which uses
* `keysFunc` and `symbolsFunc` to get the enumerable property names and
* symbols of `object`.
*
* @private
* @param {Object} object The object to query.
* @param {Function} keysFunc The function to get the keys of `object`.
* @param {Function} symbolsFunc The function to get the symbols of `object`.
* @returns {Array} Returns the array of property names and symbols.
*/
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	var result = keysFunc(object);
	return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
var init__baseGetAllKeys = __esmMin((() => {
	init__arrayPush();
	init_isArray();
}));
//#endregion
//#region node_modules/lodash-es/_getAllKeys.js
/**
* Creates an array of own enumerable property names and symbols of `object`.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names and symbols.
*/
function getAllKeys(object) {
	return baseGetAllKeys(object, keys, getSymbols);
}
var init__getAllKeys = __esmMin((() => {
	init__baseGetAllKeys();
	init__getSymbols();
	init_keys();
}));
//#endregion
//#region node_modules/lodash-es/_getAllKeysIn.js
/**
* Creates an array of own and inherited enumerable property names and
* symbols of `object`.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names and symbols.
*/
function getAllKeysIn(object) {
	return baseGetAllKeys(object, keysIn, getSymbolsIn);
}
var init__getAllKeysIn = __esmMin((() => {
	init__baseGetAllKeys();
	init__getSymbolsIn();
	init_keysIn();
}));
//#endregion
//#region node_modules/lodash-es/_DataView.js
var DataView;
var init__DataView = __esmMin((() => {
	init__getNative();
	init__root();
	DataView = getNative(root, "DataView");
}));
//#endregion
//#region node_modules/lodash-es/_Promise.js
var Promise$1;
var init__Promise = __esmMin((() => {
	init__getNative();
	init__root();
	Promise$1 = getNative(root, "Promise");
}));
//#endregion
//#region node_modules/lodash-es/_Set.js
var Set;
var init__Set = __esmMin((() => {
	init__getNative();
	init__root();
	Set = getNative(root, "Set");
}));
//#endregion
//#region node_modules/lodash-es/_WeakMap.js
var WeakMap$1;
var init__WeakMap = __esmMin((() => {
	init__getNative();
	init__root();
	WeakMap$1 = getNative(root, "WeakMap");
}));
//#endregion
//#region node_modules/lodash-es/_getTag.js
var mapTag$3, objectTag$1, promiseTag, setTag$3, weakMapTag$1, dataViewTag$2, dataViewCtorString, mapCtorString, promiseCtorString, setCtorString, weakMapCtorString, getTag, _getTag_default;
var init__getTag = __esmMin((() => {
	init__DataView();
	init__Map();
	init__Promise();
	init__Set();
	init__WeakMap();
	init__baseGetTag();
	init__toSource();
	mapTag$3 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$3 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
	dataViewTag$2 = "[object DataView]";
	dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap$1);
	getTag = baseGetTag;
	if (DataView && getTag(new DataView(/* @__PURE__ */ new ArrayBuffer(1))) != dataViewTag$2 || Map && getTag(new Map()) != mapTag$3 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set && getTag(new Set()) != setTag$3 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag$1) getTag = function(value) {
		var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
		if (ctorString) switch (ctorString) {
			case dataViewCtorString: return dataViewTag$2;
			case mapCtorString: return mapTag$3;
			case promiseCtorString: return promiseTag;
			case setCtorString: return setTag$3;
			case weakMapCtorString: return weakMapTag$1;
		}
		return result;
	};
	_getTag_default = getTag;
}));
//#endregion
//#region node_modules/lodash-es/_initCloneArray.js
/**
* Initializes an array clone.
*
* @private
* @param {Array} array The array to clone.
* @returns {Array} Returns the initialized clone.
*/
function initCloneArray(array) {
	var length = array.length, result = new array.constructor(length);
	if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
		result.index = array.index;
		result.input = array.input;
	}
	return result;
}
var hasOwnProperty;
var init__initCloneArray = __esmMin((() => {
	hasOwnProperty = Object.prototype.hasOwnProperty;
}));
//#endregion
//#region node_modules/lodash-es/_Uint8Array.js
var Uint8Array;
var init__Uint8Array = __esmMin((() => {
	init__root();
	Uint8Array = root.Uint8Array;
}));
//#endregion
//#region node_modules/lodash-es/_cloneArrayBuffer.js
/**
* Creates a clone of `arrayBuffer`.
*
* @private
* @param {ArrayBuffer} arrayBuffer The array buffer to clone.
* @returns {ArrayBuffer} Returns the cloned array buffer.
*/
function cloneArrayBuffer(arrayBuffer) {
	var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	return result;
}
var init__cloneArrayBuffer = __esmMin((() => {
	init__Uint8Array();
}));
//#endregion
//#region node_modules/lodash-es/_cloneDataView.js
/**
* Creates a clone of `dataView`.
*
* @private
* @param {Object} dataView The data view to clone.
* @param {boolean} [isDeep] Specify a deep clone.
* @returns {Object} Returns the cloned data view.
*/
function cloneDataView(dataView, isDeep) {
	var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var init__cloneDataView = __esmMin((() => {
	init__cloneArrayBuffer();
}));
//#endregion
//#region node_modules/lodash-es/_cloneRegExp.js
/**
* Creates a clone of `regexp`.
*
* @private
* @param {Object} regexp The regexp to clone.
* @returns {Object} Returns the cloned regexp.
*/
function cloneRegExp(regexp) {
	var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	result.lastIndex = regexp.lastIndex;
	return result;
}
var reFlags;
var init__cloneRegExp = __esmMin((() => {
	reFlags = /\w*$/;
}));
//#endregion
//#region node_modules/lodash-es/_cloneSymbol.js
/**
* Creates a clone of the `symbol` object.
*
* @private
* @param {Object} symbol The symbol object to clone.
* @returns {Object} Returns the cloned symbol object.
*/
function cloneSymbol(symbol) {
	return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
var symbolProto$1, symbolValueOf;
var init__cloneSymbol = __esmMin((() => {
	init__Symbol();
	symbolProto$1 = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : void 0;
}));
//#endregion
//#region node_modules/lodash-es/_cloneTypedArray.js
/**
* Creates a clone of `typedArray`.
*
* @private
* @param {Object} typedArray The typed array to clone.
* @param {boolean} [isDeep] Specify a deep clone.
* @returns {Object} Returns the cloned typed array.
*/
function cloneTypedArray(typedArray, isDeep) {
	var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var init__cloneTypedArray = __esmMin((() => {
	init__cloneArrayBuffer();
}));
//#endregion
//#region node_modules/lodash-es/_initCloneByTag.js
/**
* Initializes an object clone based on its `toStringTag`.
*
* **Note:** This function only supports cloning values with tags of
* `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
*
* @private
* @param {Object} object The object to clone.
* @param {string} tag The `toStringTag` of the object to clone.
* @param {boolean} [isDeep] Specify a deep clone.
* @returns {Object} Returns the initialized clone.
*/
function initCloneByTag(object, tag, isDeep) {
	var Ctor = object.constructor;
	switch (tag) {
		case arrayBufferTag$1: return cloneArrayBuffer(object);
		case boolTag$1:
		case dateTag$1: return new Ctor(+object);
		case dataViewTag$1: return cloneDataView(object, isDeep);
		case float32Tag$1:
		case float64Tag$1:
		case int8Tag$1:
		case int16Tag$1:
		case int32Tag$1:
		case uint8Tag$1:
		case uint8ClampedTag$1:
		case uint16Tag$1:
		case uint32Tag$1: return cloneTypedArray(object, isDeep);
		case mapTag$2: return new Ctor();
		case numberTag$1:
		case stringTag$1: return new Ctor(object);
		case regexpTag$1: return cloneRegExp(object);
		case setTag$2: return new Ctor();
		case symbolTag$2: return cloneSymbol(object);
	}
}
var boolTag$1, dateTag$1, mapTag$2, numberTag$1, regexpTag$1, setTag$2, stringTag$1, symbolTag$2, arrayBufferTag$1, dataViewTag$1, float32Tag$1, float64Tag$1, int8Tag$1, int16Tag$1, int32Tag$1, uint8Tag$1, uint8ClampedTag$1, uint16Tag$1, uint32Tag$1;
var init__initCloneByTag = __esmMin((() => {
	init__cloneArrayBuffer();
	init__cloneDataView();
	init__cloneRegExp();
	init__cloneSymbol();
	init__cloneTypedArray();
	boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$2 = "[object Symbol]";
	arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
}));
//#endregion
//#region node_modules/lodash-es/_baseCreate.js
var objectCreate, baseCreate;
var init__baseCreate = __esmMin((() => {
	init_isObject();
	objectCreate = Object.create;
	baseCreate = function() {
		function object() {}
		return function(proto) {
			if (!isObject$1(proto)) return {};
			if (objectCreate) return objectCreate(proto);
			object.prototype = proto;
			var result = new object();
			object.prototype = void 0;
			return result;
		};
	}();
}));
//#endregion
//#region node_modules/lodash-es/_initCloneObject.js
/**
* Initializes an object clone.
*
* @private
* @param {Object} object The object to clone.
* @returns {Object} Returns the initialized clone.
*/
function initCloneObject(object) {
	return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
var init__initCloneObject = __esmMin((() => {
	init__baseCreate();
	init__getPrototype();
	init__isPrototype();
}));
//#endregion
//#region node_modules/lodash-es/_baseIsMap.js
/**
* The base implementation of `_.isMap` without Node.js optimizations.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a map, else `false`.
*/
function baseIsMap(value) {
	return isObjectLike(value) && _getTag_default(value) == mapTag$1;
}
var mapTag$1;
var init__baseIsMap = __esmMin((() => {
	init__getTag();
	init_isObjectLike();
	mapTag$1 = "[object Map]";
}));
//#endregion
//#region node_modules/lodash-es/isMap.js
var nodeIsMap, isMap;
var init_isMap = __esmMin((() => {
	init__baseIsMap();
	init__baseUnary();
	init__nodeUtil();
	nodeIsMap = nodeUtil && nodeUtil.isMap;
	isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
}));
//#endregion
//#region node_modules/lodash-es/_baseIsSet.js
/**
* The base implementation of `_.isSet` without Node.js optimizations.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a set, else `false`.
*/
function baseIsSet(value) {
	return isObjectLike(value) && _getTag_default(value) == setTag$1;
}
var setTag$1;
var init__baseIsSet = __esmMin((() => {
	init__getTag();
	init_isObjectLike();
	setTag$1 = "[object Set]";
}));
//#endregion
//#region node_modules/lodash-es/isSet.js
var nodeIsSet, isSet;
var init_isSet = __esmMin((() => {
	init__baseIsSet();
	init__baseUnary();
	init__nodeUtil();
	nodeIsSet = nodeUtil && nodeUtil.isSet;
	isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
}));
//#endregion
//#region node_modules/lodash-es/_baseClone.js
/**
* The base implementation of `_.clone` and `_.cloneDeep` which tracks
* traversed objects.
*
* @private
* @param {*} value The value to clone.
* @param {boolean} bitmask The bitmask flags.
*  1 - Deep clone
*  2 - Flatten inherited properties
*  4 - Clone symbols
* @param {Function} [customizer] The function to customize cloning.
* @param {string} [key] The key of `value`.
* @param {Object} [object] The parent object of `value`.
* @param {Object} [stack] Tracks traversed objects and their clone counterparts.
* @returns {*} Returns the cloned value.
*/
function baseClone(value, bitmask, customizer, key, object, stack) {
	var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$2;
	if (customizer) result = object ? customizer(value, key, object, stack) : customizer(value);
	if (result !== void 0) return result;
	if (!isObject$1(value)) return value;
	var isArr = isArray(value);
	if (isArr) {
		result = initCloneArray(value);
		if (!isDeep) return copyArray(value, result);
	} else {
		var tag = _getTag_default(value), isFunc = tag == funcTag || tag == genTag;
		if (isBuffer(value)) return cloneBuffer(value, isDeep);
		if (tag == objectTag || tag == argsTag || isFunc && !object) {
			result = isFlat || isFunc ? {} : initCloneObject(value);
			if (!isDeep) return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
		} else {
			if (!cloneableTags[tag]) return object ? value : {};
			result = initCloneByTag(value, tag, isDeep);
		}
	}
	stack || (stack = new Stack());
	var stacked = stack.get(value);
	if (stacked) return stacked;
	stack.set(value, result);
	if (isSet(value)) value.forEach(function(subValue) {
		result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
	});
	else if (isMap(value)) value.forEach(function(subValue, key) {
		result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
	});
	var props = isArr ? void 0 : (isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys)(value);
	arrayEach(props || value, function(subValue, key) {
		if (props) {
			key = subValue;
			subValue = value[key];
		}
		assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	});
	return result;
}
var CLONE_DEEP_FLAG$1, CLONE_FLAT_FLAG, CLONE_SYMBOLS_FLAG$2, argsTag, arrayTag, boolTag, dateTag, errorTag, funcTag, genTag, mapTag, numberTag, objectTag, regexpTag, setTag, stringTag, symbolTag$1, weakMapTag, arrayBufferTag, dataViewTag, float32Tag, float64Tag, int8Tag, int16Tag, int32Tag, uint8Tag, uint8ClampedTag, uint16Tag, uint32Tag, cloneableTags;
var init__baseClone = __esmMin((() => {
	init__Stack();
	init__arrayEach();
	init__assignValue();
	init__baseAssign();
	init__baseAssignIn();
	init__cloneBuffer();
	init__copyArray();
	init__copySymbols();
	init__copySymbolsIn();
	init__getAllKeys();
	init__getAllKeysIn();
	init__getTag();
	init__initCloneArray();
	init__initCloneByTag();
	init__initCloneObject();
	init_isArray();
	init_isBuffer();
	init_isMap();
	init_isObject();
	init_isSet();
	init_keys();
	init_keysIn();
	CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$2 = 4;
	argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag$1 = "[object Symbol]", weakMapTag = "[object WeakMap]";
	arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
	cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
}));
//#endregion
//#region node_modules/lodash-es/cloneDeep.js
/**
* This method is like `_.clone` except that it recursively clones `value`.
*
* @static
* @memberOf _
* @since 1.0.0
* @category Lang
* @param {*} value The value to recursively clone.
* @returns {*} Returns the deep cloned value.
* @see _.clone
* @example
*
* var objects = [{ 'a': 1 }, { 'b': 2 }];
*
* var deep = _.cloneDeep(objects);
* console.log(deep[0] === objects[0]);
* // => false
*/
function cloneDeep(value) {
	return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG$1);
}
var CLONE_DEEP_FLAG, CLONE_SYMBOLS_FLAG$1;
var init_cloneDeep = __esmMin((() => {
	init__baseClone();
	CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG$1 = 4;
}));
//#endregion
//#region node_modules/react-fast-compare/index.js
var require_react_fast_compare = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isArray = Array.isArray;
	var keyList = Object.keys;
	var hasProp = Object.prototype.hasOwnProperty;
	var hasElementType = typeof Element !== "undefined";
	function equal(a, b) {
		if (a === b) return true;
		if (a && b && typeof a == "object" && typeof b == "object") {
			var arrA = isArray(a), arrB = isArray(b), i, length, key;
			if (arrA && arrB) {
				length = a.length;
				if (length != b.length) return false;
				for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;
				return true;
			}
			if (arrA != arrB) return false;
			var dateA = a instanceof Date, dateB = b instanceof Date;
			if (dateA != dateB) return false;
			if (dateA && dateB) return a.getTime() == b.getTime();
			var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
			if (regexpA != regexpB) return false;
			if (regexpA && regexpB) return a.toString() == b.toString();
			var keys = keyList(a);
			length = keys.length;
			if (length !== keyList(b).length) return false;
			for (i = length; i-- !== 0;) if (!hasProp.call(b, keys[i])) return false;
			if (hasElementType && a instanceof Element && b instanceof Element) return a === b;
			for (i = length; i-- !== 0;) {
				key = keys[i];
				if (key === "_owner" && a.$$typeof) continue;
				else if (!equal(a[key], b[key])) return false;
			}
			return true;
		}
		return a !== a && b !== b;
	}
	module.exports = function exportedEqual(a, b) {
		try {
			return equal(a, b);
		} catch (error) {
			if (error.message && error.message.match(/stack|recursion/i) || error.number === -2146828260) {
				console.warn("Warning: react-fast-compare does not handle circular references.", error.name, error.message);
				return false;
			}
			throw error;
		}
	};
}));
//#endregion
//#region node_modules/tiny-warning/dist/tiny-warning.esm.js
function warning(condition, message) {
	if (!isProduction) {
		if (condition) return;
		var text = "Warning: " + message;
		if (typeof console !== "undefined") console.warn(text);
		try {
			throw Error(text);
		} catch (x) {}
	}
}
var isProduction;
var init_tiny_warning_esm = __esmMin((() => {
	isProduction = true;
}));
//#endregion
//#region node_modules/lodash-es/clone.js
/**
* Creates a shallow clone of `value`.
*
* **Note:** This method is loosely based on the
* [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
* and supports cloning arrays, array buffers, booleans, date objects, maps,
* numbers, `Object` objects, regexes, sets, strings, symbols, and typed
* arrays. The own enumerable properties of `arguments` objects are cloned
* as plain objects. An empty object is returned for uncloneable values such
* as error objects, functions, DOM nodes, and WeakMaps.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to clone.
* @returns {*} Returns the cloned value.
* @see _.cloneDeep
* @example
*
* var objects = [{ 'a': 1 }, { 'b': 2 }];
*
* var shallow = _.clone(objects);
* console.log(shallow[0] === objects[0]);
* // => true
*/
function clone(value) {
	return baseClone(value, CLONE_SYMBOLS_FLAG);
}
var CLONE_SYMBOLS_FLAG;
var init_clone = __esmMin((() => {
	init__baseClone();
	CLONE_SYMBOLS_FLAG = 4;
}));
//#endregion
//#region node_modules/lodash-es/_arrayMap.js
/**
* A specialized version of `_.map` for arrays without support for iteratee
* shorthands.
*
* @private
* @param {Array} [array] The array to iterate over.
* @param {Function} iteratee The function invoked per iteration.
* @returns {Array} Returns the new mapped array.
*/
function arrayMap(array, iteratee) {
	var index = -1, length = array == null ? 0 : array.length, result = Array(length);
	while (++index < length) result[index] = iteratee(array[index], index, array);
	return result;
}
var init__arrayMap = __esmMin((() => {}));
//#endregion
//#region node_modules/lodash-es/isSymbol.js
/**
* Checks if `value` is classified as a `Symbol` primitive or object.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
* @example
*
* _.isSymbol(Symbol.iterator);
* // => true
*
* _.isSymbol('abc');
* // => false
*/
function isSymbol(value) {
	return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var symbolTag;
var init_isSymbol = __esmMin((() => {
	init__baseGetTag();
	init_isObjectLike();
	symbolTag = "[object Symbol]";
}));
//#endregion
//#region node_modules/lodash-es/memoize.js
/**
* Creates a function that memoizes the result of `func`. If `resolver` is
* provided, it determines the cache key for storing the result based on the
* arguments provided to the memoized function. By default, the first argument
* provided to the memoized function is used as the map cache key. The `func`
* is invoked with the `this` binding of the memoized function.
*
* **Note:** The cache is exposed as the `cache` property on the memoized
* function. Its creation may be customized by replacing the `_.memoize.Cache`
* constructor with one whose instances implement the
* [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
* method interface of `clear`, `delete`, `get`, `has`, and `set`.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Function
* @param {Function} func The function to have its output memoized.
* @param {Function} [resolver] The function to resolve the cache key.
* @returns {Function} Returns the new memoized function.
* @example
*
* var object = { 'a': 1, 'b': 2 };
* var other = { 'c': 3, 'd': 4 };
*
* var values = _.memoize(_.values);
* values(object);
* // => [1, 2]
*
* values(other);
* // => [3, 4]
*
* object.a = 2;
* values(object);
* // => [1, 2]
*
* // Modify the result cache.
* values.cache.set(object, ['a', 'b']);
* values(object);
* // => ['a', 'b']
*
* // Replace `_.memoize.Cache`.
* _.memoize.Cache = WeakMap;
*/
function memoize(func, resolver) {
	if (typeof func != "function" || resolver != null && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT);
	var memoized = function() {
		var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
		if (cache.has(key)) return cache.get(key);
		var result = func.apply(this, args);
		memoized.cache = cache.set(key, result) || cache;
		return result;
	};
	memoized.cache = new (memoize.Cache || MapCache)();
	return memoized;
}
var FUNC_ERROR_TEXT;
var init_memoize = __esmMin((() => {
	init__MapCache();
	FUNC_ERROR_TEXT = "Expected a function";
	memoize.Cache = MapCache;
}));
//#endregion
//#region node_modules/lodash-es/_memoizeCapped.js
/**
* A specialized version of `_.memoize` which clears the memoized function's
* cache when it exceeds `MAX_MEMOIZE_SIZE`.
*
* @private
* @param {Function} func The function to have its output memoized.
* @returns {Function} Returns the new memoized function.
*/
function memoizeCapped(func) {
	var result = memoize(func, function(key) {
		if (cache.size === MAX_MEMOIZE_SIZE) cache.clear();
		return key;
	});
	var cache = result.cache;
	return result;
}
var MAX_MEMOIZE_SIZE;
var init__memoizeCapped = __esmMin((() => {
	init_memoize();
	MAX_MEMOIZE_SIZE = 500;
}));
//#endregion
//#region node_modules/lodash-es/_stringToPath.js
var rePropName, reEscapeChar, stringToPath;
var init__stringToPath = __esmMin((() => {
	init__memoizeCapped();
	rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	reEscapeChar = /\\(\\)?/g;
	stringToPath = memoizeCapped(function(string) {
		var result = [];
		if (string.charCodeAt(0) === 46) result.push("");
		string.replace(rePropName, function(match, number, quote, subString) {
			result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
		});
		return result;
	});
}));
//#endregion
//#region node_modules/lodash-es/_toKey.js
/**
* Converts `value` to a string key if it's not a string or symbol.
*
* @private
* @param {*} value The value to inspect.
* @returns {string|symbol} Returns the key.
*/
function toKey(value) {
	if (typeof value == "string" || isSymbol(value)) return value;
	var result = value + "";
	return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
var INFINITY$1;
var init__toKey = __esmMin((() => {
	init_isSymbol();
	INFINITY$1 = Infinity;
}));
//#endregion
//#region node_modules/lodash-es/_baseToString.js
/**
* The base implementation of `_.toString` which doesn't convert nullish
* values to empty strings.
*
* @private
* @param {*} value The value to process.
* @returns {string} Returns the string.
*/
function baseToString(value) {
	if (typeof value == "string") return value;
	if (isArray(value)) return arrayMap(value, baseToString) + "";
	if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
	var result = value + "";
	return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var INFINITY, symbolProto, symbolToString;
var init__baseToString = __esmMin((() => {
	init__Symbol();
	init__arrayMap();
	init_isArray();
	init_isSymbol();
	INFINITY = Infinity;
	symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
}));
//#endregion
//#region node_modules/lodash-es/toString.js
/**
* Converts `value` to a string. An empty string is returned for `null`
* and `undefined` values. The sign of `-0` is preserved.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to convert.
* @returns {string} Returns the converted string.
* @example
*
* _.toString(null);
* // => ''
*
* _.toString(-0);
* // => '-0'
*
* _.toString([1, 2, 3]);
* // => '1,2,3'
*/
function toString(value) {
	return value == null ? "" : baseToString(value);
}
var init_toString = __esmMin((() => {
	init__baseToString();
}));
//#endregion
//#region node_modules/lodash-es/toPath.js
/**
* Converts `value` to a property path array.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Util
* @param {*} value The value to convert.
* @returns {Array} Returns the new property path array.
* @example
*
* _.toPath('a.b.c');
* // => ['a', 'b', 'c']
*
* _.toPath('a[0].b.c');
* // => ['a', '0', 'b', 'c']
*/
function toPath(value) {
	if (isArray(value)) return arrayMap(value, toKey);
	return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
}
var init_toPath = __esmMin((() => {
	init__arrayMap();
	init__copyArray();
	init_isArray();
	init_isSymbol();
	init__stringToPath();
	init__toKey();
	init_toString();
}));
//#endregion
//#region node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js
/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_is_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	var b = "function" === typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
	function z(a) {
		if ("object" === typeof a && null !== a) {
			var u = a.$$typeof;
			switch (u) {
				case c: switch (a = a.type, a) {
					case l:
					case m:
					case e:
					case g:
					case f:
					case p: return a;
					default: switch (a = a && a.$$typeof, a) {
						case k:
						case n:
						case t:
						case r:
						case h: return a;
						default: return u;
					}
				}
				case d: return u;
			}
		}
	}
	function A(a) {
		return z(a) === m;
	}
	exports.AsyncMode = l;
	exports.ConcurrentMode = m;
	exports.ContextConsumer = k;
	exports.ContextProvider = h;
	exports.Element = c;
	exports.ForwardRef = n;
	exports.Fragment = e;
	exports.Lazy = t;
	exports.Memo = r;
	exports.Portal = d;
	exports.Profiler = g;
	exports.StrictMode = f;
	exports.Suspense = p;
	exports.isAsyncMode = function(a) {
		return A(a) || z(a) === l;
	};
	exports.isConcurrentMode = A;
	exports.isContextConsumer = function(a) {
		return z(a) === k;
	};
	exports.isContextProvider = function(a) {
		return z(a) === h;
	};
	exports.isElement = function(a) {
		return "object" === typeof a && null !== a && a.$$typeof === c;
	};
	exports.isForwardRef = function(a) {
		return z(a) === n;
	};
	exports.isFragment = function(a) {
		return z(a) === e;
	};
	exports.isLazy = function(a) {
		return z(a) === t;
	};
	exports.isMemo = function(a) {
		return z(a) === r;
	};
	exports.isPortal = function(a) {
		return z(a) === d;
	};
	exports.isProfiler = function(a) {
		return z(a) === g;
	};
	exports.isStrictMode = function(a) {
		return z(a) === f;
	};
	exports.isSuspense = function(a) {
		return z(a) === p;
	};
	exports.isValidElementType = function(a) {
		return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
	};
	exports.typeOf = z;
}));
//#endregion
//#region node_modules/hoist-non-react-statics/node_modules/react-is/index.js
var require_react_is = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_is_production_min();
}));
//#endregion
//#region node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var reactIs = require_react_is();
	/**
	* Copyright 2015, Yahoo! Inc.
	* Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	*/
	var REACT_STATICS = {
		childContextTypes: true,
		contextType: true,
		contextTypes: true,
		defaultProps: true,
		displayName: true,
		getDefaultProps: true,
		getDerivedStateFromError: true,
		getDerivedStateFromProps: true,
		mixins: true,
		propTypes: true,
		type: true
	};
	var KNOWN_STATICS = {
		name: true,
		length: true,
		prototype: true,
		caller: true,
		callee: true,
		arguments: true,
		arity: true
	};
	var FORWARD_REF_STATICS = {
		"$$typeof": true,
		render: true,
		defaultProps: true,
		displayName: true,
		propTypes: true
	};
	var MEMO_STATICS = {
		"$$typeof": true,
		compare: true,
		defaultProps: true,
		displayName: true,
		propTypes: true,
		type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
	function getStatics(component) {
		if (reactIs.isMemo(component)) return MEMO_STATICS;
		return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
	}
	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = Object.prototype;
	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
		if (typeof sourceComponent !== "string") {
			if (objectPrototype) {
				var inheritedComponent = getPrototypeOf(sourceComponent);
				if (inheritedComponent && inheritedComponent !== objectPrototype) hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
			}
			var keys = getOwnPropertyNames(sourceComponent);
			if (getOwnPropertySymbols) keys = keys.concat(getOwnPropertySymbols(sourceComponent));
			var targetStatics = getStatics(targetComponent);
			var sourceStatics = getStatics(sourceComponent);
			for (var i = 0; i < keys.length; ++i) {
				var key = keys[i];
				if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
					var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
					try {
						defineProperty(targetComponent, key, descriptor);
					} catch (e) {}
				}
			}
		}
		return targetComponent;
	}
	module.exports = hoistNonReactStatics;
}));
//#endregion
//#region node_modules/formik/dist/formik.esm.js
function _extends() {
	_extends = Object.assign || function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
		}
		return target;
	};
	return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
	subClass.prototype = Object.create(superClass.prototype);
	subClass.prototype.constructor = subClass;
	subClass.__proto__ = superClass;
}
function _objectWithoutPropertiesLoose(source, excluded) {
	if (source == null) return {};
	var target = {};
	var sourceKeys = Object.keys(source);
	var key, i;
	for (i = 0; i < sourceKeys.length; i++) {
		key = sourceKeys[i];
		if (excluded.indexOf(key) >= 0) continue;
		target[key] = source[key];
	}
	return target;
}
function _assertThisInitialized(self) {
	if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	return self;
}
function useFormikContext() {
	var formik = (0, import_react$4.useContext)(FormikContext);
	!formik && warning(false);
	return formik;
}
/**
* Deeply get a value from an object via its path.
*/
function getIn(obj, key, def, p) {
	if (p === void 0) p = 0;
	var path = toPath(key);
	while (obj && p < path.length) obj = obj[path[p++]];
	if (p !== path.length && !obj) return def;
	return obj === void 0 ? def : obj;
}
/**
* Deeply set a value from in object via it's path. If the value at `path`
* has changed, return a shallow copy of obj with `value` set at `path`.
* If `value` has not changed, return the original `obj`.
*
* Existing objects / arrays along `path` are also shallow copied. Sibling
* objects along path retain the same internal js reference. Since new
* objects / arrays are only created along `path`, we can test if anything
* changed in a nested structure by comparing the object's reference in
* the old and new object, similar to how russian doll cache invalidation
* works.
*
* In earlier versions of this function, which used cloneDeep, there were
* issues whereby settings a nested value would mutate the parent
* instead of creating a new object. `clone` avoids that bug making a
* shallow copy of the objects along the update path
* so no object is mutated in place.
*
* Before changing this function, please read through the following
* discussions.
*
* @see https://github.com/developit/linkstate
* @see https://github.com/jaredpalmer/formik/pull/123
*/
function setIn(obj, path, value) {
	var res = clone(obj);
	var resVal = res;
	var i = 0;
	var pathArray = toPath(path);
	for (; i < pathArray.length - 1; i++) {
		var currentPath = pathArray[i];
		var currentObj = getIn(obj, pathArray.slice(0, i + 1));
		if (currentObj && (isObject(currentObj) || Array.isArray(currentObj))) resVal = resVal[currentPath] = clone(currentObj);
		else {
			var nextPath = pathArray[i + 1];
			resVal = resVal[currentPath] = isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
		}
	}
	if ((i === 0 ? obj : resVal)[pathArray[i]] === value) return obj;
	if (value === void 0) delete resVal[pathArray[i]];
	else resVal[pathArray[i]] = value;
	if (i === 0 && value === void 0) delete res[pathArray[i]];
	return res;
}
/**
* Recursively a set the same value for all keys and arrays nested object, cloning
* @param object
* @param value
* @param visited
* @param response
*/
function setNestedObjectValues(object, value, visited, response) {
	if (visited === void 0) visited = /* @__PURE__ */ new WeakMap();
	if (response === void 0) response = {};
	for (var _i = 0, _Object$keys = Object.keys(object); _i < _Object$keys.length; _i++) {
		var k = _Object$keys[_i];
		var val = object[k];
		if (isObject(val)) {
			if (!visited.get(val)) {
				visited.set(val, true);
				response[k] = Array.isArray(val) ? [] : {};
				setNestedObjectValues(val, value, visited, response[k]);
			}
		} else response[k] = value;
	}
	return response;
}
function formikReducer(state, msg) {
	switch (msg.type) {
		case "SET_VALUES": return _extends({}, state, { values: msg.payload });
		case "SET_TOUCHED": return _extends({}, state, { touched: msg.payload });
		case "SET_ERRORS":
			if ((0, import_react_fast_compare.default)(state.errors, msg.payload)) return state;
			return _extends({}, state, { errors: msg.payload });
		case "SET_STATUS": return _extends({}, state, { status: msg.payload });
		case "SET_ISSUBMITTING": return _extends({}, state, { isSubmitting: msg.payload });
		case "SET_ISVALIDATING": return _extends({}, state, { isValidating: msg.payload });
		case "SET_FIELD_VALUE": return _extends({}, state, { values: setIn(state.values, msg.payload.field, msg.payload.value) });
		case "SET_FIELD_TOUCHED": return _extends({}, state, { touched: setIn(state.touched, msg.payload.field, msg.payload.value) });
		case "SET_FIELD_ERROR": return _extends({}, state, { errors: setIn(state.errors, msg.payload.field, msg.payload.value) });
		case "RESET_FORM": return _extends({}, state, msg.payload);
		case "SET_FORMIK_STATE": return msg.payload(state);
		case "SUBMIT_ATTEMPT": return _extends({}, state, {
			touched: setNestedObjectValues(state.values, true),
			isSubmitting: true,
			submitCount: state.submitCount + 1
		});
		case "SUBMIT_FAILURE": return _extends({}, state, { isSubmitting: false });
		case "SUBMIT_SUCCESS": return _extends({}, state, { isSubmitting: false });
		default: return state;
	}
}
function useFormik(_ref) {
	var _ref$validateOnChange = _ref.validateOnChange, validateOnChange = _ref$validateOnChange === void 0 ? true : _ref$validateOnChange, _ref$validateOnBlur = _ref.validateOnBlur, validateOnBlur = _ref$validateOnBlur === void 0 ? true : _ref$validateOnBlur, _ref$validateOnMount = _ref.validateOnMount, validateOnMount = _ref$validateOnMount === void 0 ? false : _ref$validateOnMount, isInitialValid = _ref.isInitialValid, _ref$enableReinitiali = _ref.enableReinitialize, enableReinitialize = _ref$enableReinitiali === void 0 ? false : _ref$enableReinitiali, onSubmit = _ref.onSubmit, rest = _objectWithoutPropertiesLoose(_ref, [
		"validateOnChange",
		"validateOnBlur",
		"validateOnMount",
		"isInitialValid",
		"enableReinitialize",
		"onSubmit"
	]);
	var props = _extends({
		validateOnChange,
		validateOnBlur,
		validateOnMount,
		onSubmit
	}, rest);
	var initialValues = (0, import_react$4.useRef)(props.initialValues);
	var initialErrors = (0, import_react$4.useRef)(props.initialErrors || emptyErrors);
	var initialTouched = (0, import_react$4.useRef)(props.initialTouched || emptyTouched);
	var initialStatus = (0, import_react$4.useRef)(props.initialStatus);
	var isMounted = (0, import_react$4.useRef)(false);
	var fieldRegistry = (0, import_react$4.useRef)({});
	(0, import_react$4.useEffect)(function() {
		isMounted.current = true;
		return function() {
			isMounted.current = false;
		};
	}, []);
	var setIteration = (0, import_react$4.useState)(0)[1];
	var stateRef = (0, import_react$4.useRef)({
		values: cloneDeep(props.initialValues),
		errors: cloneDeep(props.initialErrors) || emptyErrors,
		touched: cloneDeep(props.initialTouched) || emptyTouched,
		status: cloneDeep(props.initialStatus),
		isSubmitting: false,
		isValidating: false,
		submitCount: 0
	});
	var state = stateRef.current;
	var dispatch = (0, import_react$4.useCallback)(function(action) {
		var prev = stateRef.current;
		stateRef.current = formikReducer(prev, action);
		if (prev !== stateRef.current) setIteration(function(x) {
			return x + 1;
		});
	}, []);
	var runValidateHandler = (0, import_react$4.useCallback)(function(values, field) {
		return new Promise(function(resolve, reject) {
			var maybePromisedErrors = props.validate(values, field);
			if (maybePromisedErrors == null) resolve(emptyErrors);
			else if (isPromise(maybePromisedErrors)) maybePromisedErrors.then(function(errors) {
				resolve(errors || emptyErrors);
			}, function(actualException) {
				reject(actualException);
			});
			else resolve(maybePromisedErrors);
		});
	}, [props.validate]);
	/**
	* Run validation against a Yup schema and optionally run a function if successful
	*/
	var runValidationSchema = (0, import_react$4.useCallback)(function(values, field) {
		var validationSchema = props.validationSchema;
		var schema = isFunction(validationSchema) ? validationSchema(field) : validationSchema;
		var promise = field && schema.validateAt ? schema.validateAt(field, values) : validateYupSchema(values, schema);
		return new Promise(function(resolve, reject) {
			promise.then(function() {
				resolve(emptyErrors);
			}, function(err) {
				if (err.name === "ValidationError") resolve(yupToFormErrors(err));
				else reject(err);
			});
		});
	}, [props.validationSchema]);
	var runSingleFieldLevelValidation = (0, import_react$4.useCallback)(function(field, value) {
		return new Promise(function(resolve) {
			return resolve(fieldRegistry.current[field].validate(value));
		});
	}, []);
	var runFieldLevelValidations = (0, import_react$4.useCallback)(function(values) {
		var fieldKeysWithValidation = Object.keys(fieldRegistry.current).filter(function(f) {
			return isFunction(fieldRegistry.current[f].validate);
		});
		var fieldValidations = fieldKeysWithValidation.length > 0 ? fieldKeysWithValidation.map(function(f) {
			return runSingleFieldLevelValidation(f, getIn(values, f));
		}) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
		return Promise.all(fieldValidations).then(function(fieldErrorsList) {
			return fieldErrorsList.reduce(function(prev, curr, index) {
				if (curr === "DO_NOT_DELETE_YOU_WILL_BE_FIRED") return prev;
				if (curr) prev = setIn(prev, fieldKeysWithValidation[index], curr);
				return prev;
			}, {});
		});
	}, [runSingleFieldLevelValidation]);
	var runAllValidations = (0, import_react$4.useCallback)(function(values) {
		return Promise.all([
			runFieldLevelValidations(values),
			props.validationSchema ? runValidationSchema(values) : {},
			props.validate ? runValidateHandler(values) : {}
		]).then(function(_ref2) {
			var fieldErrors = _ref2[0], schemaErrors = _ref2[1], validateErrors = _ref2[2];
			return deepmerge_1.all([
				fieldErrors,
				schemaErrors,
				validateErrors
			], { arrayMerge });
		});
	}, [
		props.validate,
		props.validationSchema,
		runFieldLevelValidations,
		runValidateHandler,
		runValidationSchema
	]);
	var validateFormWithHighPriority = useEventCallback(function(values) {
		if (values === void 0) values = state.values;
		dispatch({
			type: "SET_ISVALIDATING",
			payload: true
		});
		return runAllValidations(values).then(function(combinedErrors) {
			if (!!isMounted.current) {
				dispatch({
					type: "SET_ISVALIDATING",
					payload: false
				});
				dispatch({
					type: "SET_ERRORS",
					payload: combinedErrors
				});
			}
			return combinedErrors;
		});
	});
	(0, import_react$4.useEffect)(function() {
		if (validateOnMount && isMounted.current === true && (0, import_react_fast_compare.default)(initialValues.current, props.initialValues)) validateFormWithHighPriority(initialValues.current);
	}, [validateOnMount, validateFormWithHighPriority]);
	var resetForm = (0, import_react$4.useCallback)(function(nextState) {
		var values = nextState && nextState.values ? nextState.values : initialValues.current;
		var errors = nextState && nextState.errors ? nextState.errors : initialErrors.current ? initialErrors.current : props.initialErrors || {};
		var touched = nextState && nextState.touched ? nextState.touched : initialTouched.current ? initialTouched.current : props.initialTouched || {};
		var status = nextState && nextState.status ? nextState.status : initialStatus.current ? initialStatus.current : props.initialStatus;
		initialValues.current = values;
		initialErrors.current = errors;
		initialTouched.current = touched;
		initialStatus.current = status;
		var dispatchFn = function dispatchFn() {
			dispatch({
				type: "RESET_FORM",
				payload: {
					isSubmitting: !!nextState && !!nextState.isSubmitting,
					errors,
					touched,
					status,
					values,
					isValidating: !!nextState && !!nextState.isValidating,
					submitCount: !!nextState && !!nextState.submitCount && typeof nextState.submitCount === "number" ? nextState.submitCount : 0
				}
			});
		};
		if (props.onReset) {
			var maybePromisedOnReset = props.onReset(state.values, imperativeMethods);
			if (isPromise(maybePromisedOnReset)) maybePromisedOnReset.then(dispatchFn);
			else dispatchFn();
		} else dispatchFn();
	}, [
		props.initialErrors,
		props.initialStatus,
		props.initialTouched,
		props.onReset
	]);
	(0, import_react$4.useEffect)(function() {
		if (isMounted.current === true && !(0, import_react_fast_compare.default)(initialValues.current, props.initialValues)) {
			if (enableReinitialize) {
				initialValues.current = props.initialValues;
				resetForm();
				if (validateOnMount) validateFormWithHighPriority(initialValues.current);
			}
		}
	}, [
		enableReinitialize,
		props.initialValues,
		resetForm,
		validateOnMount,
		validateFormWithHighPriority
	]);
	(0, import_react$4.useEffect)(function() {
		if (enableReinitialize && isMounted.current === true && !(0, import_react_fast_compare.default)(initialErrors.current, props.initialErrors)) {
			initialErrors.current = props.initialErrors || emptyErrors;
			dispatch({
				type: "SET_ERRORS",
				payload: props.initialErrors || emptyErrors
			});
		}
	}, [enableReinitialize, props.initialErrors]);
	(0, import_react$4.useEffect)(function() {
		if (enableReinitialize && isMounted.current === true && !(0, import_react_fast_compare.default)(initialTouched.current, props.initialTouched)) {
			initialTouched.current = props.initialTouched || emptyTouched;
			dispatch({
				type: "SET_TOUCHED",
				payload: props.initialTouched || emptyTouched
			});
		}
	}, [enableReinitialize, props.initialTouched]);
	(0, import_react$4.useEffect)(function() {
		if (enableReinitialize && isMounted.current === true && !(0, import_react_fast_compare.default)(initialStatus.current, props.initialStatus)) {
			initialStatus.current = props.initialStatus;
			dispatch({
				type: "SET_STATUS",
				payload: props.initialStatus
			});
		}
	}, [
		enableReinitialize,
		props.initialStatus,
		props.initialTouched
	]);
	var validateField = useEventCallback(function(name) {
		if (fieldRegistry.current[name] && isFunction(fieldRegistry.current[name].validate)) {
			var value = getIn(state.values, name);
			var maybePromise = fieldRegistry.current[name].validate(value);
			if (isPromise(maybePromise)) {
				dispatch({
					type: "SET_ISVALIDATING",
					payload: true
				});
				return maybePromise.then(function(x) {
					return x;
				}).then(function(error) {
					dispatch({
						type: "SET_FIELD_ERROR",
						payload: {
							field: name,
							value: error
						}
					});
					dispatch({
						type: "SET_ISVALIDATING",
						payload: false
					});
				});
			} else {
				dispatch({
					type: "SET_FIELD_ERROR",
					payload: {
						field: name,
						value: maybePromise
					}
				});
				return Promise.resolve(maybePromise);
			}
		} else if (props.validationSchema) {
			dispatch({
				type: "SET_ISVALIDATING",
				payload: true
			});
			return runValidationSchema(state.values, name).then(function(x) {
				return x;
			}).then(function(error) {
				dispatch({
					type: "SET_FIELD_ERROR",
					payload: {
						field: name,
						value: getIn(error, name)
					}
				});
				dispatch({
					type: "SET_ISVALIDATING",
					payload: false
				});
			});
		}
		return Promise.resolve();
	});
	var registerField = (0, import_react$4.useCallback)(function(name, _ref3) {
		var validate = _ref3.validate;
		fieldRegistry.current[name] = { validate };
	}, []);
	var unregisterField = (0, import_react$4.useCallback)(function(name) {
		delete fieldRegistry.current[name];
	}, []);
	var setTouched = useEventCallback(function(touched, shouldValidate) {
		dispatch({
			type: "SET_TOUCHED",
			payload: touched
		});
		return (shouldValidate === void 0 ? validateOnBlur : shouldValidate) ? validateFormWithHighPriority(state.values) : Promise.resolve();
	});
	var setErrors = (0, import_react$4.useCallback)(function(errors) {
		dispatch({
			type: "SET_ERRORS",
			payload: errors
		});
	}, []);
	var setValues = useEventCallback(function(values, shouldValidate) {
		var resolvedValues = isFunction(values) ? values(state.values) : values;
		dispatch({
			type: "SET_VALUES",
			payload: resolvedValues
		});
		return (shouldValidate === void 0 ? validateOnChange : shouldValidate) ? validateFormWithHighPriority(resolvedValues) : Promise.resolve();
	});
	var setFieldError = (0, import_react$4.useCallback)(function(field, value) {
		dispatch({
			type: "SET_FIELD_ERROR",
			payload: {
				field,
				value
			}
		});
	}, []);
	var setFieldValue = useEventCallback(function(field, value, shouldValidate) {
		var resolvedValue = isFunction(value) ? value(getIn(state.values, field)) : value;
		dispatch({
			type: "SET_FIELD_VALUE",
			payload: {
				field,
				value: resolvedValue
			}
		});
		return (shouldValidate === void 0 ? validateOnChange : shouldValidate) ? validateFormWithHighPriority(setIn(state.values, field, resolvedValue)) : Promise.resolve();
	});
	var executeChange = (0, import_react$4.useCallback)(function(eventOrTextValue, maybePath) {
		var field = maybePath;
		var val = eventOrTextValue;
		var parsed;
		if (!isString(eventOrTextValue)) {
			if (eventOrTextValue.persist) eventOrTextValue.persist();
			var target = eventOrTextValue.target ? eventOrTextValue.target : eventOrTextValue.currentTarget, type = target.type, name = target.name, id = target.id, value = target.value, checked = target.checked;
			target.outerHTML;
			var options = target.options, multiple = target.multiple;
			field = maybePath ? maybePath : name ? name : id;
			val = /number|range/.test(type) ? (parsed = parseFloat(value), isNaN(parsed) ? "" : parsed) : /checkbox/.test(type) ? getValueForCheckbox(getIn(state.values, field), checked, value) : options && multiple ? getSelectedValues(options) : value;
		}
		if (field) setFieldValue(field, val);
	}, [setFieldValue, state.values]);
	var handleChange = useEventCallback(function(eventOrPath) {
		if (isString(eventOrPath)) return function(event) {
			return executeChange(event, eventOrPath);
		};
		else executeChange(eventOrPath);
	});
	var setFieldTouched = useEventCallback(function(field, touched, shouldValidate) {
		if (touched === void 0) touched = true;
		dispatch({
			type: "SET_FIELD_TOUCHED",
			payload: {
				field,
				value: touched
			}
		});
		return (shouldValidate === void 0 ? validateOnBlur : shouldValidate) ? validateFormWithHighPriority(state.values) : Promise.resolve();
	});
	var executeBlur = (0, import_react$4.useCallback)(function(e, path) {
		if (e.persist) e.persist();
		var _e$target = e.target, name = _e$target.name, id = _e$target.id;
		_e$target.outerHTML;
		setFieldTouched(path ? path : name ? name : id, true);
	}, [setFieldTouched]);
	var handleBlur = useEventCallback(function(eventOrString) {
		if (isString(eventOrString)) return function(event) {
			return executeBlur(event, eventOrString);
		};
		else executeBlur(eventOrString);
	});
	var setFormikState = (0, import_react$4.useCallback)(function(stateOrCb) {
		if (isFunction(stateOrCb)) dispatch({
			type: "SET_FORMIK_STATE",
			payload: stateOrCb
		});
		else dispatch({
			type: "SET_FORMIK_STATE",
			payload: function payload() {
				return stateOrCb;
			}
		});
	}, []);
	var setStatus = (0, import_react$4.useCallback)(function(status) {
		dispatch({
			type: "SET_STATUS",
			payload: status
		});
	}, []);
	var setSubmitting = (0, import_react$4.useCallback)(function(isSubmitting) {
		dispatch({
			type: "SET_ISSUBMITTING",
			payload: isSubmitting
		});
	}, []);
	var submitForm = useEventCallback(function() {
		dispatch({ type: "SUBMIT_ATTEMPT" });
		return validateFormWithHighPriority().then(function(combinedErrors) {
			var isInstanceOfError = combinedErrors instanceof Error;
			if (!isInstanceOfError && Object.keys(combinedErrors).length === 0) {
				var promiseOrUndefined;
				try {
					promiseOrUndefined = executeSubmit();
					if (promiseOrUndefined === void 0) return;
				} catch (error) {
					throw error;
				}
				return Promise.resolve(promiseOrUndefined).then(function(result) {
					if (!!isMounted.current) dispatch({ type: "SUBMIT_SUCCESS" });
					return result;
				})["catch"](function(_errors) {
					if (!!isMounted.current) {
						dispatch({ type: "SUBMIT_FAILURE" });
						throw _errors;
					}
				});
			} else if (!!isMounted.current) {
				dispatch({ type: "SUBMIT_FAILURE" });
				if (isInstanceOfError) throw combinedErrors;
			}
		});
	});
	var handleSubmit = useEventCallback(function(e) {
		if (e && e.preventDefault && isFunction(e.preventDefault)) e.preventDefault();
		if (e && e.stopPropagation && isFunction(e.stopPropagation)) e.stopPropagation();
		submitForm()["catch"](function(reason) {
			console.warn("Warning: An unhandled error was caught from submitForm()", reason);
		});
	});
	var imperativeMethods = {
		resetForm,
		validateForm: validateFormWithHighPriority,
		validateField,
		setErrors,
		setFieldError,
		setFieldTouched,
		setFieldValue,
		setStatus,
		setSubmitting,
		setTouched,
		setValues,
		setFormikState,
		submitForm
	};
	var executeSubmit = useEventCallback(function() {
		return onSubmit(state.values, imperativeMethods);
	});
	var handleReset = useEventCallback(function(e) {
		if (e && e.preventDefault && isFunction(e.preventDefault)) e.preventDefault();
		if (e && e.stopPropagation && isFunction(e.stopPropagation)) e.stopPropagation();
		resetForm();
	});
	var getFieldMeta = (0, import_react$4.useCallback)(function(name) {
		return {
			value: getIn(state.values, name),
			error: getIn(state.errors, name),
			touched: !!getIn(state.touched, name),
			initialValue: getIn(initialValues.current, name),
			initialTouched: !!getIn(initialTouched.current, name),
			initialError: getIn(initialErrors.current, name)
		};
	}, [
		state.errors,
		state.touched,
		state.values
	]);
	var getFieldHelpers = (0, import_react$4.useCallback)(function(name) {
		return {
			setValue: function setValue(value, shouldValidate) {
				return setFieldValue(name, value, shouldValidate);
			},
			setTouched: function setTouched(value, shouldValidate) {
				return setFieldTouched(name, value, shouldValidate);
			},
			setError: function setError(value) {
				return setFieldError(name, value);
			}
		};
	}, [
		setFieldValue,
		setFieldTouched,
		setFieldError
	]);
	var getFieldProps = (0, import_react$4.useCallback)(function(nameOrOptions) {
		var isAnObject = isObject(nameOrOptions);
		var name = isAnObject ? nameOrOptions.name : nameOrOptions;
		var valueState = getIn(state.values, name);
		var field = {
			name,
			value: valueState,
			onChange: handleChange,
			onBlur: handleBlur
		};
		if (isAnObject) {
			var type = nameOrOptions.type, valueProp = nameOrOptions.value, is = nameOrOptions.as, multiple = nameOrOptions.multiple;
			if (type === "checkbox") if (valueProp === void 0) field.checked = !!valueState;
			else {
				field.checked = !!(Array.isArray(valueState) && ~valueState.indexOf(valueProp));
				field.value = valueProp;
			}
			else if (type === "radio") {
				field.checked = valueState === valueProp;
				field.value = valueProp;
			} else if (is === "select" && multiple) {
				field.value = field.value || [];
				field.multiple = true;
			}
		}
		return field;
	}, [
		handleBlur,
		handleChange,
		state.values
	]);
	var dirty = (0, import_react$4.useMemo)(function() {
		return !(0, import_react_fast_compare.default)(initialValues.current, state.values);
	}, [initialValues.current, state.values]);
	var isValid = (0, import_react$4.useMemo)(function() {
		return typeof isInitialValid !== "undefined" ? dirty ? state.errors && Object.keys(state.errors).length === 0 : isInitialValid !== false && isFunction(isInitialValid) ? isInitialValid(props) : isInitialValid : state.errors && Object.keys(state.errors).length === 0;
	}, [
		isInitialValid,
		dirty,
		state.errors,
		props
	]);
	return _extends({}, state, {
		initialValues: initialValues.current,
		initialErrors: initialErrors.current,
		initialTouched: initialTouched.current,
		initialStatus: initialStatus.current,
		handleBlur,
		handleChange,
		handleReset,
		handleSubmit,
		resetForm,
		setErrors,
		setFormikState,
		setFieldTouched,
		setFieldValue,
		setFieldError,
		setStatus,
		setSubmitting,
		setTouched,
		setValues,
		submitForm,
		validateForm: validateFormWithHighPriority,
		validateField,
		isValid,
		dirty,
		unregisterField,
		registerField,
		getFieldProps,
		getFieldMeta,
		getFieldHelpers,
		validateOnBlur,
		validateOnChange,
		validateOnMount
	});
}
function Formik(props) {
	var formikbag = useFormik(props);
	var component = props.component, children = props.children, render = props.render, innerRef = props.innerRef;
	(0, import_react$4.useImperativeHandle)(innerRef, function() {
		return formikbag;
	});
	return (0, import_react$4.createElement)(FormikProvider, { value: formikbag }, component ? (0, import_react$4.createElement)(component, formikbag) : render ? render(formikbag) : children ? isFunction(children) ? children(formikbag) : !isEmptyChildren(children) ? import_react$4.Children.only(children) : null : null);
}
/**
* Transform Yup ValidationError to a more usable object
*/
function yupToFormErrors(yupError) {
	var errors = {};
	if (yupError.inner) {
		if (yupError.inner.length === 0) return setIn(errors, yupError.path, yupError.message);
		for (var _iterator = yupError.inner, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
			var _ref5;
			if (_isArray) {
				if (_i >= _iterator.length) break;
				_ref5 = _iterator[_i++];
			} else {
				_i = _iterator.next();
				if (_i.done) break;
				_ref5 = _i.value;
			}
			var err = _ref5;
			if (!getIn(errors, err.path)) errors = setIn(errors, err.path, err.message);
		}
	}
	return errors;
}
/**
* Validate a yup schema.
*/
function validateYupSchema(values, schema, sync, context) {
	if (sync === void 0) sync = false;
	var normalizedValues = prepareDataForValidation(values);
	return schema[sync ? "validateSync" : "validate"](normalizedValues, {
		abortEarly: false,
		context: context || normalizedValues
	});
}
/**
* Recursively prepare values.
*/
function prepareDataForValidation(values) {
	var data = Array.isArray(values) ? [] : {};
	for (var k in values) if (Object.prototype.hasOwnProperty.call(values, k)) {
		var key = String(k);
		if (Array.isArray(values[key]) === true) data[key] = values[key].map(function(value) {
			if (Array.isArray(value) === true || isPlainObject(value)) return prepareDataForValidation(value);
			else return value !== "" ? value : void 0;
		});
		else if (isPlainObject(values[key])) data[key] = prepareDataForValidation(values[key]);
		else data[key] = values[key] !== "" ? values[key] : void 0;
	}
	return data;
}
/**
* deepmerge array merging algorithm
* https://github.com/KyleAMathews/deepmerge#combine-array
*/
function arrayMerge(target, source, options) {
	var destination = target.slice();
	source.forEach(function merge(e, i) {
		if (typeof destination[i] === "undefined") destination[i] = options.clone !== false && options.isMergeableObject(e) ? deepmerge_1(Array.isArray(e) ? [] : {}, e, options) : e;
		else if (options.isMergeableObject(e)) destination[i] = deepmerge_1(target[i], e, options);
		else if (target.indexOf(e) === -1) destination.push(e);
	});
	return destination;
}
/** Return multi select values based on an array of options */
function getSelectedValues(options) {
	return Array.from(options).filter(function(el) {
		return el.selected;
	}).map(function(el) {
		return el.value;
	});
}
/** Return the next value for a checkbox */
function getValueForCheckbox(currentValue, checked, valueProp) {
	if (typeof currentValue === "boolean") return Boolean(checked);
	var currentArrayOfValues = [];
	var isValueInArray = false;
	var index = -1;
	if (!Array.isArray(currentValue)) {
		if (!valueProp || valueProp == "true" || valueProp == "false") return Boolean(checked);
	} else {
		currentArrayOfValues = currentValue;
		index = currentValue.indexOf(valueProp);
		isValueInArray = index >= 0;
	}
	if (checked && valueProp && !isValueInArray) return currentArrayOfValues.concat(valueProp);
	if (!isValueInArray) return currentArrayOfValues;
	return currentArrayOfValues.slice(0, index).concat(currentArrayOfValues.slice(index + 1));
}
function useEventCallback(fn) {
	var ref = (0, import_react$4.useRef)(fn);
	useIsomorphicLayoutEffect(function() {
		ref.current = fn;
	});
	return (0, import_react$4.useCallback)(function() {
		for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
		return ref.current.apply(void 0, args);
	}, []);
}
function Field(_ref) {
	var validate = _ref.validate, name = _ref.name, render = _ref.render, children = _ref.children, is = _ref.as, component = _ref.component, className = _ref.className, props = _objectWithoutPropertiesLoose(_ref, [
		"validate",
		"name",
		"render",
		"children",
		"as",
		"component",
		"className"
	]);
	var formik = _objectWithoutPropertiesLoose(useFormikContext(), ["validate", "validationSchema"]);
	var registerField = formik.registerField, unregisterField = formik.unregisterField;
	(0, import_react$4.useEffect)(function() {
		registerField(name, { validate });
		return function() {
			unregisterField(name);
		};
	}, [
		registerField,
		unregisterField,
		name,
		validate
	]);
	var field = formik.getFieldProps(_extends({ name }, props));
	var meta = formik.getFieldMeta(name);
	var legacyBag = {
		field,
		form: formik
	};
	if (render) return render(_extends({}, legacyBag, { meta }));
	if (isFunction(children)) return children(_extends({}, legacyBag, { meta }));
	if (component) {
		if (typeof component === "string") {
			var innerRef = props.innerRef, rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);
			return (0, import_react$4.createElement)(component, _extends({ ref: innerRef }, field, rest, { className }), children);
		}
		return (0, import_react$4.createElement)(component, _extends({
			field,
			form: formik
		}, props, { className }), children);
	}
	var asElement = is || "input";
	if (typeof asElement === "string") {
		var _innerRef = props.innerRef, _rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);
		return (0, import_react$4.createElement)(asElement, _extends({ ref: _innerRef }, field, _rest, { className }), children);
	}
	return (0, import_react$4.createElement)(asElement, _extends({}, field, props, { className }), children);
}
var import_react$4, import_react_fast_compare, FormikContext, FormikProvider, isEmptyArray, isFunction, isObject, isInteger, isString, isEmptyChildren, isPromise, emptyErrors, emptyTouched, useIsomorphicLayoutEffect, Form, move, swap, insert, replace, copyArrayLike, createAlterationHandler, FieldArrayInner;
var init_formik_esm = __esmMin((() => {
	init_es();
	init_isPlainObject();
	init_cloneDeep();
	import_react$4 = /* @__PURE__ */ __toESM(require_react());
	import_react_fast_compare = /* @__PURE__ */ __toESM(require_react_fast_compare());
	init_tiny_warning_esm();
	init_clone();
	init_toPath();
	require_hoist_non_react_statics_cjs();
	FormikContext = /* @__PURE__ */ (0, import_react$4.createContext)(void 0);
	FormikContext.displayName = "FormikContext";
	FormikProvider = FormikContext.Provider;
	FormikContext.Consumer;
	isEmptyArray = function isEmptyArray(value) {
		return Array.isArray(value) && value.length === 0;
	};
	isFunction = function isFunction(obj) {
		return typeof obj === "function";
	};
	isObject = function isObject(obj) {
		return obj !== null && typeof obj === "object";
	};
	isInteger = function isInteger(obj) {
		return String(Math.floor(Number(obj))) === obj;
	};
	isString = function isString(obj) {
		return Object.prototype.toString.call(obj) === "[object String]";
	};
	isEmptyChildren = function isEmptyChildren(children) {
		return import_react$4.Children.count(children) === 0;
	};
	isPromise = function isPromise(value) {
		return isObject(value) && isFunction(value.then);
	};
	emptyErrors = {};
	emptyTouched = {};
	useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? import_react$4.useLayoutEffect : import_react$4.useEffect;
	Form = /* @__PURE__ */ (0, import_react$4.forwardRef)(function(props, ref) {
		var action = props.action, rest = _objectWithoutPropertiesLoose(props, ["action"]);
		var _action = action != null ? action : "#";
		var _useFormikContext = useFormikContext(), handleReset = _useFormikContext.handleReset, handleSubmit = _useFormikContext.handleSubmit;
		return (0, import_react$4.createElement)("form", _extends({
			onSubmit: handleSubmit,
			ref,
			onReset: handleReset,
			action: _action
		}, rest));
	});
	Form.displayName = "Form";
	move = function move(array, from, to) {
		var copy = copyArrayLike(array);
		var value = copy[from];
		copy.splice(from, 1);
		copy.splice(to, 0, value);
		return copy;
	};
	swap = function swap(arrayLike, indexA, indexB) {
		var copy = copyArrayLike(arrayLike);
		var a = copy[indexA];
		copy[indexA] = copy[indexB];
		copy[indexB] = a;
		return copy;
	};
	insert = function insert(arrayLike, index, value) {
		var copy = copyArrayLike(arrayLike);
		copy.splice(index, 0, value);
		return copy;
	};
	replace = function replace(arrayLike, index, value) {
		var copy = copyArrayLike(arrayLike);
		copy[index] = value;
		return copy;
	};
	copyArrayLike = function copyArrayLike(arrayLike) {
		if (!arrayLike) return [];
		else if (Array.isArray(arrayLike)) return [].concat(arrayLike);
		else {
			var maxIndex = Object.keys(arrayLike).map(function(key) {
				return parseInt(key);
			}).reduce(function(max, el) {
				return el > max ? el : max;
			}, 0);
			return Array.from(_extends({}, arrayLike, { length: maxIndex + 1 }));
		}
	};
	createAlterationHandler = function createAlterationHandler(alteration, defaultFunction) {
		var fn = typeof alteration === "function" ? alteration : defaultFunction;
		return function(data) {
			if (Array.isArray(data) || isObject(data)) return fn(copyArrayLike(data));
			return data;
		};
	};
	FieldArrayInner = /* @__PURE__ */ function(_React$Component) {
		_inheritsLoose(FieldArrayInner, _React$Component);
		function FieldArrayInner(props) {
			var _this = _React$Component.call(this, props) || this;
			_this.updateArrayField = function(fn, alterTouched, alterErrors) {
				var _this$props = _this.props, name = _this$props.name, setFormikState = _this$props.formik.setFormikState;
				setFormikState(function(prevState) {
					var updateErrors = createAlterationHandler(alterErrors, fn);
					var updateTouched = createAlterationHandler(alterTouched, fn);
					var values = setIn(prevState.values, name, fn(getIn(prevState.values, name)));
					var fieldError = alterErrors ? updateErrors(getIn(prevState.errors, name)) : void 0;
					var fieldTouched = alterTouched ? updateTouched(getIn(prevState.touched, name)) : void 0;
					if (isEmptyArray(fieldError)) fieldError = void 0;
					if (isEmptyArray(fieldTouched)) fieldTouched = void 0;
					return _extends({}, prevState, {
						values,
						errors: alterErrors ? setIn(prevState.errors, name, fieldError) : prevState.errors,
						touched: alterTouched ? setIn(prevState.touched, name, fieldTouched) : prevState.touched
					});
				});
			};
			_this.push = function(value) {
				return _this.updateArrayField(function(arrayLike) {
					return [].concat(copyArrayLike(arrayLike), [cloneDeep(value)]);
				}, false, false);
			};
			_this.handlePush = function(value) {
				return function() {
					return _this.push(value);
				};
			};
			_this.swap = function(indexA, indexB) {
				return _this.updateArrayField(function(array) {
					return swap(array, indexA, indexB);
				}, true, true);
			};
			_this.handleSwap = function(indexA, indexB) {
				return function() {
					return _this.swap(indexA, indexB);
				};
			};
			_this.move = function(from, to) {
				return _this.updateArrayField(function(array) {
					return move(array, from, to);
				}, true, true);
			};
			_this.handleMove = function(from, to) {
				return function() {
					return _this.move(from, to);
				};
			};
			_this.insert = function(index, value) {
				return _this.updateArrayField(function(array) {
					return insert(array, index, value);
				}, function(array) {
					return insert(array, index, null);
				}, function(array) {
					return insert(array, index, null);
				});
			};
			_this.handleInsert = function(index, value) {
				return function() {
					return _this.insert(index, value);
				};
			};
			_this.replace = function(index, value) {
				return _this.updateArrayField(function(array) {
					return replace(array, index, value);
				}, false, false);
			};
			_this.handleReplace = function(index, value) {
				return function() {
					return _this.replace(index, value);
				};
			};
			_this.unshift = function(value) {
				var length = -1;
				_this.updateArrayField(function(array) {
					var arr = array ? [value].concat(array) : [value];
					length = arr.length;
					return arr;
				}, function(array) {
					return array ? [null].concat(array) : [null];
				}, function(array) {
					return array ? [null].concat(array) : [null];
				});
				return length;
			};
			_this.handleUnshift = function(value) {
				return function() {
					return _this.unshift(value);
				};
			};
			_this.handleRemove = function(index) {
				return function() {
					return _this.remove(index);
				};
			};
			_this.handlePop = function() {
				return function() {
					return _this.pop();
				};
			};
			_this.remove = _this.remove.bind(_assertThisInitialized(_this));
			_this.pop = _this.pop.bind(_assertThisInitialized(_this));
			return _this;
		}
		var _proto = FieldArrayInner.prototype;
		_proto.componentDidUpdate = function componentDidUpdate(prevProps) {
			if (this.props.validateOnChange && this.props.formik.validateOnChange && !(0, import_react_fast_compare.default)(getIn(prevProps.formik.values, prevProps.name), getIn(this.props.formik.values, this.props.name))) this.props.formik.validateForm(this.props.formik.values);
		};
		_proto.remove = function remove(index) {
			var result;
			this.updateArrayField(function(array) {
				var copy = array ? copyArrayLike(array) : [];
				if (!result) result = copy[index];
				if (isFunction(copy.splice)) copy.splice(index, 1);
				return isFunction(copy.every) ? copy.every(function(v) {
					return v === void 0;
				}) ? [] : copy : copy;
			}, true, true);
			return result;
		};
		_proto.pop = function pop() {
			var result;
			this.updateArrayField(function(array) {
				var tmp = array.slice();
				if (!result) result = tmp && tmp.pop && tmp.pop();
				return tmp;
			}, true, true);
			return result;
		};
		_proto.render = function render() {
			var arrayHelpers = {
				push: this.push,
				pop: this.pop,
				swap: this.swap,
				move: this.move,
				insert: this.insert,
				replace: this.replace,
				unshift: this.unshift,
				remove: this.remove,
				handlePush: this.handlePush,
				handlePop: this.handlePop,
				handleSwap: this.handleSwap,
				handleMove: this.handleMove,
				handleInsert: this.handleInsert,
				handleReplace: this.handleReplace,
				handleUnshift: this.handleUnshift,
				handleRemove: this.handleRemove
			};
			var _this$props2 = this.props, component = _this$props2.component, render = _this$props2.render, children = _this$props2.children, name = _this$props2.name, _this$props2$formik = _this$props2.formik, restOfFormik = _objectWithoutPropertiesLoose(_this$props2$formik, ["validate", "validationSchema"]);
			var props = _extends({}, arrayHelpers, {
				form: restOfFormik,
				name
			});
			return component ? (0, import_react$4.createElement)(component, props) : render ? render(props) : children ? typeof children === "function" ? children(props) : !isEmptyChildren(children) ? import_react$4.Children.only(children) : null : null;
		};
		return FieldArrayInner;
	}(import_react$4.Component);
	FieldArrayInner.defaultProps = { validateOnChange: true };
}));
//#endregion
//#region src/components/forms/form-elements/Fields.tsx
/** Renders a radio group wired to Formik state. */
function RadioFieldset({ id, includeTestIds, description, name, radioOptions, autoFocus, validate }) {
	const { values } = useFormikContext();
	const generatedId = (0, import_react$3.useId)();
	const baseId = id ?? `radio-${generatedId}`;
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
		id: baseId,
		"data-testid": includeTestIds ? `${baseId}-fieldset` : void 0,
		className: "ons-field ons-u-mb-m",
		children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("fieldset", {
			className: "ons-fieldset",
			children: [/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("legend", {
				className: "ons-fieldset__legend ons-u-fs-r--b",
				children: description
			}), /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
				className: "ons-grid",
				children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
					className: "ons-grid__col ons-col-8@m ons-col-6@l",
					children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
						className: "ons-input-items",
						children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
							className: "ons-radios__items",
							children: radioOptions?.map((option, index) => {
								const optionId = getOptionId(baseId, index, option.id);
								const specifyId = option.specifyOption?.id || `${optionId}-specify`;
								const isSpecifyOptionOpen = values[name] === option.value;
								return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
									className: "ons-radios__item",
									children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("span", {
										className: "ons-radio",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Field, {
												type: "radio",
												id: optionId,
												name,
												value: option.value,
												validate,
												className: "ons-radio__input",
												autoFocus: autoFocus && index === 0
											}),
											/* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("label", {
												className: `ons-radio__label ${option.description ? "ons-label--with-description" : ""}`,
												htmlFor: optionId,
												children: [option.label, option.description && /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", {
													className: "ons-label__description ons-radio__label--with-description",
													children: option.description
												})]
											}),
											option.specifyOption && /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("span", {
												className: `ons-radio__other ${isSpecifyOptionOpen ? "ons-radio__other--open" : ""}`,
												id: `${optionId}-other-wrap`,
												"aria-hidden": !isSpecifyOptionOpen,
												children: [/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("label", {
													className: "ons-label ons-u-fs-s--b",
													htmlFor: specifyId,
													children: option.specifyOption.description
												}), /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Field, {
													type: option.specifyOption.type,
													id: specifyId,
													name: option.specifyOption.name,
													validate: isSpecifyOptionOpen ? option.specifyOption.validate : void 0,
													min: option.specifyOption.min,
													className: "ons-input ons-input--text ons-input-type__input ons-input--w-auto"
												})]
											})
										]
									})
								}, option.id || `${option.value}-${index}`);
							})
						})
					})
				})
			})]
		})
	});
}
/** Renders a checkbox group. */
function CheckboxFieldset({ id, includeTestIds, description, checkboxOptions, name, autoFocus, validate }) {
	const { values, setFieldValue } = useFormikContext();
	const allValues = (checkboxOptions || []).map((option) => option.value);
	const isAllSelected = allValues.length > 0 && allValues.every((v) => values[name]?.includes(v));
	const generatedId = (0, import_react$3.useId)();
	const baseId = id ?? `checkbox-${generatedId}`;
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
		id: baseId,
		"data-testid": includeTestIds ? `${baseId}-fieldset` : void 0,
		className: "ons-field ons-u-mb-m",
		children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("fieldset", {
			className: "ons-fieldset",
			children: [/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("legend", {
				className: "ons-fieldset__legend ons-u-fs-r--b",
				children: description
			}), /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
				className: "ons-grid",
				children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
					className: "ons-grid__col ons-col-8@m ons-col-6@l",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("button", {
						"data-testid": includeTestIds ? `${baseId}-select-all` : void 0,
						type: "button",
						className: "ons-btn ons-u-mb-s ons-js-auto-selector ons-btn--small ons-btn--secondary",
						onClick: () => setFieldValue(name, isAllSelected ? [] : allValues),
						children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("span", {
							className: "ons-btn__inner",
							children: [/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", {
								className: "ons-js-button-text",
								children: isAllSelected ? "Unselect All" : "Select All"
							}), /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", {
								className: "ons-u-vh",
								children: " following checkboxes"
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
						className: "ons-input-items",
						children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
							className: "ons-checkboxes__items",
							children: checkboxOptions?.map((option, index) => {
								const optionId = getOptionId(baseId, index, option.id);
								return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
									className: "ons-checkboxes__item",
									children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("span", {
										className: "ons-checkbox",
										children: [/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Field, {
											type: "checkbox",
											id: optionId,
											name,
											value: option.value,
											validate,
											className: "ons-checkbox__input",
											autoFocus: autoFocus && index === 0
										}), /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("label", {
											className: `ons-checkbox__label ${option.description ? "ons-label--with-description" : ""}`,
											htmlFor: optionId,
											children: [option.label, option.description && /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", {
												className: "ons-label__description ons-checkbox__label--with-description",
												children: option.description
											})]
										})]
									})
								}, option.id || `${option.value}-${index}`);
							})
						})
					})]
				})
			})]
		})
	});
}
/** Renders a text-like input wired to Formik state. */
function TextInputFieldset({ id, includeTestIds, name, description, type = "text", validate, ...props }) {
	const generatedId = (0, import_react$3.useId)();
	const baseId = id ?? `input-${generatedId}`;
	const hintId = `${baseId}-description-hint`;
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
		className: "ons-field ons-u-mb-m",
		children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
			className: "ons-grid",
			children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
				className: "ons-grid__col ons-col-8@m ons-col-6@l",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("label", {
						className: `ons-label ${description ? "ons-label--with-description" : ""}`,
						htmlFor: baseId,
						children: capitaliseFirstLetter(name.trim())
					}),
					description && /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", {
						id: hintId,
						className: "ons-label__description ons-input--with-description",
						children: description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Field, {
						name,
						type,
						validate,
						children: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("input", {
							id: baseId,
							className: "ons-input ons-input--text ons-input-type__input",
							...field,
							value: field.value ?? "",
							type,
							"aria-describedby": description ? hintId : void 0,
							"data-testid": includeTestIds ? `${baseId}-input` : void 0,
							...props
						})
					})
				]
			})
		})
	});
}
var import_react$3, import_jsx_runtime$3, getOptionId;
var init_Fields = __esmMin((() => {
	init_formik_esm();
	import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_textFormatting();
	import_jsx_runtime$3 = require_jsx_runtime();
	getOptionId = (baseId, index, explicitId) => explicitId || `${baseId}-option-${index + 1}`;
	try {
		RadioFieldset.displayName = "RadioFieldset";
		RadioFieldset.__docgenInfo = {
			"description": "Renders a radio group wired to Formik state.",
			"displayName": "RadioFieldset",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
			"methods": [],
			"props": {
				"id": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "RadioFieldsetProps"
					}],
					"description": "Element ID.",
					"name": "id",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "RadioFieldsetProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"includeTestIds": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "RadioFieldsetProps"
					}],
					"description": "Whether field-specific test IDs should be rendered.",
					"name": "includeTestIds",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "RadioFieldsetProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "boolean | undefined" }
				},
				"description": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "RadioFieldsetProps"
					}],
					"description": "Legend text.",
					"name": "description",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "RadioFieldsetProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"name": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "RadioFieldsetProps"
					}],
					"description": "Field name.",
					"name": "name",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "RadioFieldsetProps"
					},
					"required": true,
					"tags": {},
					"type": { "name": "string" }
				},
				"radioOptions": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "RadioFieldsetProps"
					}],
					"description": "Radio options.",
					"name": "radioOptions",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "RadioFieldsetProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "readonly RadioFieldset[] | undefined" }
				},
				"autoFocus": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "RadioFieldsetProps"
					}],
					"description": "Whether to focus the first option.",
					"name": "autoFocus",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "RadioFieldsetProps"
					},
					"required": true,
					"tags": {},
					"type": { "name": "boolean" }
				},
				"validate": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "RadioFieldsetProps"
					}],
					"description": "Validation function.",
					"name": "validate",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "RadioFieldsetProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "((value: string) => string | undefined) | undefined" }
				}
			},
			"tags": {}
		};
	} catch (__react_docgen_typescript_loader_error) {}
	try {
		CheckboxFieldset.displayName = "CheckboxFieldset";
		CheckboxFieldset.__docgenInfo = {
			"description": "Renders a checkbox group.",
			"displayName": "CheckboxFieldset",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
			"methods": [],
			"props": {
				"id": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "CheckboxFieldsetProps"
					}],
					"description": "Element ID.",
					"name": "id",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "CheckboxFieldsetProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"includeTestIds": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "CheckboxFieldsetProps"
					}],
					"description": "Whether field-specific test IDs should be rendered.",
					"name": "includeTestIds",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "CheckboxFieldsetProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "boolean | undefined" }
				},
				"description": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "CheckboxFieldsetProps"
					}],
					"description": "Legend text.",
					"name": "description",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "CheckboxFieldsetProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"checkboxOptions": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "CheckboxFieldsetProps"
					}],
					"description": "Checkbox options.",
					"name": "checkboxOptions",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "CheckboxFieldsetProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "readonly CheckboxFieldset[] | undefined" }
				},
				"name": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "CheckboxFieldsetProps"
					}],
					"description": "Field name.",
					"name": "name",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "CheckboxFieldsetProps"
					},
					"required": true,
					"tags": {},
					"type": { "name": "string" }
				},
				"autoFocus": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "CheckboxFieldsetProps"
					}],
					"description": "Whether to focus the first option.",
					"name": "autoFocus",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "CheckboxFieldsetProps"
					},
					"required": true,
					"tags": {},
					"type": { "name": "boolean" }
				},
				"validate": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "CheckboxFieldsetProps"
					}],
					"description": "Validation function.",
					"name": "validate",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "CheckboxFieldsetProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "((value: string[]) => string | undefined) | undefined" }
				}
			},
			"tags": {}
		};
	} catch (__react_docgen_typescript_loader_error) {}
	try {
		TextInputFieldset.displayName = "TextInputFieldset";
		TextInputFieldset.__docgenInfo = {
			"description": "Renders a text-like input wired to Formik state.",
			"displayName": "TextInputFieldset",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
			"methods": [],
			"props": {
				"id": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "TextInputFieldsetProps"
					}],
					"description": "Element ID.",
					"name": "id",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "TextInputFieldsetProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"includeTestIds": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "TextInputFieldsetProps"
					}],
					"description": "Whether field-specific test IDs should be rendered.",
					"name": "includeTestIds",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "TextInputFieldsetProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "boolean | undefined" }
				},
				"name": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "TextInputFieldsetProps"
					}],
					"description": "Field name.",
					"name": "name",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "TextInputFieldsetProps"
					},
					"required": true,
					"tags": {},
					"type": { "name": "string" }
				},
				"description": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "TextInputFieldsetProps"
					}],
					"description": "Hint text.",
					"name": "description",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "TextInputFieldsetProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"type": {
					"defaultValue": { "value": "text" },
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "TextInputFieldsetProps"
					}],
					"description": "Input type.",
					"name": "type",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "TextInputFieldsetProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "TextLikeFieldType | undefined" }
				},
				"validate": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "TextInputFieldsetProps"
					}],
					"description": "Validation function.",
					"name": "validate",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/Fields.tsx",
						"name": "TextInputFieldsetProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "((value: string) => string | undefined) | undefined" }
				}
			},
			"tags": {}
		};
	} catch (__react_docgen_typescript_loader_error) {}
}));
//#endregion
//#region src/components/forms/form-elements/StyledFormField.tsx
var import_react$2, import_jsx_runtime$2, renderFieldError, StyledFormField;
var init_StyledFormField = __esmMin((() => {
	init_formik_esm();
	import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_Fields();
	import_jsx_runtime$2 = require_jsx_runtime();
	renderFieldError = (fieldError, field, baseId, includeTestIds) => {
		return /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("div", {
			className: "ons-panel ons-panel--error ons-panel--no-title",
			id: `${baseId}-error`,
			"data-testid": includeTestIds ? `${baseId}-error-panel` : void 0,
			children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", {
				className: "ons-panel__assistive-text ons-u-vh",
				children: "Error: "
			}), /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("div", {
				className: "ons-panel__body",
				children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("p", {
					className: "ons-panel__error",
					children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("strong", { children: fieldError })
				}), field]
			})]
		});
	};
	StyledFormField = ({ id, includeTestIds, autoFocus = false, ...field }) => {
		const { errors } = useFormikContext();
		const generatedId = (0, import_react$2.useId)();
		const baseId = id ?? `field-${generatedId}`;
		const shouldIncludeTestIds = includeTestIds ?? Boolean(id);
		const renderedField = (() => {
			switch (field.type) {
				case "radio": return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(RadioFieldset, {
					id,
					includeTestIds: shouldIncludeTestIds,
					description: field.description,
					name: field.name,
					radioOptions: field.radioOptions,
					autoFocus,
					validate: field.validate
				});
				case "checkbox": return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(CheckboxFieldset, {
					id,
					includeTestIds: shouldIncludeTestIds,
					description: field.description,
					name: field.name,
					checkboxOptions: field.checkboxOptions,
					autoFocus,
					validate: field.validate
				});
				default: return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(TextInputFieldset, {
					id,
					includeTestIds: shouldIncludeTestIds,
					name: field.name,
					description: field.description,
					autoFocus,
					type: field.type,
					validate: field.validate
				});
			}
		})();
		const fieldError = errors[field.name];
		return fieldError ? renderFieldError(fieldError, renderedField, baseId, shouldIncludeTestIds) : renderedField;
	};
	try {
		StyledFormField.displayName = "StyledFormField";
		StyledFormField.__docgenInfo = {
			"description": "Renders a field from StyledForm config.",
			"displayName": "StyledFormField",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/forms/form-elements/StyledFormField.tsx",
			"methods": [],
			"props": {
				"type": {
					"defaultValue": null,
					"declarations": [
						{
							"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
							"name": "CheckboxFormField"
						},
						{
							"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
							"name": "RadioFormField"
						},
						{
							"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
							"name": "BaseFormField"
						}
					],
					"description": "Field type.",
					"name": "type",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
						"name": "CheckboxFormField"
					},
					"required": true,
					"tags": {},
					"type": { "name": "\"number\" | \"text\" | \"password\" | \"checkbox\" | \"date\" | \"email\" | \"radio\"" }
				},
				"checkboxOptions": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
						"name": "CheckboxFormField"
					}],
					"description": "Checkbox options.",
					"name": "checkboxOptions",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
						"name": "CheckboxFormField"
					},
					"required": true,
					"tags": {},
					"type": { "name": "readonly CheckboxFieldset[]" }
				},
				"id": {
					"defaultValue": null,
					"declarations": [
						{
							"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
							"name": "BaseFormField"
						},
						{
							"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/StyledFormField.tsx",
							"name": "TypeLiteral"
						},
						{
							"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
							"name": "BaseFormField"
						},
						{
							"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/StyledFormField.tsx",
							"name": "TypeLiteral"
						},
						{
							"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
							"name": "BaseFormField"
						},
						{
							"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/StyledFormField.tsx",
							"name": "TypeLiteral"
						}
					],
					"description": "Element ID.",
					"name": "id",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
						"name": "BaseFormField"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"autoFocus": {
					"defaultValue": { "value": "false" },
					"declarations": [
						{
							"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
							"name": "BaseFormField"
						},
						{
							"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/StyledFormField.tsx",
							"name": "TypeLiteral"
						},
						{
							"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
							"name": "BaseFormField"
						},
						{
							"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/StyledFormField.tsx",
							"name": "TypeLiteral"
						},
						{
							"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
							"name": "BaseFormField"
						},
						{
							"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/StyledFormField.tsx",
							"name": "TypeLiteral"
						}
					],
					"description": "Autofocus hint. StyledForm currently ignores this value.\nWhether to focus the field.",
					"name": "autoFocus",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
						"name": "BaseFormField"
					},
					"required": false,
					"tags": {},
					"type": { "name": "boolean | undefined" }
				},
				"name": {
					"defaultValue": null,
					"declarations": [
						{
							"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
							"name": "BaseFormField"
						},
						{
							"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
							"name": "BaseFormField"
						},
						{
							"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
							"name": "BaseFormField"
						}
					],
					"description": "Field name.",
					"name": "name",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
						"name": "BaseFormField"
					},
					"required": true,
					"tags": {},
					"type": { "name": "string" }
				},
				"description": {
					"defaultValue": null,
					"declarations": [
						{
							"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
							"name": "BaseFormField"
						},
						{
							"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
							"name": "BaseFormField"
						},
						{
							"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
							"name": "BaseFormField"
						}
					],
					"description": "Hint or legend text.",
					"name": "description",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
						"name": "BaseFormField"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"validate": {
					"defaultValue": null,
					"declarations": [
						{
							"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
							"name": "BaseFormField"
						},
						{
							"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
							"name": "BaseFormField"
						},
						{
							"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
							"name": "BaseFormField"
						}
					],
					"description": "Validation function.",
					"name": "validate",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
						"name": "BaseFormField"
					},
					"required": false,
					"tags": {},
					"type": { "name": "((value: string[]) => string | undefined) | ((value: string) => string | undefined) | undefined" }
				},
				"initialValue": {
					"defaultValue": null,
					"declarations": [
						{
							"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
							"name": "BaseFormField"
						},
						{
							"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
							"name": "BaseFormField"
						},
						{
							"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
							"name": "BaseFormField"
						}
					],
					"description": "Initial value.",
					"name": "initialValue",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
						"name": "BaseFormField"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | string[] | undefined" }
				},
				"includeTestIds": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/form-elements/StyledFormField.tsx",
						"name": "TypeLiteral"
					}],
					"description": "Whether field-specific test IDs should be rendered.",
					"name": "includeTestIds",
					"required": false,
					"tags": {},
					"type": { "name": "boolean | undefined" }
				},
				"radioOptions": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
						"name": "RadioFormField"
					}],
					"description": "Radio options.",
					"name": "radioOptions",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
						"name": "RadioFormField"
					},
					"required": true,
					"tags": {},
					"type": { "name": "readonly RadioFieldset[]" }
				}
			},
			"tags": {}
		};
	} catch (__react_docgen_typescript_loader_error) {}
}));
//#endregion
//#region src/components/forms/StyledFormErrorSummary.tsx
var import_react$1, import_jsx_runtime$1, StyledFormErrorSummary;
var init_StyledFormErrorSummary = __esmMin((() => {
	init_formik_esm();
	import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$1 = require_jsx_runtime();
	StyledFormErrorSummary = ({ id, fieldTargetIds }) => {
		const { errors, isValid, submitCount, isSubmitting } = useFormikContext();
		const errorFocusRef = (0, import_react$1.useRef)(null);
		const generatedId = (0, import_react$1.useId)();
		const baseId = id ?? `error-summary-${generatedId}`;
		const alertId = `${baseId}-alert`;
		(0, import_react$1.useEffect)(() => {
			if (!isValid && submitCount > 0 && !isSubmitting) errorFocusRef.current?.focus();
		}, [
			submitCount,
			isValid,
			isSubmitting
		]);
		if (isValid) return null;
		const errorKeys = Object.keys(errors);
		return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
			id: baseId,
			"aria-labelledby": alertId,
			role: "alert",
			tabIndex: -1,
			ref: errorFocusRef,
			className: "ons-panel ons-panel--error",
			"data-testid": id ? `${id}-panel` : void 0,
			children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
				className: "ons-panel__header",
				children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("h2", {
					id: alertId,
					"data-testid": "error-header",
					className: "ons-panel__title ons-u-fs-r--b",
					children: errorKeys.length === 1 ? "There is 1 problem with your answer" : `There are ${errorKeys.length} problems with your answer`
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
				className: "ons-panel__body",
				children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("ol", {
					className: "ons-list",
					children: errorKeys.map((field) => /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("li", {
						className: "ons-list__item",
						children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("a", {
							href: `#${fieldTargetIds?.[field] || field}`,
							className: "ons-list__link ons-js-inpagelink",
							children: errors[field]
						})
					}, field))
				})
			})]
		});
	};
	try {
		StyledFormErrorSummary.displayName = "StyledFormErrorSummary";
		StyledFormErrorSummary.__docgenInfo = {
			"description": "Renders a form error summary.",
			"displayName": "StyledFormErrorSummary",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/forms/StyledFormErrorSummary.tsx",
			"methods": [],
			"props": {
				"id": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/StyledFormErrorSummary.tsx",
						"name": "Props"
					}],
					"description": "Element ID.",
					"name": "id",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/StyledFormErrorSummary.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"fieldTargetIds": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/StyledFormErrorSummary.tsx",
						"name": "Props"
					}],
					"description": "Map of Formik field names to rendered element IDs.",
					"name": "fieldTargetIds",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/forms/StyledFormErrorSummary.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "Record<string, string> | undefined" }
				}
			},
			"tags": {}
		};
	} catch (__react_docgen_typescript_loader_error) {}
}));
//#endregion
//#region src/components/forms/StyledForm.tsx
var import_react, import_jsx_runtime, getFieldTargetIds, getInitialFieldValue, getInitialFieldValues, StyledForm;
var init_StyledForm = __esmMin((() => {
	init_formik_esm();
	import_react = /* @__PURE__ */ __toESM(require_react(), 1);
	init_Button();
	init_StyledFormField();
	init_StyledFormErrorSummary();
	import_jsx_runtime = require_jsx_runtime();
	getFieldTargetIds = (fields, formBaseId) => {
		return fields.reduce((acc, field) => {
			const fieldId = field.id ?? `${formBaseId}-${field.name}`;
			acc[field.name] = fieldId;
			if (field.type === "radio") field.radioOptions.forEach((option, index) => {
				if (option.specifyOption) {
					const optionId = option.id ?? `${fieldId}-option-${index + 1}`;
					acc[option.specifyOption.name] = option.specifyOption.id ?? `${optionId}-specify`;
				}
			});
			return acc;
		}, {});
	};
	getInitialFieldValue = (field) => {
		if (field.initialValue !== void 0) return field.initialValue;
		return field.type === "checkbox" ? [] : "";
	};
	getInitialFieldValues = (fields) => {
		const initialValues = fields.flatMap((field) => {
			const fieldEntries = [[field.name, getInitialFieldValue(field)]];
			if (field.type !== "radio") return fieldEntries;
			const specifyEntries = field.radioOptions.flatMap((option) => {
				if (!option.specifyOption) return [];
				return [[option.specifyOption.name, ""]];
			});
			return [...fieldEntries, ...specifyEntries];
		});
		return Object.fromEntries(initialValues);
	};
	StyledForm = (props) => {
		const { id, fields, submitLabel } = props;
		const generatedId = (0, import_react.useId)();
		const baseId = id ?? `form-${generatedId}`;
		const fieldTargetIds = getFieldTargetIds(fields, baseId);
		const initialFieldValues = getInitialFieldValues(fields);
		const handleSubmit = props.onSubmit ?? props.onSubmitFunction;
		if (!handleSubmit) throw new Error("StyledForm requires an onSubmit handler.");
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Formik, {
			validateOnBlur: false,
			validateOnChange: false,
			initialValues: initialFieldValues,
			onSubmit: (values, { setSubmitting }) => {
				handleSubmit(values, setSubmitting);
			},
			children: ({ isValid, isSubmitting }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Form, {
				id: baseId,
				noValidate: true,
				"data-testid": id ? `${id}-form` : void 0,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledFormErrorSummary, {
						id: id ? `${id}-error-summary` : void 0,
						fieldTargetIds
					}),
					fields.map((field, index) => {
						const isAutoFocus = isValid && index === 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledFormField, {
							...field,
							id: fieldTargetIds[field.name],
							autoFocus: isAutoFocus,
							includeTestIds: Boolean(field.id)
						}, field.name);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						submit: true,
						label: submitLabel || "Save and continue",
						primary: true,
						id: `${baseId}-submit`,
						loading: isSubmitting
					})
				]
			})
		});
	};
	try {
		StyledForm.displayName = "StyledForm";
		StyledForm.__docgenInfo = {
			"description": "Renders a form from field config.",
			"displayName": "StyledForm",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
			"methods": [],
			"props": {
				"id": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
						"name": "TypeLiteral"
					}],
					"description": "Element ID.",
					"name": "id",
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"fields": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
						"name": "TypeLiteral"
					}],
					"description": "Field config.",
					"name": "fields",
					"required": true,
					"tags": {},
					"type": { "name": "readonly FormField[]" }
				},
				"submitLabel": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
						"name": "TypeLiteral"
					}],
					"description": "Submit button text.",
					"name": "submitLabel",
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"onSubmit": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
						"name": "TypeLiteral"
					}, {
						"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
						"name": "TypeLiteral"
					}],
					"description": "Called on successful submit.\nStandard submit handler alias.",
					"name": "onSubmit",
					"required": false,
					"tags": {},
					"type": { "name": "SubmitHandler<Simplify<{ [Field in Fields[number] as Field[\"name\"]]: Field extends CheckboxFormField ? string[] : string; } & UnionToIntersection<RadioSpecifyValues<Fields[number]>>>> | undefined" }
				},
				"onSubmitFunction": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
						"name": "TypeLiteral"
					}, {
						"fileName": "blaise-design-system-react-components/src/components/forms/StyledForm.tsx",
						"name": "TypeLiteral"
					}],
					"description": "Backward-compatible alias for onSubmit.\nCalled on successful submit.",
					"name": "onSubmitFunction",
					"required": false,
					"tags": {},
					"type": { "name": "SubmitHandler<Simplify<{ [Field in Fields[number] as Field[\"name\"]]: Field extends CheckboxFormField ? string[] : string; } & UnionToIntersection<RadioSpecifyValues<Fields[number]>>>> | undefined" }
				}
			},
			"tags": {}
		};
	} catch (__react_docgen_typescript_loader_error) {}
}));
//#endregion
//#region src/components/forms/StyledForm.stories.tsx
var fields, meta, Default, __namedExportsOrder;
//#endregion
__esmMin((() => {
	init_FormValidation();
	init_StyledForm();
	fields = [
		{
			name: "Survey",
			description: "Select survey",
			type: "radio",
			initialValue: "undefined",
			validate: validateRadio,
			radioOptions: [
				{
					id: "survey-all",
					value: "undefined",
					label: "Show all surveys"
				},
				{
					id: "survey-lms",
					value: "lms",
					label: "LMS",
					description: "Labour Market Survey"
				},
				{
					id: "survey-opn",
					value: "opn",
					label: "OPN",
					description: "Opinions and Lifestyle Survey"
				}
			]
		},
		{
			name: "Questionnaire",
			description: "Select questionnaires",
			type: "checkbox",
			validate: validateCheckbox,
			checkboxOptions: [
				{
					id: "questionnaire-lms2601_aa1",
					value: "lms2601_aa1",
					label: "LMS2601_AA1"
				},
				{
					id: "questionnaire-lms2602_aa1",
					value: "lms2602_aa1",
					label: "LMS2602_AA1"
				},
				{
					id: "questionnaire-opn2601a",
					value: "opn2601a",
					label: "OPN2601A"
				},
				{
					id: "questionnaire-opn2602a",
					value: "opn2602a",
					label: "OPN2602A"
				}
			]
		},
		{
			name: "Interviewer ID",
			type: "text",
			validate: validateInterviewerID
		},
		{
			name: "Start date",
			type: "date"
		},
		{
			name: "End date",
			type: "date"
		}
	];
	meta = {
		title: "Components/Forms/Styled Form",
		component: StyledForm,
		argTypes: {
			onSubmit: {
				action: "submitted",
				control: false
			},
			fields: { control: "object" }
		}
	};
	Default = { args: {
		id: "styled-form",
		onSubmit: (_values, setSubmitting) => {
			setSubmitting(false);
		},
		fields,
		submitLabel: "Submit label"
	} };
	Default.parameters = {
		...Default.parameters,
		docs: {
			...Default.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    id: \"styled-form\",\n    onSubmit: (_values, setSubmitting) => {\n      setSubmitting(false);\n    },\n    fields,\n    submitLabel: \"Submit label\"\n  }\n}",
				...Default.parameters?.docs?.source
			}
		}
	};
	__namedExportsOrder = ["Default"];
}))();
export { Default, __namedExportsOrder, meta as default };
