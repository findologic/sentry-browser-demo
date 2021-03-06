(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sentryBrowserDemo"] = factory();
	else
		root["sentryBrowserDemo"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.errorUi = undefined;
	
	var _assign2 = __webpack_require__(1);
	
	var _assign3 = _interopRequireDefault(_assign2);
	
	var _singleton = __webpack_require__(31);
	
	var _singleton2 = _interopRequireDefault(_singleton);
	
	var _errorUi = __webpack_require__(37);
	
	var _errorUi2 = _interopRequireDefault(_errorUi);
	
	var _identity = __webpack_require__(38);
	
	var _identity2 = _interopRequireDefault(_identity);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var raven = void 0;
	var errorUi = void 0;
	
	function init(sentryDsn) {
	  raven = _singleton2.default.config(sentryDsn, {
	    // We can resolve issues ahead of deployment, so they are silenced until the
	    // version number is bumped.
	    release: '0.1.3 ',
	
	    // Before the error is tracked, we have an opportunity to add extra
	    // information. We use it to add some extra information based on the form.
	    dataCallback: function dataCallback(data) {
	      data.tags = (0, _assign3.default)(data.tags, errorUi.formData.tags);
	
	      return data;
	    },
	
	    // We can set default tags that are transmitted with each error or message.
	    tags: {
	      event: 'Salzburg Web Dev @ FINDOLOGIC'
	    }
	  }).install();
	
	  // The default identity used by Sentry is the IP address, which is a privacy
	  // concern and may even be borderline-illegal. Let's use a random ID that
	  // has nothing to do with the user's real identity. This way, we can still
	  // track how many users are affected by an issue, without threatening their
	  // freedoms.
	  _singleton2.default.setUserContext({
	    id: (0, _identity2.default)()
	  });
	
	  exports.errorUi = errorUi = new _errorUi2.default(document.querySelector('.fl-container'));
	}
	
	exports.default = init;
	exports.errorUi = errorUi;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(2),
	    copyObject = __webpack_require__(4),
	    createAssigner = __webpack_require__(5),
	    isArrayLike = __webpack_require__(7),
	    isPrototype = __webpack_require__(20),
	    keys = __webpack_require__(21);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
	var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');
	
	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.c = 3;
	 * }
	 *
	 * function Bar() {
	 *   this.e = 5;
	 * }
	 *
	 * Foo.prototype.d = 4;
	 * Bar.prototype.f = 6;
	 *
	 * _.assign({ 'a': 1 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3, 'e': 5 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});
	
	module.exports = assign;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(3);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}
	
	module.exports = assignValue;


/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
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
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
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
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(2);
	
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
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	
	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : source[key];
	
	    assignValue(object, key, newValue);
	  }
	  return object;
	}
	
	module.exports = copyObject;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var isIterateeCall = __webpack_require__(6),
	    rest = __webpack_require__(14);
	
	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return rest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;
	
	    customizer = typeof customizer == 'function'
	      ? (length--, customizer)
	      : undefined;
	
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	module.exports = createAssigner;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(3),
	    isArrayLike = __webpack_require__(7),
	    isIndex = __webpack_require__(13),
	    isObject = __webpack_require__(11);
	
	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(8),
	    isFunction = __webpack_require__(10),
	    isLength = __webpack_require__(12);
	
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
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}
	
	module.exports = isArrayLike;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(9);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a
	 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	 * Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;


/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(11);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
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
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 12 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
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
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 13 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	module.exports = isIndex;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(15),
	    toInteger = __webpack_require__(16);
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as
	 * an array.
	 *
	 * **Note:** This method is based on the
	 * [rest parameter](https://mdn.io/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.rest(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function rest(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : toInteger(start), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, array);
	      case 1: return func.call(this, args[0], array);
	      case 2: return func.call(this, args[0], args[1], array);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}
	
	module.exports = rest;


/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  var length = args.length;
	  switch (length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	module.exports = apply;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(17);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;
	
	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3');
	 * // => 3
	 */
	function toInteger(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  var remainder = value % 1;
	  return value === value ? (remainder ? value - remainder : value) : 0;
	}
	
	module.exports = toInteger;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(10),
	    isObject = __webpack_require__(11),
	    isSymbol = __webpack_require__(18);
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3);
	 * // => 3
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3');
	 * // => 3
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = toNumber;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(19);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ },
/* 19 */
/***/ function(module, exports) {

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
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 20 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(22),
	    baseKeys = __webpack_require__(24),
	    indexKeys = __webpack_require__(25),
	    isArrayLike = __webpack_require__(7),
	    isIndex = __webpack_require__(13),
	    isPrototype = __webpack_require__(20);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
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
	  var isProto = isPrototype(object);
	  if (!(isProto || isArrayLike(object))) {
	    return baseKeys(object);
	  }
	  var indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;
	
	  for (var key in object) {
	    if (baseHas(object, key) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(isProto && key == 'constructor')) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keys;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(23);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	  // that are composed entirely of index properties, return `false` for
	  // `hasOwnProperty` checks of them.
	  return hasOwnProperty.call(object, key) ||
	    (typeof object == 'object' && key in object && getPrototype(object) === null);
	}
	
	module.exports = baseHas;


/***/ },
/* 23 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;
	
	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	function getPrototype(value) {
	  return nativeGetPrototype(Object(value));
	}
	
	module.exports = getPrototype;


/***/ },
/* 24 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = Object.keys;
	
	/**
	 * The base implementation of `_.keys` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  return nativeKeys(Object(object));
	}
	
	module.exports = baseKeys;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(26),
	    isArguments = __webpack_require__(27),
	    isArray = __webpack_require__(29),
	    isLength = __webpack_require__(12),
	    isString = __webpack_require__(30);
	
	/**
	 * Creates an array of index keys for `object` values of arrays,
	 * `arguments` objects, and strings, otherwise `null` is returned.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array|null} Returns index keys, else `null`.
	 */
	function indexKeys(object) {
	  var length = object ? object.length : undefined;
	  if (isLength(length) &&
	      (isArray(object) || isString(object) || isArguments(object))) {
	    return baseTimes(length, String);
	  }
	  return null;
	}
	
	module.exports = indexKeys;


/***/ },
/* 26 */
/***/ function(module, exports) {

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
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(28);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	module.exports = isArguments;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(7),
	    isObjectLike = __webpack_require__(19);
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	module.exports = isArrayLikeObject;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(29),
	    isObjectLike = __webpack_require__(19);
	
	/** `Object#toString` result references. */
	var stringTag = '[object String]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}
	
	module.exports = isString;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Enforces a single instance of the Raven client, and the
	 * main entry point for Raven. If you are a consumer of the
	 * Raven library, you SHOULD load this file (vs raven.js).
	 **/
	
	'use strict';
	
	var RavenConstructor = __webpack_require__(32);
	
	var _Raven = window.Raven;
	
	var Raven = new RavenConstructor();
	
	/*
	 * Allow multiple versions of Raven to be installed.
	 * Strip Raven from the global context and returns the instance.
	 *
	 * @return {Raven}
	 */
	Raven.noConflict = function () {
		window.Raven = _Raven;
		return Raven;
	};
	
	Raven.afterLoad();
	
	module.exports = Raven;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/*global XDomainRequest:false*/
	'use strict';
	
	var TraceKit = __webpack_require__(33);
	var RavenConfigError = __webpack_require__(35);
	var utils = __webpack_require__(34);
	
	var isFunction = utils.isFunction;
	var isUndefined = utils.isUndefined;
	var isError = utils.isError;
	var isEmptyObject = utils.isEmptyObject;
	var hasKey = utils.hasKey;
	var joinRegExp = utils.joinRegExp;
	var each = utils.each;
	var objectMerge = utils.objectMerge;
	var truncate = utils.truncate;
	var urlencode = utils.urlencode;
	var uuid4 = utils.uuid4;
	var htmlTreeAsString = utils.htmlTreeAsString;
	var parseUrl = utils.parseUrl;
	var isString = utils.isString;
	
	var wrapConsoleMethod = __webpack_require__(36).wrapMethod;
	
	var dsnKeys = 'source protocol user pass host port path'.split(' '),
	    dsnPattern = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/;
	
	function now() {
	    return +new Date();
	}
	
	// First, check for JSON support
	// If there is no JSON, we no-op the core features of Raven
	// since JSON is required to encode the payload
	function Raven() {
	    this._hasJSON = !!(typeof JSON === 'object' && JSON.stringify);
	    // Raven can run in contexts where there's no document (react-native)
	    this._hasDocument = typeof document !== 'undefined';
	    this._lastCapturedException = null;
	    this._lastEventId = null;
	    this._globalServer = null;
	    this._globalKey = null;
	    this._globalProject = null;
	    this._globalContext = {};
	    this._globalOptions = {
	        logger: 'javascript',
	        ignoreErrors: [],
	        ignoreUrls: [],
	        whitelistUrls: [],
	        includePaths: [],
	        crossOrigin: 'anonymous',
	        collectWindowErrors: true,
	        maxMessageLength: 0,
	        stackTraceLimit: 50
	    };
	    this._ignoreOnError = 0;
	    this._isRavenInstalled = false;
	    this._originalErrorStackTraceLimit = Error.stackTraceLimit;
	    // capture references to window.console *and* all its methods first
	    // before the console plugin has a chance to monkey patch
	    this._originalConsole = window.console || {};
	    this._originalConsoleMethods = {};
	    this._plugins = [];
	    this._startTime = now();
	    this._wrappedBuiltIns = [];
	    this._breadcrumbs = [];
	    this._breadcrumbLimit = 20;
	    this._lastCapturedEvent = null;
	    this._keypressTimeout;
	    this._location = window.location;
	    this._lastHref = this._location && this._location.href;
	
	    for (var method in this._originalConsole) {  // eslint-disable-line guard-for-in
	      this._originalConsoleMethods[method] = this._originalConsole[method];
	    }
	}
	
	/*
	 * The core Raven singleton
	 *
	 * @this {Raven}
	 */
	
	Raven.prototype = {
	    // Hardcode version string so that raven source can be loaded directly via
	    // webpack (using a build step causes webpack #1617). Grunt verifies that
	    // this value matches package.json during build.
	    //   See: https://github.com/getsentry/raven-js/issues/465
	    VERSION: '3.0.2',
	
	    debug: false,
	
	    TraceKit: TraceKit, // alias to TraceKit
	
	    /*
	     * Configure Raven with a DSN and extra options
	     *
	     * @param {string} dsn The public Sentry DSN
	     * @param {object} options Optional set of of global options [optional]
	     * @return {Raven}
	     */
	    config: function(dsn, options) {
	        var self = this;
	
	        if (this._globalServer) {
	                this._logDebug('error', 'Error: Raven has already been configured');
	            return this;
	        }
	        if (!dsn) return this;
	
	        // merge in options
	        if (options) {
	            each(options, function(key, value){
	                // tags and extra are special and need to be put into context
	                if (key === 'tags' || key === 'extra') {
	                    self._globalContext[key] = value;
	                } else {
	                    self._globalOptions[key] = value;
	                }
	            });
	        }
	
	        var uri = this._parseDSN(dsn),
	            lastSlash = uri.path.lastIndexOf('/'),
	            path = uri.path.substr(1, lastSlash);
	
	        this._dsn = dsn;
	
	        // "Script error." is hard coded into browsers for errors that it can't read.
	        // this is the result of a script being pulled in from an external domain and CORS.
	        this._globalOptions.ignoreErrors.push(/^Script error\.?$/);
	        this._globalOptions.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/);
	
	        // join regexp rules into one big rule
	        this._globalOptions.ignoreErrors = joinRegExp(this._globalOptions.ignoreErrors);
	        this._globalOptions.ignoreUrls = this._globalOptions.ignoreUrls.length ? joinRegExp(this._globalOptions.ignoreUrls) : false;
	        this._globalOptions.whitelistUrls = this._globalOptions.whitelistUrls.length ? joinRegExp(this._globalOptions.whitelistUrls) : false;
	        this._globalOptions.includePaths = joinRegExp(this._globalOptions.includePaths);
	
	        this._globalKey = uri.user;
	        this._globalSecret = uri.pass && uri.pass.substr(1);
	        this._globalProject = uri.path.substr(lastSlash + 1);
	
	        this._globalServer = this._getGlobalServer(uri);
	
	        this._globalEndpoint = this._globalServer +
	            '/' + path + 'api/' + this._globalProject + '/store/';
	
	        if (this._globalOptions.fetchContext) {
	            TraceKit.remoteFetching = true;
	        }
	
	        if (this._globalOptions.linesOfContext) {
	            TraceKit.linesOfContext = this._globalOptions.linesOfContext;
	        }
	
	        TraceKit.collectWindowErrors = !!this._globalOptions.collectWindowErrors;
	
	        // return for chaining
	        return this;
	    },
	
	    /*
	     * Installs a global window.onerror error handler
	     * to capture and report uncaught exceptions.
	     * At this point, install() is required to be called due
	     * to the way TraceKit is set up.
	     *
	     * @return {Raven}
	     */
	    install: function() {
	        var self = this;
	        if (this.isSetup() && !this._isRavenInstalled) {
	            TraceKit.report.subscribe(function () {
	                self._handleOnErrorStackInfo.apply(self, arguments);
	            });
	            this._wrapBuiltIns();
	
	            // Install all of the plugins
	            this._drainPlugins();
	
	            this._isRavenInstalled = true;
	        }
	
	        Error.stackTraceLimit = this._globalOptions.stackTraceLimit;
	        return this;
	    },
	
	    /*
	     * Wrap code within a context so Raven can capture errors
	     * reliably across domains that is executed immediately.
	     *
	     * @param {object} options A specific set of options for this context [optional]
	     * @param {function} func The callback to be immediately executed within the context
	     * @param {array} args An array of arguments to be called with the callback [optional]
	     */
	    context: function(options, func, args) {
	        if (isFunction(options)) {
	            args = func || [];
	            func = options;
	            options = undefined;
	        }
	
	        return this.wrap(options, func).apply(this, args);
	    },
	
	    /*
	     * Wrap code within a context and returns back a new function to be executed
	     *
	     * @param {object} options A specific set of options for this context [optional]
	     * @param {function} func The function to be wrapped in a new context
	     * @param {function} func A function to call before the try/catch wrapper [optional, private]
	     * @return {function} The newly wrapped functions with a context
	     */
	    wrap: function(options, func, _before) {
	        var self = this;
	        // 1 argument has been passed, and it's not a function
	        // so just return it
	        if (isUndefined(func) && !isFunction(options)) {
	            return options;
	        }
	
	        // options is optional
	        if (isFunction(options)) {
	            func = options;
	            options = undefined;
	        }
	
	        // At this point, we've passed along 2 arguments, and the second one
	        // is not a function either, so we'll just return the second argument.
	        if (!isFunction(func)) {
	            return func;
	        }
	
	        // We don't wanna wrap it twice!
	        try {
	            if (func.__raven__) {
	                return func;
	            }
	        } catch (e) {
	            // Just accessing the __raven__ prop in some Selenium environments
	            // can cause a "Permission denied" exception (see raven-js#495).
	            // Bail on wrapping and return the function as-is (defers to window.onerror).
	            return func;
	        }
	
	        // If this has already been wrapped in the past, return that
	        if (func.__raven_wrapper__ ){
	            return func.__raven_wrapper__ ;
	        }
	
	        function wrapped() {
	            var args = [], i = arguments.length,
	                deep = !options || options && options.deep !== false;
	
	            if (_before && isFunction(_before)) {
	                _before.apply(this, arguments);
	            }
	
	            // Recursively wrap all of a function's arguments that are
	            // functions themselves.
	            while(i--) args[i] = deep ? self.wrap(options, arguments[i]) : arguments[i];
	
	            try {
	                return func.apply(this, args);
	            } catch(e) {
	                self._ignoreNextOnError();
	                self.captureException(e, options);
	                throw e;
	            }
	        }
	
	        // copy over properties of the old function
	        for (var property in func) {
	            if (hasKey(func, property)) {
	                wrapped[property] = func[property];
	            }
	        }
	        wrapped.prototype = func.prototype;
	
	        func.__raven_wrapper__ = wrapped;
	        // Signal that this function has been wrapped already
	        // for both debugging and to prevent it to being wrapped twice
	        wrapped.__raven__ = true;
	        wrapped.__inner__ = func;
	
	        return wrapped;
	    },
	
	    /*
	     * Uninstalls the global error handler.
	     *
	     * @return {Raven}
	     */
	    uninstall: function() {
	        TraceKit.report.uninstall();
	
	        this._restoreBuiltIns();
	
	        Error.stackTraceLimit = this._originalErrorStackTraceLimit;
	        this._isRavenInstalled = false;
	
	        return this;
	    },
	
	    /*
	     * Manually capture an exception and send it over to Sentry
	     *
	     * @param {error} ex An exception to be logged
	     * @param {object} options A specific set of options for this error [optional]
	     * @return {Raven}
	     */
	    captureException: function(ex, options) {
	        // If not an Error is passed through, recall as a message instead
	        if (!isError(ex)) return this.captureMessage(ex, options);
	
	        // Store the raw exception object for potential debugging and introspection
	        this._lastCapturedException = ex;
	
	        // TraceKit.report will re-raise any exception passed to it,
	        // which means you have to wrap it in try/catch. Instead, we
	        // can wrap it here and only re-raise if TraceKit.report
	        // raises an exception different from the one we asked to
	        // report on.
	        try {
	            var stack = TraceKit.computeStackTrace(ex);
	            this._handleStackInfo(stack, options);
	        } catch(ex1) {
	            if(ex !== ex1) {
	                throw ex1;
	            }
	        }
	
	        return this;
	    },
	
	    /*
	     * Manually send a message to Sentry
	     *
	     * @param {string} msg A plain message to be captured in Sentry
	     * @param {object} options A specific set of options for this message [optional]
	     * @return {Raven}
	     */
	    captureMessage: function(msg, options) {
	        // config() automagically converts ignoreErrors from a list to a RegExp so we need to test for an
	        // early call; we'll error on the side of logging anything called before configuration since it's
	        // probably something you should see:
	        if (!!this._globalOptions.ignoreErrors.test && this._globalOptions.ignoreErrors.test(msg)) {
	            return;
	        }
	
	        // Fire away!
	        this._send(
	            objectMerge({
	                message: msg + ''  // Make sure it's actually a string
	            }, options)
	        );
	
	        return this;
	    },
	
	    captureBreadcrumb: function (obj) {
	        var crumb = objectMerge({
	            timestamp: now() / 1000
	        }, obj);
	
	        this._breadcrumbs.push(crumb);
	        if (this._breadcrumbs.length > this._breadcrumbLimit) {
	            this._breadcrumbs.shift();
	        }
	    },
	
	    addPlugin: function(plugin /*arg1, arg2, ... argN*/) {
	        var pluginArgs = Array.prototype.slice.call(arguments, 1);
	
	        this._plugins.push([plugin, pluginArgs]);
	        if (this._isRavenInstalled) {
	            this._drainPlugins();
	        }
	
	        return this;
	    },
	
	    /*
	     * Set/clear a user to be sent along with the payload.
	     *
	     * @param {object} user An object representing user data [optional]
	     * @return {Raven}
	     */
	    setUserContext: function(user) {
	        // Intentionally do not merge here since that's an unexpected behavior.
	        this._globalContext.user = user;
	
	        return this;
	    },
	
	    /*
	     * Merge extra attributes to be sent along with the payload.
	     *
	     * @param {object} extra An object representing extra data [optional]
	     * @return {Raven}
	     */
	    setExtraContext: function(extra) {
	        this._mergeContext('extra', extra);
	
	        return this;
	    },
	
	    /*
	     * Merge tags to be sent along with the payload.
	     *
	     * @param {object} tags An object representing tags [optional]
	     * @return {Raven}
	     */
	    setTagsContext: function(tags) {
	        this._mergeContext('tags', tags);
	
	        return this;
	    },
	
	    /*
	     * Clear all of the context.
	     *
	     * @return {Raven}
	     */
	    clearContext: function() {
	        this._globalContext = {};
	
	        return this;
	    },
	
	    /*
	     * Get a copy of the current context. This cannot be mutated.
	     *
	     * @return {object} copy of context
	     */
	    getContext: function() {
	        // lol javascript
	        return JSON.parse(JSON.stringify(this._globalContext));
	    },
	
	    /*
	     * Set release version of application
	     *
	     * @param {string} release Typically something like a git SHA to identify version
	     * @return {Raven}
	     */
	    setRelease: function(release) {
	        this._globalOptions.release = release;
	
	        return this;
	    },
	
	    /*
	     * Set the dataCallback option
	     *
	     * @param {function} callback The callback to run which allows the
	     *                            data blob to be mutated before sending
	     * @return {Raven}
	     */
	    setDataCallback: function(callback) {
	        this._globalOptions.dataCallback = callback;
	
	        return this;
	    },
	
	    /*
	     * Set the shouldSendCallback option
	     *
	     * @param {function} callback The callback to run which allows
	     *                            introspecting the blob before sending
	     * @return {Raven}
	     */
	    setShouldSendCallback: function(callback) {
	        this._globalOptions.shouldSendCallback = callback;
	
	        return this;
	    },
	
	    /**
	     * Override the default HTTP transport mechanism that transmits data
	     * to the Sentry server.
	     *
	     * @param {function} transport Function invoked instead of the default
	     *                             `makeRequest` handler.
	     *
	     * @return {Raven}
	     */
	    setTransport: function(transport) {
	        this._globalOptions.transport = transport;
	
	        return this;
	    },
	
	    /*
	     * Get the latest raw exception that was captured by Raven.
	     *
	     * @return {error}
	     */
	    lastException: function() {
	        return this._lastCapturedException;
	    },
	
	    /*
	     * Get the last event id
	     *
	     * @return {string}
	     */
	    lastEventId: function() {
	        return this._lastEventId;
	    },
	
	    /*
	     * Determine if Raven is setup and ready to go.
	     *
	     * @return {boolean}
	     */
	    isSetup: function() {
	        if (!this._hasJSON) return false;  // needs JSON support
	        if (!this._globalServer) {
	            if (!this.ravenNotConfiguredError) {
	              this.ravenNotConfiguredError = true;
	              this._logDebug('error', 'Error: Raven has not been configured.');
	            }
	            return false;
	        }
	        return true;
	    },
	
	    afterLoad: function () {
	        // TODO: remove window dependence?
	
	        // Attempt to initialize Raven on load
	        var RavenConfig = window.RavenConfig;
	        if (RavenConfig) {
	            this.config(RavenConfig.dsn, RavenConfig.config).install();
	        }
	    },
	
	    showReportDialog: function (options) {
	        if (!window.document) // doesn't work without a document (React native)
	            return;
	
	        options = options || {};
	
	        var lastEventId = options.eventId || this.lastEventId();
	        if (!lastEventId) {
	            throw new RavenConfigError('Missing eventId');
	        }
	
	        var dsn = options.dsn || this._dsn;
	        if (!dsn) {
	            throw new RavenConfigError('Missing DSN');
	        }
	
	        var encode = encodeURIComponent;
	        var qs = '';
	        qs += '?eventId=' + encode(lastEventId);
	        qs += '&dsn=' + encode(dsn);
	
	        var user = options.user || this._globalContext.user;
	        if (user) {
	            if (user.name)  qs += '&name=' + encode(user.name);
	            if (user.email) qs += '&email=' + encode(user.email);
	        }
	
	        var globalServer = this._getGlobalServer(this._parseDSN(dsn));
	
	        var script = document.createElement('script');
	        script.async = true;
	        script.src = globalServer + '/api/embed/error-page/' + qs;
	        (document.head || document.body).appendChild(script);
	    },
	
	    /**** Private functions ****/
	    _ignoreNextOnError: function () {
	        var self = this;
	        this._ignoreOnError += 1;
	        setTimeout(function () {
	            // onerror should trigger before setTimeout
	            self._ignoreOnError -= 1;
	        });
	    },
	
	    _triggerEvent: function(eventType, options) {
	        // NOTE: `event` is a native browser thing, so let's avoid conflicting wiht it
	        var evt, key;
	
	        if (!this._hasDocument)
	            return;
	
	        options = options || {};
	
	        eventType = 'raven' + eventType.substr(0,1).toUpperCase() + eventType.substr(1);
	
	        if (document.createEvent) {
	            evt = document.createEvent('HTMLEvents');
	            evt.initEvent(eventType, true, true);
	        } else {
	            evt = document.createEventObject();
	            evt.eventType = eventType;
	        }
	
	        for (key in options) if (hasKey(options, key)) {
	            evt[key] = options[key];
	        }
	
	        if (document.createEvent) {
	            // IE9 if standards
	            document.dispatchEvent(evt);
	        } else {
	            // IE8 regardless of Quirks or Standards
	            // IE9 if quirks
	            try {
	                document.fireEvent('on' + evt.eventType.toLowerCase(), evt);
	            } catch(e) {
	                // Do nothing
	            }
	        }
	    },
	
	    /**
	     * Wraps addEventListener to capture UI breadcrumbs
	     * @param evtName the event name (e.g. "click")
	     * @returns {Function}
	     * @private
	     */
	    _breadcrumbEventHandler: function(evtName) {
	        var self = this;
	        return function (evt) {
	            // reset keypress timeout; e.g. triggering a 'click' after
	            // a 'keypress' will reset the keypress debounce so that a new
	            // set of keypresses can be recorded
	            self._keypressTimeout = null;
	
	            // It's possible this handler might trigger multiple times for the same
	            // event (e.g. event propagation through node ancestors). Ignore if we've
	            // already captured the event.
	            if (self._lastCapturedEvent === evt)
	                return;
	
	            self._lastCapturedEvent = evt;
	            var elem = evt.target;
	
	            var target;
	
	            // try/catch htmlTreeAsString because it's particularly complicated, and
	            // just accessing the DOM incorrectly can throw an exception in some circumstances.
	            try {
	                target = htmlTreeAsString(elem);
	            } catch (e) {
	                target = '<unknown>';
	            }
	
	            self.captureBreadcrumb({
	                category: 'ui.' + evtName, // e.g. ui.click, ui.input
	                message: target
	            });
	        };
	    },
	
	    /**
	     * Wraps addEventListener to capture keypress UI events
	     * @returns {Function}
	     * @private
	     */
	    _keypressEventHandler: function() {
	        var self = this,
	            debounceDuration = 1000; // milliseconds
	
	        // TODO: if somehow user switches keypress target before
	        //       debounce timeout is triggered, we will only capture
	        //       a single breadcrumb from the FIRST target (acceptable?)
	
	        return function (evt) {
	            var target = evt.target,
	                tagName = target && target.tagName;
	
	            // only consider keypress events on actual input elements
	            // this will disregard keypresses targeting body (e.g. tabbing
	            // through elements, hotkeys, etc)
	            if (!tagName || tagName !== 'INPUT' && tagName !== 'TEXTAREA')
	                return;
	
	            // record first keypress in a series, but ignore subsequent
	            // keypresses until debounce clears
	            var timeout = self._keypressTimeout;
	            if (!timeout) {
	                self._breadcrumbEventHandler('input')(evt);
	            }
	            clearTimeout(timeout);
	            self._keypressTimeout = setTimeout(function () {
	               self._keypressTimeout = null;
	            }, debounceDuration);
	        };
	    },
	
	    /**
	     * Captures a breadcrumb of type "navigation", normalizing input URLs
	     * @param to the originating URL
	     * @param from the target URL
	     * @private
	     */
	    _captureUrlChange: function(from, to) {
	        var parsedLoc = parseUrl(this._location.href);
	        var parsedTo = parseUrl(to);
	        var parsedFrom = parseUrl(from);
	
	        // because onpopstate only tells you the "new" (to) value of location.href, and
	        // not the previous (from) value, we need to track the value of the current URL
	        // state ourselves
	        this._lastHref = to;
	
	        // Use only the path component of the URL if the URL matches the current
	        // document (almost all the time when using pushState)
	        if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host)
	            to = parsedTo.path;
	        if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host)
	            from = parsedFrom.path;
	
	        this.captureBreadcrumb({
	            category: 'navigation',
	            data: {
	                to: to,
	                from: from
	            }
	        });
	    },
	
	    /**
	     * Install any queued plugins
	     */
	    _wrapBuiltIns: function() {
	        var self = this;
	
	        function fill(obj, name, replacement, noUndo) {
	            var orig = obj[name];
	            obj[name] = replacement(orig);
	            if (!noUndo) {
	                self._wrappedBuiltIns.push([obj, name, orig]);
	            }
	        }
	
	        function wrapTimeFn(orig) {
	            return function (fn, t) { // preserve arity
	                // Make a copy of the arguments to prevent deoptimization
	                // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
	                var args = new Array(arguments.length);
	                for(var i = 0; i < args.length; ++i) {
	                    args[i] = arguments[i];
	                }
	                var originalCallback = args[0];
	                if (isFunction(originalCallback)) {
	                    args[0] = self.wrap(originalCallback);
	                }
	
	                // IE < 9 doesn't support .call/.apply on setInterval/setTimeout, but it
	                // also supports only two arguments and doesn't care what this is, so we
	                // can just call the original function directly.
	                if (orig.apply) {
	                    return orig.apply(this, args);
	                } else {
	                    return orig(args[0], args[1]);
	                }
	            };
	        }
	
	        function wrapEventTarget(global) {
	            var proto = window[global] && window[global].prototype;
	            if (proto && proto.hasOwnProperty && proto.hasOwnProperty('addEventListener')) {
	                fill(proto, 'addEventListener', function(orig) {
	                    return function (evtName, fn, capture, secure) { // preserve arity
	                        try {
	                            if (fn && fn.handleEvent) {
	                                fn.handleEvent = self.wrap(fn.handleEvent);
	                            }
	                        } catch (err) {
	                            // can sometimes get 'Permission denied to access property "handle Event'
	                        }
	
	
	                        // TODO: more than just click
	                        var before;
	                        if (global === 'EventTarget' || global === 'Node') {
	                            if (evtName === 'click'){
	                                before = self._breadcrumbEventHandler(evtName);
	                            } else if (evtName === 'keypress') {
	                                before = self._keypressEventHandler();
	                            }
	                        }
	                        return orig.call(this, evtName, self.wrap(fn, undefined, before), capture, secure);
	                    };
	                });
	                fill(proto, 'removeEventListener', function (orig) {
	                    return function (evt, fn, capture, secure) {
	                        fn = fn && (fn.__raven_wrapper__ ? fn.__raven_wrapper__  : fn);
	                        return orig.call(this, evt, fn, capture, secure);
	                    };
	                });
	            }
	        }
	
	        function wrapProp(prop, xhr) {
	            if (prop in xhr && isFunction(xhr[prop])) {
	                fill(xhr, prop, function (orig) {
	                    return self.wrap(orig);
	                }, true /* noUndo */); // don't track filled methods on XHR instances
	            }
	        }
	
	        fill(window, 'setTimeout', wrapTimeFn);
	        fill(window, 'setInterval', wrapTimeFn);
	        if (window.requestAnimationFrame) {
	            fill(window, 'requestAnimationFrame', function (orig) {
	                return function (cb) {
	                    return orig(self.wrap(cb));
	                };
	            });
	        }
	
	        // Capture breadcrubms from any click that is unhandled / bubbled up all the way
	        // to the document. Do this before we instrument addEventListener.
	        if (this._hasDocument) {
	            document.addEventListener('click', self._breadcrumbEventHandler('click'));
	            document.addEventListener('keypress', self._keypressEventHandler());
	        }
	
	        // event targets borrowed from bugsnag-js:
	        // https://github.com/bugsnag/bugsnag-js/blob/master/src/bugsnag.js#L666
	        var eventTargets = ['EventTarget', 'Window', 'Node', 'ApplicationCache', 'AudioTrackList', 'ChannelMergerNode', 'CryptoOperation', 'EventSource', 'FileReader', 'HTMLUnknownElement', 'IDBDatabase', 'IDBRequest', 'IDBTransaction', 'KeyOperation', 'MediaController', 'MessagePort', 'ModalWindow', 'Notification', 'SVGElementInstance', 'Screen', 'TextTrack', 'TextTrackCue', 'TextTrackList', 'WebSocket', 'WebSocketWorker', 'Worker', 'XMLHttpRequest', 'XMLHttpRequestEventTarget', 'XMLHttpRequestUpload'];
	        for (var i = 0; i < eventTargets.length; i++) {
	            wrapEventTarget(eventTargets[i]);
	        }
	
	        if ('XMLHttpRequest' in window) {
	            var xhrproto = XMLHttpRequest.prototype;
	            fill(xhrproto, 'open', function(origOpen) {
	                return function (method, url) { // preserve arity
	
	                    // if Sentry key appears in URL, don't capture
	                    if (isString(url) && url.indexOf(self._globalKey) === -1) {
	                        this.__raven_xhr = {
	                            method: method,
	                            url: url,
	                            status_code: null
	                        };
	                    }
	
	                    return origOpen.apply(this, arguments);
	                };
	            });
	
	            fill(xhrproto, 'send', function(origSend) {
	                return function (data) { // preserve arity
	                    var xhr = this;
	
	                    function onreadystatechangeHandler() {
	                        if (xhr.__raven_xhr && (xhr.readyState === 1 || xhr.readyState === 4)) {
	                            try {
	                                // touching statusCode in some platforms throws
	                                // an exception
	                                xhr.__raven_xhr.status_code = xhr.status;
	                            } catch (e) { /* do nothing */ }
	                            self.captureBreadcrumb({
	                                type: 'http',
	                                category: 'xhr',
	                                data: xhr.__raven_xhr
	                            });
	                        }
	                    }
	
	                    var props = ['onload', 'onerror', 'onprogress'];
	                    for (var j = 0; j < props.length; j++) {
	                        wrapProp(props[j], xhr);
	                    }
	
	                    if ('onreadystatechange' in xhr && isFunction(xhr.onreadystatechange)) {
	                        fill(xhr, 'onreadystatechange', function (orig) {
	                            return self.wrap(orig, undefined, onreadystatechangeHandler);
	                        }, true /* noUndo */);
	                    } else {
	                        // if onreadystatechange wasn't actually set by the page on this xhr, we
	                        // are free to set our own and capture the breadcrumb
	                        xhr.onreadystatechange = onreadystatechangeHandler;
	                    }
	
	                    return origSend.apply(this, arguments);
	                };
	            });
	        }
	
	        // record navigation (URL) changes
	        if ('history' in window && history.pushState) {
	            // TODO: remove onpopstate handler on uninstall()
	            var oldOnPopState = window.onpopstate;
	            window.onpopstate = function () {
	                var currentHref = self._location.href;
	                self._captureUrlChange(self._lastHref, currentHref);
	
	                if (oldOnPopState) {
	                    return oldOnPopState.apply(this, arguments);
	                }
	            };
	
	            fill(history, 'pushState', function (origPushState) {
	                // note history.pushState.length is 0; intentionally not declaring
	                // params to preserve 0 arity
	                return function(/* state, title, url */) {
	                    var url = arguments.length > 2 ? arguments[2] : undefined;
	
	                    // url argument is optional
	                    if (url) {
	                        self._captureUrlChange(self._lastHref, url);
	                    }
	
	                    return origPushState.apply(this, arguments);
	                };
	            });
	        }
	
	        // console
	        var consoleMethodCallback = function (msg, data) {
	            self.captureBreadcrumb({
	                message: msg,
	                level: data.level,
	                category: 'console'
	            });
	        };
	
	        if ('console' in window && console.log) {
	            each(['debug', 'info', 'warn', 'error', 'log'], function (_, level) {
	                wrapConsoleMethod(console, level, consoleMethodCallback);
	            });
	        }
	
	        var $ = window.jQuery || window.$;
	        if ($ && $.fn && $.fn.ready) {
	            fill($.fn, 'ready', function (orig) {
	                return function (fn) {
	                    return orig.call(this, self.wrap(fn));
	                };
	            });
	        }
	    },
	
	    _restoreBuiltIns: function () {
	        // restore any wrapped builtins
	        var builtin;
	        while (this._wrappedBuiltIns.length) {
	            builtin = this._wrappedBuiltIns.shift();
	
	            var obj = builtin[0],
	              name = builtin[1],
	              orig = builtin[2];
	
	            obj[name] = orig;
	        }
	    },
	
	    _drainPlugins: function() {
	        var self = this;
	
	        // FIX ME TODO
	        each(this._plugins, function(_, plugin) {
	            var installer = plugin[0];
	            var args = plugin[1];
	            installer.apply(self, [self].concat(args));
	        });
	    },
	
	    _parseDSN: function(str) {
	        var m = dsnPattern.exec(str),
	            dsn = {},
	            i = 7;
	
	        try {
	            while (i--) dsn[dsnKeys[i]] = m[i] || '';
	        } catch(e) {
	            throw new RavenConfigError('Invalid DSN: ' + str);
	        }
	
	        if (dsn.pass && !this._globalOptions.allowSecretKey) {
	            throw new RavenConfigError('Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key');
	        }
	
	        return dsn;
	    },
	
	    _getGlobalServer: function(uri) {
	        // assemble the endpoint from the uri pieces
	        var globalServer = '//' + uri.host +
	            (uri.port ? ':' + uri.port : '');
	
	        if (uri.protocol) {
	            globalServer = uri.protocol + ':' + globalServer;
	        }
	        return globalServer;
	    },
	
	    _handleOnErrorStackInfo: function() {
	        // if we are intentionally ignoring errors via onerror, bail out
	        if (!this._ignoreOnError) {
	            this._handleStackInfo.apply(this, arguments);
	        }
	    },
	
	    _handleStackInfo: function(stackInfo, options) {
	        var self = this;
	        var frames = [];
	
	        if (stackInfo.stack && stackInfo.stack.length) {
	            each(stackInfo.stack, function(i, stack) {
	                var frame = self._normalizeFrame(stack);
	                if (frame) {
	                    frames.push(frame);
	                }
	            });
	        }
	
	        this._triggerEvent('handle', {
	            stackInfo: stackInfo,
	            options: options
	        });
	
	        this._processException(
	            stackInfo.name,
	            stackInfo.message,
	            stackInfo.url,
	            stackInfo.lineno,
	            frames.slice(0, this._globalOptions.stackTraceLimit),
	            options
	        );
	    },
	
	    _normalizeFrame: function(frame) {
	        if (!frame.url) return;
	
	        // normalize the frames data
	        var normalized = {
	            filename:   frame.url,
	            lineno:     frame.line,
	            colno:      frame.column,
	            'function': frame.func || '?'
	        }, context = this._extractContextFromFrame(frame), i;
	
	        if (context) {
	            var keys = ['pre_context', 'context_line', 'post_context'];
	            i = 3;
	            while (i--) normalized[keys[i]] = context[i];
	        }
	
	        normalized.in_app = !( // determine if an exception came from outside of our app
	            // first we check the global includePaths list.
	            !!this._globalOptions.includePaths.test && !this._globalOptions.includePaths.test(normalized.filename) ||
	            // Now we check for fun, if the function name is Raven or TraceKit
	            /(Raven|TraceKit)\./.test(normalized['function']) ||
	            // finally, we do a last ditch effort and check for raven.min.js
	            /raven\.(min\.)?js$/.test(normalized.filename)
	        );
	
	        return normalized;
	    },
	
	    _extractContextFromFrame: function(frame) {
	        // immediately check if we should even attempt to parse a context
	        if (!frame.context || !this._globalOptions.fetchContext) return;
	
	        var context = frame.context,
	            pivot = ~~(context.length / 2),
	            i = context.length, isMinified = false;
	
	        while (i--) {
	            // We're making a guess to see if the source is minified or not.
	            // To do that, we make the assumption if *any* of the lines passed
	            // in are greater than 300 characters long, we bail.
	            // Sentry will see that there isn't a context
	            if (context[i].length > 300) {
	                isMinified = true;
	                break;
	            }
	        }
	
	        if (isMinified) {
	            // The source is minified and we don't know which column. Fuck it.
	            if (isUndefined(frame.column)) return;
	
	            // If the source is minified and has a frame column
	            // we take a chunk of the offending line to hopefully shed some light
	            return [
	                [],  // no pre_context
	                context[pivot].substr(frame.column, 50), // grab 50 characters, starting at the offending column
	                []   // no post_context
	            ];
	        }
	
	        return [
	            context.slice(0, pivot),    // pre_context
	            context[pivot],             // context_line
	            context.slice(pivot + 1)    // post_context
	        ];
	    },
	
	    _processException: function(type, message, fileurl, lineno, frames, options) {
	        var stacktrace, fullMessage;
	
	        if (!!this._globalOptions.ignoreErrors.test && this._globalOptions.ignoreErrors.test(message)) return;
	
	        message += '';
	        message = truncate(message, this._globalOptions.maxMessageLength);
	
	        fullMessage = (type ? type + ': ' : '') + message;
	        fullMessage = truncate(fullMessage, this._globalOptions.maxMessageLength);
	
	        if (frames && frames.length) {
	            fileurl = frames[0].filename || fileurl;
	            // Sentry expects frames oldest to newest
	            // and JS sends them as newest to oldest
	            frames.reverse();
	            stacktrace = {frames: frames};
	        } else if (fileurl) {
	            stacktrace = {
	                frames: [{
	                    filename: fileurl,
	                    lineno: lineno,
	                    in_app: true
	                }]
	            };
	        }
	
	        if (!!this._globalOptions.ignoreUrls.test && this._globalOptions.ignoreUrls.test(fileurl)) return;
	        if (!!this._globalOptions.whitelistUrls.test && !this._globalOptions.whitelistUrls.test(fileurl)) return;
	
	        var data = objectMerge({
	            // sentry.interfaces.Exception
	            exception: {
	                values: [{
	                    type: type,
	                    value: message,
	                    stacktrace: stacktrace
	                }]
	            },
	            culprit: fileurl,
	            message: fullMessage
	        }, options);
	
	        // Fire away!
	        this._send(data);
	    },
	
	    _trimPacket: function(data) {
	        // For now, we only want to truncate the two different messages
	        // but this could/should be expanded to just trim everything
	        var max = this._globalOptions.maxMessageLength;
	        data.message = truncate(data.message, max);
	        if (data.exception) {
	            var exception = data.exception.values[0];
	            exception.value = truncate(exception.value, max);
	        }
	
	        return data;
	    },
	
	    _getHttpData: function() {
	        if (!this._hasDocument || !document.location || !document.location.href) {
	            return;
	        }
	
	        var httpData = {
	            headers: {
	                'User-Agent': navigator.userAgent
	            }
	        };
	
	        httpData.url = document.location.href;
	
	        if (document.referrer) {
	            httpData.headers.Referer = document.referrer;
	        }
	
	        return httpData;
	    },
	
	
	    _send: function(data) {
	        var self = this;
	
	        var globalOptions = this._globalOptions;
	
	        var baseData = {
	            project: this._globalProject,
	            logger: globalOptions.logger,
	            platform: 'javascript'
	        }, httpData = this._getHttpData();
	
	        if (httpData) {
	            baseData.request = httpData;
	        }
	
	        data = objectMerge(baseData, data);
	
	        // Merge in the tags and extra separately since objectMerge doesn't handle a deep merge
	        data.tags = objectMerge(objectMerge({}, this._globalContext.tags), data.tags);
	        data.extra = objectMerge(objectMerge({}, this._globalContext.extra), data.extra);
	
	        // Send along our own collected metadata with extra
	        data.extra['session:duration'] = now() - this._startTime;
	
	        if (this._breadcrumbs && this._breadcrumbs.length > 0) {
	            // intentionally make shallow copy so that additions
	            // to breadcrumbs aren't accidentally sent in this request
	            data.breadcrumbs = {
	                values: [].slice.call(this._breadcrumbs, 0)
	            };
	        }
	
	        // If there are no tags/extra, strip the key from the payload alltogther.
	        if (isEmptyObject(data.tags)) delete data.tags;
	
	        if (this._globalContext.user) {
	            // sentry.interfaces.User
	            data.user = this._globalContext.user;
	        }
	
	        // Include the release if it's defined in globalOptions
	        if (globalOptions.release) data.release = globalOptions.release;
	
	        // Include server_name if it's defined in globalOptions
	        if (globalOptions.serverName) data.server_name = globalOptions.serverName;
	
	        if (isFunction(globalOptions.dataCallback)) {
	            data = globalOptions.dataCallback(data) || data;
	        }
	
	        // Why??????????
	        if (!data || isEmptyObject(data)) {
	            return;
	        }
	
	        // Check if the request should be filtered or not
	        if (isFunction(globalOptions.shouldSendCallback) && !globalOptions.shouldSendCallback(data)) {
	            return;
	        }
	
	        // Send along an event_id if not explicitly passed.
	        // This event_id can be used to reference the error within Sentry itself.
	        // Set lastEventId after we know the error should actually be sent
	        this._lastEventId = data.event_id || (data.event_id = uuid4());
	
	        // Try and clean up the packet before sending by truncating long values
	        data = this._trimPacket(data);
	
	        this._logDebug('debug', 'Raven about to send:', data);
	
	        if (!this.isSetup()) return;
	
	        var auth = {
	            sentry_version: '7',
	            sentry_client: 'raven-js/' + this.VERSION,
	            sentry_key: this._globalKey
	        };
	        if (this._globalSecret) {
	            auth.sentry_secret = this._globalSecret;
	        }
	
	        this.captureBreadcrumb({
	            category: 'sentry',
	            message: data.message,
	            event_id: data.event_id
	        });
	
	        var url = this._globalEndpoint;
	        (globalOptions.transport || this._makeRequest).call(this, {
	            url: url,
	            auth: auth,
	            data: data,
	            options: globalOptions,
	            onSuccess: function success() {
	                self._triggerEvent('success', {
	                    data: data,
	                    src: url
	                });
	            },
	            onError: function failure() {
	                self._triggerEvent('failure', {
	                    data: data,
	                    src: url
	                });
	            }
	        });
	    },
	
	    _makeRequest: function(opts) {
	        var request = new XMLHttpRequest();
	
	        if (request.send.toString() === 'function send() { [native code] }') {
	            throw new Error('shouldnt get here');
	        }
	        // if browser doesn't support CORS (e.g. IE7), we are out of luck
	        var hasCORS =
	            'withCredentials' in request ||
	            typeof XDomainRequest !== 'undefined';
	
	        if (!hasCORS) return;
	
	        var url = opts.url;
	        function handler() {
	            if (request.status === 200) {
	                if (opts.onSuccess) {
	                    opts.onSuccess();
	                }
	            } else if (opts.onError) {
	                opts.onError();
	            }
	        }
	
	        if ('withCredentials' in request) {
	            request.onreadystatechange = function () {
	                if (request.readyState !== 4) {
	                    return;
	                }
	                handler();
	            };
	        } else {
	            request = new XDomainRequest();
	            // xdomainrequest cannot go http -> https (or vice versa),
	            // so always use protocol relative
	            url = url.replace(/^https?:/, '');
	
	            // onreadystatechange not supported by XDomainRequest
	            request.onload = handler;
	        }
	
	        // NOTE: auth is intentionally sent as part of query string (NOT as custom
	        //       HTTP header) so as to avoid preflight CORS requests
	        request.open('POST', url + '?' + urlencode(opts.auth));
	        request.send(JSON.stringify(opts.data));
	    },
	
	    // Note: this is shitty, but I can't figure out how to get
	    // sinon to stub document.createElement without breaking everything
	    // so this wrapper is just so I can stub it for tests.
	    _newImage: function() {
	        return document.createElement('img');
	    },
	
	    _logDebug: function(level) {
	        if (this._originalConsoleMethods[level] && this.debug) {
	            // In IE<10 console methods do not have their own 'apply' method
	            Function.prototype.apply.call(
	                this._originalConsoleMethods[level],
	                this._originalConsole,
	                [].slice.call(arguments, 1)
	            );
	        }
	    },
	
	    _mergeContext: function(key, context) {
	        if (isUndefined(context)) {
	            delete this._globalContext[key];
	        } else {
	            this._globalContext[key] = objectMerge(this._globalContext[key] || {}, context);
	        }
	    }
	};
	
	// Deprecations
	Raven.prototype.setUser = Raven.prototype.setUserContext;
	Raven.prototype.setReleaseContext = Raven.prototype.setRelease;
	
	module.exports = Raven;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(34);
	
	var hasKey = utils.hasKey;
	var isString = utils.isString;
	var isUndefined = utils.isUndefined;
	
	/*
	 TraceKit - Cross brower stack traces - github.com/occ/TraceKit
	 MIT license
	*/
	
	var TraceKit = {
	    remoteFetching: false,
	    collectWindowErrors: true,
	    // 3 lines before, the offending line, 3 lines after
	    linesOfContext: 7,
	    debug: false
	};
	
	// global reference to slice
	var _slice = [].slice;
	var UNKNOWN_FUNCTION = '?';
	
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types
	var ERROR_TYPES_RE = /^(?:Uncaught (?:exception: )?)?((?:Eval|Internal|Range|Reference|Syntax|Type|URI)Error): ?(.*)$/;
	
	function getLocationHref() {
	    if (typeof document === 'undefined')
	        return '';
	
	    return document.location.href;
	}
	
	/**
	 * TraceKit.report: cross-browser processing of unhandled exceptions
	 *
	 * Syntax:
	 *   TraceKit.report.subscribe(function(stackInfo) { ... })
	 *   TraceKit.report.unsubscribe(function(stackInfo) { ... })
	 *   TraceKit.report(exception)
	 *   try { ...code... } catch(ex) { TraceKit.report(ex); }
	 *
	 * Supports:
	 *   - Firefox: full stack trace with line numbers, plus column number
	 *              on top frame; column number is not guaranteed
	 *   - Opera:   full stack trace with line and column numbers
	 *   - Chrome:  full stack trace with line and column numbers
	 *   - Safari:  line and column number for the top frame only; some frames
	 *              may be missing, and column number is not guaranteed
	 *   - IE:      line and column number for the top frame only; some frames
	 *              may be missing, and column number is not guaranteed
	 *
	 * In theory, TraceKit should work on all of the following versions:
	 *   - IE5.5+ (only 8.0 tested)
	 *   - Firefox 0.9+ (only 3.5+ tested)
	 *   - Opera 7+ (only 10.50 tested; versions 9 and earlier may require
	 *     Exceptions Have Stacktrace to be enabled in opera:config)
	 *   - Safari 3+ (only 4+ tested)
	 *   - Chrome 1+ (only 5+ tested)
	 *   - Konqueror 3.5+ (untested)
	 *
	 * Requires TraceKit.computeStackTrace.
	 *
	 * Tries to catch all unhandled exceptions and report them to the
	 * subscribed handlers. Please note that TraceKit.report will rethrow the
	 * exception. This is REQUIRED in order to get a useful stack trace in IE.
	 * If the exception does not reach the top of the browser, you will only
	 * get a stack trace from the point where TraceKit.report was called.
	 *
	 * Handlers receive a stackInfo object as described in the
	 * TraceKit.computeStackTrace docs.
	 */
	TraceKit.report = (function reportModuleWrapper() {
	    var handlers = [],
	        lastArgs = null,
	        lastException = null,
	        lastExceptionStack = null;
	
	    /**
	     * Add a crash handler.
	     * @param {Function} handler
	     */
	    function subscribe(handler) {
	        installGlobalHandler();
	        handlers.push(handler);
	    }
	
	    /**
	     * Remove a crash handler.
	     * @param {Function} handler
	     */
	    function unsubscribe(handler) {
	        for (var i = handlers.length - 1; i >= 0; --i) {
	            if (handlers[i] === handler) {
	                handlers.splice(i, 1);
	            }
	        }
	    }
	
	    /**
	     * Remove all crash handlers.
	     */
	    function unsubscribeAll() {
	        uninstallGlobalHandler();
	        handlers = [];
	    }
	
	    /**
	     * Dispatch stack information to all handlers.
	     * @param {Object.<string, *>} stack
	     */
	    function notifyHandlers(stack, isWindowError) {
	        var exception = null;
	        if (isWindowError && !TraceKit.collectWindowErrors) {
	          return;
	        }
	        for (var i in handlers) {
	            if (hasKey(handlers, i)) {
	                try {
	                    handlers[i].apply(null, [stack].concat(_slice.call(arguments, 2)));
	                } catch (inner) {
	                    exception = inner;
	                }
	            }
	        }
	
	        if (exception) {
	            throw exception;
	        }
	    }
	
	    var _oldOnerrorHandler, _onErrorHandlerInstalled;
	
	    /**
	     * Ensures all global unhandled exceptions are recorded.
	     * Supported by Gecko and IE.
	     * @param {string} message Error message.
	     * @param {string} url URL of script that generated the exception.
	     * @param {(number|string)} lineNo The line number at which the error
	     * occurred.
	     * @param {?(number|string)} colNo The column number at which the error
	     * occurred.
	     * @param {?Error} ex The actual Error object.
	     */
	    function traceKitWindowOnError(message, url, lineNo, colNo, ex) {
	        var stack = null;
	
	        if (lastExceptionStack) {
	            TraceKit.computeStackTrace.augmentStackTraceWithInitialElement(lastExceptionStack, url, lineNo, message);
	            processLastException();
	        } else if (ex) {
	            // New chrome and blink send along a real error object
	            // Let's just report that like a normal error.
	            // See: https://mikewest.org/2013/08/debugging-runtime-errors-with-window-onerror
	            stack = TraceKit.computeStackTrace(ex);
	            notifyHandlers(stack, true);
	        } else {
	            var location = {
	                'url': url,
	                'line': lineNo,
	                'column': colNo
	            };
	
	            var name = undefined;
	            var msg = message; // must be new var or will modify original `arguments`
	            var groups;
	            if (isString(message)) {
	                var groups = message.match(ERROR_TYPES_RE);
	                if (groups) {
	                    name = groups[1];
	                    msg = groups[2];
	                }
	            }
	
	            location.func = UNKNOWN_FUNCTION;
	            location.context = null;
	
	            stack = {
	                'name': name,
	                'message': msg,
	                'url': getLocationHref(),
	                'stack': [location]
	            };
	            notifyHandlers(stack, true);
	        }
	
	        if (_oldOnerrorHandler) {
	            return _oldOnerrorHandler.apply(this, arguments);
	        }
	
	        return false;
	    }
	
	    function installGlobalHandler ()
	    {
	        if (_onErrorHandlerInstalled) {
	            return;
	        }
	        _oldOnerrorHandler = window.onerror;
	        window.onerror = traceKitWindowOnError;
	        _onErrorHandlerInstalled = true;
	    }
	
	    function uninstallGlobalHandler ()
	    {
	        if (!_onErrorHandlerInstalled) {
	            return;
	        }
	        window.onerror = _oldOnerrorHandler;
	        _onErrorHandlerInstalled = false;
	        _oldOnerrorHandler = undefined;
	    }
	
	    function processLastException() {
	        var _lastExceptionStack = lastExceptionStack,
	            _lastArgs = lastArgs;
	        lastArgs = null;
	        lastExceptionStack = null;
	        lastException = null;
	        notifyHandlers.apply(null, [_lastExceptionStack, false].concat(_lastArgs));
	    }
	
	    /**
	     * Reports an unhandled Error to TraceKit.
	     * @param {Error} ex
	     * @param {?boolean} rethrow If false, do not re-throw the exception.
	     * Only used for window.onerror to not cause an infinite loop of
	     * rethrowing.
	     */
	    function report(ex, rethrow) {
	        var args = _slice.call(arguments, 1);
	        if (lastExceptionStack) {
	            if (lastException === ex) {
	                return; // already caught by an inner catch block, ignore
	            } else {
	              processLastException();
	            }
	        }
	
	        var stack = TraceKit.computeStackTrace(ex);
	        lastExceptionStack = stack;
	        lastException = ex;
	        lastArgs = args;
	
	        // If the stack trace is incomplete, wait for 2 seconds for
	        // slow slow IE to see if onerror occurs or not before reporting
	        // this exception; otherwise, we will end up with an incomplete
	        // stack trace
	        window.setTimeout(function () {
	            if (lastException === ex) {
	                processLastException();
	            }
	        }, (stack.incomplete ? 2000 : 0));
	
	        if (rethrow !== false) {
	            throw ex; // re-throw to propagate to the top level (and cause window.onerror)
	        }
	    }
	
	    report.subscribe = subscribe;
	    report.unsubscribe = unsubscribe;
	    report.uninstall = unsubscribeAll;
	    return report;
	}());
	
	/**
	 * TraceKit.computeStackTrace: cross-browser stack traces in JavaScript
	 *
	 * Syntax:
	 *   s = TraceKit.computeStackTrace(exception) // consider using TraceKit.report instead (see below)
	 * Returns:
	 *   s.name              - exception name
	 *   s.message           - exception message
	 *   s.stack[i].url      - JavaScript or HTML file URL
	 *   s.stack[i].func     - function name, or empty for anonymous functions (if guessing did not work)
	 *   s.stack[i].args     - arguments passed to the function, if known
	 *   s.stack[i].line     - line number, if known
	 *   s.stack[i].column   - column number, if known
	 *   s.stack[i].context  - an array of source code lines; the middle element corresponds to the correct line#
	 *
	 * Supports:
	 *   - Firefox:  full stack trace with line numbers and unreliable column
	 *               number on top frame
	 *   - Opera 10: full stack trace with line and column numbers
	 *   - Opera 9-: full stack trace with line numbers
	 *   - Chrome:   full stack trace with line and column numbers
	 *   - Safari:   line and column number for the topmost stacktrace element
	 *               only
	 *   - IE:       no line numbers whatsoever
	 *
	 * Tries to guess names of anonymous functions by looking for assignments
	 * in the source code. In IE and Safari, we have to guess source file names
	 * by searching for function bodies inside all page scripts. This will not
	 * work for scripts that are loaded cross-domain.
	 * Here be dragons: some function names may be guessed incorrectly, and
	 * duplicate functions may be mismatched.
	 *
	 * TraceKit.computeStackTrace should only be used for tracing purposes.
	 * Logging of unhandled exceptions should be done with TraceKit.report,
	 * which builds on top of TraceKit.computeStackTrace and provides better
	 * IE support by utilizing the window.onerror event to retrieve information
	 * about the top of the stack.
	 *
	 * Note: In IE and Safari, no stack trace is recorded on the Error object,
	 * so computeStackTrace instead walks its *own* chain of callers.
	 * This means that:
	 *  * in Safari, some methods may be missing from the stack trace;
	 *  * in IE, the topmost function in the stack trace will always be the
	 *    caller of computeStackTrace.
	 *
	 * This is okay for tracing (because you are likely to be calling
	 * computeStackTrace from the function you want to be the topmost element
	 * of the stack trace anyway), but not okay for logging unhandled
	 * exceptions (because your catch block will likely be far away from the
	 * inner function that actually caused the exception).
	 *
	 */
	TraceKit.computeStackTrace = (function computeStackTraceWrapper() {
	    /**
	     * Escapes special characters, except for whitespace, in a string to be
	     * used inside a regular expression as a string literal.
	     * @param {string} text The string.
	     * @return {string} The escaped string literal.
	     */
	    function escapeRegExp(text) {
	        return text.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, '\\$&');
	    }
	
	    /**
	     * Escapes special characters in a string to be used inside a regular
	     * expression as a string literal. Also ensures that HTML entities will
	     * be matched the same as their literal friends.
	     * @param {string} body The string.
	     * @return {string} The escaped string.
	     */
	    function escapeCodeAsRegExpForMatchingInsideHTML(body) {
	        return escapeRegExp(body).replace('<', '(?:<|&lt;)').replace('>', '(?:>|&gt;)').replace('&', '(?:&|&amp;)').replace('"', '(?:"|&quot;)').replace(/\s+/g, '\\s+');
	    }
	
	    // Contents of Exception in various browsers.
	    //
	    // SAFARI:
	    // ex.message = Can't find variable: qq
	    // ex.line = 59
	    // ex.sourceId = 580238192
	    // ex.sourceURL = http://...
	    // ex.expressionBeginOffset = 96
	    // ex.expressionCaretOffset = 98
	    // ex.expressionEndOffset = 98
	    // ex.name = ReferenceError
	    //
	    // FIREFOX:
	    // ex.message = qq is not defined
	    // ex.fileName = http://...
	    // ex.lineNumber = 59
	    // ex.columnNumber = 69
	    // ex.stack = ...stack trace... (see the example below)
	    // ex.name = ReferenceError
	    //
	    // CHROME:
	    // ex.message = qq is not defined
	    // ex.name = ReferenceError
	    // ex.type = not_defined
	    // ex.arguments = ['aa']
	    // ex.stack = ...stack trace...
	    //
	    // INTERNET EXPLORER:
	    // ex.message = ...
	    // ex.name = ReferenceError
	    //
	    // OPERA:
	    // ex.message = ...message... (see the example below)
	    // ex.name = ReferenceError
	    // ex.opera#sourceloc = 11  (pretty much useless, duplicates the info in ex.message)
	    // ex.stacktrace = n/a; see 'opera:config#UserPrefs|Exceptions Have Stacktrace'
	
	    /**
	     * Computes stack trace information from the stack property.
	     * Chrome and Gecko use this property.
	     * @param {Error} ex
	     * @return {?Object.<string, *>} Stack trace information.
	     */
	    function computeStackTraceFromStackProp(ex) {
	        if (isUndefined(ex.stack) || !ex.stack) return;
	
	        var chrome = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|<anonymous>).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
	            gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|\[native).*?)(?::(\d+))?(?::(\d+))?\s*$/i,
	            winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:ms-appx|https?|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
	            lines = ex.stack.split('\n'),
	            stack = [],
	            parts,
	            element,
	            reference = /^(.*) is undefined$/.exec(ex.message);
	
	        for (var i = 0, j = lines.length; i < j; ++i) {
	            if ((parts = chrome.exec(lines[i]))) {
	                var isNative = parts[2] && parts[2].indexOf('native') !== -1;
	                element = {
	                    'url': !isNative ? parts[2] : null,
	                    'func': parts[1] || UNKNOWN_FUNCTION,
	                    'args': isNative ? [parts[2]] : [],
	                    'line': parts[3] ? +parts[3] : null,
	                    'column': parts[4] ? +parts[4] : null
	                };
	            } else if ( parts = winjs.exec(lines[i]) ) {
	                element = {
	                    'url': parts[2],
	                    'func': parts[1] || UNKNOWN_FUNCTION,
	                    'args': [],
	                    'line': +parts[3],
	                    'column': parts[4] ? +parts[4] : null
	                };
	            } else if ((parts = gecko.exec(lines[i]))) {
	                element = {
	                    'url': parts[3],
	                    'func': parts[1] || UNKNOWN_FUNCTION,
	                    'args': parts[2] ? parts[2].split(',') : [],
	                    'line': parts[4] ? +parts[4] : null,
	                    'column': parts[5] ? +parts[5] : null
	                };
	            } else {
	                continue;
	            }
	
	            if (!element.func && element.line) {
	                element.func = UNKNOWN_FUNCTION;
	            }
	
	            if (element.line) {
	                element.context = null;
	            }
	
	            stack.push(element);
	        }
	
	        if (!stack.length) {
	            return null;
	        }
	
	        if (!stack[0].column && !isUndefined(ex.columnNumber)) {
	            // FireFox uses this awesome columnNumber property for its top frame
	            // Also note, Firefox's column number is 0-based and everything else expects 1-based,
	            // so adding 1
	            stack[0].column = ex.columnNumber + 1;
	        }
	
	        return {
	            'name': ex.name,
	            'message': ex.message,
	            'url': getLocationHref(),
	            'stack': stack
	        };
	    }
	
	    /**
	     * Computes stack trace information from the stacktrace property.
	     * Opera 10 uses this property.
	     * @param {Error} ex
	     * @return {?Object.<string, *>} Stack trace information.
	     */
	    function computeStackTraceFromStacktraceProp(ex) {
	        // Access and store the stacktrace property before doing ANYTHING
	        // else to it because Opera is not very good at providing it
	        // reliably in other circumstances.
	        var stacktrace = ex.stacktrace;
	        if (isUndefined(ex.stacktrace) || !ex.stacktrace) return;
	
	        var opera10Regex = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
	          opera11Regex = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i,
	          lines = stacktrace.split('\n'),
	          stack = [],
	          parts;
	
	        for (var line = 0; line < lines.length; line += 2) {
	            var element = null;
	            if ((parts = opera10Regex.exec(lines[line]))) {
	                element = {
	                    'url': parts[2],
	                    'line': +parts[1],
	                    'column': null,
	                    'func': parts[3],
	                    'args':[]
	                };
	            } else if ((parts = opera11Regex.exec(lines[line]))) {
	                element = {
	                    'url': parts[6],
	                    'line': +parts[1],
	                    'column': +parts[2],
	                    'func': parts[3] || parts[4],
	                    'args': parts[5] ? parts[5].split(',') : []
	                };
	            }
	
	            if (element) {
	                if (!element.func && element.line) {
	                    element.func = UNKNOWN_FUNCTION;
	                }
	                element.context = [lines[line + 1]];
	
	                stack.push(element);
	            }
	        }
	
	        if (!stack.length) {
	            return null;
	        }
	
	        return {
	            'name': ex.name,
	            'message': ex.message,
	            'url': getLocationHref(),
	            'stack': stack
	        };
	    }
	
	    /**
	     * NOT TESTED.
	     * Computes stack trace information from an error message that includes
	     * the stack trace.
	     * Opera 9 and earlier use this method if the option to show stack
	     * traces is turned on in opera:config.
	     * @param {Error} ex
	     * @return {?Object.<string, *>} Stack information.
	     */
	    function computeStackTraceFromOperaMultiLineMessage(ex) {
	        // Opera includes a stack trace into the exception message. An example is:
	        //
	        // Statement on line 3: Undefined variable: undefinedFunc
	        // Backtrace:
	        //   Line 3 of linked script file://localhost/Users/andreyvit/Projects/TraceKit/javascript-client/sample.js: In function zzz
	        //         undefinedFunc(a);
	        //   Line 7 of inline#1 script in file://localhost/Users/andreyvit/Projects/TraceKit/javascript-client/sample.html: In function yyy
	        //           zzz(x, y, z);
	        //   Line 3 of inline#1 script in file://localhost/Users/andreyvit/Projects/TraceKit/javascript-client/sample.html: In function xxx
	        //           yyy(a, a, a);
	        //   Line 1 of function script
	        //     try { xxx('hi'); return false; } catch(ex) { TraceKit.report(ex); }
	        //   ...
	
	        var lines = ex.message.split('\n');
	        if (lines.length < 4) {
	            return null;
	        }
	
	        var lineRE1 = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
	            lineRE2 = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
	            lineRE3 = /^\s*Line (\d+) of function script\s*$/i,
	            stack = [],
	            scripts = document.getElementsByTagName('script'),
	            parts;
	
	        for (var line = 2; line < lines.length; line += 2) {
	            var item = null;
	            if ((parts = lineRE1.exec(lines[line]))) {
	                item = {
	                    'url': parts[2],
	                    'func': parts[3],
	                    'args': [],
	                    'line': +parts[1],
	                    'column': null
	                };
	            } else if ((parts = lineRE2.exec(lines[line]))) {
	                item = {
	                    'url': parts[3],
	                    'func': parts[4],
	                    'args': [],
	                    'line': +parts[1],
	                    'column': null // TODO: Check to see if inline#1 (+parts[2]) points to the script number or column number.
	                };
	                var relativeLine = (+parts[1]); // relative to the start of the <SCRIPT> block
	            } else if ((parts = lineRE3.exec(lines[line]))) {
	                var url = window.location.href.replace(/#.*$/, '');
	                item = {
	                    'url': url,
	                    'func': '',
	                    'args': [],
	                    'line': parts[1],
	                    'column': null
	                };
	            }
	
	            if (item) {
	                if (!item.func) {
	                    item.func = UNKNOWN_FUNCTION;
	                }
	                item.context = [lines[line + 1]];
	
	                stack.push(item);
	            }
	        }
	
	        if (!stack.length) {
	            return null; // could not parse multiline exception message as Opera stack trace
	        }
	
	        return {
	            'name': ex.name,
	            'message': lines[0],
	            'url': getLocationHref(),
	            'stack': stack
	        };
	    }
	
	    /**
	     * Adds information about the first frame to incomplete stack traces.
	     * Safari and IE require this to get complete data on the first frame.
	     * @param {Object.<string, *>} stackInfo Stack trace information from
	     * one of the compute* methods.
	     * @param {string} url The URL of the script that caused an error.
	     * @param {(number|string)} lineNo The line number of the script that
	     * caused an error.
	     * @param {string=} message The error generated by the browser, which
	     * hopefully contains the name of the object that caused the error.
	     * @return {boolean} Whether or not the stack information was
	     * augmented.
	     */
	    function augmentStackTraceWithInitialElement(stackInfo, url, lineNo, message) {
	        var initial = {
	            'url': url,
	            'line': lineNo
	        };
	
	        if (initial.url && initial.line) {
	            stackInfo.incomplete = false;
	
	            if (!initial.func) {
	                initial.func = UNKNOWN_FUNCTION;
	            }
	
	            if (stackInfo.stack.length > 0) {
	                if (stackInfo.stack[0].url === initial.url) {
	                    if (stackInfo.stack[0].line === initial.line) {
	                        return false; // already in stack trace
	                    } else if (!stackInfo.stack[0].line && stackInfo.stack[0].func === initial.func) {
	                        stackInfo.stack[0].line = initial.line;
	                        stackInfo.stack[0].context = initial.context;
	                        return false;
	                    }
	                }
	            }
	
	            stackInfo.stack.unshift(initial);
	            stackInfo.partial = true;
	            return true;
	        } else {
	            stackInfo.incomplete = true;
	        }
	
	        return false;
	    }
	
	    /**
	     * Computes stack trace information by walking the arguments.caller
	     * chain at the time the exception occurred. This will cause earlier
	     * frames to be missed but is the only way to get any stack trace in
	     * Safari and IE. The top frame is restored by
	     * {@link augmentStackTraceWithInitialElement}.
	     * @param {Error} ex
	     * @return {?Object.<string, *>} Stack trace information.
	     */
	    function computeStackTraceByWalkingCallerChain(ex, depth) {
	        var functionName = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
	            stack = [],
	            funcs = {},
	            recursion = false,
	            parts,
	            item,
	            source;
	
	        for (var curr = computeStackTraceByWalkingCallerChain.caller; curr && !recursion; curr = curr.caller) {
	            if (curr === computeStackTrace || curr === TraceKit.report) {
	                // console.log('skipping internal function');
	                continue;
	            }
	
	            item = {
	                'url': null,
	                'func': UNKNOWN_FUNCTION,
	                'line': null,
	                'column': null
	            };
	
	            if (curr.name) {
	                item.func = curr.name;
	            } else if ((parts = functionName.exec(curr.toString()))) {
	                item.func = parts[1];
	            }
	
	            if (typeof item.func === 'undefined') {
	              try {
	                item.func = parts.input.substring(0, parts.input.indexOf('{'));
	              } catch (e) { }
	            }
	
	            if (funcs['' + curr]) {
	                recursion = true;
	            }else{
	                funcs['' + curr] = true;
	            }
	
	            stack.push(item);
	        }
	
	        if (depth) {
	            // console.log('depth is ' + depth);
	            // console.log('stack is ' + stack.length);
	            stack.splice(0, depth);
	        }
	
	        var result = {
	            'name': ex.name,
	            'message': ex.message,
	            'url': getLocationHref(),
	            'stack': stack
	        };
	        augmentStackTraceWithInitialElement(result, ex.sourceURL || ex.fileName, ex.line || ex.lineNumber, ex.message || ex.description);
	        return result;
	    }
	
	    /**
	     * Computes a stack trace for an exception.
	     * @param {Error} ex
	     * @param {(string|number)=} depth
	     */
	    function computeStackTrace(ex, depth) {
	        var stack = null;
	        depth = (depth == null ? 0 : +depth);
	
	        try {
	            // This must be tried first because Opera 10 *destroys*
	            // its stacktrace property if you try to access the stack
	            // property first!!
	            stack = computeStackTraceFromStacktraceProp(ex);
	            if (stack) {
	                return stack;
	            }
	        } catch (e) {
	            if (TraceKit.debug) {
	                throw e;
	            }
	        }
	
	        try {
	            stack = computeStackTraceFromStackProp(ex);
	            if (stack) {
	                return stack;
	            }
	        } catch (e) {
	            if (TraceKit.debug) {
	                throw e;
	            }
	        }
	
	        try {
	            stack = computeStackTraceFromOperaMultiLineMessage(ex);
	            if (stack) {
	                return stack;
	            }
	        } catch (e) {
	            if (TraceKit.debug) {
	                throw e;
	            }
	        }
	
	        try {
	            stack = computeStackTraceByWalkingCallerChain(ex, depth + 1);
	            if (stack) {
	                return stack;
	            }
	        } catch (e) {
	            if (TraceKit.debug) {
	                throw e;
	            }
	        }
	
	        return {
	            'name': ex.name,
	            'message': ex.message,
	            'url': getLocationHref()
	        };
	    }
	
	    computeStackTrace.augmentStackTraceWithInitialElement = augmentStackTraceWithInitialElement;
	    computeStackTrace.computeStackTraceFromStackProp = computeStackTraceFromStackProp;
	
	    return computeStackTrace;
	}());
	
	module.exports = TraceKit;


/***/ },
/* 34 */
/***/ function(module, exports) {

	/*eslint no-extra-parens:0*/
	'use strict';
	
	var objectPrototype = Object.prototype;
	
	function isUndefined(what) {
	    return what === void 0;
	}
	
	function isFunction(what) {
	    return typeof what === 'function';
	}
	
	function isString(what) {
	    return objectPrototype.toString.call(what) === '[object String]';
	}
	
	function isObject(what) {
	    return typeof what === 'object' && what !== null;
	}
	
	function isEmptyObject(what) {
	    for (var _ in what) return false;  // eslint-disable-line guard-for-in, no-unused-vars
	    return true;
	}
	
	// Sorta yanked from https://github.com/joyent/node/blob/aa3b4b4/lib/util.js#L560
	// with some tiny modifications
	function isError(what) {
	    var toString = objectPrototype.toString.call(what);
	    return isObject(what) &&
	        toString === '[object Error]' ||
	        toString === '[object Exception]' || // Firefox NS_ERROR_FAILURE Exceptions
	        what instanceof Error;
	}
	
	function each(obj, callback) {
	    var i, j;
	
	    if (isUndefined(obj.length)) {
	        for (i in obj) {
	            if (hasKey(obj, i)) {
	                callback.call(null, i, obj[i]);
	            }
	        }
	    } else {
	        j = obj.length;
	        if (j) {
	            for (i = 0; i < j; i++) {
	                callback.call(null, i, obj[i]);
	            }
	        }
	    }
	}
	
	function objectMerge(obj1, obj2) {
	    if (!obj2) {
	        return obj1;
	    }
	    each(obj2, function(key, value){
	        obj1[key] = value;
	    });
	    return obj1;
	}
	
	function truncate(str, max) {
	    return !max || str.length <= max ? str : str.substr(0, max) + '\u2026';
	}
	
	/**
	 * hasKey, a better form of hasOwnProperty
	 * Example: hasKey(MainHostObject, property) === true/false
	 *
	 * @param {Object} host object to check property
	 * @param {string} key to check
	 */
	function hasKey(object, key) {
	    return objectPrototype.hasOwnProperty.call(object, key);
	}
	
	function joinRegExp(patterns) {
	    // Combine an array of regular expressions and strings into one large regexp
	    // Be mad.
	    var sources = [],
	        i = 0, len = patterns.length,
	        pattern;
	
	    for (; i < len; i++) {
	        pattern = patterns[i];
	        if (isString(pattern)) {
	            // If it's a string, we need to escape it
	            // Taken from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
	            sources.push(pattern.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'));
	        } else if (pattern && pattern.source) {
	            // If it's a regexp already, we want to extract the source
	            sources.push(pattern.source);
	        }
	        // Intentionally skip other cases
	    }
	    return new RegExp(sources.join('|'), 'i');
	}
	
	function urlencode(o) {
	    var pairs = [];
	    each(o, function(key, value) {
	        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
	    });
	    return pairs.join('&');
	}
	
	// borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
	// intentionally using regex and not <a/> href parsing trick because React Native and other
	// environments where DOM might not be available
	function parseUrl(url) {
	    var match = url.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
	    if (!match) return {};
	    return {
	        protocol: match[2],
	        host: match[4],
	        path: match[5]
	    };
	}
	function uuid4() {
	    var crypto = window.crypto || window.msCrypto;
	
	    if (!isUndefined(crypto) && crypto.getRandomValues) {
	        // Use window.crypto API if available
	        var arr = new Uint16Array(8);
	        crypto.getRandomValues(arr);
	
	        // set 4 in byte 7
	        arr[3] = arr[3] & 0xFFF | 0x4000;
	        // set 2 most significant bits of byte 9 to '10'
	        arr[4] = arr[4] & 0x3FFF | 0x8000;
	
	        var pad = function(num) {
	            var v = num.toString(16);
	            while (v.length < 4) {
	                v = '0' + v;
	            }
	            return v;
	        };
	
	        return pad(arr[0]) + pad(arr[1]) + pad(arr[2]) + pad(arr[3]) + pad(arr[4]) +
	        pad(arr[5]) + pad(arr[6]) + pad(arr[7]);
	    } else {
	        // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
	        return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	            var r = Math.random()*16|0,
	                v = c === 'x' ? r : r&0x3|0x8;
	            return v.toString(16);
	        });
	    }
	}
	
	/**
	 * Given a child DOM element, returns a query-selector statement describing that
	 * and its ancestors
	 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
	 * @param elem
	 * @returns {string}
	 */
	function htmlTreeAsString(elem) {
	    var MAX_TRAVERSE_HEIGHT = 5,
	        MAX_OUTPUT_LEN = 80,
	        out = [],
	        height = 0,
	        len = 0,
	        separator = ' > ',
	        sepLength = separator.length,
	        nextStr;
	
	    while (elem && height++ < MAX_TRAVERSE_HEIGHT) {
	
	        nextStr = htmlElementAsString(elem);
	        // bail out if
	        // - nextStr is the 'html' element
	        // - the length of the string that would be created exceeds MAX_OUTPUT_LEN
	        //   (ignore this limit if we are on the first iteration)
	        if (nextStr === 'html' || height > 1 && len + (out.length * sepLength) + nextStr.length >= MAX_OUTPUT_LEN) {
	            break;
	        }
	
	        out.push(nextStr);
	
	        len += nextStr.length;
	        elem = elem.parentNode;
	    }
	
	    return out.reverse().join(separator);
	}
	
	/**
	 * Returns a simple, query-selector representation of a DOM element
	 * e.g. [HTMLElement] => input#foo.btn[name=baz]
	 * @param HTMLElement
	 * @returns {string}
	 */
	function htmlElementAsString(elem) {
	    var out = [],
	        className,
	        classes,
	        key,
	        attr,
	        i;
	
	    if (!elem || !elem.tagName) {
	        return '';
	    }
	
	    out.push(elem.tagName.toLowerCase());
	    if (elem.id) {
	        out.push('#' + elem.id);
	    }
	
	    className = elem.className;
	    if (className && isString(className)) {
	        classes = className.split(' ');
	        for (i = 0; i < classes.length; i++) {
	            out.push('.' + classes[i]);
	        }
	    }
	    var attrWhitelist = ['type', 'name', 'title', 'alt'];
	    for (i = 0; i < attrWhitelist.length; i++) {
	        key = attrWhitelist[i];
	        attr = elem.getAttribute(key);
	        if (attr) {
	            out.push('[' + key + '="' + attr + '"]');
	        }
	    }
	    return out.join('');
	}
	
	module.exports = {
	    isUndefined: isUndefined,
	    isFunction: isFunction,
	    isString: isString,
	    isObject: isObject,
	    isEmptyObject: isEmptyObject,
	    isError: isError,
	    each: each,
	    objectMerge: objectMerge,
	    truncate: truncate,
	    hasKey: hasKey,
	    joinRegExp: joinRegExp,
	    urlencode: urlencode,
	    uuid4: uuid4,
	    htmlTreeAsString: htmlTreeAsString,
	    htmlElementAsString: htmlElementAsString,
	    parseUrl: parseUrl
	};


/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';
	
	function RavenConfigError(message) {
	    this.name = 'RavenConfigError';
	    this.message = message;
	}
	RavenConfigError.prototype = new Error();
	RavenConfigError.prototype.constructor = RavenConfigError;
	
	module.exports = RavenConfigError;


/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';
	
	var wrapMethod = function(console, level, callback) {
	    var originalConsoleLevel = console[level];
	    var originalConsole = console;
	
	    if (!(level in console)) {
	        return;
	    }
	
	    var sentryLevel = level === 'warn'
	        ? 'warning'
	        : level;
	
	    console[level] = function () {
	        var args = [].slice.call(arguments);
	
	        var msg = '' + args.join(' ');
	        var data = {level: sentryLevel, logger: 'console', extra: {'arguments': args}};
	        callback && callback(msg, data);
	
	        // this fails for some browsers. :(
	        if (originalConsoleLevel) {
	            // IE9 doesn't allow calling apply on console functions directly
	            // See: https://stackoverflow.com/questions/5472938/does-ie9-support-console-log-and-is-it-a-real-function#answer-5473193
	            Function.prototype.apply.call(
	                originalConsoleLevel,
	                originalConsole,
	                args
	            );
	        }
	    };
	};
	
	module.exports = {
	    wrapMethod: wrapMethod
	};


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _identity = __webpack_require__(38);
	
	var _identity2 = _interopRequireDefault(_identity);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ErrorUi = function () {
	  /**
	   * @param {Element} uiContainer
	   */
	
	  function ErrorUi(uiContainer) {
	    _classCallCheck(this, ErrorUi);
	
	    this._uiContainer = uiContainer;
	    this._installEventListeners();
	    this._formData = undefined;
	
	    // Show anonymous identity UUID.
	    this._uiContainer.querySelector('#fl-identity').value = (0, _identity2.default)();
	  }
	
	  /**
	   * @returns {{message: string, tags: {string: *}}}
	   */
	
	
	  _createClass(ErrorUi, [{
	    key: '_installEventListeners',
	    value: function _installEventListeners() {
	      var _this = this;
	
	      // Prevent form submission to avoid needless page reload.
	      this._uiContainer.querySelector('form').addEventListener('submit', function (e) {
	        e.preventDefault();
	      });
	
	      // Throw an exception.
	      var errorButton = this._uiContainer.querySelector('form button[type=submit]');
	      errorButton.addEventListener('click', function () {
	        _this._refreshFormData();
	
	        // Briefly disable the button to convey the effect that something happened.
	        errorButton.disabled = true;
	        window.setTimeout(function () {
	          errorButton.disabled = false;
	        }, 1500);
	
	        throw new Error(_this.formData.message);
	      });
	    }
	  }, {
	    key: '_refreshFormData',
	    value: function _refreshFormData() {
	      this._formData = {
	        tags: {}
	      };
	
	      var form = this._uiContainer.querySelector('form');
	      var errorMessageElem = form.querySelector('input[name="fl-error-message"]');
	
	      var _arr = ['favoriteDrink', 'dietaryPreference'];
	      for (var _i = 0; _i < _arr.length; _i++) {
	        var tag = _arr[_i];
	        var tagElement = form.querySelector('select[name*=' + tag + ']');
	        this._formData.tags[tag] = tagElement.value;
	      }
	
	      this._formData.message = errorMessageElem.value;
	    }
	  }, {
	    key: 'formData',
	    get: function get() {
	      return this._formData;
	    }
	  }]);
	
	  return ErrorUi;
	}();
	
	exports.default = ErrorUi;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getIdentity;
	
	var _uuid = __webpack_require__(39);
	
	var _uuid2 = _interopRequireDefault(_uuid);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var IDENTITY_LOCAL_STORAGE_KEY = 'sentry-identity';
	
	/**
	 * @return {string} Persistent UUID4 for identifying users anonymously across
	 *    incidents.
	 */
	function getIdentity() {
	  var identity = window.localStorage.getItem(IDENTITY_LOCAL_STORAGE_KEY);
	  if (identity === null) {
	    identity = _uuid2.default.v4();
	    window.localStorage.setItem(IDENTITY_LOCAL_STORAGE_KEY, identity);
	  }
	
	  return identity;
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	//     uuid.js
	//
	//     Copyright (c) 2010-2012 Robert Kieffer
	//     MIT License - http://opensource.org/licenses/mit-license.php
	
	// Unique ID creation requires a high quality random # generator.  We feature
	// detect to determine the best RNG source, normalizing to a function that
	// returns 128-bits of randomness, since that's what's usually required
	var _rng = __webpack_require__(40);
	
	// Maps for number <-> hex string conversion
	var _byteToHex = [];
	var _hexToByte = {};
	for (var i = 0; i < 256; i++) {
	  _byteToHex[i] = (i + 0x100).toString(16).substr(1);
	  _hexToByte[_byteToHex[i]] = i;
	}
	
	// **`parse()` - Parse a UUID into it's component bytes**
	function parse(s, buf, offset) {
	  var i = (buf && offset) || 0, ii = 0;
	
	  buf = buf || [];
	  s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
	    if (ii < 16) { // Don't overflow!
	      buf[i + ii++] = _hexToByte[oct];
	    }
	  });
	
	  // Zero out remaining bytes if string was short
	  while (ii < 16) {
	    buf[i + ii++] = 0;
	  }
	
	  return buf;
	}
	
	// **`unparse()` - Convert UUID byte array (ala parse()) into a string**
	function unparse(buf, offset) {
	  var i = offset || 0, bth = _byteToHex;
	  return  bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]];
	}
	
	// **`v1()` - Generate time-based UUID**
	//
	// Inspired by https://github.com/LiosK/UUID.js
	// and http://docs.python.org/library/uuid.html
	
	// random #'s we need to init node and clockseq
	var _seedBytes = _rng();
	
	// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
	var _nodeId = [
	  _seedBytes[0] | 0x01,
	  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
	];
	
	// Per 4.2.2, randomize (14 bit) clockseq
	var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;
	
	// Previous uuid creation time
	var _lastMSecs = 0, _lastNSecs = 0;
	
	// See https://github.com/broofa/node-uuid for API details
	function v1(options, buf, offset) {
	  var i = buf && offset || 0;
	  var b = buf || [];
	
	  options = options || {};
	
	  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;
	
	  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
	  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
	  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
	  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
	  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();
	
	  // Per 4.2.1.2, use count of uuid's generated during the current clock
	  // cycle to simulate higher resolution clock
	  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;
	
	  // Time since last uuid creation (in msecs)
	  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;
	
	  // Per 4.2.1.2, Bump clockseq on clock regression
	  if (dt < 0 && options.clockseq === undefined) {
	    clockseq = clockseq + 1 & 0x3fff;
	  }
	
	  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
	  // time interval
	  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
	    nsecs = 0;
	  }
	
	  // Per 4.2.1.2 Throw error if too many uuids are requested
	  if (nsecs >= 10000) {
	    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
	  }
	
	  _lastMSecs = msecs;
	  _lastNSecs = nsecs;
	  _clockseq = clockseq;
	
	  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
	  msecs += 12219292800000;
	
	  // `time_low`
	  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
	  b[i++] = tl >>> 24 & 0xff;
	  b[i++] = tl >>> 16 & 0xff;
	  b[i++] = tl >>> 8 & 0xff;
	  b[i++] = tl & 0xff;
	
	  // `time_mid`
	  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
	  b[i++] = tmh >>> 8 & 0xff;
	  b[i++] = tmh & 0xff;
	
	  // `time_high_and_version`
	  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
	  b[i++] = tmh >>> 16 & 0xff;
	
	  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
	  b[i++] = clockseq >>> 8 | 0x80;
	
	  // `clock_seq_low`
	  b[i++] = clockseq & 0xff;
	
	  // `node`
	  var node = options.node || _nodeId;
	  for (var n = 0; n < 6; n++) {
	    b[i + n] = node[n];
	  }
	
	  return buf ? buf : unparse(b);
	}
	
	// **`v4()` - Generate random UUID**
	
	// See https://github.com/broofa/node-uuid for API details
	function v4(options, buf, offset) {
	  // Deprecated - 'format' argument, as supported in v1.2
	  var i = buf && offset || 0;
	
	  if (typeof(options) == 'string') {
	    buf = options == 'binary' ? new Array(16) : null;
	    options = null;
	  }
	  options = options || {};
	
	  var rnds = options.random || (options.rng || _rng)();
	
	  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
	  rnds[6] = (rnds[6] & 0x0f) | 0x40;
	  rnds[8] = (rnds[8] & 0x3f) | 0x80;
	
	  // Copy bytes to buffer, if provided
	  if (buf) {
	    for (var ii = 0; ii < 16; ii++) {
	      buf[i + ii] = rnds[ii];
	    }
	  }
	
	  return buf || unparse(rnds);
	}
	
	// Export public API
	var uuid = v4;
	uuid.v1 = v1;
	uuid.v4 = v4;
	uuid.parse = parse;
	uuid.unparse = unparse;
	
	module.exports = uuid;


/***/ },
/* 40 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	var rng;
	
	if (global.crypto && crypto.getRandomValues) {
	  // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
	  // Moderately fast, high quality
	  var _rnds8 = new Uint8Array(16);
	  rng = function whatwgRNG() {
	    crypto.getRandomValues(_rnds8);
	    return _rnds8;
	  };
	}
	
	if (!rng) {
	  // Math.random()-based (RNG)
	  //
	  // If all else fails, use Math.random().  It's fast, but is of unspecified
	  // quality.
	  var  _rnds = new Array(16);
	  rng = function() {
	    for (var i = 0, r; i < 16; i++) {
	      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
	      _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
	    }
	
	    return _rnds;
	  };
	}
	
	module.exports = rng;
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ])
});
;
//# sourceMappingURL=sentry-browser-demo.js.map