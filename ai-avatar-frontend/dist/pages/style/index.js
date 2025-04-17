"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/style/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/style/index!./src/pages/style/index.tsx":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/style/index!./src/pages/style/index.tsx ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ StylePage; }
/* harmony export */ });
/* harmony import */ var D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/stores */ "./src/stores/index.ts");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/api */ "./src/services/api.ts");
/* harmony import */ var _assets_images_star_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/images/star.png */ "./src/assets/images/star.png");
/* harmony import */ var _assets_images_crown_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/images/crown.png */ "./src/assets/images/crown.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");










// 导入图标




// 风格映射
// const styleMap = [
//   { name: "复古漫画", icon: './assets/images/style-comic.png' },
//   { name: "3D童话", icon: './assets/images/style-fairytale.png' },
//   { name: "二次元", icon: './assets/images/style-anime.png' },
//   { name: "小清新", icon: './assets/images/style-light.png' },
//   { name: "未来科技", icon: './assets/images/style-future.png' },
//   { name: "国画古风", icon: './assets/images/style-chinese.png' },
//   { name: "将军百战", icon: './assets/images/style-warrior.png' },
//   { name: "炫彩卡通", icon: './assets/images/style-cartoon.png' },
//   { name: "清雅国风", icon: './assets/images/style-chinese.png' },
//   { name: "喜迎新年", icon: './assets/images/style-newyear.png' },
// ]
var styleMap = [{
  name: "复古漫画",
  icon: './assets/images/cartoon.png'
}, {
  name: "3D童话",
  icon: './assets/images/cartoon.png'
}, {
  name: "二次元",
  icon: './assets/images/cartoon.png'
}, {
  name: "小清新",
  icon: './assets/images/cartoon.png'
}, {
  name: "未来科技",
  icon: './assets/images/cartoon.png'
}, {
  name: "国画古风",
  icon: './assets/images/cartoon.png'
}, {
  name: "将军百战",
  icon: './assets/images/cartoon.png'
}, {
  name: "炫彩卡通",
  icon: './assets/images/cartoon.png'
}, {
  name: "清雅国风",
  icon: './assets/images/cartoon.png'
}, {
  name: "喜迎新年",
  icon: './assets/images/cartoon.png'
}];
function StylePage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState2 = (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useStore = (0,_stores__WEBPACK_IMPORTED_MODULE_2__.useStore)(),
    avatarStore = _useStore.avatarStore,
    userStore = _useStore.userStore;
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
    _useState4 = (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState3, 2),
    resultImage = _useState4[0],
    setResultImage = _useState4[1];

  // const handleSelect = async (styleId) => {
  //   try {
  //     setLoading(true)
  //     // 调用API更新风格选择
  //     await avatarApi.updateStyle(taskId, styleId)
  //     // 保存到store
  //     avatarStore.setCurrentStyle(styleId)
  //     // 跳转到结果页
  //     Taro.navigateTo({ url: `/pages/result/index?taskId=${taskId}` })
  //   } catch (error) {
  //     Taro.showToast({ title: '选择风格失败', icon: 'none' })
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  var handleSelect = /*#__PURE__*/function () {
    var _ref = (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__["default"])().mark(function _callee(style) {
      var res, taskId;
      return (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setLoading(true);
            // 调用生成头像的后端接口
            _context.next = 4;
            return (0,_services_api__WEBPACK_IMPORTED_MODULE_3__.generateAvatar)(avatarStore.cosImageUrl, style);
          case 4:
            res = _context.sent;
            taskId = res.data.data; // 获取任务ID
            // 存储任务ID
            avatarStore.setTaskId(taskId);

            // 跳转到结果页面
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
              url: "/pages/result/index?taskId=".concat(taskId)
            });
            _context.next = 13;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
              title: '生成失败',
              icon: 'none'
            });
          case 13:
            _context.prev = 13;
            setLoading(false);
            return _context.finish(13);
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 10, 13, 16]]);
    }));
    return function handleSelect(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
    className: "style-page",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
      className: "title",
      children: "\u9009\u62E9\u98CE\u683C"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
      className: "grid",
      children: styleMap.map(function (style) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: "style-card",
          onClick: function onClick() {
            return !loading && handleSelect(style.name);
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Image, {
            className: "icon",
            src: style.icon,
            mode: "aspectFit"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
            className: "name",
            children: style.name
          })]
        }, style.name);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
      className: "vip-section",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: "vip-title",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Image, {
          className: "crown",
          src: _assets_images_crown_png__WEBPACK_IMPORTED_MODULE_5__,
          mode: "aspectFit"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          children: "\u4F1A\u5458\u4E13\u5C5E\u98CE\u683C"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: "grid",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: "vip-card",
          onClick: function onClick() {
            return userStore.isVip && !loading && handleSelect('premium1');
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Image, {
            className: "icon",
            src: _assets_images_star_png__WEBPACK_IMPORTED_MODULE_4__,
            mode: "aspectFit"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
            className: "name",
            children: "\u9AD8\u7EA7\u98CE\u683C1"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: "vip-card",
          onClick: function onClick() {
            return userStore.isVip && !loading && handleSelect('premium2');
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Image, {
            className: "icon",
            src: _assets_images_star_png__WEBPACK_IMPORTED_MODULE_4__,
            mode: "aspectFit"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
            className: "name",
            children: "\u9AD8\u7EA7\u98CE\u683C2"
          })]
        })]
      })]
    })]
  });
}
function showError(errorMessage) {
  throw new Error('Function not implemented.');
}

/***/ }),

/***/ "./src/assets/images/crown.png":
/*!*************************************!*\
  !*** ./src/assets/images/crown.png ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/crown.png";

/***/ }),

/***/ "./src/assets/images/star.png":
/*!************************************!*\
  !*** ./src/assets/images/star.png ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/star.png";

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