(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["vendors"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _assertThisInitialized; }
/* harmony export */ });
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/callSuper.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/callSuper.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _callSuper; }
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./possibleConstructorReturn.js */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");



function _callSuper(t, o, e) {
  return o = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o), (0,_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, (0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_2__["default"])() ? Reflect.construct(o, e || [], (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t).constructor) : o.apply(t, e));
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _construct; }
/* harmony export */ });
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");


function _construct(t, e, r) {
  if ((0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_0__["default"])()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(p, r.prototype), p;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/get.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/get.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _get; }
/* harmony export */ });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js");

function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = (0,_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _getPrototypeOf; }
/* harmony export */ });
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inherits; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, e);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _isNativeFunction; }
/* harmony export */ });
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _isNativeReflectConstruct; }
/* harmony export */ });
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectSpread2; }
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _possibleConstructorReturn; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(t, e) {
  if (e && ("object" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _regeneratorRuntime; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/set.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/set.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _set; }
/* harmony export */ });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js");
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function set(e, r, t, o) {
  return set = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function (e, r, t, o) {
    var f,
      i = (0,_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r);
    if (i) {
      if ((f = Object.getOwnPropertyDescriptor(i, r)).set) return f.set.call(o, t), !0;
      if (!f.writable) return !1;
    }
    if (f = Object.getOwnPropertyDescriptor(o, r)) {
      if (!f.writable) return !1;
      f.value = t, Object.defineProperty(o, r, f);
    } else (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(o, r, t);
    return !0;
  }, set(e, r, t, o);
}
function _set(e, r, t, o, f) {
  if (!set(e, r, t, o || e) && f) throw new TypeError("failed to set property");
  return t;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(r, e) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r, e) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r, e) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/superPropBase.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _superPropBase; }
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");

function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t)););
  return t;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/superPropGet.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/superPropGet.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _superPropGet; }
/* harmony export */ });
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get.js */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");


function _superPropGet(t, o, e, r) {
  var p = (0,_get_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1 & r ? t.prototype : t), o, e);
  return 2 & r && "function" == typeof p ? function (t) {
    return p.apply(e, t);
  } : p;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/superPropSet.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/superPropSet.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _superPropSet; }
/* harmony export */ });
/* harmony import */ var _set_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set.js */ "./node_modules/@babel/runtime/helpers/esm/set.js");
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");


function _superPropSet(t, e, o, r, p, f) {
  return (0,_set_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(f ? t.prototype : t), e, o, r, p);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toArray.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toArray.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _toArray(r) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(r) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toPrimitive; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toPropertyKey; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(i) ? i : i + "";
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a) : void 0;
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _wrapNativeSuper; }
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNativeFunction.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js");
/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./construct.js */ "./node_modules/@babel/runtime/helpers/esm/construct.js");




function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return _wrapNativeSuper = function _wrapNativeSuper(t) {
    if (null === t || !(0,_isNativeFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return (0,_construct_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, arguments, (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Wrapper, t);
  }, _wrapNativeSuper(t);
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/ObserverComponent.js":
/*!**************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/ObserverComponent.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Observer */
/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useObserver */ "./node_modules/mobx-react-lite/es/useObserver.js");

function ObserverComponent(_a) {
    var children = _a.children, render = _a.render;
    var component = children || render;
    if (typeof component !== "function") {
        return null;
    }
    return (0,_useObserver__WEBPACK_IMPORTED_MODULE_0__.useObserver)(component);
}
if (true) {
    ObserverComponent.propTypes = {
        children: ObserverPropsCheck,
        render: ObserverPropsCheck
    };
}
ObserverComponent.displayName = "Observer";

function ObserverPropsCheck(props, key, componentName, location, propFullName) {
    var extraKey = key === "children" ? "render" : "children";
    var hasProp = typeof props[key] === "function";
    var hasExtraProp = typeof props[extraKey] === "function";
    if (hasProp && hasExtraProp) {
        return new Error("MobX Observer: Do not use children and render in the same time in`" + componentName);
    }
    if (hasProp || hasExtraProp) {
        return null;
    }
    return new Error("Invalid prop `" +
        propFullName +
        "` of type `" +
        typeof props[key] +
        "` supplied to" +
        " `" +
        componentName +
        "`, expected `function`.");
}
//# sourceMappingURL=ObserverComponent.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isUsingStaticRendering: function() { return /* reexport safe */ _staticRendering__WEBPACK_IMPORTED_MODULE_5__.isUsingStaticRendering; },
/* harmony export */   observer: function() { return /* reexport safe */ _observer__WEBPACK_IMPORTED_MODULE_6__.observer; }
/* harmony export */ });
/* unused harmony exports clearTimers, useObserver, useStaticRendering */
/* harmony import */ var _utils_assertEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/assertEnvironment */ "./node_modules/mobx-react-lite/es/utils/assertEnvironment.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "./node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js");
/* harmony import */ var _utils_observerBatching__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/observerBatching */ "./node_modules/mobx-react-lite/es/utils/observerBatching.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/utils */ "./node_modules/mobx-react-lite/es/utils/utils.js");
/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useObserver */ "./node_modules/mobx-react-lite/es/useObserver.js");
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./staticRendering */ "./node_modules/mobx-react-lite/es/staticRendering.js");
/* harmony import */ var _utils_observerFinalizationRegistry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/observerFinalizationRegistry */ "./node_modules/mobx-react-lite/es/utils/observerFinalizationRegistry.js");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./observer */ "./node_modules/mobx-react-lite/es/observer.js");
/* harmony import */ var _ObserverComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ObserverComponent */ "./node_modules/mobx-react-lite/es/ObserverComponent.js");
/* harmony import */ var _useLocalObservable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useLocalObservable */ "./node_modules/mobx-react-lite/es/useLocalObservable.js");
/* harmony import */ var _useLocalStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useLocalStore */ "./node_modules/mobx-react-lite/es/useLocalStore.js");
/* harmony import */ var _useAsObservableSource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useAsObservableSource */ "./node_modules/mobx-react-lite/es/useAsObservableSource.js");
var _a;







(0,_utils_observerBatching__WEBPACK_IMPORTED_MODULE_4__.observerBatching)(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates);






var clearTimers = (_a = _utils_observerFinalizationRegistry__WEBPACK_IMPORTED_MODULE_3__.observerFinalizationRegistry["finalizeAllImmediately"]) !== null && _a !== void 0 ? _a : (function () { });
function useObserver(fn, baseComponentName) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    if (true) {
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_11__.useDeprecated)("[mobx-react-lite] 'useObserver(fn)' is deprecated. Use `<Observer>{fn}</Observer>` instead, or wrap the entire component in `observer`.");
    }
    return (0,_useObserver__WEBPACK_IMPORTED_MODULE_2__.useObserver)(fn, baseComponentName);
}

function useStaticRendering(enable) {
    if (true) {
        console.warn("[mobx-react-lite] 'useStaticRendering' is deprecated, use 'enableStaticRendering' instead");
    }
    (0,_staticRendering__WEBPACK_IMPORTED_MODULE_5__.enableStaticRendering)(enable);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/observer.js":
/*!*****************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/observer.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observer: function() { return /* binding */ observer; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./staticRendering */ "./node_modules/mobx-react-lite/es/staticRendering.js");
/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useObserver */ "./node_modules/mobx-react-lite/es/useObserver.js");



var warnObserverOptionsDeprecated = true;
var hasSymbol = typeof Symbol === "function" && Symbol.for;
// Using react-is had some issues (and operates on elements, not on types), see #608 / #609
var ReactForwardRefSymbol = hasSymbol
    ? Symbol.for("react.forward_ref")
    : typeof react__WEBPACK_IMPORTED_MODULE_0__.forwardRef === "function" && (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props) { return null; })["$$typeof"];
var ReactMemoSymbol = hasSymbol
    ? Symbol.for("react.memo")
    : typeof react__WEBPACK_IMPORTED_MODULE_0__.memo === "function" && (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function (props) { return null; })["$$typeof"];
// n.b. base case is not used for actual typings or exported in the typing files
function observer(baseComponent, 
// TODO remove in next major
options) {
    var _a;
    if ( true && warnObserverOptionsDeprecated && options) {
        warnObserverOptionsDeprecated = false;
        console.warn("[mobx-react-lite] `observer(fn, { forwardRef: true })` is deprecated, use `observer(React.forwardRef(fn))`");
    }
    if (ReactMemoSymbol && baseComponent["$$typeof"] === ReactMemoSymbol) {
        throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
    }
    // The working of observer is explained step by step in this talk: https://www.youtube.com/watch?v=cPF4iBedoF0&feature=youtu.be&t=1307
    if ((0,_staticRendering__WEBPACK_IMPORTED_MODULE_2__.isUsingStaticRendering)()) {
        return baseComponent;
    }
    var useForwardRef = (_a = options === null || options === void 0 ? void 0 : options.forwardRef) !== null && _a !== void 0 ? _a : false;
    var render = baseComponent;
    var baseComponentName = baseComponent.displayName || baseComponent.name;
    // If already wrapped with forwardRef, unwrap,
    // so we can patch render and apply memo
    if (ReactForwardRefSymbol && baseComponent["$$typeof"] === ReactForwardRefSymbol) {
        useForwardRef = true;
        render = baseComponent["render"];
        if (typeof render !== "function") {
            throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
        }
    }
    var observerComponent = function (props, ref) {
        return (0,_useObserver__WEBPACK_IMPORTED_MODULE_1__.useObserver)(function () { return render(props, ref); }, baseComponentName);
    };
    // Don't set `displayName` for anonymous components,
    // so the `displayName` can be customized by user, see #3192.
    if (baseComponentName !== "") {
        ;
        observerComponent.displayName = baseComponentName;
    }
    // Support legacy context: `contextTypes` must be applied before `memo`
    if (baseComponent.contextTypes) {
        ;
        observerComponent.contextTypes = baseComponent.contextTypes;
    }
    if (useForwardRef) {
        // `forwardRef` must be applied prior `memo`
        // `forwardRef(observer(cmp))` throws:
        // "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))"
        observerComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(observerComponent);
    }
    // memo; we are not interested in deep updates
    // in props; we assume that if deep objects are changed,
    // this is in observables, which would have been tracked anyway
    observerComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(observerComponent);
    copyStaticProperties(baseComponent, observerComponent);
    if (true) {
        Object.defineProperty(observerComponent, "contextTypes", {
            set: function () {
                var _a;
                throw new Error("[mobx-react-lite] `".concat(this.displayName || ((_a = this.type) === null || _a === void 0 ? void 0 : _a.displayName) || "Component", ".contextTypes` must be set before applying `observer`."));
            }
        });
    }
    return observerComponent;
}
// based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js
var hoistBlackList = {
    $$typeof: true,
    render: true,
    compare: true,
    type: true,
    // Don't redefine `displayName`,
    // it's defined as getter-setter pair on `memo` (see #3192).
    displayName: true
};
function copyStaticProperties(base, target) {
    Object.keys(base).forEach(function (key) {
        if (!hoistBlackList[key]) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
        }
    });
}
//# sourceMappingURL=observer.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/staticRendering.js":
/*!************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/staticRendering.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enableStaticRendering: function() { return /* binding */ enableStaticRendering; },
/* harmony export */   isUsingStaticRendering: function() { return /* binding */ isUsingStaticRendering; }
/* harmony export */ });
var globalIsUsingStaticRendering = false;
function enableStaticRendering(enable) {
    globalIsUsingStaticRendering = enable;
}
function isUsingStaticRendering() {
    return globalIsUsingStaticRendering;
}
//# sourceMappingURL=staticRendering.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useAsObservableSource.js":
/*!******************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useAsObservableSource.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAsObservableSource: function() { return /* binding */ useAsObservableSource; }
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/utils */ "./node_modules/mobx-react-lite/es/utils/utils.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};



function useAsObservableSource(current) {
    if (true)
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.useDeprecated)("[mobx-react-lite] 'useAsObservableSource' is deprecated, please store the values directly in an observable, for example by using 'useLocalObservable', and sync future updates using 'useEffect' when needed. See the README for examples.");
    var _a = __read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () { return (0,mobx__WEBPACK_IMPORTED_MODULE_2__.observable)(current, {}, { deep: false }); }), 1), res = _a[0];
    (0,mobx__WEBPACK_IMPORTED_MODULE_2__.runInAction)(function () {
        Object.assign(res, current);
    });
    return res;
}
//# sourceMappingURL=useAsObservableSource.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useLocalObservable.js":
/*!***************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useLocalObservable.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useLocalObservable */
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");


function useLocalObservable(initializer, annotations) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () { return (0,mobx__WEBPACK_IMPORTED_MODULE_1__.observable)(initializer(), annotations, { autoBind: true }); })[0];
}
//# sourceMappingURL=useLocalObservable.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useLocalStore.js":
/*!**********************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useLocalStore.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useLocalStore */
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/utils */ "./node_modules/mobx-react-lite/es/utils/utils.js");
/* harmony import */ var _useAsObservableSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useAsObservableSource */ "./node_modules/mobx-react-lite/es/useAsObservableSource.js");




function useLocalStore(initializer, current) {
    if (true)
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.useDeprecated)("[mobx-react-lite] 'useLocalStore' is deprecated, use 'useLocalObservable' instead.");
    var source = current && (0,_useAsObservableSource__WEBPACK_IMPORTED_MODULE_1__.useAsObservableSource)(current);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () { return (0,mobx__WEBPACK_IMPORTED_MODULE_3__.observable)(initializer(source), undefined, { autoBind: true }); })[0];
}
//# sourceMappingURL=useLocalStore.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useObserver.js":
/*!********************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useObserver.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useObserver: function() { return /* binding */ useObserver; }
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _utils_printDebugValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/printDebugValue */ "./node_modules/mobx-react-lite/es/utils/printDebugValue.js");
/* harmony import */ var _utils_observerFinalizationRegistry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/observerFinalizationRegistry */ "./node_modules/mobx-react-lite/es/utils/observerFinalizationRegistry.js");
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./staticRendering */ "./node_modules/mobx-react-lite/es/staticRendering.js");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};





function observerComponentNameFor(baseComponentName) {
    return "observer".concat(baseComponentName);
}
/**
 * We use class to make it easier to detect in heap snapshots by name
 */
var ObjectToBeRetainedByReact = /** @class */ (function () {
    function ObjectToBeRetainedByReact() {
    }
    return ObjectToBeRetainedByReact;
}());
function objectToBeRetainedByReactFactory() {
    return new ObjectToBeRetainedByReact();
}
function useObserver(fn, baseComponentName) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    if ((0,_staticRendering__WEBPACK_IMPORTED_MODULE_2__.isUsingStaticRendering)()) {
        return fn();
    }
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(objectToBeRetainedByReactFactory), 1), objectRetainedByReact = _a[0];
    // Force update, see #2982
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(), 2), setState = _b[1];
    var forceUpdate = function () { return setState([]); };
    // StrictMode/ConcurrentMode/Suspense may mean that our component is
    // rendered and abandoned multiple times, so we need to track leaked
    // Reactions.
    var admRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    if (!admRef.current) {
        // First render
        admRef.current = {
            reaction: null,
            mounted: false,
            changedBeforeMount: false
        };
    }
    var adm = admRef.current;
    if (!adm.reaction) {
        // First render or component was not committed and reaction was disposed by registry
        adm.reaction = new mobx__WEBPACK_IMPORTED_MODULE_3__.Reaction(observerComponentNameFor(baseComponentName), function () {
            // Observable has changed, meaning we want to re-render
            // BUT if we're a component that hasn't yet got to the useEffect()
            // stage, we might be a component that _started_ to render, but
            // got dropped, and we don't want to make state changes then.
            // (It triggers warnings in StrictMode, for a start.)
            if (adm.mounted) {
                // We have reached useEffect(), so we're mounted, and can trigger an update
                forceUpdate();
            }
            else {
                // We haven't yet reached useEffect(), so we'll need to trigger a re-render
                // when (and if) useEffect() arrives.
                adm.changedBeforeMount = true;
            }
        });
        _utils_observerFinalizationRegistry__WEBPACK_IMPORTED_MODULE_1__.observerFinalizationRegistry.register(objectRetainedByReact, adm, adm);
    }
    react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue(adm.reaction, _utils_printDebugValue__WEBPACK_IMPORTED_MODULE_4__.printDebugValue);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        _utils_observerFinalizationRegistry__WEBPACK_IMPORTED_MODULE_1__.observerFinalizationRegistry.unregister(adm);
        adm.mounted = true;
        if (adm.reaction) {
            if (adm.changedBeforeMount) {
                // Got a change before mount, force an update
                adm.changedBeforeMount = false;
                forceUpdate();
            }
        }
        else {
            // The reaction we set up in our render has been disposed.
            // This can be due to bad timings of renderings, e.g. our
            // component was paused for a _very_ long time, and our
            // reaction got cleaned up
            // Re-create the reaction
            adm.reaction = new mobx__WEBPACK_IMPORTED_MODULE_3__.Reaction(observerComponentNameFor(baseComponentName), function () {
                // We've definitely already been mounted at this point
                forceUpdate();
            });
            forceUpdate();
        }
        return function () {
            adm.reaction.dispose();
            adm.reaction = null;
            adm.mounted = false;
            adm.changedBeforeMount = false;
        };
    }, []);
    // render the original component, but have the
    // reaction track the observables, so that rendering
    // can be invalidated (see above) once a dependency changes
    var rendering;
    var exception;
    adm.reaction.track(function () {
        try {
            rendering = fn();
        }
        catch (e) {
            exception = e;
        }
    });
    if (exception) {
        throw exception; // re-throw any exceptions caught during rendering
    }
    return rendering;
}
//# sourceMappingURL=useObserver.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/utils/UniversalFinalizationRegistry.js":
/*!********************************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/utils/UniversalFinalizationRegistry.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UniversalFinalizationRegistry: function() { return /* binding */ UniversalFinalizationRegistry; }
/* harmony export */ });
/* unused harmony exports REGISTRY_FINALIZE_AFTER, REGISTRY_SWEEP_INTERVAL, TimerBasedFinalizationRegistry */
var REGISTRY_FINALIZE_AFTER = 10000;
var REGISTRY_SWEEP_INTERVAL = 10000;
var TimerBasedFinalizationRegistry = /** @class */ (function () {
    function TimerBasedFinalizationRegistry(finalize) {
        var _this = this;
        Object.defineProperty(this, "finalize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: finalize
        });
        Object.defineProperty(this, "registrations", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        Object.defineProperty(this, "sweepTimeout", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // Bound so it can be used directly as setTimeout callback.
        Object.defineProperty(this, "sweep", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: function (maxAge) {
                if (maxAge === void 0) { maxAge = REGISTRY_FINALIZE_AFTER; }
                // cancel timeout so we can force sweep anytime
                clearTimeout(_this.sweepTimeout);
                _this.sweepTimeout = undefined;
                var now = Date.now();
                _this.registrations.forEach(function (registration, token) {
                    if (now - registration.registeredAt >= maxAge) {
                        _this.finalize(registration.value);
                        _this.registrations.delete(token);
                    }
                });
                if (_this.registrations.size > 0) {
                    _this.scheduleSweep();
                }
            }
        });
        // Bound so it can be exported directly as clearTimers test utility.
        Object.defineProperty(this, "finalizeAllImmediately", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: function () {
                _this.sweep(0);
            }
        });
    }
    // Token is actually required with this impl
    Object.defineProperty(TimerBasedFinalizationRegistry.prototype, "register", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (target, value, token) {
            this.registrations.set(token, {
                value: value,
                registeredAt: Date.now()
            });
            this.scheduleSweep();
        }
    });
    Object.defineProperty(TimerBasedFinalizationRegistry.prototype, "unregister", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (token) {
            this.registrations.delete(token);
        }
    });
    Object.defineProperty(TimerBasedFinalizationRegistry.prototype, "scheduleSweep", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            if (this.sweepTimeout === undefined) {
                this.sweepTimeout = setTimeout(this.sweep, REGISTRY_SWEEP_INTERVAL);
            }
        }
    });
    return TimerBasedFinalizationRegistry;
}());

var UniversalFinalizationRegistry = typeof FinalizationRegistry !== "undefined"
    ? FinalizationRegistry
    : TimerBasedFinalizationRegistry;
//# sourceMappingURL=UniversalFinalizationRegistry.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/utils/assertEnvironment.js":
/*!********************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/utils/assertEnvironment.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");


if (!react__WEBPACK_IMPORTED_MODULE_0__.useState) {
    throw new Error("mobx-react-lite requires React with Hooks support");
}
if (!mobx__WEBPACK_IMPORTED_MODULE_1__.makeObservable) {
    throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
}
//# sourceMappingURL=assertEnvironment.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/utils/observerBatching.js":
/*!*******************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/utils/observerBatching.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observerBatching: function() { return /* binding */ observerBatching; }
/* harmony export */ });
/* unused harmony exports defaultNoopBatch, isObserverBatched */
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");

function defaultNoopBatch(callback) {
    callback();
}
function observerBatching(reactionScheduler) {
    if (!reactionScheduler) {
        reactionScheduler = defaultNoopBatch;
        if (true) {
            console.warn("[MobX] Failed to get unstable_batched updates from react-dom / react-native");
        }
    }
    (0,mobx__WEBPACK_IMPORTED_MODULE_0__.configure)({ reactionScheduler: reactionScheduler });
}
var isObserverBatched = function () {
    if (true) {
        console.warn("[MobX] Deprecated");
    }
    return true;
};
//# sourceMappingURL=observerBatching.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/utils/observerFinalizationRegistry.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/utils/observerFinalizationRegistry.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observerFinalizationRegistry: function() { return /* binding */ observerFinalizationRegistry; }
/* harmony export */ });
/* harmony import */ var _UniversalFinalizationRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UniversalFinalizationRegistry */ "./node_modules/mobx-react-lite/es/utils/UniversalFinalizationRegistry.js");

var observerFinalizationRegistry = new _UniversalFinalizationRegistry__WEBPACK_IMPORTED_MODULE_0__.UniversalFinalizationRegistry(function (adm) {
    var _a;
    (_a = adm.reaction) === null || _a === void 0 ? void 0 : _a.dispose();
    adm.reaction = null;
});
//# sourceMappingURL=observerFinalizationRegistry.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/utils/printDebugValue.js":
/*!******************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/utils/printDebugValue.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printDebugValue: function() { return /* binding */ printDebugValue; }
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");

function printDebugValue(v) {
    return (0,mobx__WEBPACK_IMPORTED_MODULE_0__.getDependencyTree)(v);
}
//# sourceMappingURL=printDebugValue.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unstable_batchedUpdates: function() { return /* reexport safe */ react_dom__WEBPACK_IMPORTED_MODULE_0__.unstable_batchedUpdates; }
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/@tarojs/react/dist/react.esm.js");

//# sourceMappingURL=reactBatchedUpdates.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/utils/utils.js":
/*!********************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/utils/utils.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDeprecated: function() { return /* binding */ useDeprecated; }
/* harmony export */ });
var deprecatedMessages = [];
function useDeprecated(msg) {
    if (!deprecatedMessages.includes(msg)) {
        deprecatedMessages.push(msg);
        console.warn(msg);
    }
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/mobx-react/dist/mobxreact.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/mobx-react/dist/mobxreact.esm.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observer: function() { return /* binding */ observer; }
/* harmony export */ });
/* unused harmony exports MobXProviderContext, PropTypes, Provider, disposeOnUnmount, inject */
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");





var symbolId = 0;

function createSymbol(name) {
  if (typeof Symbol === "function") {
    return Symbol(name);
  }

  var symbol = "__$mobx-react " + name + " (" + symbolId + ")";
  symbolId++;
  return symbol;
}

var createdSymbols = {};
function newSymbol(name) {
  if (!createdSymbols[name]) {
    createdSymbols[name] = createSymbol(name);
  }

  return createdSymbols[name];
}
function shallowEqual(objA, objB) {
  //From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

function is(x, y) {
  // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
} // based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js


var hoistBlackList = {
  $$typeof: 1,
  render: 1,
  compare: 1,
  type: 1,
  childContextTypes: 1,
  contextType: 1,
  contextTypes: 1,
  defaultProps: 1,
  getDefaultProps: 1,
  getDerivedStateFromError: 1,
  getDerivedStateFromProps: 1,
  mixins: 1,
  displayName: 1,
  propTypes: 1
};
function copyStaticProperties(base, target) {
  var protoProps = Object.getOwnPropertyNames(Object.getPrototypeOf(base));
  Object.getOwnPropertyNames(base).forEach(function (key) {
    if (!hoistBlackList[key] && protoProps.indexOf(key) === -1) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
    }
  });
}
/**
 * Helper to set `prop` to `this` as non-enumerable (hidden prop)
 * @param target
 * @param prop
 * @param value
 */

function setHiddenProp(target, prop, value) {
  if (!Object.hasOwnProperty.call(target, prop)) {
    Object.defineProperty(target, prop, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: value
    });
  } else {
    target[prop] = value;
  }
}
/**
 * Utilities for patching componentWillUnmount, to make sure @disposeOnUnmount works correctly icm with user defined hooks
 * and the handler provided by mobx-react
 */

var mobxMixins = /*#__PURE__*/newSymbol("patchMixins");
var mobxPatchedDefinition = /*#__PURE__*/newSymbol("patchedDefinition");

function getMixins(target, methodName) {
  var mixins = target[mobxMixins] = target[mobxMixins] || {};
  var methodMixins = mixins[methodName] = mixins[methodName] || {};
  methodMixins.locks = methodMixins.locks || 0;
  methodMixins.methods = methodMixins.methods || [];
  return methodMixins;
}

function wrapper(realMethod, mixins) {
  var _this = this;

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  // locks are used to ensure that mixins are invoked only once per invocation, even on recursive calls
  mixins.locks++;

  try {
    var retVal;

    if (realMethod !== undefined && realMethod !== null) {
      retVal = realMethod.apply(this, args);
    }

    return retVal;
  } finally {
    mixins.locks--;

    if (mixins.locks === 0) {
      mixins.methods.forEach(function (mx) {
        mx.apply(_this, args);
      });
    }
  }
}

function wrapFunction(realMethod, mixins) {
  var fn = function fn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    wrapper.call.apply(wrapper, [this, realMethod, mixins].concat(args));
  };

  return fn;
}

function patch(target, methodName, mixinMethod) {
  var mixins = getMixins(target, methodName);

  if (mixins.methods.indexOf(mixinMethod) < 0) {
    mixins.methods.push(mixinMethod);
  }

  var oldDefinition = Object.getOwnPropertyDescriptor(target, methodName);

  if (oldDefinition && oldDefinition[mobxPatchedDefinition]) {
    // already patched definition, do not repatch
    return;
  }

  var originalMethod = target[methodName];
  var newDefinition = createDefinition(target, methodName, oldDefinition ? oldDefinition.enumerable : undefined, mixins, originalMethod);
  Object.defineProperty(target, methodName, newDefinition);
}

function createDefinition(target, methodName, enumerable, mixins, originalMethod) {
  var _ref;

  var wrappedFunc = wrapFunction(originalMethod, mixins);
  return _ref = {}, _ref[mobxPatchedDefinition] = true, _ref.get = function get() {
    return wrappedFunc;
  }, _ref.set = function set(value) {
    if (this === target) {
      wrappedFunc = wrapFunction(value, mixins);
    } else {
      // when it is an instance of the prototype/a child prototype patch that particular case again separately
      // since we need to store separate values depending on wether it is the actual instance, the prototype, etc
      // e.g. the method for super might not be the same as the method for the prototype which might be not the same
      // as the method for the instance
      var newDefinition = createDefinition(this, methodName, enumerable, mixins, value);
      Object.defineProperty(this, methodName, newDefinition);
    }
  }, _ref.configurable = true, _ref.enumerable = enumerable, _ref;
}

var mobxAdminProperty = mobx__WEBPACK_IMPORTED_MODULE_2__.$mobx || "$mobx"; // BC

var mobxObserverProperty = /*#__PURE__*/newSymbol("isMobXReactObserver");
var mobxIsUnmounted = /*#__PURE__*/newSymbol("isUnmounted");
var skipRenderKey = /*#__PURE__*/newSymbol("skipRender");
var isForcingUpdateKey = /*#__PURE__*/newSymbol("isForcingUpdate");
function makeClassComponentObserver(componentClass) {
  var target = componentClass.prototype;

  if (componentClass[mobxObserverProperty]) {
    var displayName = getDisplayName(target);
    console.warn("The provided component class (" + displayName + ")\n                has already been declared as an observer component.");
  } else {
    componentClass[mobxObserverProperty] = true;
  }

  if (target.componentWillReact) {
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  }

  if (componentClass["__proto__"] !== react__WEBPACK_IMPORTED_MODULE_0__.PureComponent) {
    if (!target.shouldComponentUpdate) {
      target.shouldComponentUpdate = observerSCU;
    } else if (target.shouldComponentUpdate !== observerSCU) {
      // n.b. unequal check, instead of existence check, as @observer might be on superclass as well
      throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.");
    }
  } // this.props and this.state are made observable, just to make sure @computed fields that
  // are defined inside the component, and which rely on state or props, re-compute if state or props change
  // (otherwise the computed wouldn't update and become stale on props change, since props are not observable)
  // However, this solution is not without it's own problems: https://github.com/mobxjs/mobx-react/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Aobservable-props-or-not+


  makeObservableProp(target, "props");
  makeObservableProp(target, "state");

  if (componentClass.contextType) {
    makeObservableProp(target, "context");
  }

  var originalRender = target.render;

  if (typeof originalRender !== "function") {
    var _displayName = getDisplayName(target);

    throw new Error("[mobx-react] class component (" + _displayName + ") is missing `render` method." + "\n`observer` requires `render` being a function defined on prototype." + "\n`render = () => {}` or `render = function() {}` is not supported.");
  }

  target.render = function () {
    this.render = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.isUsingStaticRendering)() ? originalRender : createReactiveRender.call(this, originalRender);
    return this.render();
  };

  patch(target, "componentDidMount", function () {
    this[mobxIsUnmounted] = false;

    if (!this.render[mobxAdminProperty]) {
      // Reaction is re-created automatically during render, but a component can re-mount and skip render #3395.
      // To re-create the reaction and re-subscribe to relevant observables we have to force an update.
      react__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.forceUpdate.call(this);
    }
  });
  patch(target, "componentWillUnmount", function () {
    if ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.isUsingStaticRendering)()) {
      return;
    }

    var reaction = this.render[mobxAdminProperty];

    if (reaction) {
      reaction.dispose(); // Forces reaction to be re-created on next render

      this.render[mobxAdminProperty] = null;
    } else {
      // Render may have been hot-swapped and/or overridden by a subclass.
      var _displayName2 = getDisplayName(this);

      console.warn("The reactive render of an observer class component (" + _displayName2 + ")\n                was overridden after MobX attached. This may result in a memory leak if the\n                overridden reactive render was not properly disposed.");
    }

    this[mobxIsUnmounted] = true;
  });
  return componentClass;
} // Generates a friendly name for debugging

function getDisplayName(comp) {
  return comp.displayName || comp.name || comp.constructor && (comp.constructor.displayName || comp.constructor.name) || "<component>";
}

function createReactiveRender(originalRender) {
  var _this = this;

  /**
   * If props are shallowly modified, react will render anyway,
   * so atom.reportChanged() should not result in yet another re-render
   */
  setHiddenProp(this, skipRenderKey, false);
  /**
   * forceUpdate will re-assign this.props. We don't want that to cause a loop,
   * so detect these changes
   */

  setHiddenProp(this, isForcingUpdateKey, false);
  var initialName = getDisplayName(this);
  var boundOriginalRender = originalRender.bind(this);
  var isRenderingPending = false;

  var createReaction = function createReaction() {
    var reaction = new mobx__WEBPACK_IMPORTED_MODULE_2__.Reaction(initialName + ".render()", function () {
      if (!isRenderingPending) {
        // N.B. Getting here *before mounting* means that a component constructor has side effects (see the relevant test in misc.test.tsx)
        // This unidiomatic React usage but React will correctly warn about this so we continue as usual
        // See #85 / Pull #44
        isRenderingPending = true;

        if (_this[mobxIsUnmounted] !== true) {
          var hasError = true;

          try {
            setHiddenProp(_this, isForcingUpdateKey, true);

            if (!_this[skipRenderKey]) {
              react__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.forceUpdate.call(_this);
            }

            hasError = false;
          } finally {
            setHiddenProp(_this, isForcingUpdateKey, false);

            if (hasError) {
              reaction.dispose(); // Forces reaction to be re-created on next render

              _this.render[mobxAdminProperty] = null;
            }
          }
        }
      }
    });
    reaction["reactComponent"] = _this;
    return reaction;
  };

  function reactiveRender() {
    var _reactiveRender$mobxA;

    isRenderingPending = false; // Create reaction lazily to support re-mounting #3395

    var reaction = (_reactiveRender$mobxA = reactiveRender[mobxAdminProperty]) != null ? _reactiveRender$mobxA : reactiveRender[mobxAdminProperty] = createReaction();
    var exception = undefined;
    var rendering = undefined;
    reaction.track(function () {
      try {
        // TODO@major
        // Optimization: replace with _allowStateChangesStart/End (not available in mobx@6.0.0)
        rendering = (0,mobx__WEBPACK_IMPORTED_MODULE_2__._allowStateChanges)(false, boundOriginalRender);
      } catch (e) {
        exception = e;
      }
    });

    if (exception) {
      throw exception;
    }

    return rendering;
  }

  return reactiveRender;
}

function observerSCU(nextProps, nextState) {
  if ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.isUsingStaticRendering)()) {
    console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.");
  } // update on any state changes (as is the default)


  if (this.state !== nextState) {
    return true;
  } // update if props are shallowly not equal, inspired by PureRenderMixin
  // we could return just 'false' here, and avoid the `skipRender` checks etc
  // however, it is nicer if lifecycle events are triggered like usually,
  // so we return true here if props are shallowly modified.


  return !shallowEqual(this.props, nextProps);
}

function makeObservableProp(target, propName) {
  var valueHolderKey = newSymbol("reactProp_" + propName + "_valueHolder");
  var atomHolderKey = newSymbol("reactProp_" + propName + "_atomHolder");

  function getAtom() {
    if (!this[atomHolderKey]) {
      setHiddenProp(this, atomHolderKey, (0,mobx__WEBPACK_IMPORTED_MODULE_2__.createAtom)("reactive " + propName));
    }

    return this[atomHolderKey];
  }

  Object.defineProperty(target, propName, {
    configurable: true,
    enumerable: true,
    get: function get() {
      var prevReadState = false; // Why this check? BC?
      // @ts-expect-error

      if (mobx__WEBPACK_IMPORTED_MODULE_2__._allowStateReadsStart && mobx__WEBPACK_IMPORTED_MODULE_2__._allowStateReadsEnd) {
        prevReadState = (0,mobx__WEBPACK_IMPORTED_MODULE_2__._allowStateReadsStart)(true);
      }

      getAtom.call(this).reportObserved(); // Why this check? BC?
      // @ts-expect-error

      if (mobx__WEBPACK_IMPORTED_MODULE_2__._allowStateReadsStart && mobx__WEBPACK_IMPORTED_MODULE_2__._allowStateReadsEnd) {
        (0,mobx__WEBPACK_IMPORTED_MODULE_2__._allowStateReadsEnd)(prevReadState);
      }

      return this[valueHolderKey];
    },
    set: function set(v) {
      if (!this[isForcingUpdateKey] && !shallowEqual(this[valueHolderKey], v)) {
        setHiddenProp(this, valueHolderKey, v);
        setHiddenProp(this, skipRenderKey, true);
        getAtom.call(this).reportChanged();
        setHiddenProp(this, skipRenderKey, false);
      } else {
        setHiddenProp(this, valueHolderKey, v);
      }
    }
  });
}

/**
 * Observer function / decorator
 */

function observer(component) {
  if (component["isMobxInjector"] === true) {
    console.warn("Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`");
  }

  if (Object.prototype.isPrototypeOf.call(react__WEBPACK_IMPORTED_MODULE_0__.Component, component) || Object.prototype.isPrototypeOf.call(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent, component)) {
    // Class component
    return makeClassComponentObserver(component);
  } else {
    // Function component
    return (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(component);
  }
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
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

var _excluded = ["children"];
var MobXProviderContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
function Provider(props) {
  var children = props.children,
      stores = _objectWithoutPropertiesLoose(props, _excluded);

  var parentValue = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MobXProviderContext);
  var mutableProviderRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(_extends({}, parentValue, stores));
  var value = mutableProviderRef.current;

  if (true) {
    var newValue = _extends({}, value, stores); // spread in previous state for the context based stores


    if (!shallowEqual(value, newValue)) {
      throw new Error("MobX Provider: The set of provided stores has changed. See: https://github.com/mobxjs/mobx-react#the-set-of-provided-stores-has-changed-error.");
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(MobXProviderContext.Provider, {
    value: value
  }, children);
}
Provider.displayName = "MobXProvider";

/**
 * Store Injection
 */

function createStoreInjector(grabStoresFn, component, injectNames, makeReactive) {
  // Support forward refs
  var Injector = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
    var newProps = _extends({}, props);

    var context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MobXProviderContext);
    Object.assign(newProps, grabStoresFn(context || {}, newProps) || {});

    if (ref) {
      newProps.ref = ref;
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(component, newProps);
  });
  if (makeReactive) Injector = observer(Injector);
  Injector["isMobxInjector"] = true; // assigned late to suppress observer warning
  // Static fields from component should be visible on the generated Injector

  copyStaticProperties(component, Injector);
  Injector["wrappedComponent"] = component;
  Injector.displayName = getInjectName(component, injectNames);
  return Injector;
}

function getInjectName(component, injectNames) {
  var displayName;
  var componentName = component.displayName || component.name || component.constructor && component.constructor.name || "Component";
  if (injectNames) displayName = "inject-with-" + injectNames + "(" + componentName + ")";else displayName = "inject(" + componentName + ")";
  return displayName;
}

function grabStoresByName(storeNames) {
  return function (baseStores, nextProps) {
    storeNames.forEach(function (storeName) {
      if (storeName in nextProps // prefer props over stores
      ) return;
      if (!(storeName in baseStores)) throw new Error("MobX injector: Store '" + storeName + "' is not available! Make sure it is provided by some Provider");
      nextProps[storeName] = baseStores[storeName];
    });
    return nextProps;
  };
}
/**
 * higher order component that injects stores to a child.
 * takes either a varargs list of strings, which are stores read from the context,
 * or a function that manually maps the available stores from the context to props:
 * storesToProps(mobxStores, props, context) => newProps
 */


function inject() {
  for (var _len = arguments.length, storeNames = new Array(_len), _key = 0; _key < _len; _key++) {
    storeNames[_key] = arguments[_key];
  }

  if (typeof arguments[0] === "function") {
    var grabStoresFn = arguments[0];
    return function (componentClass) {
      return createStoreInjector(grabStoresFn, componentClass, grabStoresFn.name, true);
    };
  } else {
    return function (componentClass) {
      return createStoreInjector(grabStoresByName(storeNames), componentClass, storeNames.join("-"), false);
    };
  }
}

var protoStoreKey = /*#__PURE__*/newSymbol("disposeOnUnmountProto");
var instStoreKey = /*#__PURE__*/newSymbol("disposeOnUnmountInst");

function runDisposersOnWillUnmount() {
  var _this = this;
  [].concat(this[protoStoreKey] || [], this[instStoreKey] || []).forEach(function (propKeyOrFunction) {
    var prop = typeof propKeyOrFunction === "string" ? _this[propKeyOrFunction] : propKeyOrFunction;

    if (prop !== undefined && prop !== null) {
      if (Array.isArray(prop)) prop.map(function (f) {
        return f();
      });else prop();
    }
  });
}

function disposeOnUnmount(target, propertyKeyOrFunction) {
  if (Array.isArray(propertyKeyOrFunction)) {
    return propertyKeyOrFunction.map(function (fn) {
      return disposeOnUnmount(target, fn);
    });
  }

  var c = Object.getPrototypeOf(target).constructor;
  var c2 = Object.getPrototypeOf(target.constructor); // Special case for react-hot-loader

  var c3 = Object.getPrototypeOf(Object.getPrototypeOf(target));

  if (!(c === react__WEBPACK_IMPORTED_MODULE_0__.Component || c === react__WEBPACK_IMPORTED_MODULE_0__.PureComponent || c2 === react__WEBPACK_IMPORTED_MODULE_0__.Component || c2 === react__WEBPACK_IMPORTED_MODULE_0__.PureComponent || c3 === react__WEBPACK_IMPORTED_MODULE_0__.Component || c3 === react__WEBPACK_IMPORTED_MODULE_0__.PureComponent)) {
    throw new Error("[mobx-react] disposeOnUnmount only supports direct subclasses of React.Component or React.PureComponent.");
  }

  if (typeof propertyKeyOrFunction !== "string" && typeof propertyKeyOrFunction !== "function" && !Array.isArray(propertyKeyOrFunction)) {
    throw new Error("[mobx-react] disposeOnUnmount only works if the parameter is either a property key or a function.");
  } // decorator's target is the prototype, so it doesn't have any instance properties like props


  var isDecorator = typeof propertyKeyOrFunction === "string"; // add property key / function we want run (disposed) to the store

  var componentWasAlreadyModified = !!target[protoStoreKey] || !!target[instStoreKey];
  var store = isDecorator ? // decorators are added to the prototype store
  target[protoStoreKey] || (target[protoStoreKey] = []) : // functions are added to the instance store
  target[instStoreKey] || (target[instStoreKey] = []);
  store.push(propertyKeyOrFunction); // tweak the component class componentWillUnmount if not done already

  if (!componentWasAlreadyModified) {
    patch(target, "componentWillUnmount", runDisposersOnWillUnmount);
  } // return the disposer as is if invoked as a non decorator


  if (typeof propertyKeyOrFunction !== "string") {
    return propertyKeyOrFunction;
  }
}

function createChainableTypeChecker(validator) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      rest[_key - 6] = arguments[_key];
    }

    return (0,mobx__WEBPACK_IMPORTED_MODULE_2__.untracked)(function () {
      componentName = componentName || "<<anonymous>>";
      propFullName = propFullName || propName;

      if (props[propName] == null) {
        if (isRequired) {
          var actual = props[propName] === null ? "null" : "undefined";
          return new Error("The " + location + " `" + propFullName + "` is marked as required " + "in `" + componentName + "`, but its value is `" + actual + "`.");
        }

        return null;
      } else {
        // @ts-ignore rest arg is necessary for some React internals - fails tests otherwise
        return validator.apply(void 0, [props, propName, componentName, location, propFullName].concat(rest));
      }
    });
  }

  var chainedCheckType = checkType.bind(null, false); // Add isRequired to satisfy Requirable

  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
} // Copied from React.PropTypes


function isSymbol(propType, propValue) {
  // Native Symbol.
  if (propType === "symbol") {
    return true;
  } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


  if (propValue["@@toStringTag"] === "Symbol") {
    return true;
  } // Fallback for non-spec compliant Symbols which are polyfilled.


  if (typeof Symbol === "function" && propValue instanceof Symbol) {
    return true;
  }

  return false;
} // Copied from React.PropTypes


function getPropType(propValue) {
  var propType = typeof propValue;

  if (Array.isArray(propValue)) {
    return "array";
  }

  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return "object";
  }

  if (isSymbol(propType, propValue)) {
    return "symbol";
  }

  return propType;
} // This handles more types than `getPropType`. Only used for error messages.
// Copied from React.PropTypes


function getPreciseType(propValue) {
  var propType = getPropType(propValue);

  if (propType === "object") {
    if (propValue instanceof Date) {
      return "date";
    } else if (propValue instanceof RegExp) {
      return "regexp";
    }
  }

  return propType;
}

function createObservableTypeCheckerCreator(allowNativeType, mobxType) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    return (0,mobx__WEBPACK_IMPORTED_MODULE_2__.untracked)(function () {
      if (allowNativeType) {
        if (getPropType(props[propName]) === mobxType.toLowerCase()) return null;
      }

      var mobxChecker;

      switch (mobxType) {
        case "Array":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_2__.isObservableArray;
          break;

        case "Object":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_2__.isObservableObject;
          break;

        case "Map":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_2__.isObservableMap;
          break;

        default:
          throw new Error("Unexpected mobxType: " + mobxType);
      }

      var propValue = props[propName];

      if (!mobxChecker(propValue)) {
        var preciseType = getPreciseType(propValue);
        var nativeTypeExpectationMessage = allowNativeType ? " or javascript `" + mobxType.toLowerCase() + "`" : "";
        return new Error("Invalid prop `" + propFullName + "` of type `" + preciseType + "` supplied to" + " `" + componentName + "`, expected `mobx.Observable" + mobxType + "`" + nativeTypeExpectationMessage + ".");
      }

      return null;
    });
  });
}

function createObservableArrayOfTypeChecker(allowNativeType, typeChecker) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
      rest[_key2 - 5] = arguments[_key2];
    }

    return (0,mobx__WEBPACK_IMPORTED_MODULE_2__.untracked)(function () {
      if (typeof typeChecker !== "function") {
        return new Error("Property `" + propFullName + "` of component `" + componentName + "` has " + "invalid PropType notation.");
      } else {
        var error = createObservableTypeCheckerCreator(allowNativeType, "Array")(props, propName, componentName, location, propFullName);
        if (error instanceof Error) return error;
        var propValue = props[propName];

        for (var i = 0; i < propValue.length; i++) {
          error = typeChecker.apply(void 0, [propValue, i, componentName, location, propFullName + "[" + i + "]"].concat(rest));
          if (error instanceof Error) return error;
        }

        return null;
      }
    });
  });
}

var observableArray = /*#__PURE__*/createObservableTypeCheckerCreator(false, "Array");
var observableArrayOf = /*#__PURE__*/createObservableArrayOfTypeChecker.bind(null, false);
var observableMap = /*#__PURE__*/createObservableTypeCheckerCreator(false, "Map");
var observableObject = /*#__PURE__*/createObservableTypeCheckerCreator(false, "Object");
var arrayOrObservableArray = /*#__PURE__*/createObservableTypeCheckerCreator(true, "Array");
var arrayOrObservableArrayOf = /*#__PURE__*/createObservableArrayOfTypeChecker.bind(null, true);
var objectOrObservableObject = /*#__PURE__*/createObservableTypeCheckerCreator(true, "Object");
var PropTypes = {
  observableArray: observableArray,
  observableArrayOf: observableArrayOf,
  observableMap: observableMap,
  observableObject: observableObject,
  arrayOrObservableArray: arrayOrObservableArray,
  arrayOrObservableArrayOf: arrayOrObservableArrayOf,
  objectOrObservableObject: objectOrObservableObject
};

if (!react__WEBPACK_IMPORTED_MODULE_0__.Component) throw new Error("mobx-react requires React to be available");
if (!mobx__WEBPACK_IMPORTED_MODULE_2__.observable) throw new Error("mobx-react requires mobx to be available");


//# sourceMappingURL=mobxreact.esm.js.map


/***/ }),

/***/ "./node_modules/mobx/dist/mobx.esm.js":
/*!********************************************!*\
  !*** ./node_modules/mobx/dist/mobx.esm.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $mobx: function() { return /* binding */ $mobx; },
/* harmony export */   Reaction: function() { return /* binding */ Reaction; },
/* harmony export */   _allowStateChanges: function() { return /* binding */ allowStateChanges; },
/* harmony export */   _allowStateReadsEnd: function() { return /* binding */ allowStateReadsEnd; },
/* harmony export */   _allowStateReadsStart: function() { return /* binding */ allowStateReadsStart; },
/* harmony export */   configure: function() { return /* binding */ configure; },
/* harmony export */   createAtom: function() { return /* binding */ createAtom; },
/* harmony export */   getDependencyTree: function() { return /* binding */ getDependencyTree; },
/* harmony export */   isObservableArray: function() { return /* binding */ isObservableArray; },
/* harmony export */   isObservableMap: function() { return /* binding */ isObservableMap; },
/* harmony export */   isObservableObject: function() { return /* binding */ isObservableObject; },
/* harmony export */   makeObservable: function() { return /* binding */ makeObservable; },
/* harmony export */   observable: function() { return /* binding */ observable; },
/* harmony export */   runInAction: function() { return /* binding */ runInAction; },
/* harmony export */   untracked: function() { return /* binding */ untracked; }
/* harmony export */ });
/* unused harmony exports FlowCancellationError, ObservableMap, ObservableSet, _allowStateChangesInsideComputed, _autoAction, _endAction, _getAdministration, _getGlobalState, _interceptReads, _isComputingDerivation, _resetGlobalState, _startAction, action, autorun, comparer, computed, defineProperty, entries, extendObservable, flow, flowResult, get, getAtom, getDebugName, getObserverTree, has, intercept, isAction, isBoxedObservable, isComputed, isComputedProp, isFlow, isFlowCancellationError, isObservable, isObservableProp, isObservableSet, keys, makeAutoObservable, observe, onBecomeObserved, onBecomeUnobserved, onReactionError, override, ownKeys, reaction, remove, set, spy, toJS, trace, transaction, values, when */
/* provided dependency */ var window = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"];
var niceErrors = {
  0: "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
  1: function _(annotationType, key) {
    return "Cannot apply '" + annotationType + "' to '" + key.toString() + "': Field not found.";
  },
  /*
  2(prop) {
      return `invalid decorator for '${prop.toString()}'`
  },
  3(prop) {
      return `Cannot decorate '${prop.toString()}': action can only be used on properties with a function value.`
  },
  4(prop) {
      return `Cannot decorate '${prop.toString()}': computed can only be used on getter properties.`
  },
  */
  5: "'keys()' can only be used on observable objects, arrays, sets and maps",
  6: "'values()' can only be used on observable objects, arrays, sets and maps",
  7: "'entries()' can only be used on observable objects, arrays and maps",
  8: "'set()' can only be used on observable objects, arrays and maps",
  9: "'remove()' can only be used on observable objects, arrays and maps",
  10: "'has()' can only be used on observable objects, arrays and maps",
  11: "'get()' can only be used on observable objects, arrays and maps",
  12: "Invalid annotation",
  13: "Dynamic observable objects cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
  14: "Intercept handlers should return nothing or a change object",
  15: "Observable arrays cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
  16: "Modification exception: the internal structure of an observable array was changed.",
  17: function _(index, length) {
    return "[mobx.array] Index out of bounds, " + index + " is larger than " + length;
  },
  18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
  19: function _(other) {
    return "Cannot initialize from classes that inherit from Map: " + other.constructor.name;
  },
  20: function _(other) {
    return "Cannot initialize map from " + other;
  },
  21: function _(dataStructure) {
    return "Cannot convert to map from '" + dataStructure + "'";
  },
  22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
  23: "It is not possible to get index atoms from arrays",
  24: function _(thing) {
    return "Cannot obtain administration from " + thing;
  },
  25: function _(property, name) {
    return "the entry '" + property + "' does not exist in the observable map '" + name + "'";
  },
  26: "please specify a property",
  27: function _(property, name) {
    return "no observable property '" + property.toString() + "' found on the observable object '" + name + "'";
  },
  28: function _(thing) {
    return "Cannot obtain atom from " + thing;
  },
  29: "Expecting some object",
  30: "invalid action stack. did you forget to finish an action?",
  31: "missing option for computed: get",
  32: function _(name, derivation) {
    return "Cycle detected in computation " + name + ": " + derivation;
  },
  33: function _(name) {
    return "The setter of computed value '" + name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
  },
  34: function _(name) {
    return "[ComputedValue '" + name + "'] It is not possible to assign a new value to a computed value.";
  },
  35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
  36: "isolateGlobalState should be called before MobX is running any reactions",
  37: function _(method) {
    return "[mobx] `observableArray." + method + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." + method + "()` instead";
  },
  38: "'ownKeys()' can only be used on observable objects",
  39: "'defineProperty()' can only be used on observable objects"
};
var errors =  true ? niceErrors : 0;
function die(error) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (true) {
    var e = typeof error === "string" ? error : errors[error];
    if (typeof e === "function") e = e.apply(null, args);
    throw new Error("[MobX] " + e);
  }
  throw new Error(typeof error === "number" ? "[MobX] minified error nr: " + error + (args.length ? " " + args.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + error);
}

var mockGlobal = {};
function getGlobal() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof __webpack_require__.g !== "undefined") {
    return __webpack_require__.g;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  return mockGlobal;
}

// We shorten anything used > 5 times
var assign = Object.assign;
var getDescriptor = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var objectPrototype = Object.prototype;
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var hasProxy = typeof Proxy !== "undefined";
var plainObjectString = /*#__PURE__*/Object.toString();
function assertProxies() {
  if (!hasProxy) {
    die( true ? "`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`" : 0);
  }
}
function warnAboutProxyRequirement(msg) {
  if ( true && globalState.verifyProxies) {
    die("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to " + msg);
  }
}
function getNextId() {
  return ++globalState.mobxGuid;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once(func) {
  var invoked = false;
  return function () {
    if (invoked) {
      return;
    }
    invoked = true;
    return func.apply(this, arguments);
  };
}
var noop = function noop() {};
function isFunction(fn) {
  return typeof fn === "function";
}
function isStringish(value) {
  var t = typeof value;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return true;
  }
  return false;
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
function isPlainObject(value) {
  if (!isObject(value)) {
    return false;
  }
  var proto = Object.getPrototypeOf(value);
  if (proto == null) {
    return true;
  }
  var protoConstructor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof protoConstructor === "function" && protoConstructor.toString() === plainObjectString;
}
// https://stackoverflow.com/a/37865170
function isGenerator(obj) {
  var constructor = obj == null ? void 0 : obj.constructor;
  if (!constructor) {
    return false;
  }
  if ("GeneratorFunction" === constructor.name || "GeneratorFunction" === constructor.displayName) {
    return true;
  }
  return false;
}
function addHiddenProp(object, propName, value) {
  defineProperty(object, propName, {
    enumerable: false,
    writable: true,
    configurable: true,
    value: value
  });
}
function addHiddenFinalProp(object, propName, value) {
  defineProperty(object, propName, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: value
  });
}
function createInstanceofPredicate(name, theClass) {
  var propName = "isMobX" + name;
  theClass.prototype[propName] = true;
  return function (x) {
    return isObject(x) && x[propName] === true;
  };
}
/**
 * Yields true for both native and observable Map, even across different windows.
 */
function isES6Map(thing) {
  return thing != null && Object.prototype.toString.call(thing) === "[object Map]";
}
/**
 * Makes sure a Map is an instance of non-inherited native or observable Map.
 */
function isPlainES6Map(thing) {
  var mapProto = Object.getPrototypeOf(thing);
  var objectProto = Object.getPrototypeOf(mapProto);
  var nullProto = Object.getPrototypeOf(objectProto);
  return nullProto === null;
}
/**
 * Yields true for both native and observable Set, even across different windows.
 */
function isES6Set(thing) {
  return thing != null && Object.prototype.toString.call(thing) === "[object Set]";
}
var hasGetOwnPropertySymbols = typeof Object.getOwnPropertySymbols !== "undefined";
/**
 * Returns the following: own enumerable keys and symbols.
 */
function getPlainObjectKeys(object) {
  var keys = Object.keys(object);
  // Not supported in IE, so there are not going to be symbol props anyway...
  if (!hasGetOwnPropertySymbols) {
    return keys;
  }
  var symbols = Object.getOwnPropertySymbols(object);
  if (!symbols.length) {
    return keys;
  }
  return [].concat(keys, symbols.filter(function (s) {
    return objectPrototype.propertyIsEnumerable.call(object, s);
  }));
}
// From Immer utils
// Returns all own keys, including non-enumerable and symbolic
var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : hasGetOwnPropertySymbols ? function (obj) {
  return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
} : /* istanbul ignore next */Object.getOwnPropertyNames;
function stringifyKey(key) {
  if (typeof key === "string") {
    return key;
  }
  if (typeof key === "symbol") {
    return key.toString();
  }
  return new String(key).toString();
}
function toPrimitive(value) {
  return value === null ? null : typeof value === "object" ? "" + value : value;
}
function hasProp(target, prop) {
  return objectPrototype.hasOwnProperty.call(target, prop);
}
// From Immer utils
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(target) {
  // Polyfill needed for Hermes and IE, see https://github.com/facebook/hermes/issues/274
  var res = {};
  // Note: without polyfill for ownKeys, symbols won't be picked up
  ownKeys(target).forEach(function (key) {
    res[key] = getDescriptor(target, key);
  });
  return res;
};
function getFlag(flags, mask) {
  return !!(flags & mask);
}
function setFlag(flags, mask, newValue) {
  if (newValue) {
    flags |= mask;
  } else {
    flags &= ~mask;
  }
  return flags;
}

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _createForOfIteratorHelperLoose(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (t) return (t = t.call(r)).next.bind(t);
  if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
    t && (r = t);
    var o = 0;
    return function () {
      return o >= r.length ? {
        done: !0
      } : {
        done: !1,
        value: r[o++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var storedAnnotationsSymbol = /*#__PURE__*/Symbol("mobx-stored-annotations");
/**
 * Creates a function that acts as
 * - decorator
 * - annotation object
 */
function createDecoratorAnnotation(annotation) {
  function decorator(target, property) {
    if (is20223Decorator(property)) {
      return annotation.decorate_20223_(target, property);
    } else {
      storeAnnotation(target, property, annotation);
    }
  }
  return Object.assign(decorator, annotation);
}
/**
 * Stores annotation to prototype,
 * so it can be inspected later by `makeObservable` called from constructor
 */
function storeAnnotation(prototype, key, annotation) {
  if (!hasProp(prototype, storedAnnotationsSymbol)) {
    addHiddenProp(prototype, storedAnnotationsSymbol, _extends({}, prototype[storedAnnotationsSymbol]));
  }
  // @override must override something
  if ( true && isOverride(annotation) && !hasProp(prototype[storedAnnotationsSymbol], key)) {
    var fieldName = prototype.constructor.name + ".prototype." + key.toString();
    die("'" + fieldName + "' is decorated with 'override', " + "but no such decorated member was found on prototype.");
  }
  // Cannot re-decorate
  assertNotDecorated(prototype, annotation, key);
  // Ignore override
  if (!isOverride(annotation)) {
    prototype[storedAnnotationsSymbol][key] = annotation;
  }
}
function assertNotDecorated(prototype, annotation, key) {
  if ( true && !isOverride(annotation) && hasProp(prototype[storedAnnotationsSymbol], key)) {
    var fieldName = prototype.constructor.name + ".prototype." + key.toString();
    var currentAnnotationType = prototype[storedAnnotationsSymbol][key].annotationType_;
    var requestedAnnotationType = annotation.annotationType_;
    die("Cannot apply '@" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already decorated with '@" + currentAnnotationType + "'.") + "\nRe-decorating fields is not allowed." + "\nUse '@override' decorator for methods overridden by subclass.");
  }
}
/**
 * Collects annotations from prototypes and stores them on target (instance)
 */
function collectStoredAnnotations(target) {
  if (!hasProp(target, storedAnnotationsSymbol)) {
    // if (__DEV__ && !target[storedAnnotationsSymbol]) {
    //     die(
    //         `No annotations were passed to makeObservable, but no decorated members have been found either`
    //     )
    // }
    // We need a copy as we will remove annotation from the list once it's applied.
    addHiddenProp(target, storedAnnotationsSymbol, _extends({}, target[storedAnnotationsSymbol]));
  }
  return target[storedAnnotationsSymbol];
}
function is20223Decorator(context) {
  return typeof context == "object" && typeof context["kind"] == "string";
}
function assert20223DecoratorType(context, types) {
  if ( true && !types.includes(context.kind)) {
    die("The decorator applied to '" + String(context.name) + "' cannot be used on a " + context.kind + " element");
  }
}

var $mobx = /*#__PURE__*/Symbol("mobx administration");
var Atom = /*#__PURE__*/function () {
  /**
   * Create a new atom. For debugging purposes it is recommended to give it a name.
   * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
   */
  function Atom(name_) {
    if (name_ === void 0) {
      name_ =  true ? "Atom@" + getNextId() : 0;
    }
    this.name_ = void 0;
    this.flags_ = 0;
    this.observers_ = new Set();
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.NOT_TRACKING_;
    // onBecomeObservedListeners
    this.onBOL = void 0;
    // onBecomeUnobservedListeners
    this.onBUOL = void 0;
    this.name_ = name_;
  }
  // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
  var _proto = Atom.prototype;
  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function (listener) {
        return listener();
      });
    }
  };
  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function (listener) {
        return listener();
      });
    }
  }
  /**
   * Invoke this method to notify mobx that your atom has been used somehow.
   * Returns true if there is currently a reactive context.
   */;
  _proto.reportObserved = function reportObserved$1() {
    return reportObserved(this);
  }
  /**
   * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
   */;
  _proto.reportChanged = function reportChanged() {
    startBatch();
    propagateChanged(this);
    endBatch();
  };
  _proto.toString = function toString() {
    return this.name_;
  };
  return _createClass(Atom, [{
    key: "isBeingObserved",
    get: function get() {
      return getFlag(this.flags_, Atom.isBeingObservedMask_);
    },
    set: function set(newValue) {
      this.flags_ = setFlag(this.flags_, Atom.isBeingObservedMask_, newValue);
    }
  }, {
    key: "isPendingUnobservation",
    get: function get() {
      return getFlag(this.flags_, Atom.isPendingUnobservationMask_);
    },
    set: function set(newValue) {
      this.flags_ = setFlag(this.flags_, Atom.isPendingUnobservationMask_, newValue);
    }
  }, {
    key: "diffValue",
    get: function get() {
      return getFlag(this.flags_, Atom.diffValueMask_) ? 1 : 0;
    },
    set: function set(newValue) {
      this.flags_ = setFlag(this.flags_, Atom.diffValueMask_, newValue === 1 ? true : false);
    }
  }]);
}();
Atom.isBeingObservedMask_ = 1;
Atom.isPendingUnobservationMask_ = 2;
Atom.diffValueMask_ = 4;
var isAtom = /*#__PURE__*/createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
  if (onBecomeObservedHandler === void 0) {
    onBecomeObservedHandler = noop;
  }
  if (onBecomeUnobservedHandler === void 0) {
    onBecomeUnobservedHandler = noop;
  }
  var atom = new Atom(name);
  // default `noop` listener will not initialize the hook Set
  if (onBecomeObservedHandler !== noop) {
    onBecomeObserved(atom, onBecomeObservedHandler);
  }
  if (onBecomeUnobservedHandler !== noop) {
    onBecomeUnobserved(atom, onBecomeUnobservedHandler);
  }
  return atom;
}

function identityComparer(a, b) {
  return a === b;
}
function structuralComparer(a, b) {
  return deepEqual(a, b);
}
function shallowComparer(a, b) {
  return deepEqual(a, b, 1);
}
function defaultComparer(a, b) {
  if (Object.is) {
    return Object.is(a, b);
  }
  return a === b ? a !== 0 || 1 / a === 1 / b : a !== a && b !== b;
}
var comparer = {
  identity: identityComparer,
  structural: structuralComparer,
  "default": defaultComparer,
  shallow: shallowComparer
};

function deepEnhancer(v, _, name) {
  // it is an observable already, done
  if (isObservable(v)) {
    return v;
  }
  // something that can be converted and mutated?
  if (Array.isArray(v)) {
    return observable.array(v, {
      name: name
    });
  }
  if (isPlainObject(v)) {
    return observable.object(v, undefined, {
      name: name
    });
  }
  if (isES6Map(v)) {
    return observable.map(v, {
      name: name
    });
  }
  if (isES6Set(v)) {
    return observable.set(v, {
      name: name
    });
  }
  if (typeof v === "function" && !isAction(v) && !isFlow(v)) {
    if (isGenerator(v)) {
      return flow(v);
    } else {
      return autoAction(name, v);
    }
  }
  return v;
}
function shallowEnhancer(v, _, name) {
  if (v === undefined || v === null) {
    return v;
  }
  if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v)) {
    return v;
  }
  if (Array.isArray(v)) {
    return observable.array(v, {
      name: name,
      deep: false
    });
  }
  if (isPlainObject(v)) {
    return observable.object(v, undefined, {
      name: name,
      deep: false
    });
  }
  if (isES6Map(v)) {
    return observable.map(v, {
      name: name,
      deep: false
    });
  }
  if (isES6Set(v)) {
    return observable.set(v, {
      name: name,
      deep: false
    });
  }
  if (true) {
    die("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
  }
}
function referenceEnhancer(newValue) {
  // never turn into an observable
  return newValue;
}
function refStructEnhancer(v, oldValue) {
  if ( true && isObservable(v)) {
    die("observable.struct should not be used with observable values");
  }
  if (deepEqual(v, oldValue)) {
    return oldValue;
  }
  return v;
}

var OVERRIDE = "override";
var override = /*#__PURE__*/createDecoratorAnnotation({
  annotationType_: OVERRIDE,
  make_: make_,
  extend_: extend_,
  decorate_20223_: decorate_20223_
});
function isOverride(annotation) {
  return annotation.annotationType_ === OVERRIDE;
}
function make_(adm, key) {
  // Must not be plain object
  if ( true && adm.isPlainObject_) {
    die("Cannot apply '" + this.annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + this.annotationType_ + "' cannot be used on plain objects."));
  }
  // Must override something
  if ( true && !hasProp(adm.appliedAnnotations_, key)) {
    die("'" + adm.name_ + "." + key.toString() + "' is annotated with '" + this.annotationType_ + "', " + "but no such annotated member was found on prototype.");
  }
  return 0 /* MakeResult.Cancel */;
}
function extend_(adm, key, descriptor, proxyTrap) {
  die("'" + this.annotationType_ + "' can only be used with 'makeObservable'");
}
function decorate_20223_(desc, context) {
  console.warn("'" + this.annotationType_ + "' cannot be used with decorators - this is a no-op");
}

function createActionAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$1,
    extend_: extend_$1,
    decorate_20223_: decorate_20223_$1
  };
}
function make_$1(adm, key, descriptor, source) {
  var _this$options_;
  // bound
  if ((_this$options_ = this.options_) != null && _this$options_.bound) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 /* MakeResult.Cancel */ : 1 /* MakeResult.Break */;
  }
  // own
  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 /* MakeResult.Cancel */ : 2 /* MakeResult.Continue */;
  }
  // prototype
  if (isAction(descriptor.value)) {
    // A prototype could have been annotated already by other constructor,
    // rest of the proto chain must be annotated already
    return 1 /* MakeResult.Break */;
  }
  var actionDescriptor = createActionDescriptor(adm, this, key, descriptor, false);
  defineProperty(source, key, actionDescriptor);
  return 2 /* MakeResult.Continue */;
}
function extend_$1(adm, key, descriptor, proxyTrap) {
  var actionDescriptor = createActionDescriptor(adm, this, key, descriptor);
  return adm.defineProperty_(key, actionDescriptor, proxyTrap);
}
function decorate_20223_$1(mthd, context) {
  if (true) {
    assert20223DecoratorType(context, ["method", "field"]);
  }
  var kind = context.kind,
    name = context.name,
    addInitializer = context.addInitializer;
  var ann = this;
  var _createAction = function _createAction(m) {
    var _ann$options_$name, _ann$options_, _ann$options_$autoAct, _ann$options_2;
    return createAction((_ann$options_$name = (_ann$options_ = ann.options_) == null ? void 0 : _ann$options_.name) != null ? _ann$options_$name : name.toString(), m, (_ann$options_$autoAct = (_ann$options_2 = ann.options_) == null ? void 0 : _ann$options_2.autoAction) != null ? _ann$options_$autoAct : false);
  };
  if (kind == "field") {
    return function (initMthd) {
      var _ann$options_3;
      var mthd = initMthd;
      if (!isAction(mthd)) {
        mthd = _createAction(mthd);
      }
      if ((_ann$options_3 = ann.options_) != null && _ann$options_3.bound) {
        mthd = mthd.bind(this);
        mthd.isMobxAction = true;
      }
      return mthd;
    };
  }
  if (kind == "method") {
    var _this$options_2;
    if (!isAction(mthd)) {
      mthd = _createAction(mthd);
    }
    if ((_this$options_2 = this.options_) != null && _this$options_2.bound) {
      addInitializer(function () {
        var self = this;
        var bound = self[name].bind(self);
        bound.isMobxAction = true;
        self[name] = bound;
      });
    }
    return mthd;
  }
  die("Cannot apply '" + ann.annotationType_ + "' to '" + String(name) + "' (kind: " + kind + "):" + ("\n'" + ann.annotationType_ + "' can only be used on properties with a function value."));
}
function assertActionDescriptor(adm, _ref, key, _ref2) {
  var annotationType_ = _ref.annotationType_;
  var value = _ref2.value;
  if ( true && !isFunction(value)) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a function value."));
  }
}
function createActionDescriptor(adm, annotation, key, descriptor,
// provides ability to disable safeDescriptors for prototypes
safeDescriptors) {
  var _annotation$options_, _annotation$options_$, _annotation$options_2, _annotation$options_$2, _annotation$options_3, _annotation$options_4, _adm$proxy_2;
  if (safeDescriptors === void 0) {
    safeDescriptors = globalState.safeDescriptors;
  }
  assertActionDescriptor(adm, annotation, key, descriptor);
  var value = descriptor.value;
  if ((_annotation$options_ = annotation.options_) != null && _annotation$options_.bound) {
    var _adm$proxy_;
    value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }
  return {
    value: createAction((_annotation$options_$ = (_annotation$options_2 = annotation.options_) == null ? void 0 : _annotation$options_2.name) != null ? _annotation$options_$ : key.toString(), value, (_annotation$options_$2 = (_annotation$options_3 = annotation.options_) == null ? void 0 : _annotation$options_3.autoAction) != null ? _annotation$options_$2 : false,
    // https://github.com/mobxjs/mobx/discussions/3140
    (_annotation$options_4 = annotation.options_) != null && _annotation$options_4.bound ? (_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_ : undefined),
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: safeDescriptors ? adm.isPlainObject_ : true,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: false,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: safeDescriptors ? false : true
  };
}

function createFlowAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$2,
    extend_: extend_$2,
    decorate_20223_: decorate_20223_$2
  };
}
function make_$2(adm, key, descriptor, source) {
  var _this$options_;
  // own
  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 /* MakeResult.Cancel */ : 2 /* MakeResult.Continue */;
  }
  // prototype
  // bound - must annotate protos to support super.flow()
  if ((_this$options_ = this.options_) != null && _this$options_.bound && (!hasProp(adm.target_, key) || !isFlow(adm.target_[key]))) {
    if (this.extend_(adm, key, descriptor, false) === null) {
      return 0 /* MakeResult.Cancel */;
    }
  }
  if (isFlow(descriptor.value)) {
    // A prototype could have been annotated already by other constructor,
    // rest of the proto chain must be annotated already
    return 1 /* MakeResult.Break */;
  }
  var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, false, false);
  defineProperty(source, key, flowDescriptor);
  return 2 /* MakeResult.Continue */;
}
function extend_$2(adm, key, descriptor, proxyTrap) {
  var _this$options_2;
  var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, (_this$options_2 = this.options_) == null ? void 0 : _this$options_2.bound);
  return adm.defineProperty_(key, flowDescriptor, proxyTrap);
}
function decorate_20223_$2(mthd, context) {
  var _this$options_3;
  if (true) {
    assert20223DecoratorType(context, ["method"]);
  }
  var name = context.name,
    addInitializer = context.addInitializer;
  if (!isFlow(mthd)) {
    mthd = flow(mthd);
  }
  if ((_this$options_3 = this.options_) != null && _this$options_3.bound) {
    addInitializer(function () {
      var self = this;
      var bound = self[name].bind(self);
      bound.isMobXFlow = true;
      self[name] = bound;
    });
  }
  return mthd;
}
function assertFlowDescriptor(adm, _ref, key, _ref2) {
  var annotationType_ = _ref.annotationType_;
  var value = _ref2.value;
  if ( true && !isFunction(value)) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a generator function value."));
  }
}
function createFlowDescriptor(adm, annotation, key, descriptor, bound,
// provides ability to disable safeDescriptors for prototypes
safeDescriptors) {
  if (safeDescriptors === void 0) {
    safeDescriptors = globalState.safeDescriptors;
  }
  assertFlowDescriptor(adm, annotation, key, descriptor);
  var value = descriptor.value;
  // In case of flow.bound, the descriptor can be from already annotated prototype
  if (!isFlow(value)) {
    value = flow(value);
  }
  if (bound) {
    var _adm$proxy_;
    // We do not keep original function around, so we bind the existing flow
    value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
    // This is normally set by `flow`, but `bind` returns new function...
    value.isMobXFlow = true;
  }
  return {
    value: value,
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: safeDescriptors ? adm.isPlainObject_ : true,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: false,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: safeDescriptors ? false : true
  };
}

function createComputedAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$3,
    extend_: extend_$3,
    decorate_20223_: decorate_20223_$3
  };
}
function make_$3(adm, key, descriptor) {
  return this.extend_(adm, key, descriptor, false) === null ? 0 /* MakeResult.Cancel */ : 1 /* MakeResult.Break */;
}
function extend_$3(adm, key, descriptor, proxyTrap) {
  assertComputedDescriptor(adm, this, key, descriptor);
  return adm.defineComputedProperty_(key, _extends({}, this.options_, {
    get: descriptor.get,
    set: descriptor.set
  }), proxyTrap);
}
function decorate_20223_$3(get, context) {
  if (true) {
    assert20223DecoratorType(context, ["getter"]);
  }
  var ann = this;
  var key = context.name,
    addInitializer = context.addInitializer;
  addInitializer(function () {
    var adm = asObservableObject(this)[$mobx];
    var options = _extends({}, ann.options_, {
      get: get,
      context: this
    });
    options.name || (options.name =  true ? adm.name_ + "." + key.toString() : 0);
    adm.values_.set(key, new ComputedValue(options));
  });
  return function () {
    return this[$mobx].getObservablePropValue_(key);
  };
}
function assertComputedDescriptor(adm, _ref, key, _ref2) {
  var annotationType_ = _ref.annotationType_;
  var get = _ref2.get;
  if ( true && !get) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on getter(+setter) properties."));
  }
}

function createObservableAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$4,
    extend_: extend_$4,
    decorate_20223_: decorate_20223_$4
  };
}
function make_$4(adm, key, descriptor) {
  return this.extend_(adm, key, descriptor, false) === null ? 0 /* MakeResult.Cancel */ : 1 /* MakeResult.Break */;
}
function extend_$4(adm, key, descriptor, proxyTrap) {
  var _this$options_$enhanc, _this$options_;
  assertObservableDescriptor(adm, this, key, descriptor);
  return adm.defineObservableProperty_(key, descriptor.value, (_this$options_$enhanc = (_this$options_ = this.options_) == null ? void 0 : _this$options_.enhancer) != null ? _this$options_$enhanc : deepEnhancer, proxyTrap);
}
function decorate_20223_$4(desc, context) {
  if (true) {
    if (context.kind === "field") {
      throw die("Please use `@observable accessor " + String(context.name) + "` instead of `@observable " + String(context.name) + "`");
    }
    assert20223DecoratorType(context, ["accessor"]);
  }
  var ann = this;
  var kind = context.kind,
    name = context.name;
  // The laziness here is not ideal... It's a workaround to how 2022.3 Decorators are implemented:
  //   `addInitializer` callbacks are executed _before_ any accessors are defined (instead of the ideal-for-us right after each).
  //   This means that, if we were to do our stuff in an `addInitializer`, we'd attempt to read a private slot
  //   before it has been initialized. The runtime doesn't like that and throws a `Cannot read private member
  //   from an object whose class did not declare it` error.
  // TODO: it seems that this will not be required anymore in the final version of the spec
  // See TODO: link
  var initializedObjects = new WeakSet();
  function initializeObservable(target, value) {
    var _ann$options_$enhance, _ann$options_;
    var adm = asObservableObject(target)[$mobx];
    var observable = new ObservableValue(value, (_ann$options_$enhance = (_ann$options_ = ann.options_) == null ? void 0 : _ann$options_.enhancer) != null ? _ann$options_$enhance : deepEnhancer,  true ? adm.name_ + "." + name.toString() : 0, false);
    adm.values_.set(name, observable);
    initializedObjects.add(target);
  }
  if (kind == "accessor") {
    return {
      get: function get() {
        if (!initializedObjects.has(this)) {
          initializeObservable(this, desc.get.call(this));
        }
        return this[$mobx].getObservablePropValue_(name);
      },
      set: function set(value) {
        if (!initializedObjects.has(this)) {
          initializeObservable(this, value);
        }
        return this[$mobx].setObservablePropValue_(name, value);
      },
      init: function init(value) {
        if (!initializedObjects.has(this)) {
          initializeObservable(this, value);
        }
        return value;
      }
    };
  }
  return;
}
function assertObservableDescriptor(adm, _ref, key, descriptor) {
  var annotationType_ = _ref.annotationType_;
  if ( true && !("value" in descriptor)) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' cannot be used on getter/setter properties"));
  }
}

var AUTO = "true";
var autoAnnotation = /*#__PURE__*/createAutoAnnotation();
function createAutoAnnotation(options) {
  return {
    annotationType_: AUTO,
    options_: options,
    make_: make_$5,
    extend_: extend_$5,
    decorate_20223_: decorate_20223_$5
  };
}
function make_$5(adm, key, descriptor, source) {
  var _this$options_3, _this$options_4;
  // getter -> computed
  if (descriptor.get) {
    return computed.make_(adm, key, descriptor, source);
  }
  // lone setter -> action setter
  if (descriptor.set) {
    // TODO make action applicable to setter and delegate to action.make_
    var set = createAction(key.toString(), descriptor.set);
    // own
    if (source === adm.target_) {
      return adm.defineProperty_(key, {
        configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
        set: set
      }) === null ? 0 /* MakeResult.Cancel */ : 2 /* MakeResult.Continue */;
    }
    // proto
    defineProperty(source, key, {
      configurable: true,
      set: set
    });
    return 2 /* MakeResult.Continue */;
  }
  // function on proto -> autoAction/flow
  if (source !== adm.target_ && typeof descriptor.value === "function") {
    var _this$options_2;
    if (isGenerator(descriptor.value)) {
      var _this$options_;
      var flowAnnotation = (_this$options_ = this.options_) != null && _this$options_.autoBind ? flow.bound : flow;
      return flowAnnotation.make_(adm, key, descriptor, source);
    }
    var actionAnnotation = (_this$options_2 = this.options_) != null && _this$options_2.autoBind ? autoAction.bound : autoAction;
    return actionAnnotation.make_(adm, key, descriptor, source);
  }
  // other -> observable
  // Copy props from proto as well, see test:
  // "decorate should work with Object.create"
  var observableAnnotation = ((_this$options_3 = this.options_) == null ? void 0 : _this$options_3.deep) === false ? observable.ref : observable;
  // if function respect autoBind option
  if (typeof descriptor.value === "function" && (_this$options_4 = this.options_) != null && _this$options_4.autoBind) {
    var _adm$proxy_;
    descriptor.value = descriptor.value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }
  return observableAnnotation.make_(adm, key, descriptor, source);
}
function extend_$5(adm, key, descriptor, proxyTrap) {
  var _this$options_5, _this$options_6;
  // getter -> computed
  if (descriptor.get) {
    return computed.extend_(adm, key, descriptor, proxyTrap);
  }
  // lone setter -> action setter
  if (descriptor.set) {
    // TODO make action applicable to setter and delegate to action.extend_
    return adm.defineProperty_(key, {
      configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
      set: createAction(key.toString(), descriptor.set)
    }, proxyTrap);
  }
  // other -> observable
  // if function respect autoBind option
  if (typeof descriptor.value === "function" && (_this$options_5 = this.options_) != null && _this$options_5.autoBind) {
    var _adm$proxy_2;
    descriptor.value = descriptor.value.bind((_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_);
  }
  var observableAnnotation = ((_this$options_6 = this.options_) == null ? void 0 : _this$options_6.deep) === false ? observable.ref : observable;
  return observableAnnotation.extend_(adm, key, descriptor, proxyTrap);
}
function decorate_20223_$5(desc, context) {
  die("'" + this.annotationType_ + "' cannot be used as a decorator");
}

var OBSERVABLE = "observable";
var OBSERVABLE_REF = "observable.ref";
var OBSERVABLE_SHALLOW = "observable.shallow";
var OBSERVABLE_STRUCT = "observable.struct";
// Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases
var defaultCreateObservableOptions = {
  deep: true,
  name: undefined,
  defaultDecorator: undefined,
  proxy: true
};
Object.freeze(defaultCreateObservableOptions);
function asCreateObservableOptions(thing) {
  return thing || defaultCreateObservableOptions;
}
var observableAnnotation = /*#__PURE__*/createObservableAnnotation(OBSERVABLE);
var observableRefAnnotation = /*#__PURE__*/createObservableAnnotation(OBSERVABLE_REF, {
  enhancer: referenceEnhancer
});
var observableShallowAnnotation = /*#__PURE__*/createObservableAnnotation(OBSERVABLE_SHALLOW, {
  enhancer: shallowEnhancer
});
var observableStructAnnotation = /*#__PURE__*/createObservableAnnotation(OBSERVABLE_STRUCT, {
  enhancer: refStructEnhancer
});
var observableDecoratorAnnotation = /*#__PURE__*/createDecoratorAnnotation(observableAnnotation);
function getEnhancerFromOptions(options) {
  return options.deep === true ? deepEnhancer : options.deep === false ? referenceEnhancer : getEnhancerFromAnnotation(options.defaultDecorator);
}
function getAnnotationFromOptions(options) {
  var _options$defaultDecor;
  return options ? (_options$defaultDecor = options.defaultDecorator) != null ? _options$defaultDecor : createAutoAnnotation(options) : undefined;
}
function getEnhancerFromAnnotation(annotation) {
  var _annotation$options_$, _annotation$options_;
  return !annotation ? deepEnhancer : (_annotation$options_$ = (_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.enhancer) != null ? _annotation$options_$ : deepEnhancer;
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */
function createObservable(v, arg2, arg3) {
  // @observable someProp; (2022.3 Decorators)
  if (is20223Decorator(arg2)) {
    return observableAnnotation.decorate_20223_(v, arg2);
  }
  // @observable someProp;
  if (isStringish(arg2)) {
    storeAnnotation(v, arg2, observableAnnotation);
    return;
  }
  // already observable - ignore
  if (isObservable(v)) {
    return v;
  }
  // plain object
  if (isPlainObject(v)) {
    return observable.object(v, arg2, arg3);
  }
  // Array
  if (Array.isArray(v)) {
    return observable.array(v, arg2);
  }
  // Map
  if (isES6Map(v)) {
    return observable.map(v, arg2);
  }
  // Set
  if (isES6Set(v)) {
    return observable.set(v, arg2);
  }
  // other object - ignore
  if (typeof v === "object" && v !== null) {
    return v;
  }
  // anything else
  return observable.box(v, arg2);
}
assign(createObservable, observableDecoratorAnnotation);
var observableFactories = {
  box: function box(value, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
  },
  array: function array(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return (globalState.useProxies === false || o.proxy === false ? createLegacyArray : createObservableArray)(initialValues, getEnhancerFromOptions(o), o.name);
  },
  map: function map(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
  },
  set: function set(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
  },
  object: function object(props, decorators, options) {
    return initObservable(function () {
      return extendObservable(globalState.useProxies === false || (options == null ? void 0 : options.proxy) === false ? asObservableObject({}, options) : asDynamicObservableObject({}, options), props, decorators);
    });
  },
  ref: /*#__PURE__*/createDecoratorAnnotation(observableRefAnnotation),
  shallow: /*#__PURE__*/createDecoratorAnnotation(observableShallowAnnotation),
  deep: observableDecoratorAnnotation,
  struct: /*#__PURE__*/createDecoratorAnnotation(observableStructAnnotation)
};
// eslint-disable-next-line
var observable = /*#__PURE__*/assign(createObservable, observableFactories);

var COMPUTED = "computed";
var COMPUTED_STRUCT = "computed.struct";
var computedAnnotation = /*#__PURE__*/createComputedAnnotation(COMPUTED);
var computedStructAnnotation = /*#__PURE__*/createComputedAnnotation(COMPUTED_STRUCT, {
  equals: comparer.structural
});
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */
var computed = function computed(arg1, arg2) {
  if (is20223Decorator(arg2)) {
    // @computed (2022.3 Decorators)
    return computedAnnotation.decorate_20223_(arg1, arg2);
  }
  if (isStringish(arg2)) {
    // @computed
    return storeAnnotation(arg1, arg2, computedAnnotation);
  }
  if (isPlainObject(arg1)) {
    // @computed({ options })
    return createDecoratorAnnotation(createComputedAnnotation(COMPUTED, arg1));
  }
  // computed(expr, options?)
  if (true) {
    if (!isFunction(arg1)) {
      die("First argument to `computed` should be an expression.");
    }
    if (isFunction(arg2)) {
      die("A setter as second argument is no longer supported, use `{ set: fn }` option instead");
    }
  }
  var opts = isPlainObject(arg2) ? arg2 : {};
  opts.get = arg1;
  opts.name || (opts.name = arg1.name || ""); /* for generated name */
  return new ComputedValue(opts);
};
Object.assign(computed, computedAnnotation);
computed.struct = /*#__PURE__*/createDecoratorAnnotation(computedStructAnnotation);

var _getDescriptor$config, _getDescriptor;
// we don't use globalState for these in order to avoid possible issues with multiple
// mobx versions
var currentActionId = 0;
var nextActionId = 1;
var isFunctionNameConfigurable = (_getDescriptor$config = (_getDescriptor = /*#__PURE__*/getDescriptor(function () {}, "name")) == null ? void 0 : _getDescriptor.configurable) != null ? _getDescriptor$config : false;
// we can safely recycle this object
var tmpNameDescriptor = {
  value: "action",
  configurable: true,
  writable: false,
  enumerable: false
};
function createAction(actionName, fn, autoAction, ref) {
  if (autoAction === void 0) {
    autoAction = false;
  }
  if (true) {
    if (!isFunction(fn)) {
      die("`action` can only be invoked on functions");
    }
    if (typeof actionName !== "string" || !actionName) {
      die("actions should have valid names, got: '" + actionName + "'");
    }
  }
  function res() {
    return executeAction(actionName, autoAction, fn, ref || this, arguments);
  }
  res.isMobxAction = true;
  res.toString = function () {
    return fn.toString();
  };
  if (isFunctionNameConfigurable) {
    tmpNameDescriptor.value = actionName;
    defineProperty(res, "name", tmpNameDescriptor);
  }
  return res;
}
function executeAction(actionName, canRunAsDerivation, fn, scope, args) {
  var runInfo = _startAction(actionName, canRunAsDerivation, scope, args);
  try {
    return fn.apply(scope, args);
  } catch (err) {
    runInfo.error_ = err;
    throw err;
  } finally {
    _endAction(runInfo);
  }
}
function _startAction(actionName, canRunAsDerivation,
// true for autoAction
scope, args) {
  var notifySpy_ =  true && isSpyEnabled() && !!actionName;
  var startTime_ = 0;
  if ( true && notifySpy_) {
    startTime_ = Date.now();
    var flattenedArgs = args ? Array.from(args) : EMPTY_ARRAY;
    spyReportStart({
      type: ACTION,
      name: actionName,
      object: scope,
      arguments: flattenedArgs
    });
  }
  var prevDerivation_ = globalState.trackingDerivation;
  var runAsAction = !canRunAsDerivation || !prevDerivation_;
  startBatch();
  var prevAllowStateChanges_ = globalState.allowStateChanges; // by default preserve previous allow
  if (runAsAction) {
    untrackedStart();
    prevAllowStateChanges_ = allowStateChangesStart(true);
  }
  var prevAllowStateReads_ = allowStateReadsStart(true);
  var runInfo = {
    runAsAction_: runAsAction,
    prevDerivation_: prevDerivation_,
    prevAllowStateChanges_: prevAllowStateChanges_,
    prevAllowStateReads_: prevAllowStateReads_,
    notifySpy_: notifySpy_,
    startTime_: startTime_,
    actionId_: nextActionId++,
    parentActionId_: currentActionId
  };
  currentActionId = runInfo.actionId_;
  return runInfo;
}
function _endAction(runInfo) {
  if (currentActionId !== runInfo.actionId_) {
    die(30);
  }
  currentActionId = runInfo.parentActionId_;
  if (runInfo.error_ !== undefined) {
    globalState.suppressReactionErrors = true;
  }
  allowStateChangesEnd(runInfo.prevAllowStateChanges_);
  allowStateReadsEnd(runInfo.prevAllowStateReads_);
  endBatch();
  if (runInfo.runAsAction_) {
    untrackedEnd(runInfo.prevDerivation_);
  }
  if ( true && runInfo.notifySpy_) {
    spyReportEnd({
      time: Date.now() - runInfo.startTime_
    });
  }
  globalState.suppressReactionErrors = false;
}
function allowStateChanges(allowStateChanges, func) {
  var prev = allowStateChangesStart(allowStateChanges);
  try {
    return func();
  } finally {
    allowStateChangesEnd(prev);
  }
}
function allowStateChangesStart(allowStateChanges) {
  var prev = globalState.allowStateChanges;
  globalState.allowStateChanges = allowStateChanges;
  return prev;
}
function allowStateChangesEnd(prev) {
  globalState.allowStateChanges = prev;
}

var CREATE = "create";
var ObservableValue = /*#__PURE__*/function (_Atom) {
  function ObservableValue(value, enhancer, name_, notifySpy, equals) {
    var _this;
    if (name_ === void 0) {
      name_ =  true ? "ObservableValue@" + getNextId() : 0;
    }
    if (notifySpy === void 0) {
      notifySpy = true;
    }
    if (equals === void 0) {
      equals = comparer["default"];
    }
    _this = _Atom.call(this, name_) || this;
    _this.enhancer = void 0;
    _this.name_ = void 0;
    _this.equals = void 0;
    _this.hasUnreportedChange_ = false;
    _this.interceptors_ = void 0;
    _this.changeListeners_ = void 0;
    _this.value_ = void 0;
    _this.dehancer = void 0;
    _this.enhancer = enhancer;
    _this.name_ = name_;
    _this.equals = equals;
    _this.value_ = enhancer(value, undefined, name_);
    if ( true && notifySpy && isSpyEnabled()) {
      // only notify spy if this is a stand-alone observable
      spyReport({
        type: CREATE,
        object: _this,
        observableKind: "value",
        debugObjectName: _this.name_,
        newValue: "" + _this.value_
      });
    }
    return _this;
  }
  _inheritsLoose(ObservableValue, _Atom);
  var _proto = ObservableValue.prototype;
  _proto.dehanceValue = function dehanceValue(value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }
    return value;
  };
  _proto.set = function set(newValue) {
    var oldValue = this.value_;
    newValue = this.prepareNewValue_(newValue);
    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();
      if ( true && notifySpy) {
        spyReportStart({
          type: UPDATE,
          object: this,
          observableKind: "value",
          debugObjectName: this.name_,
          newValue: newValue,
          oldValue: oldValue
        });
      }
      this.setNewValue_(newValue);
      if ( true && notifySpy) {
        spyReportEnd();
      }
    }
  };
  _proto.prepareNewValue_ = function prepareNewValue_(newValue) {
    checkIfStateModificationsAreAllowed(this);
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this,
        type: UPDATE,
        newValue: newValue
      });
      if (!change) {
        return globalState.UNCHANGED;
      }
      newValue = change.newValue;
    }
    // apply modifier
    newValue = this.enhancer(newValue, this.value_, this.name_);
    return this.equals(this.value_, newValue) ? globalState.UNCHANGED : newValue;
  };
  _proto.setNewValue_ = function setNewValue_(newValue) {
    var oldValue = this.value_;
    this.value_ = newValue;
    this.reportChanged();
    if (hasListeners(this)) {
      notifyListeners(this, {
        type: UPDATE,
        object: this,
        newValue: newValue,
        oldValue: oldValue
      });
    }
  };
  _proto.get = function get() {
    this.reportObserved();
    return this.dehanceValue(this.value_);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately) {
      listener({
        observableKind: "value",
        debugObjectName: this.name_,
        object: this,
        type: UPDATE,
        newValue: this.value_,
        oldValue: undefined
      });
    }
    return registerListener(this, listener);
  };
  _proto.raw = function raw() {
    // used by MST ot get undehanced value
    return this.value_;
  };
  _proto.toJSON = function toJSON() {
    return this.get();
  };
  _proto.toString = function toString() {
    return this.name_ + "[" + this.value_ + "]";
  };
  _proto.valueOf = function valueOf() {
    return toPrimitive(this.get());
  };
  _proto[Symbol.toPrimitive] = function () {
    return this.valueOf();
  };
  return ObservableValue;
}(Atom);
var isObservableValue = /*#__PURE__*/createInstanceofPredicate("ObservableValue", ObservableValue);

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue = /*#__PURE__*/function () {
  /**
   * Create a new computed value based on a function expression.
   *
   * The `name` property is for debug purposes only.
   *
   * The `equals` property specifies the comparer function to use to determine if a newly produced
   * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
   * compares based on identity comparison (===), and `structuralComparer` deeply compares the structure.
   * Structural comparison can be convenient if you always produce a new aggregated object and
   * don't want to notify observers if it is structurally the same.
   * This is useful for working with vectors, mouse coordinates etc.
   */
  function ComputedValue(options) {
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.observing_ = [];
    // nodes we are looking at. Our value depends on these nodes
    this.newObserving_ = null;
    // during tracking it's an array with new observed observers
    this.observers_ = new Set();
    this.runId_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    this.unboundDepsCount_ = 0;
    this.value_ = new CaughtException(null);
    this.name_ = void 0;
    this.triggeredBy_ = void 0;
    this.flags_ = 0;
    this.derivation = void 0;
    // N.B: unminified as it is used by MST
    this.setter_ = void 0;
    this.isTracing_ = TraceMode.NONE;
    this.scope_ = void 0;
    this.equals_ = void 0;
    this.requiresReaction_ = void 0;
    this.keepAlive_ = void 0;
    this.onBOL = void 0;
    this.onBUOL = void 0;
    if (!options.get) {
      die(31);
    }
    this.derivation = options.get;
    this.name_ = options.name || ( true ? "ComputedValue@" + getNextId() : 0);
    if (options.set) {
      this.setter_ = createAction( true ? this.name_ + "-setter" : 0, options.set);
    }
    this.equals_ = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer["default"]);
    this.scope_ = options.context;
    this.requiresReaction_ = options.requiresReaction;
    this.keepAlive_ = !!options.keepAlive;
  }
  var _proto = ComputedValue.prototype;
  _proto.onBecomeStale_ = function onBecomeStale_() {
    propagateMaybeChanged(this);
  };
  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function (listener) {
        return listener();
      });
    }
  };
  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function (listener) {
        return listener();
      });
    }
  }
  // to check for cycles
  ;
  /**
   * Returns the current value of this computed value.
   * Will evaluate its computation first if needed.
   */
  _proto.get = function get() {
    if (this.isComputing) {
      die(32, this.name_, this.derivation);
    }
    if (globalState.inBatch === 0 &&
    // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_) {
      if (shouldCompute(this)) {
        this.warnAboutUntrackedRead_();
        startBatch(); // See perf test 'computed memoization'
        this.value_ = this.computeValue_(false);
        endBatch();
      }
    } else {
      reportObserved(this);
      if (shouldCompute(this)) {
        var prevTrackingContext = globalState.trackingContext;
        if (this.keepAlive_ && !prevTrackingContext) {
          globalState.trackingContext = this;
        }
        if (this.trackAndCompute()) {
          propagateChangeConfirmed(this);
        }
        globalState.trackingContext = prevTrackingContext;
      }
    }
    var result = this.value_;
    if (isCaughtException(result)) {
      throw result.cause;
    }
    return result;
  };
  _proto.set = function set(value) {
    if (this.setter_) {
      if (this.isRunningSetter) {
        die(33, this.name_);
      }
      this.isRunningSetter = true;
      try {
        this.setter_.call(this.scope_, value);
      } finally {
        this.isRunningSetter = false;
      }
    } else {
      die(34, this.name_);
    }
  };
  _proto.trackAndCompute = function trackAndCompute() {
    // N.B: unminified as it is used by MST
    var oldValue = this.value_;
    var wasSuspended = /* see #1208 */this.dependenciesState_ === IDerivationState_.NOT_TRACKING_;
    var newValue = this.computeValue_(true);
    var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals_(oldValue, newValue);
    if (changed) {
      this.value_ = newValue;
      if ( true && isSpyEnabled()) {
        spyReport({
          observableKind: "computed",
          debugObjectName: this.name_,
          object: this.scope_,
          type: "update",
          oldValue: oldValue,
          newValue: newValue
        });
      }
    }
    return changed;
  };
  _proto.computeValue_ = function computeValue_(track) {
    this.isComputing = true;
    // don't allow state changes during computation
    var prev = allowStateChangesStart(false);
    var res;
    if (track) {
      res = trackDerivedFunction(this, this.derivation, this.scope_);
    } else {
      if (globalState.disableErrorBoundaries === true) {
        res = this.derivation.call(this.scope_);
      } else {
        try {
          res = this.derivation.call(this.scope_);
        } catch (e) {
          res = new CaughtException(e);
        }
      }
    }
    allowStateChangesEnd(prev);
    this.isComputing = false;
    return res;
  };
  _proto.suspend_ = function suspend_() {
    if (!this.keepAlive_) {
      clearObserving(this);
      this.value_ = undefined; // don't hold on to computed value!
      if ( true && this.isTracing_ !== TraceMode.NONE) {
        console.log("[mobx.trace] Computed value '" + this.name_ + "' was suspended and it will recompute on the next access.");
      }
    }
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    var _this = this;
    var firstTime = true;
    var prevValue = undefined;
    return autorun(function () {
      // TODO: why is this in a different place than the spyReport() function? in all other observables it's called in the same place
      var newValue = _this.get();
      if (!firstTime || fireImmediately) {
        var prevU = untrackedStart();
        listener({
          observableKind: "computed",
          debugObjectName: _this.name_,
          type: UPDATE,
          object: _this,
          newValue: newValue,
          oldValue: prevValue
        });
        untrackedEnd(prevU);
      }
      firstTime = false;
      prevValue = newValue;
    });
  };
  _proto.warnAboutUntrackedRead_ = function warnAboutUntrackedRead_() {
    if (false) {}
    if (this.isTracing_ !== TraceMode.NONE) {
      console.log("[mobx.trace] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute.");
    }
    if (typeof this.requiresReaction_ === "boolean" ? this.requiresReaction_ : globalState.computedRequiresReaction) {
      console.warn("[mobx] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute.");
    }
  };
  _proto.toString = function toString() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  };
  _proto.valueOf = function valueOf() {
    return toPrimitive(this.get());
  };
  _proto[Symbol.toPrimitive] = function () {
    return this.valueOf();
  };
  return _createClass(ComputedValue, [{
    key: "isComputing",
    get: function get() {
      return getFlag(this.flags_, ComputedValue.isComputingMask_);
    },
    set: function set(newValue) {
      this.flags_ = setFlag(this.flags_, ComputedValue.isComputingMask_, newValue);
    }
  }, {
    key: "isRunningSetter",
    get: function get() {
      return getFlag(this.flags_, ComputedValue.isRunningSetterMask_);
    },
    set: function set(newValue) {
      this.flags_ = setFlag(this.flags_, ComputedValue.isRunningSetterMask_, newValue);
    }
  }, {
    key: "isBeingObserved",
    get: function get() {
      return getFlag(this.flags_, ComputedValue.isBeingObservedMask_);
    },
    set: function set(newValue) {
      this.flags_ = setFlag(this.flags_, ComputedValue.isBeingObservedMask_, newValue);
    }
  }, {
    key: "isPendingUnobservation",
    get: function get() {
      return getFlag(this.flags_, ComputedValue.isPendingUnobservationMask_);
    },
    set: function set(newValue) {
      this.flags_ = setFlag(this.flags_, ComputedValue.isPendingUnobservationMask_, newValue);
    }
  }, {
    key: "diffValue",
    get: function get() {
      return getFlag(this.flags_, ComputedValue.diffValueMask_) ? 1 : 0;
    },
    set: function set(newValue) {
      this.flags_ = setFlag(this.flags_, ComputedValue.diffValueMask_, newValue === 1 ? true : false);
    }
  }]);
}();
ComputedValue.isComputingMask_ = 1;
ComputedValue.isRunningSetterMask_ = 2;
ComputedValue.isBeingObservedMask_ = 4;
ComputedValue.isPendingUnobservationMask_ = 8;
ComputedValue.diffValueMask_ = 16;
var isComputedValue = /*#__PURE__*/createInstanceofPredicate("ComputedValue", ComputedValue);

var IDerivationState_;
(function (IDerivationState_) {
  // before being run or (outside batch and not being observed)
  // at this point derivation is not holding any data about dependency tree
  IDerivationState_[IDerivationState_["NOT_TRACKING_"] = -1] = "NOT_TRACKING_";
  // no shallow dependency changed since last computation
  // won't recalculate derivation
  // this is what makes mobx fast
  IDerivationState_[IDerivationState_["UP_TO_DATE_"] = 0] = "UP_TO_DATE_";
  // some deep dependency changed, but don't know if shallow dependency changed
  // will require to check first if UP_TO_DATE or POSSIBLY_STALE
  // currently only ComputedValue will propagate POSSIBLY_STALE
  //
  // having this state is second big optimization:
  // don't have to recompute on every dependency change, but only when it's needed
  IDerivationState_[IDerivationState_["POSSIBLY_STALE_"] = 1] = "POSSIBLY_STALE_";
  // A shallow dependency has changed since last computation and the derivation
  // will need to recompute when it's needed next.
  IDerivationState_[IDerivationState_["STALE_"] = 2] = "STALE_";
})(IDerivationState_ || (IDerivationState_ = {}));
var TraceMode;
(function (TraceMode) {
  TraceMode[TraceMode["NONE"] = 0] = "NONE";
  TraceMode[TraceMode["LOG"] = 1] = "LOG";
  TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));
var CaughtException = function CaughtException(cause) {
  this.cause = void 0;
  this.cause = cause;
  // Empty
};
function isCaughtException(e) {
  return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */
function shouldCompute(derivation) {
  switch (derivation.dependenciesState_) {
    case IDerivationState_.UP_TO_DATE_:
      return false;
    case IDerivationState_.NOT_TRACKING_:
    case IDerivationState_.STALE_:
      return true;
    case IDerivationState_.POSSIBLY_STALE_:
      {
        // state propagation can occur outside of action/reactive context #2195
        var prevAllowStateReads = allowStateReadsStart(true);
        var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
        var obs = derivation.observing_,
          l = obs.length;
        for (var i = 0; i < l; i++) {
          var obj = obs[i];
          if (isComputedValue(obj)) {
            if (globalState.disableErrorBoundaries) {
              obj.get();
            } else {
              try {
                obj.get();
              } catch (e) {
                // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                untrackedEnd(prevUntracked);
                allowStateReadsEnd(prevAllowStateReads);
                return true;
              }
            }
            // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
            // and `derivation` is an observer of `obj`
            // invariantShouldCompute(derivation)
            if (derivation.dependenciesState_ === IDerivationState_.STALE_) {
              untrackedEnd(prevUntracked);
              allowStateReadsEnd(prevAllowStateReads);
              return true;
            }
          }
        }
        changeDependenciesStateTo0(derivation);
        untrackedEnd(prevUntracked);
        allowStateReadsEnd(prevAllowStateReads);
        return false;
      }
  }
}
function isComputingDerivation() {
  return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
  if (false) {}
  var hasObservers = atom.observers_.size > 0;
  // Should not be possible to change observed state outside strict mode, except during initialization, see #563
  if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "always")) {
    console.warn("[MobX] " + (globalState.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + atom.name_);
  }
}
function checkIfStateReadsAreAllowed(observable) {
  if ( true && !globalState.allowStateReads && globalState.observableRequiresReaction) {
    console.warn("[mobx] Observable '" + observable.name_ + "' being read outside a reactive context.");
  }
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction(derivation, f, context) {
  var prevAllowStateReads = allowStateReadsStart(true);
  changeDependenciesStateTo0(derivation);
  // Preallocate array; will be trimmed by bindDependencies.
  derivation.newObserving_ = new Array(
  // Reserve constant space for initial dependencies, dynamic space otherwise.
  // See https://github.com/mobxjs/mobx/pull/3833
  derivation.runId_ === 0 ? 100 : derivation.observing_.length);
  derivation.unboundDepsCount_ = 0;
  derivation.runId_ = ++globalState.runId;
  var prevTracking = globalState.trackingDerivation;
  globalState.trackingDerivation = derivation;
  globalState.inBatch++;
  var result;
  if (globalState.disableErrorBoundaries === true) {
    result = f.call(context);
  } else {
    try {
      result = f.call(context);
    } catch (e) {
      result = new CaughtException(e);
    }
  }
  globalState.inBatch--;
  globalState.trackingDerivation = prevTracking;
  bindDependencies(derivation);
  warnAboutDerivationWithoutDependencies(derivation);
  allowStateReadsEnd(prevAllowStateReads);
  return result;
}
function warnAboutDerivationWithoutDependencies(derivation) {
  if (false) {}
  if (derivation.observing_.length !== 0) {
    return;
  }
  if (typeof derivation.requiresObservable_ === "boolean" ? derivation.requiresObservable_ : globalState.reactionRequiresObservable) {
    console.warn("[mobx] Derivation '" + derivation.name_ + "' is created/updated without reading any observable value.");
  }
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
  // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
  var prevObserving = derivation.observing_;
  var observing = derivation.observing_ = derivation.newObserving_;
  var lowestNewObservingDerivationState = IDerivationState_.UP_TO_DATE_;
  // Go through all new observables and check diffValue: (this list can contain duplicates):
  //   0: first occurrence, change to 1 and keep it
  //   1: extra occurrence, drop it
  var i0 = 0,
    l = derivation.unboundDepsCount_;
  for (var i = 0; i < l; i++) {
    var dep = observing[i];
    if (dep.diffValue === 0) {
      dep.diffValue = 1;
      if (i0 !== i) {
        observing[i0] = dep;
      }
      i0++;
    }
    // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
    // not hitting the condition
    if (dep.dependenciesState_ > lowestNewObservingDerivationState) {
      lowestNewObservingDerivationState = dep.dependenciesState_;
    }
  }
  observing.length = i0;
  derivation.newObserving_ = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
  // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
  //   0: it's not in new observables, unobserve it
  //   1: it keeps being observed, don't want to notify it. change to 0
  l = prevObserving.length;
  while (l--) {
    var _dep = prevObserving[l];
    if (_dep.diffValue === 0) {
      removeObserver(_dep, derivation);
    }
    _dep.diffValue = 0;
  }
  // Go through all new observables and check diffValue: (now it should be unique)
  //   0: it was set to 0 in last loop. don't need to do anything.
  //   1: it wasn't observed, let's observe it. set back to 0
  while (i0--) {
    var _dep2 = observing[i0];
    if (_dep2.diffValue === 1) {
      _dep2.diffValue = 0;
      addObserver(_dep2, derivation);
    }
  }
  // Some new observed derivations may become stale during this derivation computation
  // so they have had no chance to propagate staleness (#916)
  if (lowestNewObservingDerivationState !== IDerivationState_.UP_TO_DATE_) {
    derivation.dependenciesState_ = lowestNewObservingDerivationState;
    derivation.onBecomeStale_();
  }
}
function clearObserving(derivation) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
  var obs = derivation.observing_;
  derivation.observing_ = [];
  var i = obs.length;
  while (i--) {
    removeObserver(obs[i], derivation);
  }
  derivation.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
}
function untracked(action) {
  var prev = untrackedStart();
  try {
    return action();
  } finally {
    untrackedEnd(prev);
  }
}
function untrackedStart() {
  var prev = globalState.trackingDerivation;
  globalState.trackingDerivation = null;
  return prev;
}
function untrackedEnd(prev) {
  globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
  var prev = globalState.allowStateReads;
  globalState.allowStateReads = allowStateReads;
  return prev;
}
function allowStateReadsEnd(prev) {
  globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0(derivation) {
  if (derivation.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
    return;
  }
  derivation.dependenciesState_ = IDerivationState_.UP_TO_DATE_;
  var obs = derivation.observing_;
  var i = obs.length;
  while (i--) {
    obs[i].lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
  }
}

/**
 * These values will persist if global state is reset
 */
var persistentKeys = ["mobxGuid", "spyListeners", "enforceActions", "computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "allowStateReads", "disableErrorBoundaries", "runId", "UNCHANGED", "useProxies"];
var MobXGlobals = function MobXGlobals() {
  /**
   * MobXGlobals version.
   * MobX compatiblity with other versions loaded in memory as long as this version matches.
   * It indicates that the global state still stores similar information
   *
   * N.B: this version is unrelated to the package version of MobX, and is only the version of the
   * internal state storage of MobX, and can be the same across many different package versions
   */
  this.version = 6;
  /**
   * globally unique token to signal unchanged
   */
  this.UNCHANGED = {};
  /**
   * Currently running derivation
   */
  this.trackingDerivation = null;
  /**
   * Currently running reaction. This determines if we currently have a reactive context.
   * (Tracking derivation is also set for temporal tracking of computed values inside actions,
   * but trackingReaction can only be set by a form of Reaction)
   */
  this.trackingContext = null;
  /**
   * Each time a derivation is tracked, it is assigned a unique run-id
   */
  this.runId = 0;
  /**
   * 'guid' for general purpose. Will be persisted amongst resets.
   */
  this.mobxGuid = 0;
  /**
   * Are we in a batch block? (and how many of them)
   */
  this.inBatch = 0;
  /**
   * Observables that don't have observers anymore, and are about to be
   * suspended, unless somebody else accesses it in the same batch
   *
   * @type {IObservable[]}
   */
  this.pendingUnobservations = [];
  /**
   * List of scheduled, not yet executed, reactions.
   */
  this.pendingReactions = [];
  /**
   * Are we currently processing reactions?
   */
  this.isRunningReactions = false;
  /**
   * Is it allowed to change observables at this point?
   * In general, MobX doesn't allow that when running computations and React.render.
   * To ensure that those functions stay pure.
   */
  this.allowStateChanges = false;
  /**
   * Is it allowed to read observables at this point?
   * Used to hold the state needed for `observableRequiresReaction`
   */
  this.allowStateReads = true;
  /**
   * If strict mode is enabled, state changes are by default not allowed
   */
  this.enforceActions = true;
  /**
   * Spy callbacks
   */
  this.spyListeners = [];
  /**
   * Globally attached error handlers that react specifically to errors in reactions
   */
  this.globalReactionErrorHandlers = [];
  /**
   * Warn if computed values are accessed outside a reactive context
   */
  this.computedRequiresReaction = false;
  /**
   * (Experimental)
   * Warn if you try to create to derivation / reactive context without accessing any observable.
   */
  this.reactionRequiresObservable = false;
  /**
   * (Experimental)
   * Warn if observables are accessed outside a reactive context
   */
  this.observableRequiresReaction = false;
  /*
   * Don't catch and rethrow exceptions. This is useful for inspecting the state of
   * the stack when an exception occurs while debugging.
   */
  this.disableErrorBoundaries = false;
  /*
   * If true, we are already handling an exception in an action. Any errors in reactions should be suppressed, as
   * they are not the cause, see: https://github.com/mobxjs/mobx/issues/1836
   */
  this.suppressReactionErrors = false;
  this.useProxies = true;
  /*
   * print warnings about code that would fail if proxies weren't available
   */
  this.verifyProxies = false;
  /**
   * False forces all object's descriptors to
   * writable: true
   * configurable: true
   */
  this.safeDescriptors = true;
};
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = /*#__PURE__*/function () {
  var global = /*#__PURE__*/getGlobal();
  if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals) {
    canMergeGlobalState = false;
  }
  if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version) {
    canMergeGlobalState = false;
  }
  if (!canMergeGlobalState) {
    // Because this is a IIFE we need to let isolateCalled a chance to change
    // so we run it after the event loop completed at least 1 iteration
    setTimeout(function () {
      if (!isolateCalled) {
        die(35);
      }
    }, 1);
    return new MobXGlobals();
  } else if (global.__mobxGlobals) {
    global.__mobxInstanceCount += 1;
    if (!global.__mobxGlobals.UNCHANGED) {
      global.__mobxGlobals.UNCHANGED = {};
    } // make merge backward compatible
    return global.__mobxGlobals;
  } else {
    global.__mobxInstanceCount = 1;
    return global.__mobxGlobals = /*#__PURE__*/new MobXGlobals();
  }
}();
function isolateGlobalState() {
  if (globalState.pendingReactions.length || globalState.inBatch || globalState.isRunningReactions) {
    die(36);
  }
  isolateCalled = true;
  if (canMergeGlobalState) {
    var global = getGlobal();
    if (--global.__mobxInstanceCount === 0) {
      global.__mobxGlobals = undefined;
    }
    globalState = new MobXGlobals();
  }
}
function getGlobalState() {
  return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */
function resetGlobalState() {
  var defaultGlobals = new MobXGlobals();
  for (var key in defaultGlobals) {
    if (persistentKeys.indexOf(key) === -1) {
      globalState[key] = defaultGlobals[key];
    }
  }
  globalState.allowStateChanges = !globalState.enforceActions;
}

function hasObservers(observable) {
  return observable.observers_ && observable.observers_.size > 0;
}
function getObservers(observable) {
  return observable.observers_;
}
// function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }
function addObserver(observable, node) {
  // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
  // invariantObservers(observable);
  observable.observers_.add(node);
  if (observable.lowestObserverState_ > node.dependenciesState_) {
    observable.lowestObserverState_ = node.dependenciesState_;
  }
  // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
  // invariantObservers(observable);
  observable.observers_["delete"](node);
  if (observable.observers_.size === 0) {
    // deleting last observer
    queueForUnobservation(observable);
  }
  // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation(observable) {
  if (observable.isPendingUnobservation === false) {
    // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
    observable.isPendingUnobservation = true;
    globalState.pendingUnobservations.push(observable);
  }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch() {
  globalState.inBatch++;
}
function endBatch() {
  if (--globalState.inBatch === 0) {
    runReactions();
    // the batch is actually about to finish, all unobserving should happen here.
    var list = globalState.pendingUnobservations;
    for (var i = 0; i < list.length; i++) {
      var observable = list[i];
      observable.isPendingUnobservation = false;
      if (observable.observers_.size === 0) {
        if (observable.isBeingObserved) {
          // if this observable had reactive observers, trigger the hooks
          observable.isBeingObserved = false;
          observable.onBUO();
        }
        if (observable instanceof ComputedValue) {
          // computed values are automatically teared down when the last observer leaves
          // this process happens recursively, this computed might be the last observabe of another, etc..
          observable.suspend_();
        }
      }
    }
    globalState.pendingUnobservations = [];
  }
}
function reportObserved(observable) {
  checkIfStateReadsAreAllowed(observable);
  var derivation = globalState.trackingDerivation;
  if (derivation !== null) {
    /**
     * Simple optimization, give each derivation run an unique id (runId)
     * Check if last time this observable was accessed the same runId is used
     * if this is the case, the relation is already known
     */
    if (derivation.runId_ !== observable.lastAccessedBy_) {
      observable.lastAccessedBy_ = derivation.runId_;
      // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...
      derivation.newObserving_[derivation.unboundDepsCount_++] = observable;
      if (!observable.isBeingObserved && globalState.trackingContext) {
        observable.isBeingObserved = true;
        observable.onBO();
      }
    }
    return observable.isBeingObserved;
  } else if (observable.observers_.size === 0 && globalState.inBatch > 0) {
    queueForUnobservation(observable);
  }
  return false;
}
// function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged(observable) {
  // invariantLOS(observable, "changed start");
  if (observable.lowestObserverState_ === IDerivationState_.STALE_) {
    return;
  }
  observable.lowestObserverState_ = IDerivationState_.STALE_;
  // Ideally we use for..of here, but the downcompiled version is really slow...
  observable.observers_.forEach(function (d) {
    if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      if ( true && d.isTracing_ !== TraceMode.NONE) {
        logTraceInfo(d, observable);
      }
      d.onBecomeStale_();
    }
    d.dependenciesState_ = IDerivationState_.STALE_;
  });
  // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed(observable) {
  // invariantLOS(observable, "confirmed start");
  if (observable.lowestObserverState_ === IDerivationState_.STALE_) {
    return;
  }
  observable.lowestObserverState_ = IDerivationState_.STALE_;
  observable.observers_.forEach(function (d) {
    if (d.dependenciesState_ === IDerivationState_.POSSIBLY_STALE_) {
      d.dependenciesState_ = IDerivationState_.STALE_;
      if ( true && d.isTracing_ !== TraceMode.NONE) {
        logTraceInfo(d, observable);
      }
    } else if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_ // this happens during computing of `d`, just keep lowestObserverState up to date.
    ) {
      observable.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    }
  });
  // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged(observable) {
  // invariantLOS(observable, "maybe start");
  if (observable.lowestObserverState_ !== IDerivationState_.UP_TO_DATE_) {
    return;
  }
  observable.lowestObserverState_ = IDerivationState_.POSSIBLY_STALE_;
  observable.observers_.forEach(function (d) {
    if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      d.dependenciesState_ = IDerivationState_.POSSIBLY_STALE_;
      d.onBecomeStale_();
    }
  });
  // invariantLOS(observable, "maybe end");
}
function logTraceInfo(derivation, observable) {
  console.log("[mobx.trace] '" + derivation.name_ + "' is invalidated due to a change in: '" + observable.name_ + "'");
  if (derivation.isTracing_ === TraceMode.BREAK) {
    var lines = [];
    printDepTree(getDependencyTree(derivation), lines, 1);
    // prettier-ignore
    new Function("debugger;\n/*\nTracing '" + derivation.name_ + "'\n\nYou are entering this break point because derivation '" + derivation.name_ + "' is being traced and '" + observable.name_ + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
  }
}
function printDepTree(tree, lines, depth) {
  if (lines.length >= 1000) {
    lines.push("(and many more)");
    return;
  }
  lines.push("" + "\t".repeat(depth - 1) + tree.name);
  if (tree.dependencies) {
    tree.dependencies.forEach(function (child) {
      return printDepTree(child, lines, depth + 1);
    });
  }
}

var Reaction = /*#__PURE__*/function () {
  function Reaction(name_, onInvalidate_, errorHandler_, requiresObservable_) {
    if (name_ === void 0) {
      name_ =  true ? "Reaction@" + getNextId() : 0;
    }
    this.name_ = void 0;
    this.onInvalidate_ = void 0;
    this.errorHandler_ = void 0;
    this.requiresObservable_ = void 0;
    this.observing_ = [];
    // nodes we are looking at. Our value depends on these nodes
    this.newObserving_ = [];
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.runId_ = 0;
    this.unboundDepsCount_ = 0;
    this.flags_ = 0;
    this.isTracing_ = TraceMode.NONE;
    this.name_ = name_;
    this.onInvalidate_ = onInvalidate_;
    this.errorHandler_ = errorHandler_;
    this.requiresObservable_ = requiresObservable_;
  }
  var _proto = Reaction.prototype;
  _proto.onBecomeStale_ = function onBecomeStale_() {
    this.schedule_();
  };
  _proto.schedule_ = function schedule_() {
    if (!this.isScheduled) {
      this.isScheduled = true;
      globalState.pendingReactions.push(this);
      runReactions();
    }
  }
  /**
   * internal, use schedule() if you intend to kick off a reaction
   */;
  _proto.runReaction_ = function runReaction_() {
    if (!this.isDisposed) {
      startBatch();
      this.isScheduled = false;
      var prev = globalState.trackingContext;
      globalState.trackingContext = this;
      if (shouldCompute(this)) {
        this.isTrackPending = true;
        try {
          this.onInvalidate_();
          if ( true && this.isTrackPending && isSpyEnabled()) {
            // onInvalidate didn't trigger track right away..
            spyReport({
              name: this.name_,
              type: "scheduled-reaction"
            });
          }
        } catch (e) {
          this.reportExceptionInDerivation_(e);
        }
      }
      globalState.trackingContext = prev;
      endBatch();
    }
  };
  _proto.track = function track(fn) {
    if (this.isDisposed) {
      return;
      // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
    }
    startBatch();
    var notify = isSpyEnabled();
    var startTime;
    if ( true && notify) {
      startTime = Date.now();
      spyReportStart({
        name: this.name_,
        type: "reaction"
      });
    }
    this.isRunning = true;
    var prevReaction = globalState.trackingContext; // reactions could create reactions...
    globalState.trackingContext = this;
    var result = trackDerivedFunction(this, fn, undefined);
    globalState.trackingContext = prevReaction;
    this.isRunning = false;
    this.isTrackPending = false;
    if (this.isDisposed) {
      // disposed during last run. Clean up everything that was bound after the dispose call.
      clearObserving(this);
    }
    if (isCaughtException(result)) {
      this.reportExceptionInDerivation_(result.cause);
    }
    if ( true && notify) {
      spyReportEnd({
        time: Date.now() - startTime
      });
    }
    endBatch();
  };
  _proto.reportExceptionInDerivation_ = function reportExceptionInDerivation_(error) {
    var _this = this;
    if (this.errorHandler_) {
      this.errorHandler_(error, this);
      return;
    }
    if (globalState.disableErrorBoundaries) {
      throw error;
    }
    var message =  true ? "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'" : 0;
    if (!globalState.suppressReactionErrors) {
      console.error(message, error);
      /** If debugging brought you here, please, read the above message :-). Tnx! */
    } else if (true) {
      console.warn("[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)");
    } // prettier-ignore
    if ( true && isSpyEnabled()) {
      spyReport({
        type: "error",
        name: this.name_,
        message: message,
        error: "" + error
      });
    }
    globalState.globalReactionErrorHandlers.forEach(function (f) {
      return f(error, _this);
    });
  };
  _proto.dispose = function dispose() {
    if (!this.isDisposed) {
      this.isDisposed = true;
      if (!this.isRunning) {
        // if disposed while running, clean up later. Maybe not optimal, but rare case
        startBatch();
        clearObserving(this);
        endBatch();
      }
    }
  };
  _proto.getDisposer_ = function getDisposer_(abortSignal) {
    var _this2 = this;
    var dispose = function dispose() {
      _this2.dispose();
      abortSignal == null || abortSignal.removeEventListener == null || abortSignal.removeEventListener("abort", dispose);
    };
    abortSignal == null || abortSignal.addEventListener == null || abortSignal.addEventListener("abort", dispose);
    dispose[$mobx] = this;
    return dispose;
  };
  _proto.toString = function toString() {
    return "Reaction[" + this.name_ + "]";
  };
  _proto.trace = function trace$1(enterBreakPoint) {
    if (enterBreakPoint === void 0) {
      enterBreakPoint = false;
    }
    trace(this, enterBreakPoint);
  };
  return _createClass(Reaction, [{
    key: "isDisposed",
    get: function get() {
      return getFlag(this.flags_, Reaction.isDisposedMask_);
    },
    set: function set(newValue) {
      this.flags_ = setFlag(this.flags_, Reaction.isDisposedMask_, newValue);
    }
  }, {
    key: "isScheduled",
    get: function get() {
      return getFlag(this.flags_, Reaction.isScheduledMask_);
    },
    set: function set(newValue) {
      this.flags_ = setFlag(this.flags_, Reaction.isScheduledMask_, newValue);
    }
  }, {
    key: "isTrackPending",
    get: function get() {
      return getFlag(this.flags_, Reaction.isTrackPendingMask_);
    },
    set: function set(newValue) {
      this.flags_ = setFlag(this.flags_, Reaction.isTrackPendingMask_, newValue);
    }
  }, {
    key: "isRunning",
    get: function get() {
      return getFlag(this.flags_, Reaction.isRunningMask_);
    },
    set: function set(newValue) {
      this.flags_ = setFlag(this.flags_, Reaction.isRunningMask_, newValue);
    }
  }, {
    key: "diffValue",
    get: function get() {
      return getFlag(this.flags_, Reaction.diffValueMask_) ? 1 : 0;
    },
    set: function set(newValue) {
      this.flags_ = setFlag(this.flags_, Reaction.diffValueMask_, newValue === 1 ? true : false);
    }
  }]);
}();
Reaction.isDisposedMask_ = 1;
Reaction.isScheduledMask_ = 2;
Reaction.isTrackPendingMask_ = 4;
Reaction.isRunningMask_ = 8;
Reaction.diffValueMask_ = 16;
function onReactionError(handler) {
  globalState.globalReactionErrorHandlers.push(handler);
  return function () {
    var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
    if (idx >= 0) {
      globalState.globalReactionErrorHandlers.splice(idx, 1);
    }
  };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function reactionScheduler(f) {
  return f();
};
function runReactions() {
  // Trampolining, if runReactions are already running, new reactions will be picked up
  if (globalState.inBatch > 0 || globalState.isRunningReactions) {
    return;
  }
  reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
  globalState.isRunningReactions = true;
  var allReactions = globalState.pendingReactions;
  var iterations = 0;
  // While running reactions, new reactions might be triggered.
  // Hence we work with two variables and check whether
  // we converge to no remaining reactions after a while.
  while (allReactions.length > 0) {
    if (++iterations === MAX_REACTION_ITERATIONS) {
      console.error( true ? "Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." + (" Probably there is a cycle in the reactive function: " + allReactions[0]) : 0);
      allReactions.splice(0); // clear reactions
    }
    var remainingReactions = allReactions.splice(0);
    for (var i = 0, l = remainingReactions.length; i < l; i++) {
      remainingReactions[i].runReaction_();
    }
  }
  globalState.isRunningReactions = false;
}
var isReaction = /*#__PURE__*/createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
  var baseScheduler = reactionScheduler;
  reactionScheduler = function reactionScheduler(f) {
    return fn(function () {
      return baseScheduler(f);
    });
  };
}

function isSpyEnabled() {
  return  true && !!globalState.spyListeners.length;
}
function spyReport(event) {
  if (false) {} // dead code elimination can do the rest
  if (!globalState.spyListeners.length) {
    return;
  }
  var listeners = globalState.spyListeners;
  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](event);
  }
}
function spyReportStart(event) {
  if (false) {}
  var change = _extends({}, event, {
    spyReportStart: true
  });
  spyReport(change);
}
var END_EVENT = {
  type: "report-end",
  spyReportEnd: true
};
function spyReportEnd(change) {
  if (false) {}
  if (change) {
    spyReport(_extends({}, change, {
      type: "report-end",
      spyReportEnd: true
    }));
  } else {
    spyReport(END_EVENT);
  }
}
function spy(listener) {
  if (false) {} else {
    globalState.spyListeners.push(listener);
    return once(function () {
      globalState.spyListeners = globalState.spyListeners.filter(function (l) {
        return l !== listener;
      });
    });
  }
}

var ACTION = "action";
var ACTION_BOUND = "action.bound";
var AUTOACTION = "autoAction";
var AUTOACTION_BOUND = "autoAction.bound";
var DEFAULT_ACTION_NAME = "<unnamed action>";
var actionAnnotation = /*#__PURE__*/createActionAnnotation(ACTION);
var actionBoundAnnotation = /*#__PURE__*/createActionAnnotation(ACTION_BOUND, {
  bound: true
});
var autoActionAnnotation = /*#__PURE__*/createActionAnnotation(AUTOACTION, {
  autoAction: true
});
var autoActionBoundAnnotation = /*#__PURE__*/createActionAnnotation(AUTOACTION_BOUND, {
  autoAction: true,
  bound: true
});
function createActionFactory(autoAction) {
  var res = function action(arg1, arg2) {
    // action(fn() {})
    if (isFunction(arg1)) {
      return createAction(arg1.name || DEFAULT_ACTION_NAME, arg1, autoAction);
    }
    // action("name", fn() {})
    if (isFunction(arg2)) {
      return createAction(arg1, arg2, autoAction);
    }
    // @action (2022.3 Decorators)
    if (is20223Decorator(arg2)) {
      return (autoAction ? autoActionAnnotation : actionAnnotation).decorate_20223_(arg1, arg2);
    }
    // @action
    if (isStringish(arg2)) {
      return storeAnnotation(arg1, arg2, autoAction ? autoActionAnnotation : actionAnnotation);
    }
    // action("name") & @action("name")
    if (isStringish(arg1)) {
      return createDecoratorAnnotation(createActionAnnotation(autoAction ? AUTOACTION : ACTION, {
        name: arg1,
        autoAction: autoAction
      }));
    }
    if (true) {
      die("Invalid arguments for `action`");
    }
  };
  return res;
}
var action = /*#__PURE__*/createActionFactory(false);
Object.assign(action, actionAnnotation);
var autoAction = /*#__PURE__*/createActionFactory(true);
Object.assign(autoAction, autoActionAnnotation);
action.bound = /*#__PURE__*/createDecoratorAnnotation(actionBoundAnnotation);
autoAction.bound = /*#__PURE__*/createDecoratorAnnotation(autoActionBoundAnnotation);
function runInAction(fn) {
  return executeAction(fn.name || DEFAULT_ACTION_NAME, false, fn, this, undefined);
}
function isAction(thing) {
  return isFunction(thing) && thing.isMobxAction === true;
}

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */
function autorun(view, opts) {
  var _opts$name, _opts, _opts2, _opts3;
  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }
  if (true) {
    if (!isFunction(view)) {
      die("Autorun expects a function as first argument");
    }
    if (isAction(view)) {
      die("Autorun does not accept actions since actions are untrackable");
    }
  }
  var name = (_opts$name = (_opts = opts) == null ? void 0 : _opts.name) != null ? _opts$name :  true ? view.name || "Autorun@" + getNextId() : 0;
  var runSync = !opts.scheduler && !opts.delay;
  var reaction;
  if (runSync) {
    // normal autorun
    reaction = new Reaction(name, function () {
      this.track(reactionRunner);
    }, opts.onError, opts.requiresObservable);
  } else {
    var scheduler = createSchedulerFromOptions(opts);
    // debounced autorun
    var isScheduled = false;
    reaction = new Reaction(name, function () {
      if (!isScheduled) {
        isScheduled = true;
        scheduler(function () {
          isScheduled = false;
          if (!reaction.isDisposed) {
            reaction.track(reactionRunner);
          }
        });
      }
    }, opts.onError, opts.requiresObservable);
  }
  function reactionRunner() {
    view(reaction);
  }
  if (!((_opts2 = opts) != null && (_opts2 = _opts2.signal) != null && _opts2.aborted)) {
    reaction.schedule_();
  }
  return reaction.getDisposer_((_opts3 = opts) == null ? void 0 : _opts3.signal);
}
var run = function run(f) {
  return f();
};
function createSchedulerFromOptions(opts) {
  return opts.scheduler ? opts.scheduler : opts.delay ? function (f) {
    return setTimeout(f, opts.delay);
  } : run;
}
function reaction(expression, effect, opts) {
  var _opts$name2, _opts4, _opts5;
  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }
  if (true) {
    if (!isFunction(expression) || !isFunction(effect)) {
      die("First and second argument to reaction should be functions");
    }
    if (!isPlainObject(opts)) {
      die("Third argument of reactions should be an object");
    }
  }
  var name = (_opts$name2 = opts.name) != null ? _opts$name2 :  true ? "Reaction@" + getNextId() : 0;
  var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
  var runSync = !opts.scheduler && !opts.delay;
  var scheduler = createSchedulerFromOptions(opts);
  var firstTime = true;
  var isScheduled = false;
  var value;
  var equals = opts.compareStructural ? comparer.structural : opts.equals || comparer["default"];
  var r = new Reaction(name, function () {
    if (firstTime || runSync) {
      reactionRunner();
    } else if (!isScheduled) {
      isScheduled = true;
      scheduler(reactionRunner);
    }
  }, opts.onError, opts.requiresObservable);
  function reactionRunner() {
    isScheduled = false;
    if (r.isDisposed) {
      return;
    }
    var changed = false;
    var oldValue = value;
    r.track(function () {
      var nextValue = allowStateChanges(false, function () {
        return expression(r);
      });
      changed = firstTime || !equals(value, nextValue);
      value = nextValue;
    });
    if (firstTime && opts.fireImmediately) {
      effectAction(value, oldValue, r);
    } else if (!firstTime && changed) {
      effectAction(value, oldValue, r);
    }
    firstTime = false;
  }
  if (!((_opts4 = opts) != null && (_opts4 = _opts4.signal) != null && _opts4.aborted)) {
    r.schedule_();
  }
  return r.getDisposer_((_opts5 = opts) == null ? void 0 : _opts5.signal);
}
function wrapErrorHandler(errorHandler, baseFn) {
  return function () {
    try {
      return baseFn.apply(this, arguments);
    } catch (e) {
      errorHandler.call(this, e);
    }
  };
}

var ON_BECOME_OBSERVED = "onBO";
var ON_BECOME_UNOBSERVED = "onBUO";
function onBecomeObserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_OBSERVED, thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_UNOBSERVED, thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
  var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
  var cb = isFunction(arg3) ? arg3 : arg2;
  var listenersKey = hook + "L";
  if (atom[listenersKey]) {
    atom[listenersKey].add(cb);
  } else {
    atom[listenersKey] = new Set([cb]);
  }
  return function () {
    var hookListeners = atom[listenersKey];
    if (hookListeners) {
      hookListeners["delete"](cb);
      if (hookListeners.size === 0) {
        delete atom[listenersKey];
      }
    }
  };
}

var NEVER = "never";
var ALWAYS = "always";
var OBSERVED = "observed";
// const IF_AVAILABLE = "ifavailable"
function configure(options) {
  if (options.isolateGlobalState === true) {
    isolateGlobalState();
  }
  var useProxies = options.useProxies,
    enforceActions = options.enforceActions;
  if (useProxies !== undefined) {
    globalState.useProxies = useProxies === ALWAYS ? true : useProxies === NEVER ? false : typeof Proxy !== "undefined";
  }
  if (useProxies === "ifavailable") {
    globalState.verifyProxies = true;
  }
  if (enforceActions !== undefined) {
    var ea = enforceActions === ALWAYS ? ALWAYS : enforceActions === OBSERVED;
    globalState.enforceActions = ea;
    globalState.allowStateChanges = ea === true || ea === ALWAYS ? false : true;
  }
  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function (key) {
    if (key in options) {
      globalState[key] = !!options[key];
    }
  });
  globalState.allowStateReads = !globalState.observableRequiresReaction;
  if ( true && globalState.disableErrorBoundaries === true) {
    console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
  }
  if (options.reactionScheduler) {
    setReactionScheduler(options.reactionScheduler);
  }
}

function extendObservable(target, properties, annotations, options) {
  if (true) {
    if (arguments.length > 4) {
      die("'extendObservable' expected 2-4 arguments");
    }
    if (typeof target !== "object") {
      die("'extendObservable' expects an object as first argument");
    }
    if (isObservableMap(target)) {
      die("'extendObservable' should not be used on maps, use map.merge instead");
    }
    if (!isPlainObject(properties)) {
      die("'extendObservable' only accepts plain objects as second argument");
    }
    if (isObservable(properties) || isObservable(annotations)) {
      die("Extending an object with another observable (object) is not supported");
    }
  }
  // Pull descriptors first, so we don't have to deal with props added by administration ($mobx)
  var descriptors = getOwnPropertyDescriptors(properties);
  initObservable(function () {
    var adm = asObservableObject(target, options)[$mobx];
    ownKeys(descriptors).forEach(function (key) {
      adm.extend_(key, descriptors[key],
      // must pass "undefined" for { key: undefined }
      !annotations ? true : key in annotations ? annotations[key] : true);
    });
  });
  return target;
}

function getDependencyTree(thing, property) {
  return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
  var result = {
    name: node.name_
  };
  if (node.observing_ && node.observing_.length > 0) {
    result.dependencies = unique(node.observing_).map(nodeToDependencyTree);
  }
  return result;
}
function getObserverTree(thing, property) {
  return nodeToObserverTree(getAtom(thing, property));
}
function nodeToObserverTree(node) {
  var result = {
    name: node.name_
  };
  if (hasObservers(node)) {
    result.observers = Array.from(getObservers(node)).map(nodeToObserverTree);
  }
  return result;
}
function unique(list) {
  return Array.from(new Set(list));
}

var generatorId = 0;
function FlowCancellationError() {
  this.message = "FLOW_CANCELLED";
}
FlowCancellationError.prototype = /*#__PURE__*/Object.create(Error.prototype);
function isFlowCancellationError(error) {
  return error instanceof FlowCancellationError;
}
var flowAnnotation = /*#__PURE__*/createFlowAnnotation("flow");
var flowBoundAnnotation = /*#__PURE__*/createFlowAnnotation("flow.bound", {
  bound: true
});
var flow = /*#__PURE__*/Object.assign(function flow(arg1, arg2) {
  // @flow (2022.3 Decorators)
  if (is20223Decorator(arg2)) {
    return flowAnnotation.decorate_20223_(arg1, arg2);
  }
  // @flow
  if (isStringish(arg2)) {
    return storeAnnotation(arg1, arg2, flowAnnotation);
  }
  // flow(fn)
  if ( true && arguments.length !== 1) {
    die("Flow expects single argument with generator function");
  }
  var generator = arg1;
  var name = generator.name || "<unnamed flow>";
  // Implementation based on https://github.com/tj/co/blob/master/index.js
  var res = function res() {
    var ctx = this;
    var args = arguments;
    var runId = ++generatorId;
    var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
    var rejector;
    var pendingPromise = undefined;
    var promise = new Promise(function (resolve, reject) {
      var stepId = 0;
      rejector = reject;
      function onFulfilled(res) {
        pendingPromise = undefined;
        var ret;
        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
        } catch (e) {
          return reject(e);
        }
        next(ret);
      }
      function onRejected(err) {
        pendingPromise = undefined;
        var ret;
        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen["throw"]).call(gen, err);
        } catch (e) {
          return reject(e);
        }
        next(ret);
      }
      function next(ret) {
        if (isFunction(ret == null ? void 0 : ret.then)) {
          // an async iterator
          ret.then(next, reject);
          return;
        }
        if (ret.done) {
          return resolve(ret.value);
        }
        pendingPromise = Promise.resolve(ret.value);
        return pendingPromise.then(onFulfilled, onRejected);
      }
      onFulfilled(undefined); // kick off the process
    });
    promise.cancel = action(name + " - runid: " + runId + " - cancel", function () {
      try {
        if (pendingPromise) {
          cancelPromise(pendingPromise);
        }
        // Finally block can return (or yield) stuff..
        var _res = gen["return"](undefined);
        // eat anything that promise would do, it's cancelled!
        var yieldedPromise = Promise.resolve(_res.value);
        yieldedPromise.then(noop, noop);
        cancelPromise(yieldedPromise); // maybe it can be cancelled :)
        // reject our original promise
        rejector(new FlowCancellationError());
      } catch (e) {
        rejector(e); // there could be a throwing finally block
      }
    });
    return promise;
  };
  res.isMobXFlow = true;
  return res;
}, flowAnnotation);
flow.bound = /*#__PURE__*/createDecoratorAnnotation(flowBoundAnnotation);
function cancelPromise(promise) {
  if (isFunction(promise.cancel)) {
    promise.cancel();
  }
}
function flowResult(result) {
  return result; // just tricking TypeScript :)
}
function isFlow(fn) {
  return (fn == null ? void 0 : fn.isMobXFlow) === true;
}

function interceptReads(thing, propOrHandler, handler) {
  var target;
  if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
    target = getAdministration(thing);
  } else if (isObservableObject(thing)) {
    if ( true && !isStringish(propOrHandler)) {
      return die("InterceptReads can only be used with a specific property, not with an object in general");
    }
    target = getAdministration(thing, propOrHandler);
  } else if (true) {
    return die("Expected observable map, object or array as first array");
  }
  if ( true && target.dehancer !== undefined) {
    return die("An intercept reader was already established");
  }
  target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
  return function () {
    target.dehancer = undefined;
  };
}

function intercept(thing, propOrHandler, handler) {
  if (isFunction(handler)) {
    return interceptProperty(thing, propOrHandler, handler);
  } else {
    return interceptInterceptable(thing, propOrHandler);
  }
}
function interceptInterceptable(thing, handler) {
  return getAdministration(thing).intercept_(handler);
}
function interceptProperty(thing, property, handler) {
  return getAdministration(thing, property).intercept_(handler);
}

function _isComputed(value, property) {
  if (property === undefined) {
    return isComputedValue(value);
  }
  if (isObservableObject(value) === false) {
    return false;
  }
  if (!value[$mobx].values_.has(property)) {
    return false;
  }
  var atom = getAtom(value, property);
  return isComputedValue(atom);
}
function isComputed(value) {
  if ( true && arguments.length > 1) {
    return die("isComputed expects only 1 argument. Use isComputedProp to inspect the observability of a property");
  }
  return _isComputed(value);
}
function isComputedProp(value, propName) {
  if ( true && !isStringish(propName)) {
    return die("isComputed expected a property name as second argument");
  }
  return _isComputed(value, propName);
}

function _isObservable(value, property) {
  if (!value) {
    return false;
  }
  if (property !== undefined) {
    if ( true && (isObservableMap(value) || isObservableArray(value))) {
      return die("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
    }
    if (isObservableObject(value)) {
      return value[$mobx].values_.has(property);
    }
    return false;
  }
  // For first check, see #701
  return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
}
function isObservable(value) {
  if ( true && arguments.length !== 1) {
    die("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
  }
  return _isObservable(value);
}
function isObservableProp(value, propName) {
  if ( true && !isStringish(propName)) {
    return die("expected a property name as second argument");
  }
  return _isObservable(value, propName);
}

function keys(obj) {
  if (isObservableObject(obj)) {
    return obj[$mobx].keys_();
  }
  if (isObservableMap(obj) || isObservableSet(obj)) {
    return Array.from(obj.keys());
  }
  if (isObservableArray(obj)) {
    return obj.map(function (_, index) {
      return index;
    });
  }
  die(5);
}
function values(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return obj[key];
    });
  }
  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return obj.get(key);
    });
  }
  if (isObservableSet(obj)) {
    return Array.from(obj.values());
  }
  if (isObservableArray(obj)) {
    return obj.slice();
  }
  die(6);
}
function entries(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj[key]];
    });
  }
  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj.get(key)];
    });
  }
  if (isObservableSet(obj)) {
    return Array.from(obj.entries());
  }
  if (isObservableArray(obj)) {
    return obj.map(function (key, index) {
      return [index, key];
    });
  }
  die(7);
}
function set(obj, key, value) {
  if (arguments.length === 2 && !isObservableSet(obj)) {
    startBatch();
    var _values = key;
    try {
      for (var _key in _values) {
        set(obj, _key, _values[_key]);
      }
    } finally {
      endBatch();
    }
    return;
  }
  if (isObservableObject(obj)) {
    obj[$mobx].set_(key, value);
  } else if (isObservableMap(obj)) {
    obj.set(key, value);
  } else if (isObservableSet(obj)) {
    obj.add(key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") {
      key = parseInt(key, 10);
    }
    if (key < 0) {
      die("Invalid index: '" + key + "'");
    }
    startBatch();
    if (key >= obj.length) {
      obj.length = key + 1;
    }
    obj[key] = value;
    endBatch();
  } else {
    die(8);
  }
}
function remove(obj, key) {
  if (isObservableObject(obj)) {
    obj[$mobx].delete_(key);
  } else if (isObservableMap(obj)) {
    obj["delete"](key);
  } else if (isObservableSet(obj)) {
    obj["delete"](key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") {
      key = parseInt(key, 10);
    }
    obj.splice(key, 1);
  } else {
    die(9);
  }
}
function has(obj, key) {
  if (isObservableObject(obj)) {
    return obj[$mobx].has_(key);
  } else if (isObservableMap(obj)) {
    return obj.has(key);
  } else if (isObservableSet(obj)) {
    return obj.has(key);
  } else if (isObservableArray(obj)) {
    return key >= 0 && key < obj.length;
  }
  die(10);
}
function get(obj, key) {
  if (!has(obj, key)) {
    return undefined;
  }
  if (isObservableObject(obj)) {
    return obj[$mobx].get_(key);
  } else if (isObservableMap(obj)) {
    return obj.get(key);
  } else if (isObservableArray(obj)) {
    return obj[key];
  }
  die(11);
}
function apiDefineProperty(obj, key, descriptor) {
  if (isObservableObject(obj)) {
    return obj[$mobx].defineProperty_(key, descriptor);
  }
  die(39);
}
function apiOwnKeys(obj) {
  if (isObservableObject(obj)) {
    return obj[$mobx].ownKeys_();
  }
  die(38);
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
  if (isFunction(cbOrFire)) {
    return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
  } else {
    return observeObservable(thing, propOrCb, cbOrFire);
  }
}
function observeObservable(thing, listener, fireImmediately) {
  return getAdministration(thing).observe_(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
  return getAdministration(thing, property).observe_(listener, fireImmediately);
}

function cache(map, key, value) {
  map.set(key, value);
  return value;
}
function toJSHelper(source, __alreadySeen) {
  if (source == null || typeof source !== "object" || source instanceof Date || !isObservable(source)) {
    return source;
  }
  if (isObservableValue(source) || isComputedValue(source)) {
    return toJSHelper(source.get(), __alreadySeen);
  }
  if (__alreadySeen.has(source)) {
    return __alreadySeen.get(source);
  }
  if (isObservableArray(source)) {
    var res = cache(__alreadySeen, source, new Array(source.length));
    source.forEach(function (value, idx) {
      res[idx] = toJSHelper(value, __alreadySeen);
    });
    return res;
  }
  if (isObservableSet(source)) {
    var _res = cache(__alreadySeen, source, new Set());
    source.forEach(function (value) {
      _res.add(toJSHelper(value, __alreadySeen));
    });
    return _res;
  }
  if (isObservableMap(source)) {
    var _res2 = cache(__alreadySeen, source, new Map());
    source.forEach(function (value, key) {
      _res2.set(key, toJSHelper(value, __alreadySeen));
    });
    return _res2;
  } else {
    // must be observable object
    var _res3 = cache(__alreadySeen, source, {});
    apiOwnKeys(source).forEach(function (key) {
      if (objectPrototype.propertyIsEnumerable.call(source, key)) {
        _res3[key] = toJSHelper(source[key], __alreadySeen);
      }
    });
    return _res3;
  }
}
/**
 * Recursively converts an observable to it's non-observable native counterpart.
 * It does NOT recurse into non-observables, these are left as they are, even if they contain observables.
 * Computed and other non-enumerable properties are completely ignored.
 * Complex scenarios require custom solution, eg implementing `toJSON` or using `serializr` lib.
 */
function toJS(source, options) {
  if ( true && options) {
    die("toJS no longer supports options");
  }
  return toJSHelper(source, new Map());
}

function trace() {
  if (false) {}
  var enterBreakPoint = false;
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  if (typeof args[args.length - 1] === "boolean") {
    enterBreakPoint = args.pop();
  }
  var derivation = getAtomFromArgs(args);
  if (!derivation) {
    return die("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
  }
  if (derivation.isTracing_ === TraceMode.NONE) {
    console.log("[mobx.trace] '" + derivation.name_ + "' tracing enabled");
  }
  derivation.isTracing_ = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}
function getAtomFromArgs(args) {
  switch (args.length) {
    case 0:
      return globalState.trackingDerivation;
    case 1:
      return getAtom(args[0]);
    case 2:
      return getAtom(args[0], args[1]);
  }
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction(action, thisArg) {
  if (thisArg === void 0) {
    thisArg = undefined;
  }
  startBatch();
  try {
    return action.apply(thisArg);
  } finally {
    endBatch();
  }
}

function when(predicate, arg1, arg2) {
  if (arguments.length === 1 || arg1 && typeof arg1 === "object") {
    return whenPromise(predicate, arg1);
  }
  return _when(predicate, arg1, arg2 || {});
}
function _when(predicate, effect, opts) {
  var timeoutHandle;
  if (typeof opts.timeout === "number") {
    var error = new Error("WHEN_TIMEOUT");
    timeoutHandle = setTimeout(function () {
      if (!disposer[$mobx].isDisposed) {
        disposer();
        if (opts.onError) {
          opts.onError(error);
        } else {
          throw error;
        }
      }
    }, opts.timeout);
  }
  opts.name =  true ? opts.name || "When@" + getNextId() : 0;
  var effectAction = createAction( true ? opts.name + "-effect" : 0, effect);
  // eslint-disable-next-line
  var disposer = autorun(function (r) {
    // predicate should not change state
    var cond = allowStateChanges(false, predicate);
    if (cond) {
      r.dispose();
      if (timeoutHandle) {
        clearTimeout(timeoutHandle);
      }
      effectAction();
    }
  }, opts);
  return disposer;
}
function whenPromise(predicate, opts) {
  var _opts$signal;
  if ( true && opts && opts.onError) {
    return die("the options 'onError' and 'promise' cannot be combined");
  }
  if (opts != null && (_opts$signal = opts.signal) != null && _opts$signal.aborted) {
    return Object.assign(Promise.reject(new Error("WHEN_ABORTED")), {
      cancel: function cancel() {
        return null;
      }
    });
  }
  var cancel;
  var abort;
  var res = new Promise(function (resolve, reject) {
    var _opts$signal2;
    var disposer = _when(predicate, resolve, _extends({}, opts, {
      onError: reject
    }));
    cancel = function cancel() {
      disposer();
      reject(new Error("WHEN_CANCELLED"));
    };
    abort = function abort() {
      disposer();
      reject(new Error("WHEN_ABORTED"));
    };
    opts == null || (_opts$signal2 = opts.signal) == null || _opts$signal2.addEventListener == null || _opts$signal2.addEventListener("abort", abort);
  })["finally"](function () {
    var _opts$signal3;
    return opts == null || (_opts$signal3 = opts.signal) == null || _opts$signal3.removeEventListener == null ? void 0 : _opts$signal3.removeEventListener("abort", abort);
  });
  res.cancel = cancel;
  return res;
}

function getAdm(target) {
  return target[$mobx];
}
// Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!
var objectProxyTraps = {
  has: function has(target, name) {
    if ( true && globalState.trackingDerivation) {
      warnAboutProxyRequirement("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead.");
    }
    return getAdm(target).has_(name);
  },
  get: function get(target, name) {
    return getAdm(target).get_(name);
  },
  set: function set(target, name, value) {
    var _getAdm$set_;
    if (!isStringish(name)) {
      return false;
    }
    if ( true && !getAdm(target).values_.has(name)) {
      warnAboutProxyRequirement("add a new observable property through direct assignment. Use 'set' from 'mobx' instead.");
    }
    // null (intercepted) -> true (success)
    return (_getAdm$set_ = getAdm(target).set_(name, value, true)) != null ? _getAdm$set_ : true;
  },
  deleteProperty: function deleteProperty(target, name) {
    var _getAdm$delete_;
    if (true) {
      warnAboutProxyRequirement("delete properties from an observable object. Use 'remove' from 'mobx' instead.");
    }
    if (!isStringish(name)) {
      return false;
    }
    // null (intercepted) -> true (success)
    return (_getAdm$delete_ = getAdm(target).delete_(name, true)) != null ? _getAdm$delete_ : true;
  },
  defineProperty: function defineProperty(target, name, descriptor) {
    var _getAdm$definePropert;
    if (true) {
      warnAboutProxyRequirement("define property on an observable object. Use 'defineProperty' from 'mobx' instead.");
    }
    // null (intercepted) -> true (success)
    return (_getAdm$definePropert = getAdm(target).defineProperty_(name, descriptor)) != null ? _getAdm$definePropert : true;
  },
  ownKeys: function ownKeys(target) {
    if ( true && globalState.trackingDerivation) {
      warnAboutProxyRequirement("iterate keys to detect added / removed properties. Use 'keys' from 'mobx' instead.");
    }
    return getAdm(target).ownKeys_();
  },
  preventExtensions: function preventExtensions(target) {
    die(13);
  }
};
function asDynamicObservableObject(target, options) {
  var _target$$mobx, _target$$mobx$proxy_;
  assertProxies();
  target = asObservableObject(target, options);
  return (_target$$mobx$proxy_ = (_target$$mobx = target[$mobx]).proxy_) != null ? _target$$mobx$proxy_ : _target$$mobx.proxy_ = new Proxy(target, objectProxyTraps);
}

function hasInterceptors(interceptable) {
  return interceptable.interceptors_ !== undefined && interceptable.interceptors_.length > 0;
}
function registerInterceptor(interceptable, handler) {
  var interceptors = interceptable.interceptors_ || (interceptable.interceptors_ = []);
  interceptors.push(handler);
  return once(function () {
    var idx = interceptors.indexOf(handler);
    if (idx !== -1) {
      interceptors.splice(idx, 1);
    }
  });
}
function interceptChange(interceptable, change) {
  var prevU = untrackedStart();
  try {
    // Interceptor can modify the array, copy it to avoid concurrent modification, see #1950
    var interceptors = [].concat(interceptable.interceptors_ || []);
    for (var i = 0, l = interceptors.length; i < l; i++) {
      change = interceptors[i](change);
      if (change && !change.type) {
        die(14);
      }
      if (!change) {
        break;
      }
    }
    return change;
  } finally {
    untrackedEnd(prevU);
  }
}

function hasListeners(listenable) {
  return listenable.changeListeners_ !== undefined && listenable.changeListeners_.length > 0;
}
function registerListener(listenable, handler) {
  var listeners = listenable.changeListeners_ || (listenable.changeListeners_ = []);
  listeners.push(handler);
  return once(function () {
    var idx = listeners.indexOf(handler);
    if (idx !== -1) {
      listeners.splice(idx, 1);
    }
  });
}
function notifyListeners(listenable, change) {
  var prevU = untrackedStart();
  var listeners = listenable.changeListeners_;
  if (!listeners) {
    return;
  }
  listeners = listeners.slice();
  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](change);
  }
  untrackedEnd(prevU);
}

function makeObservable(target, annotations, options) {
  initObservable(function () {
    var _annotations;
    var adm = asObservableObject(target, options)[$mobx];
    if ( true && annotations && target[storedAnnotationsSymbol]) {
      die("makeObservable second arg must be nullish when using decorators. Mixing @decorator syntax with annotations is not supported.");
    }
    // Default to decorators
    (_annotations = annotations) != null ? _annotations : annotations = collectStoredAnnotations(target);
    // Annotate
    ownKeys(annotations).forEach(function (key) {
      return adm.make_(key, annotations[key]);
    });
  });
  return target;
}
// proto[keysSymbol] = new Set<PropertyKey>()
var keysSymbol = /*#__PURE__*/Symbol("mobx-keys");
function makeAutoObservable(target, overrides, options) {
  if (true) {
    if (!isPlainObject(target) && !isPlainObject(Object.getPrototypeOf(target))) {
      die("'makeAutoObservable' can only be used for classes that don't have a superclass");
    }
    if (isObservableObject(target)) {
      die("makeAutoObservable can only be used on objects not already made observable");
    }
  }
  // Optimization: avoid visiting protos
  // Assumes that annotation.make_/.extend_ works the same for plain objects
  if (isPlainObject(target)) {
    return extendObservable(target, target, overrides, options);
  }
  initObservable(function () {
    var adm = asObservableObject(target, options)[$mobx];
    // Optimization: cache keys on proto
    // Assumes makeAutoObservable can be called only once per object and can't be used in subclass
    if (!target[keysSymbol]) {
      var proto = Object.getPrototypeOf(target);
      var keys = new Set([].concat(ownKeys(target), ownKeys(proto)));
      keys["delete"]("constructor");
      keys["delete"]($mobx);
      addHiddenProp(proto, keysSymbol, keys);
    }
    target[keysSymbol].forEach(function (key) {
      return adm.make_(key,
      // must pass "undefined" for { key: undefined }
      !overrides ? true : key in overrides ? overrides[key] : true);
    });
  });
  return target;
}

var SPLICE = "splice";
var UPDATE = "update";
var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
var arrayTraps = {
  get: function get(target, name) {
    var adm = target[$mobx];
    if (name === $mobx) {
      return adm;
    }
    if (name === "length") {
      return adm.getArrayLength_();
    }
    if (typeof name === "string" && !isNaN(name)) {
      return adm.get_(parseInt(name));
    }
    if (hasProp(arrayExtensions, name)) {
      return arrayExtensions[name];
    }
    return target[name];
  },
  set: function set(target, name, value) {
    var adm = target[$mobx];
    if (name === "length") {
      adm.setArrayLength_(value);
    }
    if (typeof name === "symbol" || isNaN(name)) {
      target[name] = value;
    } else {
      // numeric string
      adm.set_(parseInt(name), value);
    }
    return true;
  },
  preventExtensions: function preventExtensions() {
    die(15);
  }
};
var ObservableArrayAdministration = /*#__PURE__*/function () {
  function ObservableArrayAdministration(name, enhancer, owned_, legacyMode_) {
    if (name === void 0) {
      name =  true ? "ObservableArray@" + getNextId() : 0;
    }
    this.owned_ = void 0;
    this.legacyMode_ = void 0;
    this.atom_ = void 0;
    this.values_ = [];
    // this is the prop that gets proxied, so can't replace it!
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.enhancer_ = void 0;
    this.dehancer = void 0;
    this.proxy_ = void 0;
    this.lastKnownLength_ = 0;
    this.owned_ = owned_;
    this.legacyMode_ = legacyMode_;
    this.atom_ = new Atom(name);
    this.enhancer_ = function (newV, oldV) {
      return enhancer(newV, oldV,  true ? name + "[..]" : 0);
    };
  }
  var _proto = ObservableArrayAdministration.prototype;
  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }
    return value;
  };
  _proto.dehanceValues_ = function dehanceValues_(values) {
    if (this.dehancer !== undefined && values.length > 0) {
      return values.map(this.dehancer);
    }
    return values;
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }
    if (fireImmediately) {
      listener({
        observableKind: "array",
        object: this.proxy_,
        debugObjectName: this.atom_.name_,
        type: "splice",
        index: 0,
        added: this.values_.slice(),
        addedCount: this.values_.length,
        removed: [],
        removedCount: 0
      });
    }
    return registerListener(this, listener);
  };
  _proto.getArrayLength_ = function getArrayLength_() {
    this.atom_.reportObserved();
    return this.values_.length;
  };
  _proto.setArrayLength_ = function setArrayLength_(newLength) {
    if (typeof newLength !== "number" || isNaN(newLength) || newLength < 0) {
      die("Out of range: " + newLength);
    }
    var currentLength = this.values_.length;
    if (newLength === currentLength) {
      return;
    } else if (newLength > currentLength) {
      var newItems = new Array(newLength - currentLength);
      for (var i = 0; i < newLength - currentLength; i++) {
        newItems[i] = undefined;
      } // No Array.fill everywhere...
      this.spliceWithArray_(currentLength, 0, newItems);
    } else {
      this.spliceWithArray_(newLength, currentLength - newLength);
    }
  };
  _proto.updateArrayLength_ = function updateArrayLength_(oldLength, delta) {
    if (oldLength !== this.lastKnownLength_) {
      die(16);
    }
    this.lastKnownLength_ += delta;
    if (this.legacyMode_ && delta > 0) {
      reserveArrayBuffer(oldLength + delta + 1);
    }
  };
  _proto.spliceWithArray_ = function spliceWithArray_(index, deleteCount, newItems) {
    var _this = this;
    checkIfStateModificationsAreAllowed(this.atom_);
    var length = this.values_.length;
    if (index === undefined) {
      index = 0;
    } else if (index > length) {
      index = length;
    } else if (index < 0) {
      index = Math.max(0, length + index);
    }
    if (arguments.length === 1) {
      deleteCount = length - index;
    } else if (deleteCount === undefined || deleteCount === null) {
      deleteCount = 0;
    } else {
      deleteCount = Math.max(0, Math.min(deleteCount, length - index));
    }
    if (newItems === undefined) {
      newItems = EMPTY_ARRAY;
    }
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_,
        type: SPLICE,
        index: index,
        removedCount: deleteCount,
        added: newItems
      });
      if (!change) {
        return EMPTY_ARRAY;
      }
      deleteCount = change.removedCount;
      newItems = change.added;
    }
    newItems = newItems.length === 0 ? newItems : newItems.map(function (v) {
      return _this.enhancer_(v, undefined);
    });
    if (this.legacyMode_ || "development" !== "production") {
      var lengthDelta = newItems.length - deleteCount;
      this.updateArrayLength_(length, lengthDelta); // checks if internal array wasn't modified
    }
    var res = this.spliceItemsIntoValues_(index, deleteCount, newItems);
    if (deleteCount !== 0 || newItems.length !== 0) {
      this.notifyArraySplice_(index, newItems, res);
    }
    return this.dehanceValues_(res);
  };
  _proto.spliceItemsIntoValues_ = function spliceItemsIntoValues_(index, deleteCount, newItems) {
    if (newItems.length < MAX_SPLICE_SIZE) {
      var _this$values_;
      return (_this$values_ = this.values_).splice.apply(_this$values_, [index, deleteCount].concat(newItems));
    } else {
      // The items removed by the splice
      var res = this.values_.slice(index, index + deleteCount);
      // The items that that should remain at the end of the array
      var oldItems = this.values_.slice(index + deleteCount);
      // New length is the previous length + addition count - deletion count
      this.values_.length += newItems.length - deleteCount;
      for (var i = 0; i < newItems.length; i++) {
        this.values_[index + i] = newItems[i];
      }
      for (var _i = 0; _i < oldItems.length; _i++) {
        this.values_[index + newItems.length + _i] = oldItems[_i];
      }
      return res;
    }
  };
  _proto.notifyArrayChildUpdate_ = function notifyArrayChildUpdate_(index, newValue, oldValue) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      type: UPDATE,
      debugObjectName: this.atom_.name_,
      index: index,
      newValue: newValue,
      oldValue: oldValue
    } : null;
    // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
    // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled
    if ( true && notifySpy) {
      spyReportStart(change);
    }
    this.atom_.reportChanged();
    if (notify) {
      notifyListeners(this, change);
    }
    if ( true && notifySpy) {
      spyReportEnd();
    }
  };
  _proto.notifyArraySplice_ = function notifyArraySplice_(index, added, removed) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: SPLICE,
      index: index,
      removed: removed,
      added: added,
      removedCount: removed.length,
      addedCount: added.length
    } : null;
    if ( true && notifySpy) {
      spyReportStart(change);
    }
    this.atom_.reportChanged();
    // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
    if (notify) {
      notifyListeners(this, change);
    }
    if ( true && notifySpy) {
      spyReportEnd();
    }
  };
  _proto.get_ = function get_(index) {
    if (this.legacyMode_ && index >= this.values_.length) {
      console.warn( true ? "[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX" : 0);
      return undefined;
    }
    this.atom_.reportObserved();
    return this.dehanceValue_(this.values_[index]);
  };
  _proto.set_ = function set_(index, newValue) {
    var values = this.values_;
    if (this.legacyMode_ && index > values.length) {
      // out of bounds
      die(17, index, values.length);
    }
    if (index < values.length) {
      // update at index in range
      checkIfStateModificationsAreAllowed(this.atom_);
      var oldValue = values[index];
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: UPDATE,
          object: this.proxy_,
          // since "this" is the real array we need to pass its proxy
          index: index,
          newValue: newValue
        });
        if (!change) {
          return;
        }
        newValue = change.newValue;
      }
      newValue = this.enhancer_(newValue, oldValue);
      var changed = newValue !== oldValue;
      if (changed) {
        values[index] = newValue;
        this.notifyArrayChildUpdate_(index, newValue, oldValue);
      }
    } else {
      // For out of bound index, we don't create an actual sparse array,
      // but rather fill the holes with undefined (same as setArrayLength_).
      // This could be considered a bug.
      var newItems = new Array(index + 1 - values.length);
      for (var i = 0; i < newItems.length - 1; i++) {
        newItems[i] = undefined;
      } // No Array.fill everywhere...
      newItems[newItems.length - 1] = newValue;
      this.spliceWithArray_(values.length, 0, newItems);
    }
  };
  return ObservableArrayAdministration;
}();
function createObservableArray(initialValues, enhancer, name, owned) {
  if (name === void 0) {
    name =  true ? "ObservableArray@" + getNextId() : 0;
  }
  if (owned === void 0) {
    owned = false;
  }
  assertProxies();
  return initObservable(function () {
    var adm = new ObservableArrayAdministration(name, enhancer, owned, false);
    addHiddenFinalProp(adm.values_, $mobx, adm);
    var proxy = new Proxy(adm.values_, arrayTraps);
    adm.proxy_ = proxy;
    if (initialValues && initialValues.length) {
      adm.spliceWithArray_(0, 0, initialValues);
    }
    return proxy;
  });
}
// eslint-disable-next-line
var arrayExtensions = {
  clear: function clear() {
    return this.splice(0);
  },
  replace: function replace(newItems) {
    var adm = this[$mobx];
    return adm.spliceWithArray_(0, adm.values_.length, newItems);
  },
  // Used by JSON.stringify
  toJSON: function toJSON() {
    return this.slice();
  },
  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */
  splice: function splice(index, deleteCount) {
    for (var _len = arguments.length, newItems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      newItems[_key - 2] = arguments[_key];
    }
    var adm = this[$mobx];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return adm.spliceWithArray_(index);
      case 2:
        return adm.spliceWithArray_(index, deleteCount);
    }
    return adm.spliceWithArray_(index, deleteCount, newItems);
  },
  spliceWithArray: function spliceWithArray(index, deleteCount, newItems) {
    return this[$mobx].spliceWithArray_(index, deleteCount, newItems);
  },
  push: function push() {
    var adm = this[$mobx];
    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }
    adm.spliceWithArray_(adm.values_.length, 0, items);
    return adm.values_.length;
  },
  pop: function pop() {
    return this.splice(Math.max(this[$mobx].values_.length - 1, 0), 1)[0];
  },
  shift: function shift() {
    return this.splice(0, 1)[0];
  },
  unshift: function unshift() {
    var adm = this[$mobx];
    for (var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      items[_key3] = arguments[_key3];
    }
    adm.spliceWithArray_(0, 0, items);
    return adm.values_.length;
  },
  reverse: function reverse() {
    // reverse by default mutates in place before returning the result
    // which makes it both a 'derivation' and a 'mutation'.
    if (globalState.trackingDerivation) {
      die(37, "reverse");
    }
    this.replace(this.slice().reverse());
    return this;
  },
  sort: function sort() {
    // sort by default mutates in place before returning the result
    // which goes against all good practices. Let's not change the array in place!
    if (globalState.trackingDerivation) {
      die(37, "sort");
    }
    var copy = this.slice();
    copy.sort.apply(copy, arguments);
    this.replace(copy);
    return this;
  },
  remove: function remove(value) {
    var adm = this[$mobx];
    var idx = adm.dehanceValues_(adm.values_).indexOf(value);
    if (idx > -1) {
      this.splice(idx, 1);
      return true;
    }
    return false;
  }
};
/**
 * Wrap function from prototype
 * Without this, everything works as well, but this works
 * faster as everything works on unproxied values
 */
addArrayExtension("at", simpleFunc);
addArrayExtension("concat", simpleFunc);
addArrayExtension("flat", simpleFunc);
addArrayExtension("includes", simpleFunc);
addArrayExtension("indexOf", simpleFunc);
addArrayExtension("join", simpleFunc);
addArrayExtension("lastIndexOf", simpleFunc);
addArrayExtension("slice", simpleFunc);
addArrayExtension("toString", simpleFunc);
addArrayExtension("toLocaleString", simpleFunc);
addArrayExtension("toSorted", simpleFunc);
addArrayExtension("toSpliced", simpleFunc);
addArrayExtension("with", simpleFunc);
// map
addArrayExtension("every", mapLikeFunc);
addArrayExtension("filter", mapLikeFunc);
addArrayExtension("find", mapLikeFunc);
addArrayExtension("findIndex", mapLikeFunc);
addArrayExtension("findLast", mapLikeFunc);
addArrayExtension("findLastIndex", mapLikeFunc);
addArrayExtension("flatMap", mapLikeFunc);
addArrayExtension("forEach", mapLikeFunc);
addArrayExtension("map", mapLikeFunc);
addArrayExtension("some", mapLikeFunc);
addArrayExtension("toReversed", mapLikeFunc);
// reduce
addArrayExtension("reduce", reduceLikeFunc);
addArrayExtension("reduceRight", reduceLikeFunc);
function addArrayExtension(funcName, funcFactory) {
  if (typeof Array.prototype[funcName] === "function") {
    arrayExtensions[funcName] = funcFactory(funcName);
  }
}
// Report and delegate to dehanced array
function simpleFunc(funcName) {
  return function () {
    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
}
// Make sure callbacks receive correct array arg #2326
function mapLikeFunc(funcName) {
  return function (callback, thisArg) {
    var _this2 = this;
    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName](function (element, index) {
      return callback.call(thisArg, element, index, _this2);
    });
  };
}
// Make sure callbacks receive correct array arg #2326
function reduceLikeFunc(funcName) {
  return function () {
    var _this3 = this;
    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    // #2432 - reduce behavior depends on arguments.length
    var callback = arguments[0];
    arguments[0] = function (accumulator, currentValue, index) {
      return callback(accumulator, currentValue, index, _this3);
    };
    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
}
var isObservableArrayAdministration = /*#__PURE__*/createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
  return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}

var ObservableMapMarker = {};
var ADD = "add";
var DELETE = "delete";
// just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556
var ObservableMap = /*#__PURE__*/function () {
  function ObservableMap(initialData, enhancer_, name_) {
    var _this = this;
    if (enhancer_ === void 0) {
      enhancer_ = deepEnhancer;
    }
    if (name_ === void 0) {
      name_ =  true ? "ObservableMap@" + getNextId() : 0;
    }
    this.enhancer_ = void 0;
    this.name_ = void 0;
    this[$mobx] = ObservableMapMarker;
    this.data_ = void 0;
    this.hasMap_ = void 0;
    // hasMap, not hashMap >-).
    this.keysAtom_ = void 0;
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = enhancer_;
    this.name_ = name_;
    if (!isFunction(Map)) {
      die(18);
    }
    initObservable(function () {
      _this.keysAtom_ = createAtom( true ? _this.name_ + ".keys()" : 0);
      _this.data_ = new Map();
      _this.hasMap_ = new Map();
      if (initialData) {
        _this.merge(initialData);
      }
    });
  }
  var _proto = ObservableMap.prototype;
  _proto.has_ = function has_(key) {
    return this.data_.has(key);
  };
  _proto.has = function has(key) {
    var _this2 = this;
    if (!globalState.trackingDerivation) {
      return this.has_(key);
    }
    var entry = this.hasMap_.get(key);
    if (!entry) {
      var newEntry = entry = new ObservableValue(this.has_(key), referenceEnhancer,  true ? this.name_ + "." + stringifyKey(key) + "?" : 0, false);
      this.hasMap_.set(key, newEntry);
      onBecomeUnobserved(newEntry, function () {
        return _this2.hasMap_["delete"](key);
      });
    }
    return entry.get();
  };
  _proto.set = function set(key, value) {
    var hasKey = this.has_(key);
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: hasKey ? UPDATE : ADD,
        object: this,
        newValue: value,
        name: key
      });
      if (!change) {
        return this;
      }
      value = change.newValue;
    }
    if (hasKey) {
      this.updateValue_(key, value);
    } else {
      this.addValue_(key, value);
    }
    return this;
  };
  _proto["delete"] = function _delete(key) {
    var _this3 = this;
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE,
        object: this,
        name: key
      });
      if (!change) {
        return false;
      }
    }
    if (this.has_(key)) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var _change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: this.data_.get(key).value_,
        name: key
      } : null;
      if ( true && notifySpy) {
        spyReportStart(_change);
      } // TODO fix type
      transaction(function () {
        var _this3$hasMap_$get;
        _this3.keysAtom_.reportChanged();
        (_this3$hasMap_$get = _this3.hasMap_.get(key)) == null || _this3$hasMap_$get.setNewValue_(false);
        var observable = _this3.data_.get(key);
        observable.setNewValue_(undefined);
        _this3.data_["delete"](key);
      });
      if (notify) {
        notifyListeners(this, _change);
      }
      if ( true && notifySpy) {
        spyReportEnd();
      }
      return true;
    }
    return false;
  };
  _proto.updateValue_ = function updateValue_(key, newValue) {
    var observable = this.data_.get(key);
    newValue = observable.prepareNewValue_(newValue);
    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: UPDATE,
        object: this,
        oldValue: observable.value_,
        name: key,
        newValue: newValue
      } : null;
      if ( true && notifySpy) {
        spyReportStart(change);
      } // TODO fix type
      observable.setNewValue_(newValue);
      if (notify) {
        notifyListeners(this, change);
      }
      if ( true && notifySpy) {
        spyReportEnd();
      }
    }
  };
  _proto.addValue_ = function addValue_(key, newValue) {
    var _this4 = this;
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    transaction(function () {
      var _this4$hasMap_$get;
      var observable = new ObservableValue(newValue, _this4.enhancer_,  true ? _this4.name_ + "." + stringifyKey(key) : 0, false);
      _this4.data_.set(key, observable);
      newValue = observable.value_; // value might have been changed
      (_this4$hasMap_$get = _this4.hasMap_.get(key)) == null || _this4$hasMap_$get.setNewValue_(true);
      _this4.keysAtom_.reportChanged();
    });
    var notifySpy = isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: ADD,
      object: this,
      name: key,
      newValue: newValue
    } : null;
    if ( true && notifySpy) {
      spyReportStart(change);
    } // TODO fix type
    if (notify) {
      notifyListeners(this, change);
    }
    if ( true && notifySpy) {
      spyReportEnd();
    }
  };
  _proto.get = function get(key) {
    if (this.has(key)) {
      return this.dehanceValue_(this.data_.get(key).get());
    }
    return this.dehanceValue_(undefined);
  };
  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }
    return value;
  };
  _proto.keys = function keys() {
    this.keysAtom_.reportObserved();
    return this.data_.keys();
  };
  _proto.values = function values() {
    var self = this;
    var keys = this.keys();
    return makeIterableForMap({
      next: function next() {
        var _keys$next = keys.next(),
          done = _keys$next.done,
          value = _keys$next.value;
        return {
          done: done,
          value: done ? undefined : self.get(value)
        };
      }
    });
  };
  _proto.entries = function entries() {
    var self = this;
    var keys = this.keys();
    return makeIterableForMap({
      next: function next() {
        var _keys$next2 = keys.next(),
          done = _keys$next2.done,
          value = _keys$next2.value;
        return {
          done: done,
          value: done ? undefined : [value, self.get(value)]
        };
      }
    });
  };
  _proto[Symbol.iterator] = function () {
    return this.entries();
  };
  _proto.forEach = function forEach(callback, thisArg) {
    for (var _iterator = _createForOfIteratorHelperLoose(this), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
        key = _step$value[0],
        value = _step$value[1];
      callback.call(thisArg, value, key, this);
    }
  }
  /** Merge another object into this object, returns this. */;
  _proto.merge = function merge(other) {
    var _this5 = this;
    if (isObservableMap(other)) {
      other = new Map(other);
    }
    transaction(function () {
      if (isPlainObject(other)) {
        getPlainObjectKeys(other).forEach(function (key) {
          return _this5.set(key, other[key]);
        });
      } else if (Array.isArray(other)) {
        other.forEach(function (_ref) {
          var key = _ref[0],
            value = _ref[1];
          return _this5.set(key, value);
        });
      } else if (isES6Map(other)) {
        if (!isPlainES6Map(other)) {
          die(19, other);
        }
        other.forEach(function (value, key) {
          return _this5.set(key, value);
        });
      } else if (other !== null && other !== undefined) {
        die(20, other);
      }
    });
    return this;
  };
  _proto.clear = function clear() {
    var _this6 = this;
    transaction(function () {
      untracked(function () {
        for (var _iterator2 = _createForOfIteratorHelperLoose(_this6.keys()), _step2; !(_step2 = _iterator2()).done;) {
          var key = _step2.value;
          _this6["delete"](key);
        }
      });
    });
  };
  _proto.replace = function replace(values) {
    var _this7 = this;
    // Implementation requirements:
    // - respect ordering of replacement map
    // - allow interceptors to run and potentially prevent individual operations
    // - don't recreate observables that already exist in original map (so we don't destroy existing subscriptions)
    // - don't _keysAtom.reportChanged if the keys of resulting map are indentical (order matters!)
    // - note that result map may differ from replacement map due to the interceptors
    transaction(function () {
      // Convert to map so we can do quick key lookups
      var replacementMap = convertToMap(values);
      var orderedData = new Map();
      // Used for optimization
      var keysReportChangedCalled = false;
      // Delete keys that don't exist in replacement map
      // if the key deletion is prevented by interceptor
      // add entry at the beginning of the result map
      for (var _iterator3 = _createForOfIteratorHelperLoose(_this7.data_.keys()), _step3; !(_step3 = _iterator3()).done;) {
        var key = _step3.value;
        // Concurrently iterating/deleting keys
        // iterator should handle this correctly
        if (!replacementMap.has(key)) {
          var deleted = _this7["delete"](key);
          // Was the key removed?
          if (deleted) {
            // _keysAtom.reportChanged() was already called
            keysReportChangedCalled = true;
          } else {
            // Delete prevented by interceptor
            var value = _this7.data_.get(key);
            orderedData.set(key, value);
          }
        }
      }
      // Merge entries
      for (var _iterator4 = _createForOfIteratorHelperLoose(replacementMap.entries()), _step4; !(_step4 = _iterator4()).done;) {
        var _step4$value = _step4.value,
          _key = _step4$value[0],
          _value = _step4$value[1];
        // We will want to know whether a new key is added
        var keyExisted = _this7.data_.has(_key);
        // Add or update value
        _this7.set(_key, _value);
        // The addition could have been prevent by interceptor
        if (_this7.data_.has(_key)) {
          // The update could have been prevented by interceptor
          // and also we want to preserve existing values
          // so use value from _data map (instead of replacement map)
          var _value2 = _this7.data_.get(_key);
          orderedData.set(_key, _value2);
          // Was a new key added?
          if (!keyExisted) {
            // _keysAtom.reportChanged() was already called
            keysReportChangedCalled = true;
          }
        }
      }
      // Check for possible key order change
      if (!keysReportChangedCalled) {
        if (_this7.data_.size !== orderedData.size) {
          // If size differs, keys are definitely modified
          _this7.keysAtom_.reportChanged();
        } else {
          var iter1 = _this7.data_.keys();
          var iter2 = orderedData.keys();
          var next1 = iter1.next();
          var next2 = iter2.next();
          while (!next1.done) {
            if (next1.value !== next2.value) {
              _this7.keysAtom_.reportChanged();
              break;
            }
            next1 = iter1.next();
            next2 = iter2.next();
          }
        }
      }
      // Use correctly ordered map
      _this7.data_ = orderedData;
    });
    return this;
  };
  _proto.toString = function toString() {
    return "[object ObservableMap]";
  };
  _proto.toJSON = function toJSON() {
    return Array.from(this);
  };
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if ( true && fireImmediately === true) {
      die("`observe` doesn't support fireImmediately=true in combination with maps.");
    }
    return registerListener(this, listener);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  return _createClass(ObservableMap, [{
    key: "size",
    get: function get() {
      this.keysAtom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: Symbol.toStringTag,
    get: function get() {
      return "Map";
    }
  }]);
}();
// eslint-disable-next-line
var isObservableMap = /*#__PURE__*/createInstanceofPredicate("ObservableMap", ObservableMap);
function makeIterableForMap(iterator) {
  iterator[Symbol.toStringTag] = "MapIterator";
  return makeIterable(iterator);
}
function convertToMap(dataStructure) {
  if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
    return dataStructure;
  } else if (Array.isArray(dataStructure)) {
    return new Map(dataStructure);
  } else if (isPlainObject(dataStructure)) {
    var map = new Map();
    for (var key in dataStructure) {
      map.set(key, dataStructure[key]);
    }
    return map;
  } else {
    return die(21, dataStructure);
  }
}

var ObservableSetMarker = {};
var ObservableSet = /*#__PURE__*/function () {
  function ObservableSet(initialData, enhancer, name_) {
    var _this = this;
    if (enhancer === void 0) {
      enhancer = deepEnhancer;
    }
    if (name_ === void 0) {
      name_ =  true ? "ObservableSet@" + getNextId() : 0;
    }
    this.name_ = void 0;
    this[$mobx] = ObservableSetMarker;
    this.data_ = new Set();
    this.atom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = void 0;
    this.name_ = name_;
    if (!isFunction(Set)) {
      die(22);
    }
    this.enhancer_ = function (newV, oldV) {
      return enhancer(newV, oldV, name_);
    };
    initObservable(function () {
      _this.atom_ = createAtom(_this.name_);
      if (initialData) {
        _this.replace(initialData);
      }
    });
  }
  var _proto = ObservableSet.prototype;
  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }
    return value;
  };
  _proto.clear = function clear() {
    var _this2 = this;
    transaction(function () {
      untracked(function () {
        for (var _iterator = _createForOfIteratorHelperLoose(_this2.data_.values()), _step; !(_step = _iterator()).done;) {
          var value = _step.value;
          _this2["delete"](value);
        }
      });
    });
  };
  _proto.forEach = function forEach(callbackFn, thisArg) {
    for (var _iterator2 = _createForOfIteratorHelperLoose(this), _step2; !(_step2 = _iterator2()).done;) {
      var value = _step2.value;
      callbackFn.call(thisArg, value, value, this);
    }
  };
  _proto.add = function add(value) {
    var _this3 = this;
    checkIfStateModificationsAreAllowed(this.atom_);
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: ADD,
        object: this,
        newValue: value
      });
      if (!change) {
        return this;
      }
      // implemented reassignment same as it's done for ObservableMap
      value = change.newValue;
    }
    if (!this.has(value)) {
      transaction(function () {
        _this3.data_.add(_this3.enhancer_(value, undefined));
        _this3.atom_.reportChanged();
      });
      var notifySpy =  true && isSpyEnabled();
      var notify = hasListeners(this);
      var _change = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: ADD,
        object: this,
        newValue: value
      } : null;
      if (notifySpy && "development" !== "production") {
        spyReportStart(_change);
      }
      if (notify) {
        notifyListeners(this, _change);
      }
      if (notifySpy && "development" !== "production") {
        spyReportEnd();
      }
    }
    return this;
  };
  _proto["delete"] = function _delete(value) {
    var _this4 = this;
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE,
        object: this,
        oldValue: value
      });
      if (!change) {
        return false;
      }
    }
    if (this.has(value)) {
      var notifySpy =  true && isSpyEnabled();
      var notify = hasListeners(this);
      var _change2 = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: value
      } : null;
      if (notifySpy && "development" !== "production") {
        spyReportStart(_change2);
      }
      transaction(function () {
        _this4.atom_.reportChanged();
        _this4.data_["delete"](value);
      });
      if (notify) {
        notifyListeners(this, _change2);
      }
      if (notifySpy && "development" !== "production") {
        spyReportEnd();
      }
      return true;
    }
    return false;
  };
  _proto.has = function has(value) {
    this.atom_.reportObserved();
    return this.data_.has(this.dehanceValue_(value));
  };
  _proto.entries = function entries() {
    var values = this.values();
    return makeIterableForSet({
      next: function next() {
        var _values$next = values.next(),
          value = _values$next.value,
          done = _values$next.done;
        return !done ? {
          value: [value, value],
          done: done
        } : {
          value: undefined,
          done: done
        };
      }
    });
  };
  _proto.keys = function keys() {
    return this.values();
  };
  _proto.values = function values() {
    this.atom_.reportObserved();
    var self = this;
    var values = this.data_.values();
    return makeIterableForSet({
      next: function next() {
        var _values$next2 = values.next(),
          value = _values$next2.value,
          done = _values$next2.done;
        return !done ? {
          value: self.dehanceValue_(value),
          done: done
        } : {
          value: undefined,
          done: done
        };
      }
    });
  };
  _proto.intersection = function intersection(otherSet) {
    if (isES6Set(otherSet) && !isObservableSet(otherSet)) {
      return otherSet.intersection(this);
    } else {
      var dehancedSet = new Set(this);
      return dehancedSet.intersection(otherSet);
    }
  };
  _proto.union = function union(otherSet) {
    if (isES6Set(otherSet) && !isObservableSet(otherSet)) {
      return otherSet.union(this);
    } else {
      var dehancedSet = new Set(this);
      return dehancedSet.union(otherSet);
    }
  };
  _proto.difference = function difference(otherSet) {
    return new Set(this).difference(otherSet);
  };
  _proto.symmetricDifference = function symmetricDifference(otherSet) {
    if (isES6Set(otherSet) && !isObservableSet(otherSet)) {
      return otherSet.symmetricDifference(this);
    } else {
      var dehancedSet = new Set(this);
      return dehancedSet.symmetricDifference(otherSet);
    }
  };
  _proto.isSubsetOf = function isSubsetOf(otherSet) {
    return new Set(this).isSubsetOf(otherSet);
  };
  _proto.isSupersetOf = function isSupersetOf(otherSet) {
    return new Set(this).isSupersetOf(otherSet);
  };
  _proto.isDisjointFrom = function isDisjointFrom(otherSet) {
    if (isES6Set(otherSet) && !isObservableSet(otherSet)) {
      return otherSet.isDisjointFrom(this);
    } else {
      var dehancedSet = new Set(this);
      return dehancedSet.isDisjointFrom(otherSet);
    }
  };
  _proto.replace = function replace(other) {
    var _this5 = this;
    if (isObservableSet(other)) {
      other = new Set(other);
    }
    transaction(function () {
      if (Array.isArray(other)) {
        _this5.clear();
        other.forEach(function (value) {
          return _this5.add(value);
        });
      } else if (isES6Set(other)) {
        _this5.clear();
        other.forEach(function (value) {
          return _this5.add(value);
        });
      } else if (other !== null && other !== undefined) {
        die("Cannot initialize set from " + other);
      }
    });
    return this;
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    // ... 'fireImmediately' could also be true?
    if ( true && fireImmediately === true) {
      die("`observe` doesn't support fireImmediately=true in combination with sets.");
    }
    return registerListener(this, listener);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  _proto.toJSON = function toJSON() {
    return Array.from(this);
  };
  _proto.toString = function toString() {
    return "[object ObservableSet]";
  };
  _proto[Symbol.iterator] = function () {
    return this.values();
  };
  return _createClass(ObservableSet, [{
    key: "size",
    get: function get() {
      this.atom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: Symbol.toStringTag,
    get: function get() {
      return "Set";
    }
  }]);
}();
// eslint-disable-next-line
var isObservableSet = /*#__PURE__*/createInstanceofPredicate("ObservableSet", ObservableSet);
function makeIterableForSet(iterator) {
  iterator[Symbol.toStringTag] = "SetIterator";
  return makeIterable(iterator);
}

var descriptorCache = /*#__PURE__*/Object.create(null);
var REMOVE = "remove";
var ObservableObjectAdministration = /*#__PURE__*/function () {
  function ObservableObjectAdministration(target_, values_, name_,
  // Used anytime annotation is not explicitely provided
  defaultAnnotation_) {
    if (values_ === void 0) {
      values_ = new Map();
    }
    if (defaultAnnotation_ === void 0) {
      defaultAnnotation_ = autoAnnotation;
    }
    this.target_ = void 0;
    this.values_ = void 0;
    this.name_ = void 0;
    this.defaultAnnotation_ = void 0;
    this.keysAtom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.proxy_ = void 0;
    this.isPlainObject_ = void 0;
    this.appliedAnnotations_ = void 0;
    this.pendingKeys_ = void 0;
    this.target_ = target_;
    this.values_ = values_;
    this.name_ = name_;
    this.defaultAnnotation_ = defaultAnnotation_;
    this.keysAtom_ = new Atom( true ? this.name_ + ".keys" : 0);
    // Optimization: we use this frequently
    this.isPlainObject_ = isPlainObject(this.target_);
    if ( true && !isAnnotation(this.defaultAnnotation_)) {
      die("defaultAnnotation must be valid annotation");
    }
    if (true) {
      // Prepare structure for tracking which fields were already annotated
      this.appliedAnnotations_ = {};
    }
  }
  var _proto = ObservableObjectAdministration.prototype;
  _proto.getObservablePropValue_ = function getObservablePropValue_(key) {
    return this.values_.get(key).get();
  };
  _proto.setObservablePropValue_ = function setObservablePropValue_(key, newValue) {
    var observable = this.values_.get(key);
    if (observable instanceof ComputedValue) {
      observable.set(newValue);
      return true;
    }
    // intercept
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: UPDATE,
        object: this.proxy_ || this.target_,
        name: key,
        newValue: newValue
      });
      if (!change) {
        return null;
      }
      newValue = change.newValue;
    }
    newValue = observable.prepareNewValue_(newValue);
    // notify spy & observers
    if (newValue !== globalState.UNCHANGED) {
      var notify = hasListeners(this);
      var notifySpy =  true && isSpyEnabled();
      var _change = notify || notifySpy ? {
        type: UPDATE,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: observable.value_,
        name: key,
        newValue: newValue
      } : null;
      if ( true && notifySpy) {
        spyReportStart(_change);
      }
      observable.setNewValue_(newValue);
      if (notify) {
        notifyListeners(this, _change);
      }
      if ( true && notifySpy) {
        spyReportEnd();
      }
    }
    return true;
  };
  _proto.get_ = function get_(key) {
    if (globalState.trackingDerivation && !hasProp(this.target_, key)) {
      // Key doesn't exist yet, subscribe for it in case it's added later
      this.has_(key);
    }
    return this.target_[key];
  }
  /**
   * @param {PropertyKey} key
   * @param {any} value
   * @param {Annotation|boolean} annotation true - use default annotation, false - copy as is
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */;
  _proto.set_ = function set_(key, value, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    // Don't use .has(key) - we care about own
    if (hasProp(this.target_, key)) {
      // Existing prop
      if (this.values_.has(key)) {
        // Observable (can be intercepted)
        return this.setObservablePropValue_(key, value);
      } else if (proxyTrap) {
        // Non-observable - proxy
        return Reflect.set(this.target_, key, value);
      } else {
        // Non-observable
        this.target_[key] = value;
        return true;
      }
    } else {
      // New prop
      return this.extend_(key, {
        value: value,
        enumerable: true,
        writable: true,
        configurable: true
      }, this.defaultAnnotation_, proxyTrap);
    }
  }
  // Trap for "in"
  ;
  _proto.has_ = function has_(key) {
    if (!globalState.trackingDerivation) {
      // Skip key subscription outside derivation
      return key in this.target_;
    }
    this.pendingKeys_ || (this.pendingKeys_ = new Map());
    var entry = this.pendingKeys_.get(key);
    if (!entry) {
      entry = new ObservableValue(key in this.target_, referenceEnhancer,  true ? this.name_ + "." + stringifyKey(key) + "?" : 0, false);
      this.pendingKeys_.set(key, entry);
    }
    return entry.get();
  }
  /**
   * @param {PropertyKey} key
   * @param {Annotation|boolean} annotation true - use default annotation, false - ignore prop
   */;
  _proto.make_ = function make_(key, annotation) {
    if (annotation === true) {
      annotation = this.defaultAnnotation_;
    }
    if (annotation === false) {
      return;
    }
    assertAnnotable(this, annotation, key);
    if (!(key in this.target_)) {
      var _this$target_$storedA;
      // Throw on missing key, except for decorators:
      // Decorator annotations are collected from whole prototype chain.
      // When called from super() some props may not exist yet.
      // However we don't have to worry about missing prop,
      // because the decorator must have been applied to something.
      if ((_this$target_$storedA = this.target_[storedAnnotationsSymbol]) != null && _this$target_$storedA[key]) {
        return; // will be annotated by subclass constructor
      } else {
        die(1, annotation.annotationType_, this.name_ + "." + key.toString());
      }
    }
    var source = this.target_;
    while (source && source !== objectPrototype) {
      var descriptor = getDescriptor(source, key);
      if (descriptor) {
        var outcome = annotation.make_(this, key, descriptor, source);
        if (outcome === 0 /* MakeResult.Cancel */) {
          return;
        }
        if (outcome === 1 /* MakeResult.Break */) {
          break;
        }
      }
      source = Object.getPrototypeOf(source);
    }
    recordAnnotationApplied(this, annotation, key);
  }
  /**
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} descriptor
   * @param {Annotation|boolean} annotation true - use default annotation, false - copy as is
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */;
  _proto.extend_ = function extend_(key, descriptor, annotation, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    if (annotation === true) {
      annotation = this.defaultAnnotation_;
    }
    if (annotation === false) {
      return this.defineProperty_(key, descriptor, proxyTrap);
    }
    assertAnnotable(this, annotation, key);
    var outcome = annotation.extend_(this, key, descriptor, proxyTrap);
    if (outcome) {
      recordAnnotationApplied(this, annotation, key);
    }
    return outcome;
  }
  /**
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} descriptor
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */;
  _proto.defineProperty_ = function defineProperty_(key, descriptor, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    try {
      startBatch();
      // Delete
      var deleteOutcome = this.delete_(key);
      if (!deleteOutcome) {
        // Failure or intercepted
        return deleteOutcome;
      }
      // ADD interceptor
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: descriptor.value
        });
        if (!change) {
          return null;
        }
        var newValue = change.newValue;
        if (descriptor.value !== newValue) {
          descriptor = _extends({}, descriptor, {
            value: newValue
          });
        }
      }
      // Define
      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }
      // Notify
      this.notifyPropertyAddition_(key, descriptor.value);
    } finally {
      endBatch();
    }
    return true;
  }
  // If original descriptor becomes relevant, move this to annotation directly
  ;
  _proto.defineObservableProperty_ = function defineObservableProperty_(key, value, enhancer, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    try {
      startBatch();
      // Delete
      var deleteOutcome = this.delete_(key);
      if (!deleteOutcome) {
        // Failure or intercepted
        return deleteOutcome;
      }
      // ADD interceptor
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: value
        });
        if (!change) {
          return null;
        }
        value = change.newValue;
      }
      var cachedDescriptor = getCachedObservablePropDescriptor(key);
      var descriptor = {
        configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: true,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      };
      // Define
      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }
      var observable = new ObservableValue(value, enhancer,  true ? this.name_ + "." + key.toString() : 0, false);
      this.values_.set(key, observable);
      // Notify (value possibly changed by ObservableValue)
      this.notifyPropertyAddition_(key, observable.value_);
    } finally {
      endBatch();
    }
    return true;
  }
  // If original descriptor becomes relevant, move this to annotation directly
  ;
  _proto.defineComputedProperty_ = function defineComputedProperty_(key, options, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    try {
      startBatch();
      // Delete
      var deleteOutcome = this.delete_(key);
      if (!deleteOutcome) {
        // Failure or intercepted
        return deleteOutcome;
      }
      // ADD interceptor
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: undefined
        });
        if (!change) {
          return null;
        }
      }
      options.name || (options.name =  true ? this.name_ + "." + key.toString() : 0);
      options.context = this.proxy_ || this.target_;
      var cachedDescriptor = getCachedObservablePropDescriptor(key);
      var descriptor = {
        configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: false,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      };
      // Define
      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }
      this.values_.set(key, new ComputedValue(options));
      // Notify
      this.notifyPropertyAddition_(key, undefined);
    } finally {
      endBatch();
    }
    return true;
  }
  /**
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} descriptor
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */;
  _proto.delete_ = function delete_(key, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    // No such prop
    if (!hasProp(this.target_, key)) {
      return true;
    }
    // Intercept
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_ || this.target_,
        name: key,
        type: REMOVE
      });
      // Cancelled
      if (!change) {
        return null;
      }
    }
    // Delete
    try {
      var _this$pendingKeys_;
      startBatch();
      var notify = hasListeners(this);
      var notifySpy =  true && isSpyEnabled();
      var observable = this.values_.get(key);
      // Value needed for spies/listeners
      var value = undefined;
      // Optimization: don't pull the value unless we will need it
      if (!observable && (notify || notifySpy)) {
        var _getDescriptor;
        value = (_getDescriptor = getDescriptor(this.target_, key)) == null ? void 0 : _getDescriptor.value;
      }
      // delete prop (do first, may fail)
      if (proxyTrap) {
        if (!Reflect.deleteProperty(this.target_, key)) {
          return false;
        }
      } else {
        delete this.target_[key];
      }
      // Allow re-annotating this field
      if (true) {
        delete this.appliedAnnotations_[key];
      }
      // Clear observable
      if (observable) {
        this.values_["delete"](key);
        // for computed, value is undefined
        if (observable instanceof ObservableValue) {
          value = observable.value_;
        }
        // Notify: autorun(() => obj[key]), see #1796
        propagateChanged(observable);
      }
      // Notify "keys/entries/values" observers
      this.keysAtom_.reportChanged();
      // Notify "has" observers
      // "in" as it may still exist in proto
      (_this$pendingKeys_ = this.pendingKeys_) == null || (_this$pendingKeys_ = _this$pendingKeys_.get(key)) == null || _this$pendingKeys_.set(key in this.target_);
      // Notify spies/listeners
      if (notify || notifySpy) {
        var _change2 = {
          type: REMOVE,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: value,
          name: key
        };
        if ( true && notifySpy) {
          spyReportStart(_change2);
        }
        if (notify) {
          notifyListeners(this, _change2);
        }
        if ( true && notifySpy) {
          spyReportEnd();
        }
      }
    } finally {
      endBatch();
    }
    return true;
  }
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */;
  _proto.observe_ = function observe_(callback, fireImmediately) {
    if ( true && fireImmediately === true) {
      die("`observe` doesn't support the fire immediately property for observable objects.");
    }
    return registerListener(this, callback);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  _proto.notifyPropertyAddition_ = function notifyPropertyAddition_(key, value) {
    var _this$pendingKeys_2;
    var notify = hasListeners(this);
    var notifySpy =  true && isSpyEnabled();
    if (notify || notifySpy) {
      var change = notify || notifySpy ? {
        type: ADD,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: key,
        newValue: value
      } : null;
      if ( true && notifySpy) {
        spyReportStart(change);
      }
      if (notify) {
        notifyListeners(this, change);
      }
      if ( true && notifySpy) {
        spyReportEnd();
      }
    }
    (_this$pendingKeys_2 = this.pendingKeys_) == null || (_this$pendingKeys_2 = _this$pendingKeys_2.get(key)) == null || _this$pendingKeys_2.set(true);
    // Notify "keys/entries/values" observers
    this.keysAtom_.reportChanged();
  };
  _proto.ownKeys_ = function ownKeys_() {
    this.keysAtom_.reportObserved();
    return ownKeys(this.target_);
  };
  _proto.keys_ = function keys_() {
    // Returns enumerable && own, but unfortunately keysAtom will report on ANY key change.
    // There is no way to distinguish between Object.keys(object) and Reflect.ownKeys(object) - both are handled by ownKeys trap.
    // We can either over-report in Object.keys(object) or under-report in Reflect.ownKeys(object)
    // We choose to over-report in Object.keys(object), because:
    // - typically it's used with simple data objects
    // - when symbolic/non-enumerable keys are relevant Reflect.ownKeys works as expected
    this.keysAtom_.reportObserved();
    return Object.keys(this.target_);
  };
  return ObservableObjectAdministration;
}();
function asObservableObject(target, options) {
  var _options$name;
  if ( true && options && isObservableObject(target)) {
    die("Options can't be provided for already observable objects.");
  }
  if (hasProp(target, $mobx)) {
    if ( true && !(getAdministration(target) instanceof ObservableObjectAdministration)) {
      die("Cannot convert '" + getDebugName(target) + "' into observable object:" + "\nThe target is already observable of different type." + "\nExtending builtins is not supported.");
    }
    return target;
  }
  if ( true && !Object.isExtensible(target)) {
    die("Cannot make the designated object observable; it is not extensible");
  }
  var name = (_options$name = options == null ? void 0 : options.name) != null ? _options$name :  true ? (isPlainObject(target) ? "ObservableObject" : target.constructor.name) + "@" + getNextId() : 0;
  var adm = new ObservableObjectAdministration(target, new Map(), String(name), getAnnotationFromOptions(options));
  addHiddenProp(target, $mobx, adm);
  return target;
}
var isObservableObjectAdministration = /*#__PURE__*/createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function getCachedObservablePropDescriptor(key) {
  return descriptorCache[key] || (descriptorCache[key] = {
    get: function get() {
      return this[$mobx].getObservablePropValue_(key);
    },
    set: function set(value) {
      return this[$mobx].setObservablePropValue_(key, value);
    }
  });
}
function isObservableObject(thing) {
  if (isObject(thing)) {
    return isObservableObjectAdministration(thing[$mobx]);
  }
  return false;
}
function recordAnnotationApplied(adm, annotation, key) {
  var _adm$target_$storedAn;
  if (true) {
    adm.appliedAnnotations_[key] = annotation;
  }
  // Remove applied decorator annotation so we don't try to apply it again in subclass constructor
  (_adm$target_$storedAn = adm.target_[storedAnnotationsSymbol]) == null || delete _adm$target_$storedAn[key];
}
function assertAnnotable(adm, annotation, key) {
  // Valid annotation
  if ( true && !isAnnotation(annotation)) {
    die("Cannot annotate '" + adm.name_ + "." + key.toString() + "': Invalid annotation.");
  }
  /*
  // Configurable, not sealed, not frozen
  // Possibly not needed, just a little better error then the one thrown by engine.
  // Cases where this would be useful the most (subclass field initializer) are not interceptable by this.
  if (__DEV__) {
      const configurable = getDescriptor(adm.target_, key)?.configurable
      const frozen = Object.isFrozen(adm.target_)
      const sealed = Object.isSealed(adm.target_)
      if (!configurable || frozen || sealed) {
          const fieldName = `${adm.name_}.${key.toString()}`
          const requestedAnnotationType = annotation.annotationType_
          let error = `Cannot apply '${requestedAnnotationType}' to '${fieldName}':`
          if (frozen) {
              error += `\nObject is frozen.`
          }
          if (sealed) {
              error += `\nObject is sealed.`
          }
          if (!configurable) {
              error += `\nproperty is not configurable.`
              // Mention only if caused by us to avoid confusion
              if (hasProp(adm.appliedAnnotations!, key)) {
                  error += `\nTo prevent accidental re-definition of a field by a subclass, `
                  error += `all annotated fields of non-plain objects (classes) are not configurable.`
              }
          }
          die(error)
      }
  }
  */
  // Not annotated
  if ( true && !isOverride(annotation) && hasProp(adm.appliedAnnotations_, key)) {
    var fieldName = adm.name_ + "." + key.toString();
    var currentAnnotationType = adm.appliedAnnotations_[key].annotationType_;
    var requestedAnnotationType = annotation.annotationType_;
    die("Cannot apply '" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already annotated with '" + currentAnnotationType + "'.") + "\nRe-annotating fields is not allowed." + "\nUse 'override' annotation for methods overridden by subclass.");
  }
}

// Bug in safari 9.* (or iOS 9 safari mobile). See #364
var ENTRY_0 = /*#__PURE__*/createArrayEntryDescriptor(0);
var safariPrototypeSetterInheritanceBug = /*#__PURE__*/function () {
  var v = false;
  var p = {};
  Object.defineProperty(p, "0", {
    set: function set() {
      v = true;
    }
  });
  /*#__PURE__*/Object.create(p)["0"] = 1;
  return v === false;
}();
/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */
var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
// Typescript workaround to make sure ObservableArray extends Array
var StubArray = function StubArray() {};
function inherit(ctor, proto) {
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ctor.prototype, proto);
  } else if (ctor.prototype.__proto__ !== undefined) {
    ctor.prototype.__proto__ = proto;
  } else {
    ctor.prototype = proto;
  }
}
inherit(StubArray, Array.prototype);
// Weex proto freeze protection was here,
// but it is unclear why the hack is need as MobX never changed the prototype
// anyway, so removed it in V6
var LegacyObservableArray = /*#__PURE__*/function (_StubArray) {
  function LegacyObservableArray(initialValues, enhancer, name, owned) {
    var _this;
    if (name === void 0) {
      name =  true ? "ObservableArray@" + getNextId() : 0;
    }
    if (owned === void 0) {
      owned = false;
    }
    _this = _StubArray.call(this) || this;
    initObservable(function () {
      var adm = new ObservableArrayAdministration(name, enhancer, owned, true);
      adm.proxy_ = _this;
      addHiddenFinalProp(_this, $mobx, adm);
      if (initialValues && initialValues.length) {
        // @ts-ignore
        _this.spliceWithArray(0, 0, initialValues);
      }
      if (safariPrototypeSetterInheritanceBug) {
        // Seems that Safari won't use numeric prototype setter until any * numeric property is
        // defined on the instance. After that it works fine, even if this property is deleted.
        Object.defineProperty(_this, "0", ENTRY_0);
      }
    });
    return _this;
  }
  _inheritsLoose(LegacyObservableArray, _StubArray);
  var _proto = LegacyObservableArray.prototype;
  _proto.concat = function concat() {
    this[$mobx].atom_.reportObserved();
    for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
      arrays[_key] = arguments[_key];
    }
    return Array.prototype.concat.apply(this.slice(),
    //@ts-ignore
    arrays.map(function (a) {
      return isObservableArray(a) ? a.slice() : a;
    }));
  };
  _proto[Symbol.iterator] = function () {
    var self = this;
    var nextIndex = 0;
    return makeIterable({
      next: function next() {
        return nextIndex < self.length ? {
          value: self[nextIndex++],
          done: false
        } : {
          done: true,
          value: undefined
        };
      }
    });
  };
  return _createClass(LegacyObservableArray, [{
    key: "length",
    get: function get() {
      return this[$mobx].getArrayLength_();
    },
    set: function set(newLength) {
      this[$mobx].setArrayLength_(newLength);
    }
  }, {
    key: Symbol.toStringTag,
    get: function get() {
      return "Array";
    }
  }]);
}(StubArray);
Object.entries(arrayExtensions).forEach(function (_ref) {
  var prop = _ref[0],
    fn = _ref[1];
  if (prop !== "concat") {
    addHiddenProp(LegacyObservableArray.prototype, prop, fn);
  }
});
function createArrayEntryDescriptor(index) {
  return {
    enumerable: false,
    configurable: true,
    get: function get() {
      return this[$mobx].get_(index);
    },
    set: function set(value) {
      this[$mobx].set_(index, value);
    }
  };
}
function createArrayBufferItem(index) {
  defineProperty(LegacyObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}
function reserveArrayBuffer(max) {
  if (max > OBSERVABLE_ARRAY_BUFFER_SIZE) {
    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max + 100; index++) {
      createArrayBufferItem(index);
    }
    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
  }
}
reserveArrayBuffer(1000);
function createLegacyArray(initialValues, enhancer, name) {
  return new LegacyObservableArray(initialValues, enhancer, name);
}

function getAtom(thing, property) {
  if (typeof thing === "object" && thing !== null) {
    if (isObservableArray(thing)) {
      if (property !== undefined) {
        die(23);
      }
      return thing[$mobx].atom_;
    }
    if (isObservableSet(thing)) {
      return thing.atom_;
    }
    if (isObservableMap(thing)) {
      if (property === undefined) {
        return thing.keysAtom_;
      }
      var observable = thing.data_.get(property) || thing.hasMap_.get(property);
      if (!observable) {
        die(25, property, getDebugName(thing));
      }
      return observable;
    }
    if (isObservableObject(thing)) {
      if (!property) {
        return die(26);
      }
      var _observable = thing[$mobx].values_.get(property);
      if (!_observable) {
        die(27, property, getDebugName(thing));
      }
      return _observable;
    }
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
      return thing;
    }
  } else if (isFunction(thing)) {
    if (isReaction(thing[$mobx])) {
      // disposer function
      return thing[$mobx];
    }
  }
  die(28);
}
function getAdministration(thing, property) {
  if (!thing) {
    die(29);
  }
  if (property !== undefined) {
    return getAdministration(getAtom(thing, property));
  }
  if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
    return thing;
  }
  if (isObservableMap(thing) || isObservableSet(thing)) {
    return thing;
  }
  if (thing[$mobx]) {
    return thing[$mobx];
  }
  die(24, thing);
}
function getDebugName(thing, property) {
  var named;
  if (property !== undefined) {
    named = getAtom(thing, property);
  } else if (isAction(thing)) {
    return thing.name;
  } else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) {
    named = getAdministration(thing);
  } else {
    // valid for arrays as well
    named = getAtom(thing);
  }
  return named.name_;
}
/**
 * Helper function for initializing observable structures, it applies:
 * 1. allowStateChanges so we don't violate enforceActions.
 * 2. untracked so we don't accidentaly subscribe to anything observable accessed during init in case the observable is created inside derivation.
 * 3. batch to avoid state version updates
 */
function initObservable(cb) {
  var derivation = untrackedStart();
  var allowStateChanges = allowStateChangesStart(true);
  startBatch();
  try {
    return cb();
  } finally {
    endBatch();
    allowStateChangesEnd(allowStateChanges);
    untrackedEnd(derivation);
  }
}

var toString = objectPrototype.toString;
function deepEqual(a, b, depth) {
  if (depth === void 0) {
    depth = -1;
  }
  return eq(a, b, depth);
}
// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Modified: "Deep compare objects" part to iterate over keys in forward order instead of reverse order.
//
// Internal recursive comparison function for `isEqual`.
function eq(a, b, depth, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  }
  // `null` or `undefined` only equal to itself (strict comparison).
  if (a == null || b == null) {
    return false;
  }
  // `NaN`s are equivalent, but non-reflexive.
  if (a !== a) {
    return b !== b;
  }
  // Exhaust primitive checks
  var type = typeof a;
  if (type !== "function" && type !== "object" && typeof b != "object") {
    return false;
  }
  // Compare `[[Class]]` names.
  var className = toString.call(a);
  if (className !== toString.call(b)) {
    return false;
  }
  switch (className) {
    // Strings, numbers, regular expressions, dates, and booleans are compared by value.
    case "[object RegExp]":
    // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
    case "[object String]":
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return "" + a === "" + b;
    case "[object Number]":
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) {
        return +b !== +b;
      }
      // An `egal` comparison is performed for other numeric values.
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case "[object Date]":
    case "[object Boolean]":
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;
    case "[object Symbol]":
      return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);
    case "[object Map]":
    case "[object Set]":
      // Maps and Sets are unwrapped to arrays of entry-pairs, adding an incidental level.
      // Hide this extra level by increasing the depth.
      if (depth >= 0) {
        depth++;
      }
      break;
  }
  // Unwrap any wrapped objects.
  a = unwrap(a);
  b = unwrap(b);
  var areArrays = className === "[object Array]";
  if (!areArrays) {
    if (typeof a != "object" || typeof b != "object") {
      return false;
    }
    // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.
    var aCtor = a.constructor,
      bCtor = b.constructor;
    if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
      return false;
    }
  }
  if (depth === 0) {
    return false;
  } else if (depth < 0) {
    depth = -1;
  }
  // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.
  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;
  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) {
      return bStack[length] === b;
    }
  }
  // Add the first object to the stack of traversed objects.
  aStack.push(a);
  bStack.push(b);
  // Recursively compare objects and arrays.
  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;
    if (length !== b.length) {
      return false;
    }
    // Deep compare the contents, ignoring non-numeric properties.
    while (length--) {
      if (!eq(a[length], b[length], depth - 1, aStack, bStack)) {
        return false;
      }
    }
  } else {
    // Deep compare objects.
    var keys = Object.keys(a);
    var _length = keys.length;
    // Ensure that both objects contain the same number of properties before comparing deep equality.
    if (Object.keys(b).length !== _length) {
      return false;
    }
    for (var i = 0; i < _length; i++) {
      // Deep compare each member
      var key = keys[i];
      if (!(hasProp(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack))) {
        return false;
      }
    }
  }
  // Remove the first object from the stack of traversed objects.
  aStack.pop();
  bStack.pop();
  return true;
}
function unwrap(a) {
  if (isObservableArray(a)) {
    return a.slice();
  }
  if (isES6Map(a) || isObservableMap(a)) {
    return Array.from(a.entries());
  }
  if (isES6Set(a) || isObservableSet(a)) {
    return Array.from(a.entries());
  }
  return a;
}

var _getGlobal$Iterator;
// safely get iterator prototype if available
var maybeIteratorPrototype = ((_getGlobal$Iterator = /*#__PURE__*/getGlobal().Iterator) == null ? void 0 : _getGlobal$Iterator.prototype) || {};
function makeIterable(iterator) {
  iterator[Symbol.iterator] = getSelf;
  return Object.assign(Object.create(maybeIteratorPrototype), iterator);
}
function getSelf() {
  return this;
}

function isAnnotation(thing) {
  return (
    // Can be function
    thing instanceof Object && typeof thing.annotationType_ === "string" && isFunction(thing.make_) && isFunction(thing.extend_)
  );
}

/**
 * (c) Michel Weststrate 2015 - 2020
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get a global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
["Symbol", "Map", "Set"].forEach(function (m) {
  var g = getGlobal();
  if (typeof g[m] === "undefined") {
    die("MobX requires global '" + m + "' to be available or polyfilled");
  }
});
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
  // See: https://github.com/andykog/mobx-devtools/
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: spy,
    extras: {
      getDebugName: getDebugName
    },
    $mobx: $mobx
  });
}


//# sourceMappingURL=mobx.esm.js.map


/***/ }),

/***/ "./node_modules/react-reconciler/cjs/react-reconciler-constants.development.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-reconciler/cjs/react-reconciler-constants.development.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;
/**
 * @license React
 * react-reconciler-constants.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var SyncLane =
/*                        */
1;
var InputContinuousLane =
/*            */
4;
var DefaultLane =
/*                    */
16;
var IdleLane =
/*                       */
536870912;

var DiscreteEventPriority = SyncLane;
var ContinuousEventPriority = InputContinuousLane;
var DefaultEventPriority = DefaultLane;
var IdleEventPriority = IdleLane;

var LegacyRoot = 0;
var ConcurrentRoot = 1;

__webpack_unused_export__ = ConcurrentRoot;
__webpack_unused_export__ = ContinuousEventPriority;
exports.DefaultEventPriority = DefaultEventPriority;
__webpack_unused_export__ = DiscreteEventPriority;
__webpack_unused_export__ = IdleEventPriority;
__webpack_unused_export__ = LegacyRoot;
  })();
}


/***/ }),

/***/ "./node_modules/react-reconciler/cjs/react-reconciler.production.min.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-reconciler/cjs/react-reconciler.production.min.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
module.exports = function $$$reconciler($$$hostConfig) {
    var exports = {};
'use strict';var aa=__webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js"),ba=__webpack_require__(/*! scheduler */ "./node_modules/react-reconciler/node_modules/scheduler/index.js"),ca=Object.assign;function n(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var ea=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fa=Symbol.for("react.element"),ha=Symbol.for("react.portal"),ia=Symbol.for("react.fragment"),ja=Symbol.for("react.strict_mode"),ka=Symbol.for("react.profiler"),la=Symbol.for("react.provider"),ma=Symbol.for("react.context"),na=Symbol.for("react.forward_ref"),oa=Symbol.for("react.suspense"),pa=Symbol.for("react.suspense_list"),qa=Symbol.for("react.memo"),ra=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");
var sa=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var ta=Symbol.iterator;function ua(a){if(null===a||"object"!==typeof a)return null;a=ta&&a[ta]||a["@@iterator"];return"function"===typeof a?a:null}
function va(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ia:return"Fragment";case ha:return"Portal";case ka:return"Profiler";case ja:return"StrictMode";case oa:return"Suspense";case pa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case ma:return(a.displayName||"Context")+".Consumer";case la:return(a._context.displayName||"Context")+".Provider";case na:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case qa:return b=a.displayName||null,null!==b?b:va(a.type)||"Memo";case ra:b=a._payload;a=a._init;try{return va(a(b))}catch(c){}}return null}
function xa(a){var b=a.type;switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return va(b);case 8:return b===ja?"StrictMode":"Mode";case 22:return"Offscreen";
case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function ya(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function za(a){if(ya(a)!==a)throw Error(n(188));}
function Aa(a){var b=a.alternate;if(!b){b=ya(a);if(null===b)throw Error(n(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return za(e),a;if(f===d)return za(e),b;f=f.sibling}throw Error(n(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(n(189));}}if(c.alternate!==d)throw Error(n(190));}if(3!==c.tag)throw Error(n(188));return c.stateNode.current===c?a:b}function Ba(a){a=Aa(a);return null!==a?Ca(a):null}function Ca(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=Ca(a);if(null!==b)return b;a=a.sibling}return null}
function Da(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){if(4!==a.tag){var b=Da(a);if(null!==b)return b}a=a.sibling}return null}
var Ea=Array.isArray,Fa=$$$hostConfig.getPublicInstance,Ga=$$$hostConfig.getRootHostContext,Ha=$$$hostConfig.getChildHostContext,Ia=$$$hostConfig.prepareForCommit,Ja=$$$hostConfig.resetAfterCommit,Ka=$$$hostConfig.createInstance,La=$$$hostConfig.appendInitialChild,Ma=$$$hostConfig.finalizeInitialChildren,Na=$$$hostConfig.prepareUpdate,Oa=$$$hostConfig.shouldSetTextContent,Pa=$$$hostConfig.createTextInstance,Qa=$$$hostConfig.scheduleTimeout,Ra=$$$hostConfig.cancelTimeout,Sa=$$$hostConfig.noTimeout,
Ta=$$$hostConfig.isPrimaryRenderer,Ua=$$$hostConfig.supportsMutation,Va=$$$hostConfig.supportsPersistence,p=$$$hostConfig.supportsHydration,Wa=$$$hostConfig.getInstanceFromNode,Xa=$$$hostConfig.preparePortalMount,Ya=$$$hostConfig.getCurrentEventPriority,Za=$$$hostConfig.detachDeletedInstance,$a=$$$hostConfig.supportsMicrotasks,ab=$$$hostConfig.scheduleMicrotask,bb=$$$hostConfig.supportsTestSelectors,cb=$$$hostConfig.findFiberRoot,db=$$$hostConfig.getBoundingRect,eb=$$$hostConfig.getTextContent,fb=
$$$hostConfig.isHiddenSubtree,gb=$$$hostConfig.matchAccessibilityRole,hb=$$$hostConfig.setFocusIfFocusable,ib=$$$hostConfig.setupIntersectionObserver,jb=$$$hostConfig.appendChild,kb=$$$hostConfig.appendChildToContainer,lb=$$$hostConfig.commitTextUpdate,mb=$$$hostConfig.commitMount,nb=$$$hostConfig.commitUpdate,ob=$$$hostConfig.insertBefore,pb=$$$hostConfig.insertInContainerBefore,qb=$$$hostConfig.removeChild,rb=$$$hostConfig.removeChildFromContainer,sb=$$$hostConfig.resetTextContent,tb=$$$hostConfig.hideInstance,
ub=$$$hostConfig.hideTextInstance,vb=$$$hostConfig.unhideInstance,wb=$$$hostConfig.unhideTextInstance,xb=$$$hostConfig.clearContainer,yb=$$$hostConfig.cloneInstance,zb=$$$hostConfig.createContainerChildSet,Ab=$$$hostConfig.appendChildToContainerChildSet,Bb=$$$hostConfig.finalizeContainerChildren,Cb=$$$hostConfig.replaceContainerChildren,Db=$$$hostConfig.cloneHiddenInstance,Eb=$$$hostConfig.cloneHiddenTextInstance,Fb=$$$hostConfig.canHydrateInstance,Gb=$$$hostConfig.canHydrateTextInstance,Hb=$$$hostConfig.canHydrateSuspenseInstance,
Ib=$$$hostConfig.isSuspenseInstancePending,Jb=$$$hostConfig.isSuspenseInstanceFallback,Kb=$$$hostConfig.registerSuspenseInstanceRetry,Lb=$$$hostConfig.getNextHydratableSibling,Mb=$$$hostConfig.getFirstHydratableChild,Nb=$$$hostConfig.getFirstHydratableChildWithinContainer,Ob=$$$hostConfig.getFirstHydratableChildWithinSuspenseInstance,Pb=$$$hostConfig.hydrateInstance,Qb=$$$hostConfig.hydrateTextInstance,Rb=$$$hostConfig.hydrateSuspenseInstance,Sb=$$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance,
Tb=$$$hostConfig.commitHydratedContainer,Ub=$$$hostConfig.commitHydratedSuspenseInstance,Vb=$$$hostConfig.clearSuspenseBoundary,Wb=$$$hostConfig.clearSuspenseBoundaryFromContainer,Xb=$$$hostConfig.shouldDeleteUnhydratedTailInstances,Yb=$$$hostConfig.didNotMatchHydratedContainerTextInstance,Zb=$$$hostConfig.didNotMatchHydratedTextInstance,$b;function ac(a){if(void 0===$b)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);$b=b&&b[1]||""}return"\n"+$b+a}var bc=!1;
function cc(a,b){if(!a||bc)return"";bc=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(l){var d=l}Reflect.construct(a,[],b)}else{try{b.call()}catch(l){d=l}a.call(b.prototype)}else{try{throw Error();}catch(l){d=l}a()}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{bc=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?ac(a):""}var dc=Object.prototype.hasOwnProperty,ec=[],fc=-1;function gc(a){return{current:a}}
function x(a){0>fc||(a.current=ec[fc],ec[fc]=null,fc--)}function y(a,b){fc++;ec[fc]=a.current;a.current=b}var hc={},A=gc(hc),B=gc(!1),ic=hc;function jc(a,b){var c=a.type.contextTypes;if(!c)return hc;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function C(a){a=a.childContextTypes;return null!==a&&void 0!==a}function kc(){x(B);x(A)}function lc(a,b,c){if(A.current!==hc)throw Error(n(168));y(A,b);y(B,c)}function mc(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(n(108,xa(a)||"Unknown",e));return ca({},c,d)}
function nc(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||hc;ic=A.current;y(A,a);y(B,B.current);return!0}function oc(a,b,c){var d=a.stateNode;if(!d)throw Error(n(169));c?(a=mc(a,b,ic),d.__reactInternalMemoizedMergedChildContext=a,x(B),x(A),y(A,a)):x(B);y(B,c)}var qc=Math.clz32?Math.clz32:pc,rc=Math.log,sc=Math.LN2;function pc(a){a>>>=0;return 0===a?32:31-(rc(a)/sc|0)|0}var tc=64,uc=4194304;
function vc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function wc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=vc(h):(f&=g,0!==f&&(d=vc(f)))}else g=c&~e,0!==g?d=vc(g):0!==f&&(d=vc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-qc(b),e=1<<c,d|=a[c],b&=~e;return d}
function xc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}
function yc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-qc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=xc(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function zc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Ac(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}function Bc(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-qc(b);a[b]=c}
function Cc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-qc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}function Dc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-qc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e}}var D=0;function Ec(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}
var Fc=ba.unstable_scheduleCallback,Gc=ba.unstable_cancelCallback,Hc=ba.unstable_shouldYield,Ic=ba.unstable_requestPaint,E=ba.unstable_now,Jc=ba.unstable_ImmediatePriority,Kc=ba.unstable_UserBlockingPriority,Lc=ba.unstable_NormalPriority,Mc=ba.unstable_IdlePriority,Nc=null,Oc=null;function Pc(a){if(Oc&&"function"===typeof Oc.onCommitFiberRoot)try{Oc.onCommitFiberRoot(Nc,a,void 0,128===(a.current.flags&128))}catch(b){}}function Qc(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
var Rc="function"===typeof Object.is?Object.is:Qc,Sc=null,Tc=!1,Uc=!1;function Vc(a){null===Sc?Sc=[a]:Sc.push(a)}function Wc(a){Tc=!0;Vc(a)}function Xc(){if(!Uc&&null!==Sc){Uc=!0;var a=0,b=D;try{var c=Sc;for(D=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}Sc=null;Tc=!1}catch(e){throw null!==Sc&&(Sc=Sc.slice(a+1)),Fc(Jc,Xc),e;}finally{D=b,Uc=!1}}return null}var Yc=ea.ReactCurrentBatchConfig;
function Zc(a,b){if(Rc(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!dc.call(b,e)||!Rc(a[e],b[e]))return!1}return!0}
function $c(a){switch(a.tag){case 5:return ac(a.type);case 16:return ac("Lazy");case 13:return ac("Suspense");case 19:return ac("SuspenseList");case 0:case 2:case 15:return a=cc(a.type,!1),a;case 11:return a=cc(a.type.render,!1),a;case 1:return a=cc(a.type,!0),a;default:return""}}function ad(a,b){if(a&&a.defaultProps){b=ca({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var bd=gc(null),cd=null,dd=null,ed=null;function fd(){ed=dd=cd=null}
function gd(a,b,c){Ta?(y(bd,b._currentValue),b._currentValue=c):(y(bd,b._currentValue2),b._currentValue2=c)}function hd(a){var b=bd.current;x(bd);Ta?a._currentValue=b:a._currentValue2=b}function id(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}
function jd(a,b){cd=a;ed=dd=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(kd=!0),a.firstContext=null)}function ld(a){var b=Ta?a._currentValue:a._currentValue2;if(ed!==a)if(a={context:a,memoizedValue:b,next:null},null===dd){if(null===cd)throw Error(n(308));dd=a;cd.dependencies={lanes:0,firstContext:a}}else dd=dd.next=a;return b}var md=null,nd=!1;
function od(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pd(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function qd(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function rd(a,b){var c=a.updateQueue;null!==c&&(c=c.shared,null!==F&&0!==(a.mode&1)&&0===(G&2)?(a=c.interleaved,null===a?(b.next=b,null===md?md=[c]:md.push(c)):(b.next=a.next,a.next=b),c.interleaved=b):(a=c.pending,null===a?b.next=b:(b.next=a.next,a.next=b),c.pending=b))}function sd(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Dc(a,c)}}
function td(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function ud(a,b,c,d){var e=a.updateQueue;nd=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k))}if(null!==f){var v=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,z=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:z,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var q=a,N=h;r=b;z=c;switch(N.tag){case 1:q=N.payload;if("function"===typeof q){v=q.call(z,v,r);break a}v=q;break a;case 3:q.flags=q.flags&-65537|128;case 0:q=N.payload;r="function"===typeof q?q.call(z,v,r):q;if(null===r||void 0===r)break a;v=ca({},v,r);break a;case 2:nd=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h))}else z={eventTime:z,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=z,k=v):m=m.next=z,g|=
r;h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===m&&(k=v);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);vd|=g;a.lanes=g;a.memoizedState=v}}
function wd(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(n(191,e));e.call(d)}}}var xd=(new aa.Component).refs;function yd(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:ca({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Bd={isMounted:function(a){return(a=a._reactInternals)?ya(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=H(),e=zd(a),f=qd(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);rd(a,f);b=Ad(a,e,d);null!==b&&sd(b,a,e)},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=H(),e=zd(a),f=qd(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);rd(a,f);b=Ad(a,e,d);null!==b&&sd(b,a,e)},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=H(),d=zd(a),e=qd(c,
d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);rd(a,e);b=Ad(a,d,c);null!==b&&sd(b,a,d)}};function Cd(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Zc(c,d)||!Zc(e,f):!0}
function Dd(a,b,c){var d=!1,e=hc;var f=b.contextType;"object"===typeof f&&null!==f?f=ld(f):(e=C(b)?ic:A.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?jc(a,e):hc);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Bd;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Ed(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Bd.enqueueReplaceState(b,b.state,null)}
function Fd(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=xd;od(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=ld(f):(f=C(b)?ic:A.current,e.context=jc(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(yd(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Bd.enqueueReplaceState(e,e.state,null),ud(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}var Gd=[],Hd=0,Id=null,Jd=0,Kd=[],Ld=0,Md=null,Nd=1,Od="";function Pd(a,b){Gd[Hd++]=Jd;Gd[Hd++]=Id;Id=a;Jd=b}
function Qd(a,b,c){Kd[Ld++]=Nd;Kd[Ld++]=Od;Kd[Ld++]=Md;Md=a;var d=Nd;a=Od;var e=32-qc(d)-1;d&=~(1<<e);c+=1;var f=32-qc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;Nd=1<<32-qc(b)+e|c<<e|d;Od=f+a}else Nd=1<<f|c<<e|d,Od=a}function Rd(a){null!==a.return&&(Pd(a,1),Qd(a,1,0))}function Sd(a){for(;a===Id;)Id=Gd[--Hd],Gd[Hd]=null,Jd=Gd[--Hd],Gd[Hd]=null;for(;a===Md;)Md=Kd[--Ld],Kd[Ld]=null,Od=Kd[--Ld],Kd[Ld]=null,Nd=Kd[--Ld],Kd[Ld]=null}var Td=null,Ud=null,I=!1,Vd=!1,Wd=null;
function Xd(a,b){var c=Yd(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}
function Zd(a,b){switch(a.tag){case 5:return b=Fb(b,a.type,a.pendingProps),null!==b?(a.stateNode=b,Td=a,Ud=Mb(b),!0):!1;case 6:return b=Gb(b,a.pendingProps),null!==b?(a.stateNode=b,Td=a,Ud=null,!0):!1;case 13:b=Hb(b);if(null!==b){var c=null!==Md?{id:Nd,overflow:Od}:null;a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824};c=Yd(18,null,null,0);c.stateNode=b;c.return=a;a.child=c;Td=a;Ud=null;return!0}return!1;default:return!1}}function $d(a){return 0!==(a.mode&1)&&0===(a.flags&128)}
function ae(a){if(I){var b=Ud;if(b){var c=b;if(!Zd(a,b)){if($d(a))throw Error(n(418));b=Lb(c);var d=Td;b&&Zd(a,b)?Xd(d,c):(a.flags=a.flags&-4097|2,I=!1,Td=a)}}else{if($d(a))throw Error(n(418));a.flags=a.flags&-4097|2;I=!1;Td=a}}}function be(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;Td=a}
function ce(a){if(!p||a!==Td)return!1;if(!I)return be(a),I=!0,!1;if(3!==a.tag&&(5!==a.tag||Xb(a.type)&&!Oa(a.type,a.memoizedProps))){var b=Ud;if(b){if($d(a)){for(a=Ud;a;)a=Lb(a);throw Error(n(418));}for(;b;)Xd(a,b),b=Lb(b)}}be(a);if(13===a.tag){if(!p)throw Error(n(316));a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(n(317));Ud=Sb(a)}else Ud=Td?Lb(a.stateNode):null;return!0}function de(){p&&(Ud=Td=null,Vd=I=!1)}function ee(a){null===Wd?Wd=[a]:Wd.push(a)}
function fe(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(n(309));var d=c.stateNode}if(!d)throw Error(n(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;b===xd&&(b=e.refs={});null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(n(284));if(!c._owner)throw Error(n(290,a));}return a}
function ge(a,b){a=Object.prototype.toString.call(b);throw Error(n(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function he(a){var b=a._init;return b(a._payload)}
function ie(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=je(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=ke(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ia)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===ra&&he(f)===b.type))return d=e(b,c.props),d.ref=fe(a,b,c),d.return=a,d;d=le(c.type,c.key,c.props,null,a.mode,d);d.ref=fe(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=me(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=ne(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function v(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=ke(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case fa:return c=le(b.type,b.key,b.props,null,a.mode,c),
c.ref=fe(a,null,b),c.return=a,c;case ha:return b=me(b,a.mode,c),b.return=a,b;case ra:var d=b._init;return v(a,d(b._payload),c)}if(Ea(b)||ua(b))return b=ne(b,a.mode,c,null),b.return=a,b;ge(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case fa:return c.key===e?k(a,b,c,d):null;case ha:return c.key===e?l(a,b,c,d):null;case ra:return e=c._init,r(a,
b,e(c._payload),d)}if(Ea(c)||ua(c))return null!==e?null:m(a,b,c,d,null);ge(a,c)}return null}function z(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case fa:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case ha:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case ra:var f=d._init;return z(a,b,c,f(d._payload),e)}if(Ea(d)||ua(d))return a=a.get(c)||null,m(b,a,d,e,null);ge(b,d)}return null}
function q(e,g,h,k){for(var l=null,m=null,w=g,u=g=0,t=null;null!==w&&u<h.length;u++){w.index>u?(t=w,w=null):t=w.sibling;var q=r(e,w,h[u],k);if(null===q){null===w&&(w=t);break}a&&w&&null===q.alternate&&b(e,w);g=f(q,g,u);null===m?l=q:m.sibling=q;m=q;w=t}if(u===h.length)return c(e,w),I&&Pd(e,u),l;if(null===w){for(;u<h.length;u++)w=v(e,h[u],k),null!==w&&(g=f(w,g,u),null===m?l=w:m.sibling=w,m=w);I&&Pd(e,u);return l}for(w=d(e,w);u<h.length;u++)t=z(w,e,u,h[u],k),null!==t&&(a&&null!==t.alternate&&w.delete(null===
t.key?u:t.key),g=f(t,g,u),null===m?l=t:m.sibling=t,m=t);a&&w.forEach(function(a){return b(e,a)});I&&Pd(e,u);return l}function N(e,g,h,k){var l=ua(h);if("function"!==typeof l)throw Error(n(150));h=l.call(h);if(null==h)throw Error(n(151));for(var w=l=null,m=g,u=g=0,q=null,t=h.next();null!==m&&!t.done;u++,t=h.next()){m.index>u?(q=m,m=null):q=m.sibling;var V=r(e,m,t.value,k);if(null===V){null===m&&(m=q);break}a&&m&&null===V.alternate&&b(e,m);g=f(V,g,u);null===w?l=V:w.sibling=V;w=V;m=q}if(t.done)return c(e,
m),I&&Pd(e,u),l;if(null===m){for(;!t.done;u++,t=h.next())t=v(e,t.value,k),null!==t&&(g=f(t,g,u),null===w?l=t:w.sibling=t,w=t);I&&Pd(e,u);return l}for(m=d(e,m);!t.done;u++,t=h.next())t=z(m,e,u,t.value,k),null!==t&&(a&&null!==t.alternate&&m.delete(null===t.key?u:t.key),g=f(t,g,u),null===w?l=t:w.sibling=t,w=t);a&&m.forEach(function(a){return b(e,a)});I&&Pd(e,u);return l}function da(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ia&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==
f){switch(f.$$typeof){case fa:a:{for(var k=f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ia){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===ra&&he(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=fe(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling}f.type===ia?(d=ne(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=le(f.type,f.key,f.props,null,a.mode,h),h.ref=fe(a,d,f),h.return=
a,a=h)}return g(a);case ha:a:{for(l=f.key;null!==d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=me(f,a.mode,h);d.return=a;a=d}return g(a);case ra:return l=f._init,da(a,d,l(f._payload),h)}if(Ea(f))return q(a,d,f,h);if(ua(f))return N(a,d,f,h);ge(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&
6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=ke(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return da}var oe=ie(!0),pe=ie(!1),qe={},re=gc(qe),se=gc(qe),te=gc(qe);function ue(a){if(a===qe)throw Error(n(174));return a}function ve(a,b){y(te,b);y(se,a);y(re,qe);a=Ga(b);x(re);y(re,a)}function we(){x(re);x(se);x(te)}function xe(a){var b=ue(te.current),c=ue(re.current);b=Ha(c,a.type,b);c!==b&&(y(se,a),y(re,b))}function ye(a){se.current===a&&(x(re),x(se))}var J=gc(0);
function ze(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||Ib(c)||Jb(c)))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var Ae=[];
function Be(){for(var a=0;a<Ae.length;a++){var b=Ae[a];Ta?b._workInProgressVersionPrimary=null:b._workInProgressVersionSecondary=null}Ae.length=0}var Ce=ea.ReactCurrentDispatcher,De=ea.ReactCurrentBatchConfig,Ee=0,K=null,L=null,M=null,Fe=!1,Ge=!1,He=0,Ie=0;function O(){throw Error(n(321));}function Je(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!Rc(a[c],b[c]))return!1;return!0}
function Ke(a,b,c,d,e,f){Ee=f;K=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Ce.current=null===a||null===a.memoizedState?Le:Me;a=c(d,e);if(Ge){f=0;do{Ge=!1;He=0;if(25<=f)throw Error(n(301));f+=1;M=L=null;b.updateQueue=null;Ce.current=Ne;a=c(d,e)}while(Ge)}Ce.current=Oe;b=null!==L&&null!==L.next;Ee=0;M=L=K=null;Fe=!1;if(b)throw Error(n(300));return a}function Pe(){var a=0!==He;He=0;return a}
function Qe(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===M?K.memoizedState=M=a:M=M.next=a;return M}function Re(){if(null===L){var a=K.alternate;a=null!==a?a.memoizedState:null}else a=L.next;var b=null===M?K.memoizedState:M.next;if(null!==b)M=b,L=a;else{if(null===a)throw Error(n(310));L=a;a={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null};null===M?K.memoizedState=M=a:M=M.next=a}return M}
function Se(a,b){return"function"===typeof b?b(a):b}
function Te(a){var b=Re(),c=b.queue;if(null===c)throw Error(n(311));c.lastRenderedReducer=a;var d=L,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Ee&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else{var v={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=v,g=d):k=k.next=v;K.lanes|=m;vd|=m}l=l.next}while(null!==l&&l!==f);null===k?g=d:k.next=h;Rc(d,b.memoizedState)||(kd=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=e.lane,K.lanes|=f,vd|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}
function Ue(a){var b=Re(),c=b.queue;if(null===c)throw Error(n(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);Rc(f,b.memoizedState)||(kd=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function Ve(){}
function We(a,b){var c=K,d=Re(),e=b(),f=!Rc(d.memoizedState,e);f&&(d.memoizedState=e,kd=!0);d=d.queue;Xe(Ye.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==M&&M.memoizedState.tag&1){c.flags|=2048;Ze(9,$e.bind(null,c,d,e,b),void 0,null);if(null===F)throw Error(n(349));0!==(Ee&30)||af(c,b,e)}return e}function af(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=K.updateQueue;null===b?(b={lastEffect:null,stores:null},K.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}
function $e(a,b,c,d){b.value=c;b.getSnapshot=d;bf(b)&&Ad(a,1,-1)}function Ye(a,b,c){return c(function(){bf(b)&&Ad(a,1,-1)})}function bf(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!Rc(a,c)}catch(d){return!0}}function cf(a){var b=Qe();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Se,lastRenderedState:a};b.queue=a;a=a.dispatch=df.bind(null,K,a);return[b.memoizedState,a]}
function Ze(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=K.updateQueue;null===b?(b={lastEffect:null,stores:null},K.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function ef(){return Re().memoizedState}function ff(a,b,c,d){var e=Qe();K.flags|=a;e.memoizedState=Ze(1|b,c,void 0,void 0===d?null:d)}
function gf(a,b,c,d){var e=Re();d=void 0===d?null:d;var f=void 0;if(null!==L){var g=L.memoizedState;f=g.destroy;if(null!==d&&Je(d,g.deps)){e.memoizedState=Ze(b,c,f,d);return}}K.flags|=a;e.memoizedState=Ze(1|b,c,f,d)}function hf(a,b){return ff(8390656,8,a,b)}function Xe(a,b){return gf(2048,8,a,b)}function jf(a,b){return gf(4,2,a,b)}function kf(a,b){return gf(4,4,a,b)}
function lf(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function mf(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return gf(4,4,lf.bind(null,b,a),c)}function nf(){}function of(a,b){var c=Re();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Je(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function pf(a,b){var c=Re();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Je(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function qf(a,b){var c=D;D=0!==c&&4>c?c:4;a(!0);var d=De.transition;De.transition={};try{a(!1),b()}finally{D=c,De.transition=d}}function rf(){return Re().memoizedState}function sf(a,b,c){var d=zd(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};tf(a)?uf(b,c):(vf(a,b,c),c=H(),a=Ad(a,d,c),null!==a&&wf(a,b,d))}
function df(a,b,c){var d=zd(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(tf(a))uf(b,e);else{vf(a,b,e);var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(Rc(h,g))return}catch(k){}finally{}c=H();a=Ad(a,d,c);null!==a&&wf(a,b,d)}}function tf(a){var b=a.alternate;return a===K||null!==b&&b===K}
function uf(a,b){Ge=Fe=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function vf(a,b,c){null!==F&&0!==(a.mode&1)&&0===(G&2)?(a=b.interleaved,null===a?(c.next=c,null===md?md=[b]:md.push(b)):(c.next=a.next,a.next=c),b.interleaved=c):(a=b.pending,null===a?c.next=c:(c.next=a.next,a.next=c),b.pending=c)}function wf(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Dc(a,c)}}
var Oe={readContext:ld,useCallback:O,useContext:O,useEffect:O,useImperativeHandle:O,useInsertionEffect:O,useLayoutEffect:O,useMemo:O,useReducer:O,useRef:O,useState:O,useDebugValue:O,useDeferredValue:O,useTransition:O,useMutableSource:O,useSyncExternalStore:O,useId:O,unstable_isNewReconciler:!1},Le={readContext:ld,useCallback:function(a,b){Qe().memoizedState=[a,void 0===b?null:b];return a},useContext:ld,useEffect:hf,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ff(4194308,
4,lf.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ff(4194308,4,a,b)},useInsertionEffect:function(a,b){return ff(4,2,a,b)},useMemo:function(a,b){var c=Qe();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Qe();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=sf.bind(null,K,a);return[d.memoizedState,a]},useRef:function(a){var b=
Qe();a={current:a};return b.memoizedState=a},useState:cf,useDebugValue:nf,useDeferredValue:function(a){var b=cf(a),c=b[0],d=b[1];hf(function(){var b=De.transition;De.transition={};try{d(a)}finally{De.transition=b}},[a]);return c},useTransition:function(){var a=cf(!1),b=a[0];a=qf.bind(null,a[1]);Qe().memoizedState=a;return[b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=K,e=Qe();if(I){if(void 0===c)throw Error(n(407));c=c()}else{c=b();if(null===F)throw Error(n(349));
0!==(Ee&30)||af(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;hf(Ye.bind(null,d,f,a),[a]);d.flags|=2048;Ze(9,$e.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Qe(),b=F.identifierPrefix;if(I){var c=Od;var d=Nd;c=(d&~(1<<32-qc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=He++;0<c&&(b+="H"+c.toString(32));b+=":"}else c=Ie++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Me={readContext:ld,useCallback:of,useContext:ld,useEffect:Xe,useImperativeHandle:mf,
useInsertionEffect:jf,useLayoutEffect:kf,useMemo:pf,useReducer:Te,useRef:ef,useState:function(){return Te(Se)},useDebugValue:nf,useDeferredValue:function(a){var b=Te(Se),c=b[0],d=b[1];Xe(function(){var b=De.transition;De.transition={};try{d(a)}finally{De.transition=b}},[a]);return c},useTransition:function(){var a=Te(Se)[0],b=Re().memoizedState;return[a,b]},useMutableSource:Ve,useSyncExternalStore:We,useId:rf,unstable_isNewReconciler:!1},Ne={readContext:ld,useCallback:of,useContext:ld,useEffect:Xe,
useImperativeHandle:mf,useInsertionEffect:jf,useLayoutEffect:kf,useMemo:pf,useReducer:Ue,useRef:ef,useState:function(){return Ue(Se)},useDebugValue:nf,useDeferredValue:function(a){var b=Ue(Se),c=b[0],d=b[1];Xe(function(){var b=De.transition;De.transition={};try{d(a)}finally{De.transition=b}},[a]);return c},useTransition:function(){var a=Ue(Se)[0],b=Re().memoizedState;return[a,b]},useMutableSource:Ve,useSyncExternalStore:We,useId:rf,unstable_isNewReconciler:!1};
function xf(a,b){try{var c="",d=b;do c+=$c(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e}}function yf(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var zf="function"===typeof WeakMap?WeakMap:Map;function Af(a,b,c){c=qd(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Bf||(Bf=!0,Cf=d);yf(a,b)};return c}
function Df(a,b,c){c=qd(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){yf(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){yf(a,b);"function"!==typeof d&&(null===Ef?Ef=new Set([this]):Ef.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
function Ff(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new zf;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Gf.bind(null,a,b,c),b.then(a,a))}function Hf(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}
function If(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=qd(-1,1),b.tag=2,rd(c,b))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}function Jf(a){a.flags|=4}function Kf(a,b){if(null!==a&&a.child===b.child)return!0;if(0!==(b.flags&16))return!1;for(a=b.child;null!==a;){if(0!==(a.flags&12854)||0!==(a.subtreeFlags&12854))return!1;a=a.sibling}return!0}var Lf,Mf,Nf,Of;
if(Ua)Lf=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)La(a,c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}},Mf=function(){},Nf=function(a,b,c,d,e){a=a.memoizedProps;if(a!==d){var f=b.stateNode,g=ue(re.current);c=Na(f,c,a,d,e,g);(b.updateQueue=c)&&Jf(b)}},Of=function(a,b,c,d){c!==d&&Jf(b)};else if(Va){Lf=function(a,
b,c,d){for(var e=b.child;null!==e;){if(5===e.tag){var f=e.stateNode;c&&d&&(f=Db(f,e.type,e.memoizedProps,e));La(a,f)}else if(6===e.tag)f=e.stateNode,c&&d&&(f=Eb(f,e.memoizedProps,e)),La(a,f);else if(4!==e.tag)if(22===e.tag&&null!==e.memoizedState)f=e.child,null!==f&&(f.return=e),Lf(a,e,!0,!0);else if(null!==e.child){e.child.return=e;e=e.child;continue}if(e===b)break;for(;null===e.sibling;){if(null===e.return||e.return===b)return;e=e.return}e.sibling.return=e.return;e=e.sibling}};var Pf=function(a,
b,c,d){for(var e=b.child;null!==e;){if(5===e.tag){var f=e.stateNode;c&&d&&(f=Db(f,e.type,e.memoizedProps,e));Ab(a,f)}else if(6===e.tag)f=e.stateNode,c&&d&&(f=Eb(f,e.memoizedProps,e)),Ab(a,f);else if(4!==e.tag)if(22===e.tag&&null!==e.memoizedState)f=e.child,null!==f&&(f.return=e),Pf(a,e,!0,!0);else if(null!==e.child){e.child.return=e;e=e.child;continue}if(e===b)break;for(;null===e.sibling;){if(null===e.return||e.return===b)return;e=e.return}e.sibling.return=e.return;e=e.sibling}};Mf=function(a,b){var c=
b.stateNode;if(!Kf(a,b)){a=c.containerInfo;var d=zb(a);Pf(d,b,!1,!1);c.pendingChildren=d;Jf(b);Bb(a,d)}};Nf=function(a,b,c,d,e){var f=a.stateNode,g=a.memoizedProps;if((a=Kf(a,b))&&g===d)b.stateNode=f;else{var h=b.stateNode,k=ue(re.current),l=null;g!==d&&(l=Na(h,c,g,d,e,k));a&&null===l?b.stateNode=f:(f=yb(f,l,c,g,d,b,a,h),Ma(f,c,d,e,k)&&Jf(b),b.stateNode=f,a?Jf(b):Lf(f,b,!1,!1))}};Of=function(a,b,c,d){c!==d?(a=ue(te.current),c=ue(re.current),b.stateNode=Pa(d,a,c,b),Jf(b)):b.stateNode=a.stateNode}}else Mf=
function(){},Nf=function(){},Of=function(){};function Qf(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function P(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Rf(a,b,c){var d=b.pendingProps;Sd(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return P(b),null;case 1:return C(b.type)&&kc(),P(b),null;case 3:d=b.stateNode;we();x(B);x(A);Be();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)ce(b)?Jf(b):null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==Wd&&(Sf(Wd),Wd=null));Mf(a,b);P(b);return null;case 5:ye(b);c=ue(te.current);var e=
b.type;if(null!==a&&null!=b.stateNode)Nf(a,b,e,d,c),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(n(166));P(b);return null}a=ue(re.current);if(ce(b)){if(!p)throw Error(n(175));a=Pb(b.stateNode,b.type,b.memoizedProps,c,a,b,!Vd);b.updateQueue=a;null!==a&&Jf(b)}else{var f=Ka(e,d,c,a,b);Lf(f,b,!1,!1);b.stateNode=f;Ma(f,e,d,c,a)&&Jf(b)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}P(b);return null;case 6:if(a&&null!=b.stateNode)Of(a,b,a.memoizedProps,d);else{if("string"!==
typeof d&&null===b.stateNode)throw Error(n(166));a=ue(te.current);c=ue(re.current);if(ce(b)){if(!p)throw Error(n(176));a=b.stateNode;d=b.memoizedProps;if(c=Qb(a,d,b,!Vd))if(e=Td,null!==e)switch(f=0!==(e.mode&1),e.tag){case 3:Yb(e.stateNode.containerInfo,a,d,f);break;case 5:Zb(e.type,e.memoizedProps,e.stateNode,a,d,f)}c&&Jf(b)}else b.stateNode=Pa(d,a,c,b)}P(b);return null;case 13:x(J);d=b.memoizedState;if(I&&null!==Ud&&0!==(b.mode&1)&&0===(b.flags&128)){for(a=Ud;a;)a=Lb(a);de();b.flags|=98560;return b}if(null!==
d&&null!==d.dehydrated){d=ce(b);if(null===a){if(!d)throw Error(n(318));if(!p)throw Error(n(344));a=b.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(n(317));Rb(a,b)}else de(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;P(b);return null}null!==Wd&&(Sf(Wd),Wd=null);if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;c=!1;null===a?ce(b):c=null!==a.memoizedState;d&&!c&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(J.current&1)?0===Q&&(Q=3):Tf()));null!==b.updateQueue&&(b.flags|=
4);P(b);return null;case 4:return we(),Mf(a,b),null===a&&Xa(b.stateNode.containerInfo),P(b),null;case 10:return hd(b.type._context),P(b),null;case 17:return C(b.type)&&kc(),P(b),null;case 19:x(J);e=b.memoizedState;if(null===e)return P(b),null;d=0!==(b.flags&128);f=e.rendering;if(null===f)if(d)Qf(e,!1);else{if(0!==Q||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){f=ze(a);if(null!==f){b.flags|=128;Qf(e,!1);a=f.updateQueue;null!==a&&(b.updateQueue=a,b.flags|=4);b.subtreeFlags=0;a=c;for(d=b.child;null!==
d;)c=d,e=a,c.flags&=14680066,f=c.alternate,null===f?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=f.childLanes,c.lanes=f.lanes,c.child=f.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=f.memoizedProps,c.memoizedState=f.memoizedState,c.updateQueue=f.updateQueue,c.type=f.type,e=f.dependencies,c.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),d=d.sibling;
y(J,J.current&1|2);return b.child}a=a.sibling}null!==e.tail&&E()>Uf&&(b.flags|=128,d=!0,Qf(e,!1),b.lanes=4194304)}else{if(!d)if(a=ze(f),null!==a){if(b.flags|=128,d=!0,a=a.updateQueue,null!==a&&(b.updateQueue=a,b.flags|=4),Qf(e,!0),null===e.tail&&"hidden"===e.tailMode&&!f.alternate&&!I)return P(b),null}else 2*E()-e.renderingStartTime>Uf&&1073741824!==c&&(b.flags|=128,d=!0,Qf(e,!1),b.lanes=4194304);e.isBackwards?(f.sibling=b.child,b.child=f):(a=e.last,null!==a?a.sibling=f:b.child=f,e.last=f)}if(null!==
e.tail)return b=e.tail,e.rendering=b,e.tail=b.sibling,e.renderingStartTime=E(),b.sibling=null,a=J.current,y(J,d?a&1|2:a&1),b;P(b);return null;case 22:case 23:return Vf(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(Wf&1073741824)&&(P(b),Ua&&b.subtreeFlags&6&&(b.flags|=8192)):P(b),null;case 24:return null;case 25:return null}throw Error(n(156,b.tag));}var Xf=ea.ReactCurrentOwner,kd=!1;
function R(a,b,c,d){b.child=null===a?pe(b,null,c,d):oe(b,a.child,c,d)}function Yf(a,b,c,d,e){c=c.render;var f=b.ref;jd(b,e);d=Ke(a,b,c,d,f,e);c=Pe();if(null!==a&&!kd)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zf(a,b,e);I&&c&&Rd(b);b.flags|=1;R(a,b,d,e);return b.child}
function $f(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!ag(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bg(a,b,f,d,e);a=le(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Zc;if(c(g,d)&&a.ref===b.ref)return Zf(a,b,e)}b.flags|=1;a=je(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function bg(a,b,c,d,e){if(null!==a&&Zc(a.memoizedProps,d)&&a.ref===b.ref)if(kd=!1,0!==(a.lanes&e))0!==(a.flags&131072)&&(kd=!0);else return b.lanes=a.lanes,Zf(a,b,e);return cg(a,b,c,d,e)}
function dg(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null},y(eg,Wf),Wf|=c;else if(0!==(c&1073741824))b.memoizedState={baseLanes:0,cachePool:null},d=null!==f?f.baseLanes:c,y(eg,Wf),Wf|=d;else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null},b.updateQueue=null,y(eg,Wf),Wf|=a,null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):
d=c,y(eg,Wf),Wf|=d;R(a,b,e,c);return b.child}function fg(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function cg(a,b,c,d,e){var f=C(c)?ic:A.current;f=jc(b,f);jd(b,e);c=Ke(a,b,c,d,f,e);d=Pe();if(null!==a&&!kd)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zf(a,b,e);I&&d&&Rd(b);b.flags|=1;R(a,b,c,e);return b.child}
function gg(a,b,c,d,e){if(C(c)){var f=!0;nc(b)}else f=!1;jd(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Dd(b,c,d),Fd(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=ld(l):(l=C(c)?ic:A.current,l=jc(b,l));var m=c.getDerivedStateFromProps,v="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;v||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==
typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ed(b,g,d,l);nd=!1;var r=b.memoizedState;g.state=r;ud(b,d,g,e);k=b.memoizedState;h!==d||r!==k||B.current||nd?("function"===typeof m&&(yd(b,c,m,d),k=b.memoizedState),(h=nd||Cd(b,c,h,d,r,k,l))?(v||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&
(b.flags|=4194308)):("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;pd(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:ad(b.type,h);g.props=l;v=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=ld(k):(k=C(c)?ic:A.current,k=jc(b,k));var z=c.getDerivedStateFromProps;(m="function"===typeof z||"function"===
typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==v||r!==k)&&Ed(b,g,d,k);nd=!1;r=b.memoizedState;g.state=r;ud(b,d,g,e);var q=b.memoizedState;h!==v||r!==q||B.current||nd?("function"===typeof z&&(yd(b,c,z,d),q=b.memoizedState),(l=nd||Cd(b,c,l,d,r,q,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
q,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,q,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=q),g.props=d,g.state=q,g.context=k,d=l):("function"!==
typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return hg(a,b,c,d,f,e)}
function hg(a,b,c,d,e,f){fg(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&oc(b,c,!1),Zf(a,b,f);d=b.stateNode;Xf.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=oe(b,a.child,null,f),b.child=oe(b,null,h,f)):R(a,b,h,f);b.memoizedState=d.state;e&&oc(b,c,!0);return b.child}function ig(a){var b=a.stateNode;b.pendingContext?lc(a,b.pendingContext,b.pendingContext!==b.context):b.context&&lc(a,b.context,!1);ve(a,b.containerInfo)}
function jg(a,b,c,d,e){de();ee(e);b.flags|=256;R(a,b,c,d);return b.child}var kg={dehydrated:null,treeContext:null,retryLane:0};function lg(a){return{baseLanes:a,cachePool:null}}
function mg(a,b,c){var d=b.pendingProps,e=J.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;y(J,e&1);if(null===a){ae(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:Jb(a)?b.lanes=8:b.lanes=1073741824,null;e=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,e={mode:"hidden",children:e},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=e):
f=ng(e,d,0,null),a=ne(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=lg(c),b.memoizedState=kg,a):og(b,e)}e=a.memoizedState;if(null!==e){h=e.dehydrated;if(null!==h){if(g){if(b.flags&256)return b.flags&=-257,pg(a,b,c,Error(n(422)));if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=ng({mode:"visible",children:d.children},e,0,null);f=ne(f,e,c,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&oe(b,a.child,
null,c);b.child.memoizedState=lg(c);b.memoizedState=kg;return f}if(0===(b.mode&1))b=pg(a,b,c,null);else if(Jb(h))b=pg(a,b,c,Error(n(419)));else if(d=0!==(c&a.childLanes),kd||d){d=F;if(null!==d){switch(c&-c){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=
268435456;break;default:f=0}d=0!==(f&(d.suspendedLanes|c))?0:f;0!==d&&d!==e.retryLane&&(e.retryLane=d,Ad(a,d,-1))}Tf();b=pg(a,b,c,Error(n(421)))}else Ib(h)?(b.flags|=128,b.child=a.child,b=qg.bind(null,a),Kb(h,b),b=null):(c=e.treeContext,p&&(Ud=Ob(h),Td=b,I=!0,Wd=null,Vd=!1,null!==c&&(Kd[Ld++]=Nd,Kd[Ld++]=Od,Kd[Ld++]=Md,Nd=c.id,Od=c.overflow,Md=b)),b=og(b,b.pendingProps.children),b.flags|=4096);return b}if(f)return d=rg(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=
null===e?lg(c):{baseLanes:e.baseLanes|c,cachePool:null},f.childLanes=a.childLanes&~c,b.memoizedState=kg,d;c=sg(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=rg(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?lg(c):{baseLanes:e.baseLanes|c,cachePool:null},f.childLanes=a.childLanes&~c,b.memoizedState=kg,d;c=sg(a,b,d.children,c);b.memoizedState=null;return c}
function og(a,b){b=ng({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sg(a,b,c,d){var e=a.child;a=e.sibling;c=je(e,{mode:"visible",children:c});0===(b.mode&1)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(d=b.deletions,null===d?(b.deletions=[a],b.flags|=16):d.push(a));return b.child=c}
function rg(a,b,c,d,e){var f=b.mode;a=a.child;var g=a.sibling,h={mode:"hidden",children:c};0===(f&1)&&b.child!==a?(c=b.child,c.childLanes=0,c.pendingProps=h,b.deletions=null):(c=je(a,h),c.subtreeFlags=a.subtreeFlags&14680064);null!==g?d=je(g,d):(d=ne(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function pg(a,b,c,d){null!==d&&ee(d);oe(b,a.child,null,c);a=og(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function tg(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);id(a.return,b,c)}function ug(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}
function vg(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R(a,b,d.children,c);d=J.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&tg(a,c,b);else if(19===a.tag)tg(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}y(J,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ze(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);ug(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ze(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}ug(b,!0,c,null,f);break;case "together":ug(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}
function Zf(a,b,c){null!==a&&(b.dependencies=a.dependencies);vd|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(n(153));if(null!==b.child){a=b.child;c=je(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=je(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function wg(a,b,c){switch(b.tag){case 3:ig(b);de();break;case 5:xe(b);break;case 1:C(b.type)&&nc(b);break;case 4:ve(b,b.stateNode.containerInfo);break;case 10:gd(b,b.type._context,b.memoizedProps.value);break;case 13:var d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return y(J,J.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return mg(a,b,c);y(J,J.current&1);a=Zf(a,b,c);return null!==a?a.sibling:null}y(J,J.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&128)){if(d)return vg(a,
b,c);b.flags|=128}var e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);y(J,J.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dg(a,b,c)}return Zf(a,b,c)}
function xg(a,b){Sd(b);switch(b.tag){case 1:return C(b.type)&&kc(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return we(),x(B),x(A),Be(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return ye(b),null;case 13:x(J);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(n(340));de()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return x(J),null;case 4:return we(),null;case 10:return hd(b.type._context),null;case 22:case 23:return Vf(),
null;case 24:return null;default:return null}}var yg=!1,zg=!1,Ag="function"===typeof WeakSet?WeakSet:Set,S=null;function Bg(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){T(a,b,d)}else c.current=null}function Cg(a,b,c){try{c()}catch(d){T(a,b,d)}}var Dg=!1;
function Eg(a,b){Ia(a.containerInfo);for(S=b;null!==S;)if(a=S,b=a.child,0!==(a.subtreeFlags&1028)&&null!==b)b.return=a,S=b;else for(;null!==S;){a=S;try{var c=a.alternate;if(0!==(a.flags&1024))switch(a.tag){case 0:case 11:case 15:break;case 1:if(null!==c){var d=c.memoizedProps,e=c.memoizedState,f=a.stateNode,g=f.getSnapshotBeforeUpdate(a.elementType===a.type?d:ad(a.type,d),e);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:Ua&&xb(a.stateNode.containerInfo);break;case 5:case 6:case 4:case 17:break;
default:throw Error(n(163));}}catch(h){T(a,a.return,h)}b=a.sibling;if(null!==b){b.return=a.return;S=b;break}S=a.return}c=Dg;Dg=!1;return c}function Fg(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Cg(b,c,f)}e=e.next}while(e!==d)}}function Gg(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}
function Hg(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=Fa(c);break;default:a=c}"function"===typeof b?b(a):b.current=a}}
function Ig(a,b,c){if(Oc&&"function"===typeof Oc.onCommitFiberUnmount)try{Oc.onCommitFiberUnmount(Nc,b)}catch(g){}switch(b.tag){case 0:case 11:case 14:case 15:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a=a.next;do{var e=d,f=e.destroy;e=e.tag;void 0!==f&&(0!==(e&2)?Cg(b,c,f):0!==(e&4)&&Cg(b,c,f));d=d.next}while(d!==a)}break;case 1:Bg(b,c);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount()}catch(g){T(b,
c,g)}break;case 5:Bg(b,c);break;case 4:Ua?Jg(a,b,c):Va&&Va&&(b=b.stateNode.containerInfo,c=zb(b),Cb(b,c))}}function Kg(a,b,c){for(var d=b;;)if(Ig(a,d,c),null===d.child||Ua&&4===d.tag){if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return}d.sibling.return=d.return;d=d.sibling}else d.child.return=d,d=d.child}
function Lg(a){var b=a.alternate;null!==b&&(a.alternate=null,Lg(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&Za(b));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Mg(a){return 5===a.tag||3===a.tag||4===a.tag}
function Ng(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Mg(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}
function Og(a){if(Ua){a:{for(var b=a.return;null!==b;){if(Mg(b))break a;b=b.return}throw Error(n(160));}var c=b;switch(c.tag){case 5:b=c.stateNode;c.flags&32&&(sb(b),c.flags&=-33);c=Ng(a);Pg(a,c,b);break;case 3:case 4:b=c.stateNode.containerInfo;c=Ng(a);Qg(a,c,b);break;default:throw Error(n(161));}}}function Qg(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?pb(c,a,b):kb(c,a);else if(4!==d&&(a=a.child,null!==a))for(Qg(a,b,c),a=a.sibling;null!==a;)Qg(a,b,c),a=a.sibling}
function Pg(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?ob(c,a,b):jb(c,a);else if(4!==d&&(a=a.child,null!==a))for(Pg(a,b,c),a=a.sibling;null!==a;)Pg(a,b,c),a=a.sibling}
function Jg(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(n(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag)Kg(a,d,c),g?rb(f,d.stateNode):qb(f,d.stateNode);else if(18===d.tag)g?Wb(f,d.stateNode):Vb(f,d.stateNode);else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Ig(a,d,c),null!==
d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}
function Rg(a,b){if(Ua){switch(b.tag){case 0:case 11:case 14:case 15:Fg(3,b,b.return);Gg(3,b);Fg(5,b,b.return);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&nb(c,f,e,a,d,b)}return;case 6:if(null===b.stateNode)throw Error(n(162));c=b.memoizedProps;lb(b.stateNode,null!==a?a.memoizedProps:c,c);return;case 3:p&&null!==a&&a.memoizedState.isDehydrated&&Tb(b.stateNode.containerInfo);return;
case 12:return;case 13:Sg(b);return;case 19:Sg(b);return;case 17:return}throw Error(n(163));}switch(b.tag){case 0:case 11:case 14:case 15:Fg(3,b,b.return);Gg(3,b);Fg(5,b,b.return);return;case 12:return;case 13:Sg(b);return;case 19:Sg(b);return;case 3:p&&null!==a&&a.memoizedState.isDehydrated&&Tb(b.stateNode.containerInfo);break;case 22:case 23:return}a:if(Va){switch(b.tag){case 1:case 5:case 6:break a;case 3:case 4:b=b.stateNode;Cb(b.containerInfo,b.pendingChildren);break a}throw Error(n(163));}}
function Sg(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ag);b.forEach(function(b){var d=Tg.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function Ug(a,b){for(S=b;null!==S;){b=S;var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a;Ua?Jg(f,e,b):Kg(f,e,b);var g=e.alternate;null!==g&&(g.return=null);e.return=null}catch(wa){T(e,b,wa)}}c=b.child;if(0!==(b.subtreeFlags&12854)&&null!==c)c.return=b,S=c;else for(;null!==S;){b=S;try{var h=b.flags;h&32&&Ua&&sb(b.stateNode);if(h&512){var k=b.alternate;if(null!==k){var l=k.ref;null!==l&&("function"===typeof l?l(null):l.current=null)}}if(h&8192)switch(b.tag){case 13:if(null!==
b.memoizedState){var m=b.alternate;if(null===m||null===m.memoizedState)Vg=E()}break;case 22:var v=null!==b.memoizedState,r=b.alternate,z=null!==r&&null!==r.memoizedState;c=b;if(Ua)a:if(d=c,e=v,f=null,Ua)for(var q=d;;){if(5===q.tag){if(null===f){f=q;var N=q.stateNode;e?tb(N):vb(q.stateNode,q.memoizedProps)}}else if(6===q.tag){if(null===f){var da=q.stateNode;e?ub(da):wb(da,q.memoizedProps)}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===d)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===
d)break;for(;null===q.sibling;){if(null===q.return||q.return===d)break a;f===q&&(f=null);q=q.return}f===q&&(f=null);q.sibling.return=q.return;q=q.sibling}if(v&&!z&&0!==(c.mode&1)){S=c;for(var t=c.child;null!==t;){for(c=S=t;null!==S;){d=S;var w=d.child;switch(d.tag){case 0:case 11:case 14:case 15:Fg(4,d,d.return);break;case 1:Bg(d,d.return);var u=d.stateNode;if("function"===typeof u.componentWillUnmount){var V=d.return;try{u.props=d.memoizedProps,u.state=d.memoizedState,u.componentWillUnmount()}catch(wa){T(d,
V,wa)}}break;case 5:Bg(d,d.return);break;case 22:if(null!==d.memoizedState){Wg(c);continue}}null!==w?(w.return=d,S=w):Wg(c)}t=t.sibling}}}switch(h&4102){case 2:Og(b);b.flags&=-3;break;case 6:Og(b);b.flags&=-3;Rg(b.alternate,b);break;case 4096:b.flags&=-4097;break;case 4100:b.flags&=-4097;Rg(b.alternate,b);break;case 4:Rg(b.alternate,b)}}catch(wa){T(b,b.return,wa)}c=b.sibling;if(null!==c){c.return=b.return;S=c;break}S=b.return}}}function Xg(a,b,c){S=a;Yg(a,b,c)}
function Yg(a,b,c){for(var d=0!==(a.mode&1);null!==S;){var e=S,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||yg;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||zg;h=yg;var l=zg;yg=g;if((zg=k)&&!l)for(S=e;null!==S;)g=S,k=g.child,22===g.tag&&null!==g.memoizedState?Zg(e):null!==k?(k.return=g,S=k):Zg(e);for(;null!==f;)S=f,Yg(f,b,c),f=f.sibling;S=e;yg=h;zg=l}$g(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,S=f):$g(a,b,c)}}
function $g(a){for(;null!==S;){var b=S;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:zg||Gg(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!zg)if(null===c)d.componentDidMount();else{var e=b.elementType===b.type?c.memoizedProps:ad(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&wd(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
Fa(b.child.stateNode);break;case 1:c=b.child.stateNode}wd(b,g,c)}break;case 5:var h=b.stateNode;null===c&&b.flags&4&&mb(h,b.type,b.memoizedProps,b);break;case 6:break;case 4:break;case 12:break;case 13:if(p&&null===b.memoizedState){var k=b.alternate;if(null!==k){var l=k.memoizedState;if(null!==l){var m=l.dehydrated;null!==m&&Ub(m)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(n(163));}zg||b.flags&512&&Hg(b)}catch(v){T(b,b.return,v)}}if(b===a){S=null;break}c=b.sibling;if(null!==
c){c.return=b.return;S=c;break}S=b.return}}function Wg(a){for(;null!==S;){var b=S;if(b===a){S=null;break}var c=b.sibling;if(null!==c){c.return=b.return;S=c;break}S=b.return}}
function Zg(a){for(;null!==S;){var b=S;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Gg(4,b)}catch(k){T(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){T(b,e,k)}}var f=b.return;try{Hg(b)}catch(k){T(b,f,k)}break;case 5:var g=b.return;try{Hg(b)}catch(k){T(b,g,k)}}}catch(k){T(b,b.return,k)}if(b===a){S=null;break}var h=b.sibling;if(null!==h){h.return=b.return;S=h;break}S=b.return}}
var ah=0,bh=1,ch=2,dh=3,eh=4;if("function"===typeof Symbol&&Symbol.for){var fh=Symbol.for;ah=fh("selector.component");bh=fh("selector.has_pseudo_class");ch=fh("selector.role");dh=fh("selector.test_id");eh=fh("selector.text")}function gh(a){var b=Wa(a);if(null!=b){if("string"!==typeof b.memoizedProps["data-testname"])throw Error(n(364));return b}a=cb(a);if(null===a)throw Error(n(362));return a.stateNode.current}
function hh(a,b){switch(b.$$typeof){case ah:if(a.type===b.value)return!0;break;case bh:a:{b=b.value;a=[a,0];for(var c=0;c<a.length;){var d=a[c++],e=a[c++],f=b[e];if(5!==d.tag||!fb(d)){for(;null!=f&&hh(d,f);)e++,f=b[e];if(e===b.length){b=!0;break a}else for(d=d.child;null!==d;)a.push(d,e),d=d.sibling}}b=!1}return b;case ch:if(5===a.tag&&gb(a.stateNode,b.value))return!0;break;case eh:if(5===a.tag||6===a.tag)if(a=eb(a),null!==a&&0<=a.indexOf(b.value))return!0;break;case dh:if(5===a.tag&&(a=a.memoizedProps["data-testname"],
"string"===typeof a&&a.toLowerCase()===b.value.toLowerCase()))return!0;break;default:throw Error(n(365));}return!1}function ih(a){switch(a.$$typeof){case ah:return"<"+(va(a.value)||"Unknown")+">";case bh:return":has("+(ih(a)||"")+")";case ch:return'[role="'+a.value+'"]';case eh:return'"'+a.value+'"';case dh:return'[data-testname="'+a.value+'"]';default:throw Error(n(365));}}
function jh(a,b){var c=[];a=[a,0];for(var d=0;d<a.length;){var e=a[d++],f=a[d++],g=b[f];if(5!==e.tag||!fb(e)){for(;null!=g&&hh(e,g);)f++,g=b[f];if(f===b.length)c.push(e);else for(e=e.child;null!==e;)a.push(e,f),e=e.sibling}}return c}function kh(a,b){if(!bb)throw Error(n(363));a=gh(a);a=jh(a,b);b=[];a=Array.from(a);for(var c=0;c<a.length;){var d=a[c++];if(5===d.tag)fb(d)||b.push(d.stateNode);else for(d=d.child;null!==d;)a.push(d),d=d.sibling}return b}
var lh=Math.ceil,mh=ea.ReactCurrentDispatcher,nh=ea.ReactCurrentOwner,U=ea.ReactCurrentBatchConfig,G=0,F=null,W=null,X=0,Wf=0,eg=gc(0),Q=0,oh=null,vd=0,ph=0,qh=0,rh=null,Y=null,Vg=0,Uf=Infinity;function sh(){Uf=E()+500}var Bf=!1,Cf=null,Ef=null,th=!1,uh=null,vh=0,wh=0,xh=null,yh=-1,zh=0;function H(){return 0!==(G&6)?E():-1!==yh?yh:yh=E()}
function zd(a){if(0===(a.mode&1))return 1;if(0!==(G&2)&&0!==X)return X&-X;if(null!==Yc.transition)return 0===zh&&(a=tc,tc<<=1,0===(tc&4194240)&&(tc=64),zh=a),zh;a=D;return 0!==a?a:Ya()}function Ad(a,b,c){if(50<wh)throw wh=0,xh=null,Error(n(185));var d=Ah(a,b);if(null===d)return null;Bc(d,b,c);if(0===(G&2)||d!==F)d===F&&(0===(G&2)&&(ph|=b),4===Q&&Bh(d,X)),Z(d,c),1===b&&0===G&&0===(a.mode&1)&&(sh(),Tc&&Xc());return d}
function Ah(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
function Z(a,b){var c=a.callbackNode;yc(a,b);var d=wc(a,a===F?X:0);if(0===d)null!==c&&Gc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&Gc(c);if(1===b)0===a.tag?Wc(Ch.bind(null,a)):Vc(Ch.bind(null,a)),$a?ab(function(){0===G&&Xc()}):Fc(Jc,Xc),c=null;else{switch(Ec(d)){case 1:c=Jc;break;case 4:c=Kc;break;case 16:c=Lc;break;case 536870912:c=Mc;break;default:c=Lc}c=Dh(c,Eh.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}
function Eh(a,b){yh=-1;zh=0;if(0!==(G&6))throw Error(n(327));var c=a.callbackNode;if(Fh()&&a.callbackNode!==c)return null;var d=wc(a,a===F?X:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Gh(a,d);else{b=d;var e=G;G|=2;var f=Hh();if(F!==a||X!==b)sh(),Ih(a,b);do try{Jh();break}catch(h){Kh(a,h)}while(1);fd();mh.current=f;G=e;null!==W?b=0:(F=null,X=0,b=Q)}if(0!==b){2===b&&(e=zc(a),0!==e&&(d=e,b=Lh(a,e)));if(1===b)throw c=oh,Ih(a,0),Bh(a,d),Z(a,E()),c;if(6===b)Bh(a,d);else{e=a.current.alternate;
if(0===(d&30)&&!Mh(e)&&(b=Gh(a,d),2===b&&(f=zc(a),0!==f&&(d=f,b=Lh(a,f))),1===b))throw c=oh,Ih(a,0),Bh(a,d),Z(a,E()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(n(345));case 2:Nh(a,Y);break;case 3:Bh(a,d);if((d&130023424)===d&&(b=Vg+500-E(),10<b)){if(0!==wc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){H();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Qa(Nh.bind(null,a,Y),b);break}Nh(a,Y);break;case 4:Bh(a,d);if((d&4194240)===d)break;b=a.eventTimes;for(e=-1;0<
d;){var g=31-qc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=E()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*lh(d/1960))-d;if(10<d){a.timeoutHandle=Qa(Nh.bind(null,a,Y),d);break}Nh(a,Y);break;case 5:Nh(a,Y);break;default:throw Error(n(329));}}}Z(a,E());return a.callbackNode===c?Eh.bind(null,a):null}function Lh(a,b){var c=rh;a.current.memoizedState.isDehydrated&&(Ih(a,b).flags|=256);a=Gh(a,b);2!==a&&(b=Y,Y=c,null!==b&&Sf(b));return a}
function Sf(a){null===Y?Y=a:Y.push.apply(Y,a)}function Mh(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!Rc(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}
function Bh(a,b){b&=~qh;b&=~ph;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-qc(b),d=1<<c;a[c]=-1;b&=~d}}function Ch(a){if(0!==(G&6))throw Error(n(327));Fh();var b=wc(a,0);if(0===(b&1))return Z(a,E()),null;var c=Gh(a,b);if(0!==a.tag&&2===c){var d=zc(a);0!==d&&(b=d,c=Lh(a,d))}if(1===c)throw c=oh,Ih(a,0),Bh(a,b),Z(a,E()),c;if(6===c)throw Error(n(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Nh(a,Y);Z(a,E());return null}
function Oh(a){null!==uh&&0===uh.tag&&0===(G&6)&&Fh();var b=G;G|=1;var c=U.transition,d=D;try{if(U.transition=null,D=1,a)return a()}finally{D=d,U.transition=c,G=b,0===(G&6)&&Xc()}}function Vf(){Wf=eg.current;x(eg)}
function Ih(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;c!==Sa&&(a.timeoutHandle=Sa,Ra(c));if(null!==W)for(c=W.return;null!==c;){var d=c;Sd(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&kc();break;case 3:we();x(B);x(A);Be();break;case 5:ye(d);break;case 4:we();break;case 13:x(J);break;case 19:x(J);break;case 10:hd(d.type._context);break;case 22:case 23:Vf()}c=c.return}F=a;W=a=je(a.current,null);X=Wf=b;Q=0;oh=null;qh=ph=vd=0;Y=rh=null;if(null!==md){for(b=
0;b<md.length;b++)if(c=md[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}md=null}return a}
function Kh(a,b){do{var c=W;try{fd();Ce.current=Oe;if(Fe){for(var d=K.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Fe=!1}Ee=0;M=L=K=null;Ge=!1;He=0;nh.current=null;if(null===c||null===c.return){Q=1;oh=b;W=null;break}a:{var f=a,g=c.return,h=c,k=b;b=X;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,v=m.tag;if(0===(m.mode&1)&&(0===v||11===v||15===v)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null)}var z=Hf(g);if(null!==z){z.flags&=-257;If(z,g,h,f,b);z.mode&1&&Ff(f,l,b);b=z;k=l;var q=b.updateQueue;if(null===q){var N=new Set;N.add(k);b.updateQueue=N}else q.add(k);break a}else{if(0===(b&1)){Ff(f,l,b);Tf();break a}k=Error(n(426))}}else if(I&&h.mode&1){var da=Hf(g);if(null!==da){0===(da.flags&65536)&&(da.flags|=256);If(da,g,h,f,b);ee(k);break a}}f=k;4!==Q&&(Q=2);null===rh?rh=[f]:rh.push(f);k=xf(k,h);h=g;do{switch(h.tag){case 3:h.flags|=
65536;b&=-b;h.lanes|=b;var t=Af(h,k,b);td(h,t);break a;case 1:f=k;var w=h.type,u=h.stateNode;if(0===(h.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Ef||!Ef.has(u)))){h.flags|=65536;b&=-b;h.lanes|=b;var V=Df(h,f,b);td(h,V);break a}}h=h.return}while(null!==h)}Ph(c)}catch(wa){b=wa;W===c&&null!==c&&(W=c=c.return);continue}break}while(1)}function Hh(){var a=mh.current;mh.current=Oe;return null===a?Oe:a}
function Tf(){if(0===Q||3===Q||2===Q)Q=4;null===F||0===(vd&268435455)&&0===(ph&268435455)||Bh(F,X)}function Gh(a,b){var c=G;G|=2;var d=Hh();F===a&&X===b||Ih(a,b);do try{Qh();break}catch(e){Kh(a,e)}while(1);fd();G=c;mh.current=d;if(null!==W)throw Error(n(261));F=null;X=0;return Q}function Qh(){for(;null!==W;)Rh(W)}function Jh(){for(;null!==W&&!Hc();)Rh(W)}function Rh(a){var b=Sh(a.alternate,a,Wf);a.memoizedProps=a.pendingProps;null===b?Ph(a):W=b;nh.current=null}
function Ph(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Rf(c,b,Wf),null!==c){W=c;return}}else{c=xg(c,b);if(null!==c){c.flags&=32767;W=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{Q=6;W=null;return}}b=b.sibling;if(null!==b){W=b;return}W=b=a}while(null!==b);0===Q&&(Q=5)}function Nh(a,b){var c=D,d=U.transition;try{U.transition=null,D=1,Th(a,b,c)}finally{U.transition=d,D=c}return null}
function Th(a,b,c){do Fh();while(null!==uh);if(0!==(G&6))throw Error(n(327));var d=a.finishedWork,e=a.finishedLanes;if(null===d)return null;a.finishedWork=null;a.finishedLanes=0;if(d===a.current)throw Error(n(177));a.callbackNode=null;a.callbackPriority=0;var f=d.lanes|d.childLanes;Cc(a,f);a===F&&(W=F=null,X=0);0===(d.subtreeFlags&2064)&&0===(d.flags&2064)||th||(th=!0,Dh(Lc,function(){Fh();return null}));f=0!==(d.flags&15990);if(0!==(d.subtreeFlags&15990)||f){f=U.transition;U.transition=null;var g=
D;D=1;var h=G;G|=4;nh.current=null;Eg(a,d);Ug(a,d,e);Ja(a.containerInfo);a.current=d;Xg(d,a,e);Ic();G=h;D=g;U.transition=f}else a.current=d;th&&(th=!1,uh=a,vh=e);f=a.pendingLanes;0===f&&(Ef=null);Pc(d.stateNode,c);Z(a,E());if(null!==b)for(c=a.onRecoverableError,d=0;d<b.length;d++)c(b[d]);if(Bf)throw Bf=!1,a=Cf,Cf=null,a;0!==(vh&1)&&0!==a.tag&&Fh();f=a.pendingLanes;0!==(f&1)?a===xh?wh++:(wh=0,xh=a):wh=0;Xc();return null}
function Fh(){if(null!==uh){var a=Ec(vh),b=U.transition,c=D;try{U.transition=null;D=16>a?16:a;if(null===uh)var d=!1;else{a=uh;uh=null;vh=0;if(0!==(G&6))throw Error(n(331));var e=G;G|=4;for(S=a.current;null!==S;){var f=S,g=f.child;if(0!==(S.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(S=l;null!==S;){var m=S;switch(m.tag){case 0:case 11:case 15:Fg(8,m,f)}var v=m.child;if(null!==v)v.return=m,S=v;else for(;null!==S;){m=S;var r=m.sibling,z=m.return;Lg(m);if(m===
l){S=null;break}if(null!==r){r.return=z;S=r;break}S=z}}}var q=f.alternate;if(null!==q){var N=q.child;if(null!==N){q.child=null;do{var da=N.sibling;N.sibling=null;N=da}while(null!==N)}}S=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,S=g;else b:for(;null!==S;){f=S;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Fg(9,f,f.return)}var t=f.sibling;if(null!==t){t.return=f.return;S=t;break b}S=f.return}}var w=a.current;for(S=w;null!==S;){g=S;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,S=u;else b:for(g=w;null!==S;){h=S;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Gg(9,h)}}catch(wa){T(h,h.return,wa)}if(h===g){S=null;break b}var V=h.sibling;if(null!==V){V.return=h.return;S=V;break b}S=h.return}}G=e;Xc();if(Oc&&"function"===typeof Oc.onPostCommitFiberRoot)try{Oc.onPostCommitFiberRoot(Nc,a)}catch(wa){}d=!0}return d}finally{D=c,U.transition=b}}return!1}function Uh(a,b,c){b=xf(c,b);b=Af(a,b,1);rd(a,b);b=H();a=Ah(a,1);null!==a&&(Bc(a,1,b),Z(a,b))}
function T(a,b,c){if(3===a.tag)Uh(a,a,c);else for(;null!==b;){if(3===b.tag){Uh(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ef||!Ef.has(d))){a=xf(c,a);a=Df(b,a,1);rd(b,a);a=H();b=Ah(b,1);null!==b&&(Bc(b,1,a),Z(b,a));break}}b=b.return}}
function Gf(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=H();a.pingedLanes|=a.suspendedLanes&c;F===a&&(X&c)===c&&(4===Q||3===Q&&(X&130023424)===X&&500>E()-Vg?Ih(a,0):qh|=c);Z(a,b)}function Vh(a,b){0===b&&(0===(a.mode&1)?b=1:(b=uc,uc<<=1,0===(uc&130023424)&&(uc=4194304)));var c=H();a=Ah(a,b);null!==a&&(Bc(a,b,c),Z(a,c))}function qg(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Vh(a,c)}
function Tg(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(n(314));}null!==d&&d.delete(b);Vh(a,c)}var Sh;
Sh=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||B.current)kd=!0;else{if(0===(a.lanes&c)&&0===(b.flags&128))return kd=!1,wg(a,b,c);kd=0!==(a.flags&131072)?!0:!1}else kd=!1,I&&0!==(b.flags&1048576)&&Qd(b,Jd,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;var e=jc(b,A.current);jd(b,c);e=Ke(null,b,d,a,e,c);var f=Pe();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?
(b.tag=1,b.memoizedState=null,b.updateQueue=null,C(d)?(f=!0,nc(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,od(b),e.updater=Bd,b.stateNode=e,e._reactInternals=b,Fd(b,d,a,c),b=hg(null,b,d,!0,f,c)):(b.tag=0,I&&f&&Rd(b),R(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Wh(d);a=ad(d,a);switch(e){case 0:b=cg(null,b,d,a,c);break a;case 1:b=gg(null,b,d,
a,c);break a;case 11:b=Yf(null,b,d,a,c);break a;case 14:b=$f(null,b,d,ad(d.type,a),c);break a}throw Error(n(306,d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ad(d,e),cg(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ad(d,e),gg(a,b,d,e,c);case 3:a:{ig(b);if(null===a)throw Error(n(387));d=b.pendingProps;f=b.memoizedState;e=f.element;pd(a,b);ud(b,d,null,c);var g=b.memoizedState;d=g.element;if(p&&f.isDehydrated)if(f={element:d,isDehydrated:!1,
cache:g.cache,transitions:g.transitions},b.updateQueue.baseState=f,b.memoizedState=f,b.flags&256){e=Error(n(423));b=jg(a,b,d,c,e);break a}else if(d!==e){e=Error(n(424));b=jg(a,b,d,c,e);break a}else for(p&&(Ud=Nb(b.stateNode.containerInfo),Td=b,I=!0,Wd=null,Vd=!1),c=pe(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{de();if(d===e){b=Zf(a,b,c);break a}R(a,b,d,c)}b=b.child}return b;case 5:return xe(b),null===a&&ae(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,
Oa(d,e)?g=null:null!==f&&Oa(d,f)&&(b.flags|=32),fg(a,b),R(a,b,g,c),b.child;case 6:return null===a&&ae(b),null;case 13:return mg(a,b,c);case 4:return ve(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=oe(b,null,d,c):R(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ad(d,e),Yf(a,b,d,e,c);case 7:return R(a,b,b.pendingProps,c),b.child;case 8:return R(a,b,b.pendingProps.children,c),b.child;case 12:return R(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=
b.type._context;e=b.pendingProps;f=b.memoizedProps;g=e.value;gd(b,d,g);if(null!==f)if(Rc(f.value,g)){if(f.children===e.children&&!B.current){b=Zf(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=qd(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=
c);id(f.return,c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(n(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);id(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}R(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,jd(b,c),e=ld(e),d=d(e),b.flags|=
1,R(a,b,d,c),b.child;case 14:return d=b.type,e=ad(d,b.pendingProps),e=ad(d.type,e),$f(a,b,d,e,c);case 15:return bg(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ad(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,C(d)?(a=!0,nc(b)):a=!1,jd(b,c),Dd(b,d,e),Fd(b,d,e,c),hg(null,b,d,!0,a,c);case 19:return vg(a,b,c);case 22:return dg(a,b,c)}throw Error(n(156,b.tag));};function Dh(a,b){return Fc(a,b)}
function Xh(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function Yd(a,b,c,d){return new Xh(a,b,c,d)}function ag(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function Wh(a){if("function"===typeof a)return ag(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===na)return 11;if(a===qa)return 14}return 2}
function je(a,b){var c=a.alternate;null===c?(c=Yd(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function le(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ag(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ia:return ne(c.children,e,f,b);case ja:g=8;e|=8;break;case ka:return a=Yd(12,c,b,e|2),a.elementType=ka,a.lanes=f,a;case oa:return a=Yd(13,c,b,e),a.elementType=oa,a.lanes=f,a;case pa:return a=Yd(19,c,b,e),a.elementType=pa,a.lanes=f,a;case sa:return ng(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case la:g=10;break a;case ma:g=9;break a;case na:g=11;
break a;case qa:g=14;break a;case ra:g=16;d=null;break a}throw Error(n(130,null==a?a:typeof a,""));}b=Yd(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function ne(a,b,c,d){a=Yd(7,a,d,b);a.lanes=c;return a}function ng(a,b,c,d){a=Yd(22,a,d,b);a.elementType=sa;a.lanes=c;a.stateNode={};return a}function ke(a,b,c){a=Yd(6,a,null,b);a.lanes=c;return a}
function me(a,b,c){b=Yd(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function Yh(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=Sa;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=Ac(0);this.expirationTimes=Ac(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Ac(0);this.identifierPrefix=d;this.onRecoverableError=e;p&&(this.mutableSourceEagerHydrationData=
null)}function Zh(a,b,c,d,e,f,g,h,k){a=new Yh(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Yd(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null};od(f);return a}
function $h(a){if(!a)return hc;a=a._reactInternals;a:{if(ya(a)!==a||1!==a.tag)throw Error(n(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(C(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(n(171));}if(1===a.tag){var c=a.type;if(C(c))return mc(a,c,b)}return b}
function ai(a){var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(n(188));a=Object.keys(a).join(",");throw Error(n(268,a));}a=Ba(b);return null===a?null:a.stateNode}function bi(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function ci(a,b){bi(a,b);(a=a.alternate)&&bi(a,b)}function di(a){a=Ba(a);return null===a?null:a.stateNode}function ei(){return null}
exports.attemptContinuousHydration=function(a){if(13===a.tag){var b=H();Ad(a,134217728,b);ci(a,134217728)}};exports.attemptHydrationAtCurrentPriority=function(a){if(13===a.tag){var b=H(),c=zd(a);Ad(a,c,b);ci(a,c)}};exports.attemptSynchronousHydration=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=vc(b.pendingLanes);0!==c&&(Dc(b,c|1),Z(b,E()),0===(G&6)&&(sh(),Xc()))}break;case 13:var d=H();Oh(function(){return Ad(a,1,d)});ci(a,1)}};
exports.batchedUpdates=function(a,b){var c=G;G|=1;try{return a(b)}finally{G=c,0===G&&(sh(),Tc&&Xc())}};exports.createComponentSelector=function(a){return{$$typeof:ah,value:a}};exports.createContainer=function(a,b,c,d,e,f,g){return Zh(a,b,!1,null,c,d,e,f,g)};exports.createHasPseudoClassSelector=function(a){return{$$typeof:bh,value:a}};
exports.createHydrationContainer=function(a,b,c,d,e,f,g,h,k){a=Zh(c,d,!0,a,e,f,g,h,k);a.context=$h(null);c=a.current;d=H();e=zd(c);f=qd(d,e);f.callback=void 0!==b&&null!==b?b:null;rd(c,f);a.current.lanes=e;Bc(a,e,d);Z(a,d);return a};exports.createPortal=function(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ha,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}};exports.createRoleSelector=function(a){return{$$typeof:ch,value:a}};
exports.createTestNameSelector=function(a){return{$$typeof:dh,value:a}};exports.createTextSelector=function(a){return{$$typeof:eh,value:a}};exports.deferredUpdates=function(a){var b=D,c=U.transition;try{return U.transition=null,D=16,a()}finally{D=b,U.transition=c}};exports.discreteUpdates=function(a,b,c,d,e){var f=D,g=U.transition;try{return U.transition=null,D=1,a(b,c,d,e)}finally{D=f,U.transition=g,0===G&&sh()}};exports.findAllNodes=kh;
exports.findBoundingRects=function(a,b){if(!bb)throw Error(n(363));b=kh(a,b);a=[];for(var c=0;c<b.length;c++)a.push(db(b[c]));for(b=a.length-1;0<b;b--){c=a[b];for(var d=c.x,e=d+c.width,f=c.y,g=f+c.height,h=b-1;0<=h;h--)if(b!==h){var k=a[h],l=k.x,m=l+k.width,v=k.y,r=v+k.height;if(d>=l&&f>=v&&e<=m&&g<=r){a.splice(b,1);break}else if(!(d!==l||c.width!==k.width||r<f||v>g)){v>f&&(k.height+=v-f,k.y=f);r<g&&(k.height=g-v);a.splice(b,1);break}else if(!(f!==v||c.height!==k.height||m<d||l>e)){l>d&&(k.width+=
l-d,k.x=d);m<e&&(k.width=e-l);a.splice(b,1);break}}}return a};exports.findHostInstance=ai;exports.findHostInstanceWithNoPortals=function(a){a=Aa(a);a=null!==a?Da(a):null;return null===a?null:a.stateNode};exports.findHostInstanceWithWarning=function(a){return ai(a)};exports.flushControlled=function(a){var b=G;G|=1;var c=U.transition,d=D;try{U.transition=null,D=1,a()}finally{D=d,U.transition=c,G=b,0===G&&(sh(),Xc())}};exports.flushPassiveEffects=Fh;exports.flushSync=Oh;
exports.focusWithin=function(a,b){if(!bb)throw Error(n(363));a=gh(a);b=jh(a,b);b=Array.from(b);for(a=0;a<b.length;){var c=b[a++];if(!fb(c)){if(5===c.tag&&hb(c.stateNode))return!0;for(c=c.child;null!==c;)b.push(c),c=c.sibling}}return!1};exports.getCurrentUpdatePriority=function(){return D};
exports.getFindAllNodesFailureDescription=function(a,b){if(!bb)throw Error(n(363));var c=0,d=[];a=[gh(a),0];for(var e=0;e<a.length;){var f=a[e++],g=a[e++],h=b[g];if(5!==f.tag||!fb(f))if(hh(f,h)&&(d.push(ih(h)),g++,g>c&&(c=g)),g<b.length)for(f=f.child;null!==f;)a.push(f,g),f=f.sibling}if(c<b.length){for(a=[];c<b.length;c++)a.push(ih(b[c]));return"findAllNodes was able to match part of the selector:\n  "+(d.join(" > ")+"\n\nNo matching component was found for:\n  ")+a.join(" > ")}return null};
exports.getPublicRootInstance=function(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return Fa(a.child.stateNode);default:return a.child.stateNode}};
exports.injectIntoDevTools=function(a){a={bundleType:a.bundleType,version:a.version,rendererPackageName:a.rendererPackageName,rendererConfig:a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ea.ReactCurrentDispatcher,findHostInstanceByFiber:di,findFiberByHostInstance:a.findFiberByHostInstance||
ei,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"};if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)a=!1;else{var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)a=!0;else{try{Nc=b.inject(a),Oc=b}catch(c){}a=b.checkDCE?!0:!1}}return a};exports.isAlreadyRendering=function(){return!1};
exports.observeVisibleRects=function(a,b,c,d){if(!bb)throw Error(n(363));a=kh(a,b);var e=ib(a,c,d).disconnect;return{disconnect:function(){e()}}};exports.registerMutableSourceForHydration=function(a,b){var c=b._getVersion;c=c(b._source);null==a.mutableSourceEagerHydrationData?a.mutableSourceEagerHydrationData=[b,c]:a.mutableSourceEagerHydrationData.push(b,c)};exports.runWithPriority=function(a,b){var c=D;try{return D=a,b()}finally{D=c}};exports.shouldError=function(){return null};
exports.shouldSuspend=function(){return!1};exports.updateContainer=function(a,b,c,d){var e=b.current,f=H(),g=zd(e);c=$h(c);null===b.context?b.context=c:b.pendingContext=c;b=qd(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);rd(e,b);a=Ad(e,g,f);null!==a&&sd(a,e,g);return g};

    return exports;
};


/***/ }),

/***/ "./node_modules/react-reconciler/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/react-reconciler/constants.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-reconciler-constants.development.js */ "./node_modules/react-reconciler/cjs/react-reconciler-constants.development.js");
}


/***/ }),

/***/ "./node_modules/react-reconciler/node_modules/scheduler/cjs/scheduler.development.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-reconciler/node_modules/scheduler/cjs/scheduler.development.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var navigator = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["navigator"];
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var enableSchedulerDebugging = false;
var enableProfiling = false;
var frameYieldMs = 5;

function push(heap, node) {
  var index = heap.length;
  heap.push(node);
  siftUp(heap, node, index);
}
function peek(heap) {
  return heap.length === 0 ? null : heap[0];
}
function pop(heap) {
  if (heap.length === 0) {
    return null;
  }

  var first = heap[0];
  var last = heap.pop();

  if (last !== first) {
    heap[0] = last;
    siftDown(heap, last, 0);
  }

  return first;
}

function siftUp(heap, node, i) {
  var index = i;

  while (index > 0) {
    var parentIndex = index - 1 >>> 1;
    var parent = heap[parentIndex];

    if (compare(parent, node) > 0) {
      // The parent is larger. Swap positions.
      heap[parentIndex] = node;
      heap[index] = parent;
      index = parentIndex;
    } else {
      // The parent is smaller. Exit.
      return;
    }
  }
}

function siftDown(heap, node, i) {
  var index = i;
  var length = heap.length;
  var halfLength = length >>> 1;

  while (index < halfLength) {
    var leftIndex = (index + 1) * 2 - 1;
    var left = heap[leftIndex];
    var rightIndex = leftIndex + 1;
    var right = heap[rightIndex]; // If the left or right node is smaller, swap with the smaller of those.

    if (compare(left, node) < 0) {
      if (rightIndex < length && compare(right, left) < 0) {
        heap[index] = right;
        heap[rightIndex] = node;
        index = rightIndex;
      } else {
        heap[index] = left;
        heap[leftIndex] = node;
        index = leftIndex;
      }
    } else if (rightIndex < length && compare(right, node) < 0) {
      heap[index] = right;
      heap[rightIndex] = node;
      index = rightIndex;
    } else {
      // Neither child is smaller. Exit.
      return;
    }
  }
}

function compare(a, b) {
  // Compare sort index first, then task id.
  var diff = a.sortIndex - b.sortIndex;
  return diff !== 0 ? diff : a.id - b.id;
}

// TODO: Use symbols?
var ImmediatePriority = 1;
var UserBlockingPriority = 2;
var NormalPriority = 3;
var LowPriority = 4;
var IdlePriority = 5;

function markTaskErrored(task, ms) {
}

/* eslint-disable no-var */

var hasPerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';

if (hasPerformanceNow) {
  var localPerformance = performance;

  exports.unstable_now = function () {
    return localPerformance.now();
  };
} else {
  var localDate = Date;
  var initialTime = localDate.now();

  exports.unstable_now = function () {
    return localDate.now() - initialTime;
  };
} // Max 31 bit integer. The max integer size in V8 for 32-bit systems.
// Math.pow(2, 30) - 1
// 0b111111111111111111111111111111


var maxSigned31BitInt = 1073741823; // Times out immediately

var IMMEDIATE_PRIORITY_TIMEOUT = -1; // Eventually times out

var USER_BLOCKING_PRIORITY_TIMEOUT = 250;
var NORMAL_PRIORITY_TIMEOUT = 5000;
var LOW_PRIORITY_TIMEOUT = 10000; // Never times out

var IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt; // Tasks are stored on a min heap

var taskQueue = [];
var timerQueue = []; // Incrementing id counter. Used to maintain insertion order.

var taskIdCounter = 1; // Pausing the scheduler is useful for debugging.
var currentTask = null;
var currentPriorityLevel = NormalPriority; // This is set while performing work, to prevent re-entrance.

var isPerformingWork = false;
var isHostCallbackScheduled = false;
var isHostTimeoutScheduled = false; // Capture local references to native APIs, in case a polyfill overrides them.

var localSetTimeout = typeof setTimeout === 'function' ? setTimeout : null;
var localClearTimeout = typeof clearTimeout === 'function' ? clearTimeout : null;
var localSetImmediate = typeof setImmediate !== 'undefined' ? setImmediate : null; // IE and Node.js + jsdom

var isInputPending = typeof navigator !== 'undefined' && navigator.scheduling !== undefined && navigator.scheduling.isInputPending !== undefined ? navigator.scheduling.isInputPending.bind(navigator.scheduling) : null;

function advanceTimers(currentTime) {
  // Check for tasks that are no longer delayed and add them to the queue.
  var timer = peek(timerQueue);

  while (timer !== null) {
    if (timer.callback === null) {
      // Timer was cancelled.
      pop(timerQueue);
    } else if (timer.startTime <= currentTime) {
      // Timer fired. Transfer to the task queue.
      pop(timerQueue);
      timer.sortIndex = timer.expirationTime;
      push(taskQueue, timer);
    } else {
      // Remaining timers are pending.
      return;
    }

    timer = peek(timerQueue);
  }
}

function handleTimeout(currentTime) {
  isHostTimeoutScheduled = false;
  advanceTimers(currentTime);

  if (!isHostCallbackScheduled) {
    if (peek(taskQueue) !== null) {
      isHostCallbackScheduled = true;
      requestHostCallback(flushWork);
    } else {
      var firstTimer = peek(timerQueue);

      if (firstTimer !== null) {
        requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
      }
    }
  }
}

function flushWork(hasTimeRemaining, initialTime) {


  isHostCallbackScheduled = false;

  if (isHostTimeoutScheduled) {
    // We scheduled a timeout but it's no longer needed. Cancel it.
    isHostTimeoutScheduled = false;
    cancelHostTimeout();
  }

  isPerformingWork = true;
  var previousPriorityLevel = currentPriorityLevel;

  try {
    if (enableProfiling) {
      try {
        return workLoop(hasTimeRemaining, initialTime);
      } catch (error) {
        if (currentTask !== null) {
          var currentTime = exports.unstable_now();
          markTaskErrored(currentTask, currentTime);
          currentTask.isQueued = false;
        }

        throw error;
      }
    } else {
      // No catch in prod code path.
      return workLoop(hasTimeRemaining, initialTime);
    }
  } finally {
    currentTask = null;
    currentPriorityLevel = previousPriorityLevel;
    isPerformingWork = false;
  }
}

function workLoop(hasTimeRemaining, initialTime) {
  var currentTime = initialTime;
  advanceTimers(currentTime);
  currentTask = peek(taskQueue);

  while (currentTask !== null && !(enableSchedulerDebugging )) {
    if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost())) {
      // This currentTask hasn't expired, and we've reached the deadline.
      break;
    }

    var callback = currentTask.callback;

    if (typeof callback === 'function') {
      currentTask.callback = null;
      currentPriorityLevel = currentTask.priorityLevel;
      var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;

      var continuationCallback = callback(didUserCallbackTimeout);
      currentTime = exports.unstable_now();

      if (typeof continuationCallback === 'function') {
        currentTask.callback = continuationCallback;
      } else {

        if (currentTask === peek(taskQueue)) {
          pop(taskQueue);
        }
      }

      advanceTimers(currentTime);
    } else {
      pop(taskQueue);
    }

    currentTask = peek(taskQueue);
  } // Return whether there's additional work


  if (currentTask !== null) {
    return true;
  } else {
    var firstTimer = peek(timerQueue);

    if (firstTimer !== null) {
      requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
    }

    return false;
  }
}

function unstable_runWithPriority(priorityLevel, eventHandler) {
  switch (priorityLevel) {
    case ImmediatePriority:
    case UserBlockingPriority:
    case NormalPriority:
    case LowPriority:
    case IdlePriority:
      break;

    default:
      priorityLevel = NormalPriority;
  }

  var previousPriorityLevel = currentPriorityLevel;
  currentPriorityLevel = priorityLevel;

  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
  }
}

function unstable_next(eventHandler) {
  var priorityLevel;

  switch (currentPriorityLevel) {
    case ImmediatePriority:
    case UserBlockingPriority:
    case NormalPriority:
      // Shift down to normal priority
      priorityLevel = NormalPriority;
      break;

    default:
      // Anything lower than normal priority should remain at the current level.
      priorityLevel = currentPriorityLevel;
      break;
  }

  var previousPriorityLevel = currentPriorityLevel;
  currentPriorityLevel = priorityLevel;

  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
  }
}

function unstable_wrapCallback(callback) {
  var parentPriorityLevel = currentPriorityLevel;
  return function () {
    // This is a fork of runWithPriority, inlined for performance.
    var previousPriorityLevel = currentPriorityLevel;
    currentPriorityLevel = parentPriorityLevel;

    try {
      return callback.apply(this, arguments);
    } finally {
      currentPriorityLevel = previousPriorityLevel;
    }
  };
}

function unstable_scheduleCallback(priorityLevel, callback, options) {
  var currentTime = exports.unstable_now();
  var startTime;

  if (typeof options === 'object' && options !== null) {
    var delay = options.delay;

    if (typeof delay === 'number' && delay > 0) {
      startTime = currentTime + delay;
    } else {
      startTime = currentTime;
    }
  } else {
    startTime = currentTime;
  }

  var timeout;

  switch (priorityLevel) {
    case ImmediatePriority:
      timeout = IMMEDIATE_PRIORITY_TIMEOUT;
      break;

    case UserBlockingPriority:
      timeout = USER_BLOCKING_PRIORITY_TIMEOUT;
      break;

    case IdlePriority:
      timeout = IDLE_PRIORITY_TIMEOUT;
      break;

    case LowPriority:
      timeout = LOW_PRIORITY_TIMEOUT;
      break;

    case NormalPriority:
    default:
      timeout = NORMAL_PRIORITY_TIMEOUT;
      break;
  }

  var expirationTime = startTime + timeout;
  var newTask = {
    id: taskIdCounter++,
    callback: callback,
    priorityLevel: priorityLevel,
    startTime: startTime,
    expirationTime: expirationTime,
    sortIndex: -1
  };

  if (startTime > currentTime) {
    // This is a delayed task.
    newTask.sortIndex = startTime;
    push(timerQueue, newTask);

    if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
      // All tasks are delayed, and this is the task with the earliest delay.
      if (isHostTimeoutScheduled) {
        // Cancel an existing timeout.
        cancelHostTimeout();
      } else {
        isHostTimeoutScheduled = true;
      } // Schedule a timeout.


      requestHostTimeout(handleTimeout, startTime - currentTime);
    }
  } else {
    newTask.sortIndex = expirationTime;
    push(taskQueue, newTask);
    // wait until the next time we yield.


    if (!isHostCallbackScheduled && !isPerformingWork) {
      isHostCallbackScheduled = true;
      requestHostCallback(flushWork);
    }
  }

  return newTask;
}

function unstable_pauseExecution() {
}

function unstable_continueExecution() {

  if (!isHostCallbackScheduled && !isPerformingWork) {
    isHostCallbackScheduled = true;
    requestHostCallback(flushWork);
  }
}

function unstable_getFirstCallbackNode() {
  return peek(taskQueue);
}

function unstable_cancelCallback(task) {
  // remove from the queue because you can't remove arbitrary nodes from an
  // array based heap, only the first one.)


  task.callback = null;
}

function unstable_getCurrentPriorityLevel() {
  return currentPriorityLevel;
}

var isMessageLoopRunning = false;
var scheduledHostCallback = null;
var taskTimeoutID = -1; // Scheduler periodically yields in case there is other work on the main
// thread, like user events. By default, it yields multiple times per frame.
// It does not attempt to align with frame boundaries, since most tasks don't
// need to be frame aligned; for those that do, use requestAnimationFrame.

var frameInterval = frameYieldMs;
var startTime = -1;

function shouldYieldToHost() {
  var timeElapsed = exports.unstable_now() - startTime;

  if (timeElapsed < frameInterval) {
    // The main thread has only been blocked for a really short amount of time;
    // smaller than a single frame. Don't yield yet.
    return false;
  } // The main thread has been blocked for a non-negligible amount of time. We


  return true;
}

function requestPaint() {

}

function forceFrameRate(fps) {
  if (fps < 0 || fps > 125) {
    // Using console['error'] to evade Babel and ESLint
    console['error']('forceFrameRate takes a positive int between 0 and 125, ' + 'forcing frame rates higher than 125 fps is not supported');
    return;
  }

  if (fps > 0) {
    frameInterval = Math.floor(1000 / fps);
  } else {
    // reset the framerate
    frameInterval = frameYieldMs;
  }
}

var performWorkUntilDeadline = function () {
  if (scheduledHostCallback !== null) {
    var currentTime = exports.unstable_now(); // Keep track of the start time so we can measure how long the main thread
    // has been blocked.

    startTime = currentTime;
    var hasTimeRemaining = true; // If a scheduler task throws, exit the current browser task so the
    // error can be observed.
    //
    // Intentionally not using a try-catch, since that makes some debugging
    // techniques harder. Instead, if `scheduledHostCallback` errors, then
    // `hasMoreWork` will remain true, and we'll continue the work loop.

    var hasMoreWork = true;

    try {
      hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);
    } finally {
      if (hasMoreWork) {
        // If there's more work, schedule the next message event at the end
        // of the preceding one.
        schedulePerformWorkUntilDeadline();
      } else {
        isMessageLoopRunning = false;
        scheduledHostCallback = null;
      }
    }
  } else {
    isMessageLoopRunning = false;
  } // Yielding to the browser will give it a chance to paint, so we can
};

var schedulePerformWorkUntilDeadline;

if (typeof localSetImmediate === 'function') {
  // Node.js and old IE.
  // There's a few reasons for why we prefer setImmediate.
  //
  // Unlike MessageChannel, it doesn't prevent a Node.js process from exiting.
  // (Even though this is a DOM fork of the Scheduler, you could get here
  // with a mix of Node.js 15+, which has a MessageChannel, and jsdom.)
  // https://github.com/facebook/react/issues/20756
  //
  // But also, it runs earlier which is the semantic we want.
  // If other browsers ever implement it, it's better to use it.
  // Although both of these would be inferior to native scheduling.
  schedulePerformWorkUntilDeadline = function () {
    localSetImmediate(performWorkUntilDeadline);
  };
} else if (typeof MessageChannel !== 'undefined') {
  // DOM and Worker environments.
  // We prefer MessageChannel because of the 4ms setTimeout clamping.
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = performWorkUntilDeadline;

  schedulePerformWorkUntilDeadline = function () {
    port.postMessage(null);
  };
} else {
  // We should only fallback here in non-browser environments.
  schedulePerformWorkUntilDeadline = function () {
    localSetTimeout(performWorkUntilDeadline, 0);
  };
}

function requestHostCallback(callback) {
  scheduledHostCallback = callback;

  if (!isMessageLoopRunning) {
    isMessageLoopRunning = true;
    schedulePerformWorkUntilDeadline();
  }
}

function requestHostTimeout(callback, ms) {
  taskTimeoutID = localSetTimeout(function () {
    callback(exports.unstable_now());
  }, ms);
}

function cancelHostTimeout() {
  localClearTimeout(taskTimeoutID);
  taskTimeoutID = -1;
}

var unstable_requestPaint = requestPaint;
var unstable_Profiling =  null;

exports.unstable_IdlePriority = IdlePriority;
exports.unstable_ImmediatePriority = ImmediatePriority;
exports.unstable_LowPriority = LowPriority;
exports.unstable_NormalPriority = NormalPriority;
exports.unstable_Profiling = unstable_Profiling;
exports.unstable_UserBlockingPriority = UserBlockingPriority;
exports.unstable_cancelCallback = unstable_cancelCallback;
exports.unstable_continueExecution = unstable_continueExecution;
exports.unstable_forceFrameRate = forceFrameRate;
exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
exports.unstable_next = unstable_next;
exports.unstable_pauseExecution = unstable_pauseExecution;
exports.unstable_requestPaint = unstable_requestPaint;
exports.unstable_runWithPriority = unstable_runWithPriority;
exports.unstable_scheduleCallback = unstable_scheduleCallback;
exports.unstable_shouldYield = shouldYieldToHost;
exports.unstable_wrapCallback = unstable_wrapCallback;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),

/***/ "./node_modules/react-reconciler/node_modules/scheduler/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-reconciler/node_modules/scheduler/index.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/scheduler.development.js */ "./node_modules/react-reconciler/node_modules/scheduler/cjs/scheduler.development.js");
}


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.production.min.js":
/*!********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.production.min.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ "./node_modules/react/cjs/react.production.min.js":
/*!********************************************************!*\
  !*** ./node_modules/react/cjs/react.production.min.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;exports.act=X;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=X;exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};
exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};exports.useTransition=function(){return U.current.useTransition()};exports.version="18.3.1";


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.mjs":
/*!******************************************!*\
  !*** ./node_modules/tslib/tslib.es6.mjs ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __classPrivateFieldGet: function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   __classPrivateFieldSet: function() { return /* binding */ __classPrivateFieldSet; }
/* harmony export */ });
/* unused harmony exports __extends, __assign, __rest, __decorate, __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldIn, __addDisposableResource, __disposeResources, __rewriteRelativeImportExtension */
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
});


/***/ })

}]);
//# sourceMappingURL=vendors.js.map