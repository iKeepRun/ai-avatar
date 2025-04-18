"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api */ "./src/services/api.ts");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/logo.png */ "./src/assets/images/logo.png");
/* harmony import */ var _assets_images_upload_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/images/upload.png */ "./src/assets/images/upload.png");
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/stores */ "./src/stores/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");










// 导入图片




function Index() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
    _useState2 = (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState, 2),
    imageUrl = _useState2[0],
    setImageUrl = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState4 = (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
    _useState6 = (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var _useStore = (0,_stores__WEBPACK_IMPORTED_MODULE_5__.useStore)(),
    avatarStore = _useStore.avatarStore;
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.useLoad)(function () {
    // 检查登录状态
    var token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token');
    if (!token) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
        url: '/pages/login/index'
      });
      return;
    }
  });
  var handleChooseImage = /*#__PURE__*/function () {
    var _ref = (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__["default"])().mark(function _callee() {
      var res, errMsg;
      return (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log('开始选择图片...');

            // 选择图片
            _context.next = 4;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().chooseMedia({
              count: 1,
              mediaType: ['image']
            });
          case 4:
            res = _context.sent;
            if (res.tempFiles && res.tempFiles[0]) {
              console.log('设置图片路径:', res.tempFiles[0]);
              setImageUrl(res.tempFiles[0].tempFilePath);
              setError('');
            } else {
              console.error('未获取到图片路径');
              setError('未获取到图片，请重试');
            }
            _context.next = 14;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.error('选择图片失败:', {
              error: _context.t0,
              errMsg: _context.t0.errMsg,
              type: (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_context.t0),
              stack: _context.t0.stack
            });
            errMsg = _context.t0.errMsg || '';
            console.log('错误信息:', errMsg);
            if (errMsg.includes('authorize')) {
              // 用户拒绝授权
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showModal({
                title: '提示',
                content: '需要允许访问相册才能选择图片',
                confirmText: '去设置',
                success: function success(res) {
                  if (res.confirm) {
                    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().openSetting();
                  }
                }
              });
            } else if (errMsg.includes('cancel')) {
              // 用户取消选择
              setError('已取消选择图片');
            } else {
              // 尝试获取更多错误信息
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getSetting({
                success: function success(res) {
                  console.log('当前权限设置:', res.authSetting);
                },
                fail: function fail(err) {
                  console.error('获取权限设置失败:', err);
                }
              });
              setError("\u9009\u62E9\u56FE\u7247\u5931\u8D25: ".concat(errMsg));
            }
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 8]]);
    }));
    return function handleChooseImage() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleNext = /*#__PURE__*/function () {
    var _ref2 = (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__["default"])().mark(function _callee2() {
      var uploadRes, result;
      return (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__["default"])().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (imageUrl) {
              _context2.next = 3;
              break;
            }
            setError('请先选择图片');
            return _context2.abrupt("return");
          case 3:
            // const token = Taro.getStorageSync('token')
            // console.log("从本地缓存中获取token",token)
            // if (!token) {
            //   Taro.navigateTo({
            //     url: '/pages/login/index'
            //   })
            //   return
            // }

            setLoading(true);
            setError('');
            _context2.prev = 5;
            _context2.next = 8;
            return (0,_services_api__WEBPACK_IMPORTED_MODULE_2__.uploadImage)(imageUrl);
          case 8:
            uploadRes = _context2.sent;
            result = JSON.parse(uploadRes.data); //设置 头像store 的 taskId
            // avatarStore.setTaskId(result.data)
            //设置 头像store 的 originalImage
            avatarStore.setOriginalImage(imageUrl);
            avatarStore.setCosImageUrl(result.data);

            // 跳转到风格选择页面
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
              url: "/pages/style/index"
            });
            _context2.next = 19;
            break;
          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](5);
            console.error('上传失败:', _context2.t0);
            setError('上传失败，请重试');
          case 19:
            _context2.prev = 19;
            setLoading(false);
            return _context2.finish(19);
          case 22:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[5, 15, 19, 22]]);
    }));
    return function handleNext() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
    className: "index-page",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Image, {
        className: "logo",
        src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "title",
        children: "AI\u5934\u50CF\u751F\u6210\u5668"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "upload-section",
        children: imageUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Image, {
          className: "preview-image",
          src: imageUrl,
          mode: "aspectFit"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "upload-placeholder",
          onClick: handleChooseImage,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Image, {
            className: "upload-icon",
            src: _assets_images_upload_png__WEBPACK_IMPORTED_MODULE_4__
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "upload-text",
            children: "\u70B9\u51FB\u4E0A\u4F20\u7167\u7247"
          })]
        })
      }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "error-message",
        children: error
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
        className: "next-button",
        loading: loading,
        disabled: !imageUrl || loading,
        onClick: handleNext,
        children: "\u4E0B\u4E00\u6B65"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "footer",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "tips",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "tip-item",
          children: "\u7167\u7247\u5927\u5C0F\u4E0D\u8D85\u8FC75MB"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "tip-item",
          children: "\u652F\u6301jpg\u3001png\u683C\u5F0F"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "tip-item",
          children: "\u5EFA\u8BAE\u4E0A\u4F20\u6E05\u6670\u7684\u6B63\u9762\u7167\u7247"
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/logo.png";

/***/ }),

/***/ "./src/assets/images/upload.png":
/*!**************************************!*\
  !*** ./src/assets/images/upload.png ***!
  \**************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAYFBMVEUAAACfn5+WlpacnJyenp6Xl5eVlZWZmZmbm5uYmJiampqZmZmZmZmYmJiZmZmYmJiYmJiampqZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZn///8vZBKeAAAAHnRSTlMAEBESFRYYGT0+Tm52d3qBvb/DyszS09fx8vP4+f1Pjjj7AAAAAWJLR0QfBQ0QvQAAAKtJREFUSMft1ssOgjAQheGqVPGC1oIo1Z73f0yEXgIx6UzXdhYkwP81hLJAiDJhpDEyq++BXub1OaJ64Al8Dwd+vwcqrph7AQimcP0EeML3M+CI0DtAi9h7QIo2vnwPpi1pE0B3YbMCELLTrM2IgDsFFOA+Ok2DVUPc/m04T1xANhiwofodXouzO84UaKAWZye8L9vk+s3H1ssLNwti7HW9xFGZVD6o+p//EUYWSRmBr3R1pwAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/index/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/index/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map