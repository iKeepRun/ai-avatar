"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/constants/config.ts":
/*!*********************************!*\
  !*** ./src/constants/config.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BASE_URL: function() { return /* binding */ BASE_URL; }
/* harmony export */ });
/* unused harmony exports UPLOAD_URL, MEMBER_TYPES, AVATAR_STATUS */
var BASE_URL =  true ? 'http://192.168.1.12:8080' // 开发环境，使用HTTPS
: 0; // 生产环境

var UPLOAD_URL = "".concat(BASE_URL, "/api/v1/upload");
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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   avatarApi: function() { return /* binding */ avatarApi; },
/* harmony export */   generateAvatar: function() { return /* binding */ generateAvatar; },
/* harmony export */   memberApi: function() { return /* binding */ memberApi; },
/* harmony export */   uploadImage: function() { return /* binding */ uploadImage; },
/* harmony export */   userApi: function() { return /* binding */ userApi; }
/* harmony export */ });
/* unused harmony exports updateStyle, getAvatarResult */
/* harmony import */ var D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/config */ "./src/constants/config.ts");





// 用户相关接口
var userApi = {
  login: function login(data) {
    console.log('开始登录请求:', {
      url: "".concat(_constants_config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, "/api/v1/users/login"),
      data: data
    });
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
      url: "".concat(_constants_config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, "/api/v1/users/login"),
      method: 'POST',
      data: {
        code: data.code,
        avatarUrl: data.avatarUrl,
        nickName: data.nickName
      },
      timeout: 60000,
      // 增加到60秒
      enableHttp2: false,
      enableQuic: false,
      enableCache: false,
      header: {
        'Content-Type': 'application/json'
      }
    }).then(function (res) {
      console.log('登录响应:', res);
      return res;
    }).catch(function (err) {
      console.error('登录请求失败:', {
        error: err,
        errorMessage: err.errMsg,
        requestTask: err.requestTask
      });
      throw err;
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
  updateParams: function () {
    var _updateParams = (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/(0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee(taskId, params) {
      var res;
      return (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
              url: "".concat(_constants_config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, "/api/avatar/").concat(taskId, "/params"),
              method: 'PUT',
              data: params
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
    function updateParams(_x, _x2) {
      return _updateParams.apply(this, arguments);
    }
    return updateParams;
  }(),
  generate: function () {
    var _generate = (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/(0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee2(taskId, params) {
      var res;
      return (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
              url: "".concat(_constants_config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, "/api/avatar/").concat(taskId, "/generate"),
              method: 'POST',
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
    function generate(_x3, _x4) {
      return _generate.apply(this, arguments);
    }
    return generate;
  }(),
  getTaskResult: function () {
    var _getTaskResult = (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/(0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee3(taskId) {
      var res;
      return (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
              url: "".concat(_constants_config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, "/api/v1/avatars/result/").concat(taskId),
              method: 'GET',
              header: {
                'Authorization': "Bearer ".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token'))
              }
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
    function getTaskResult(_x5) {
      return _getTaskResult.apply(this, arguments);
    }
    return getTaskResult;
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
    url: "".concat(_constants_config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, "/api/v1/avatars/upload"),
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
    url: "".concat(_constants_config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, "/api/v1/avatars/style"),
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
var generateAvatar = function generateAvatar(url, styleType) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
    url: "".concat(_constants_config__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, "/api/v1/avatars/generate"),
    method: 'POST',
    header: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': "Bearer ".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token'))
    },
    data: "url=".concat(encodeURIComponent(url), "&styleType=").concat(encodeURIComponent(styleType))
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

/***/ "./src/stores/avatar.ts":
/*!******************************!*\
  !*** ./src/stores/avatar.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");




var AvatarStore = /*#__PURE__*/function () {
  function AvatarStore() {
    (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AvatarStore);
    (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "taskId", '');
    (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "originalImage", '');
    (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "previewImage", '');
    (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "currentStyle", '');
    (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "taskStatus", '');
    (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cosImageUrl", '');
    (0,mobx__WEBPACK_IMPORTED_MODULE_2__.makeAutoObservable)(this);
  }
  return (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__["default"])(AvatarStore, [{
    key: "setTaskId",
    value: function setTaskId(id) {
      this.taskId = id;
    }
  }, {
    key: "setOriginalImage",
    value: function setOriginalImage(url) {
      this.originalImage = url;
    }
  }, {
    key: "setPreviewImage",
    value: function setPreviewImage(url) {
      this.previewImage = url;
    }
  }, {
    key: "setCurrentStyle",
    value: function setCurrentStyle(style) {
      this.currentStyle = style;
    }
    // 更新任务状态
  }, {
    key: "updateTaskStatus",
    value: function updateTaskStatus(status) {
      this.taskStatus = status;
    }
  }, {
    key: "setCosImageUrl",
    value: function setCosImageUrl(url) {
      this.cosImageUrl = url;
    }
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (AvatarStore);

/***/ }),

/***/ "./src/stores/index.ts":
/*!*****************************!*\
  !*** ./src/stores/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoreContext: function() { return /* binding */ StoreContext; },
/* harmony export */   stores: function() { return /* binding */ stores; },
/* harmony export */   useStore: function() { return /* binding */ useStore; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar */ "./src/stores/avatar.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/stores/user.ts");



var stores = {
  avatarStore: new _avatar__WEBPACK_IMPORTED_MODULE_1__["default"](),
  userStore: new _user__WEBPACK_IMPORTED_MODULE_2__["default"]()
};
var StoreContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(stores);
var useStore = function useStore() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(StoreContext);
};

/***/ }),

/***/ "./src/stores/user.ts":
/*!****************************!*\
  !*** ./src/stores/user.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");




var UserStore = /*#__PURE__*/function () {
  function UserStore() {
    (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserStore);
    (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "isVip", false);
    (0,mobx__WEBPACK_IMPORTED_MODULE_2__.makeAutoObservable)(this);
  }
  return (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__["default"])(UserStore, [{
    key: "setIsVip",
    value: function setIsVip(vip) {
      this.isVip = vip;
    }
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (UserStore);

/***/ })

}]);
//# sourceMappingURL=common.js.map