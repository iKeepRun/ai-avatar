(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/components/ColorPicker/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/ColorPicker/index.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");



var ColorPicker = function ColorPicker(_ref) {
  var color = _ref.color,
    onChange = _ref.onChange;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
    className: "color-picker",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      className: "color-preview",
      style: {
        backgroundColor: color
      },
      onClick: function onClick() {
        // 这里应该打开颜色选择器，但微信小程序没有原生的颜色选择器
        // 可以考虑使用第三方组件或自定义实现
        onChange('#000000');
      }
    })
  });
};
/* harmony default export */ __webpack_exports__["default"] = (ColorPicker);

/***/ }),

/***/ "./src/components/StyleCard/index.tsx":
/*!********************************************!*\
  !*** ./src/components/StyleCard/index.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");



var StyleCard = function StyleCard(_ref) {
  var id = _ref.id,
    name = _ref.name,
    image = _ref.image,
    _ref$isVip = _ref.isVip,
    isVip = _ref$isVip === void 0 ? false : _ref$isVip,
    _ref$selected = _ref.selected,
    selected = _ref$selected === void 0 ? false : _ref$selected,
    onClick = _ref.onClick;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
    className: "style-card ".concat(selected ? 'selected' : ''),
    onClick: onClick,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Image, {
      className: "style-image",
      src: image,
      mode: "aspectFill"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      className: "style-info",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
        className: "style-name",
        children: name
      }), isVip && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
        className: "vip-tag",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
          className: "vip-text",
          children: "VIP"
        })
      })]
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (StyleCard);

/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorPicker: function() { return /* reexport safe */ _ColorPicker__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   StyleCard: function() { return /* reexport safe */ _StyleCard__WEBPACK_IMPORTED_MODULE_1__["default"]; }
/* harmony export */ });
/* harmony import */ var _ColorPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorPicker */ "./src/components/ColorPicker/index.tsx");
/* harmony import */ var _StyleCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyleCard */ "./src/components/StyleCard/index.tsx");



/***/ }),

/***/ "./src/constants/config.ts":
/*!*********************************!*\
  !*** ./src/constants/config.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BASE_URL: function() { return /* binding */ BASE_URL; }
/* harmony export */ });
/* unused harmony exports API_BASE_URL, UPLOAD_URL, MEMBER_TYPES, AVATAR_STATUS */
var API_BASE_URL =  true ? 'http://localhost:8080' : 0;
var BASE_URL = API_BASE_URL;
var UPLOAD_URL = "".concat(API_BASE_URL, "/api/v1/upload");
var MEMBER_TYPES = {
  MONTHLY: 1,
  YEARLY: 2
};
var AVATAR_STATUS = {
  PENDING: 0,
  COMPLETED: 1,
  FAILED: 2
};

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   avatarApi: function() { return /* binding */ avatarApi; },
/* harmony export */   memberApi: function() { return /* binding */ memberApi; },
/* harmony export */   uploadImage: function() { return /* binding */ uploadImage; },
/* harmony export */   userApi: function() { return /* binding */ userApi; }
/* harmony export */ });
/* unused harmony exports updateStyle, generateAvatar, getAvatarResult */
/* harmony import */ var D_code_ai_avatar_ai_avatar_mini_program_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_code_ai_avatar_ai_avatar_mini_program_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/config */ "./src/constants/config.ts");





// 用户相关接口
var userApi = {
  login: function login(code) {
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
      url: "".concat(_constants_config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, "/api/v1/users/login"),
      method: 'POST',
      data: {
        code: code
      }
    });
  },
  getProfile: function getProfile() {
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
      url: "".concat(_constants_config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, "/api/v1/users/profile"),
      header: {
        'Authorization': "Bearer ".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token'))
      }
    });
  }
};

// 头像生成相关接口
var avatarApi = {
  uploadImage: function uploadImage(filePath) {
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().uploadFile({
      url: "".concat(_constants_config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, "/api/v1/upload"),
      filePath: filePath,
      name: 'file',
      header: {
        'Authorization': "Bearer ".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token'))
      }
    });
  },
  updateStyle: function updateStyle(imageId, styleId) {
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
      url: "".concat(_constants_config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, "/api/v1/avatar/style"),
      method: 'POST',
      data: {
        imageId: imageId,
        styleId: styleId
      },
      header: {
        'Authorization': "Bearer ".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token'))
      }
    });
  },
  getResult: function () {
    var _getResult = (0,D_code_ai_avatar_ai_avatar_mini_program_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/(0,D_code_ai_avatar_ai_avatar_mini_program_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee(taskId) {
      var res;
      return (0,D_code_ai_avatar_ai_avatar_mini_program_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
              url: "".concat(_constants_config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, "/api/v1/avatar/result/").concat(taskId),
              method: 'GET',
              header: {
                'Authorization': "Bearer ".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token'))
              }
            });
          case 2:
            res = _context.sent;
            return _context.abrupt("return", res.data);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function getResult(_x) {
      return _getResult.apply(this, arguments);
    }
    return getResult;
  }(),
  updateParams: function () {
    var _updateParams = (0,D_code_ai_avatar_ai_avatar_mini_program_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/(0,D_code_ai_avatar_ai_avatar_mini_program_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee2(taskId, params) {
      var res;
      return (0,D_code_ai_avatar_ai_avatar_mini_program_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
              url: "".concat(_constants_config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, "/api/avatar/").concat(taskId, "/params"),
              method: 'PUT',
              data: params
            });
          case 2:
            res = _context2.sent;
            return _context2.abrupt("return", res.data);
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    function updateParams(_x2, _x3) {
      return _updateParams.apply(this, arguments);
    }
    return updateParams;
  }(),
  generate: function () {
    var _generate = (0,D_code_ai_avatar_ai_avatar_mini_program_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/(0,D_code_ai_avatar_ai_avatar_mini_program_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee3(taskId, params) {
      var res;
      return (0,D_code_ai_avatar_ai_avatar_mini_program_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
              url: "".concat(_constants_config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, "/api/avatar/").concat(taskId, "/generate"),
              method: 'POST',
              data: params
            });
          case 2:
            res = _context3.sent;
            return _context3.abrupt("return", res.data);
          case 4:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    function generate(_x4, _x5) {
      return _generate.apply(this, arguments);
    }
    return generate;
  }()
};

// 会员相关接口
var memberApi = {
  getMemberInfo: function getMemberInfo() {
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
      url: "".concat(_constants_config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, "/api/v1/members/info"),
      header: {
        'Authorization': "Bearer ".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token'))
      }
    });
  },
  subscribe: function subscribe(memberType) {
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
      url: "".concat(_constants_config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, "/api/v1/members/subscribe"),
      method: 'POST',
      data: {
        memberType: memberType
      },
      header: {
        'Authorization': "Bearer ".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token'))
      }
    });
  }
};

// 上传图片
var uploadImage = function uploadImage(filePath) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().uploadFile({
    url: "".concat(_constants_config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, "/api/v1/upload"),
    filePath: filePath,
    name: 'file',
    header: {
      'Authorization': "Bearer ".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token'))
    }
  });
};

// 更新风格
var updateStyle = function updateStyle(imageId, styleId) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
    url: "".concat(_constants_config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, "/api/v1/avatar/style"),
    method: 'POST',
    data: {
      imageId: imageId,
      styleId: styleId
    },
    header: {
      'Authorization': "Bearer ".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token'))
    }
  });
};

// 生成头像
var generateAvatar = function generateAvatar(imageId) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
    url: "".concat(_constants_config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, "/api/v1/avatar/generate"),
    method: 'POST',
    data: {
      imageId: imageId
    },
    header: {
      'Authorization': "Bearer ".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token'))
    }
  });
};

// 获取生成结果
var getAvatarResult = function getAvatarResult(taskId) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
    url: "".concat(_constants_config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, "/api/v1/avatar/result/").concat(taskId),
    method: 'GET',
    header: {
      'Authorization': "Bearer ".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token'))
    }
  });
};

/***/ }),

/***/ "./src/stores/index.ts":
/*!*****************************!*\
  !*** ./src/stores/index.ts ***!
  \*****************************/
/***/ (function() {



/***/ })

}]);
//# sourceMappingURL=common.js.map