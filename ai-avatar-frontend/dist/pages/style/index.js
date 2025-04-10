"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/style/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/style/index!./src/pages/style/index.tsx":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/style/index!./src/pages/style/index.tsx ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var D_code_ai_avatar_ai_avatar_mini_program_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var D_code_ai_avatar_ai_avatar_mini_program_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_code_ai_avatar_ai_avatar_mini_program_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_code_ai_avatar_ai_avatar_mini_program_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ "./src/components/index.ts");
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/stores */ "./src/stores/index.ts");
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stores__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/api */ "./src/services/api.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");












var styles = [{
  id: 'ghibli',
  name: '吉卜力风格',
  icon: 'paint-brush',
  preview: 'ghibli.jpg'
}, {
  id: 'cartoon',
  name: '美式卡通',
  icon: 'smile',
  preview: 'cartoon.jpg'
}, {
  id: 'cyberpunk',
  name: '赛博朋克',
  icon: 'robot',
  preview: 'cyberpunk.jpg'
}, {
  id: 'watercolor',
  name: '水彩艺术',
  icon: 'palette',
  preview: 'watercolor.jpg'
}];
var StylePage = function StylePage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = (0,D_code_ai_avatar_ai_avatar_mini_program_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useStore = (0,_stores__WEBPACK_IMPORTED_MODULE_5__.useStore)(),
    avatarStore = _useStore.avatarStore,
    userStore = _useStore.userStore;
  var taskId = avatarStore.taskId;
  var handleStyleSelect = /*#__PURE__*/function () {
    var _ref = (0,D_code_ai_avatar_ai_avatar_mini_program_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])(/*#__PURE__*/(0,D_code_ai_avatar_ai_avatar_mini_program_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee(styleId) {
      return (0,D_code_ai_avatar_ai_avatar_mini_program_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setLoading(true);
            _context.next = 4;
            return _services_api__WEBPACK_IMPORTED_MODULE_2__.avatarApi.updateStyle(taskId, styleId);
          case 4:
            avatarStore.setCurrentStyle(styleId);
            Taro.navigateTo({
              url: "/pages/edit/index?taskId=".concat(taskId)
            });
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            Taro.showToast({
              title: '选择风格失败',
              icon: 'none'
            });
          case 11:
            _context.prev = 11;
            setLoading(false);
            return _context.finish(11);
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 8, 11, 14]]);
    }));
    return function handleStyleSelect(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
    className: "style-page",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      className: "preview-section",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Image, {
        className: "original-image",
        src: avatarStore.originalImage,
        mode: "aspectFill"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      className: "style-section",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "section-title",
        children: "\u9009\u62E9\u98CE\u683C"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.ScrollView, {
        scrollY: true,
        className: "style-list",
        children: styles.map(function (style) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.StyleCard, (0,D_code_ai_avatar_ai_avatar_mini_program_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__["default"])((0,D_code_ai_avatar_ai_avatar_mini_program_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__["default"])({}, style), {}, {
            disabled: !userStore.isVip && style.id !== 'ghibli',
            loading: loading,
            onSelect: function onSelect() {
              return handleStyleSelect(style.id);
            }
          }), style.id);
        })
      })]
    }), !userStore.isVip && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      className: "vip-tip",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
        children: "\u5F00\u901A\u4F1A\u5458\u89E3\u9501\u6240\u6709\u98CE\u683C"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Button, {
        className: "vip-button",
        onClick: function onClick() {
          return Taro.navigateTo({
            url: '/pages/member/index'
          });
        },
        children: "\u7ACB\u5373\u5F00\u901A"
      })]
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = ((0,mobx_react__WEBPACK_IMPORTED_MODULE_10__.observer)(StylePage));

/***/ }),

/***/ "./src/pages/style/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/style/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_style_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/style/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/style/index!./src/pages/style/index.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_style_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/style/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_style_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/style/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map