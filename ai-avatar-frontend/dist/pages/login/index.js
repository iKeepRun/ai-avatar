"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/login/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/login/index!./src/pages/login/index.tsx":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/login/index!./src/pages/login/index.tsx ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Login; }
/* harmony export */ });
/* harmony import */ var D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api */ "./src/services/api.ts");
/* harmony import */ var _components_PrivacyPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/PrivacyPopup */ "./src/components/PrivacyPopup/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");










function Login() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState2 = (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Set()),
    _useState4 = (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState3, 2),
    privacyResolves = _useState4[0],
    setPrivacyResolves = _useState4[1];
  // 隐私弹窗显示控制
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState6 = (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState5, 2),
    privacyVisible = _useState6[0],
    setPrivacyVisible = _useState6[1];
  // 添加一个标志表示用户是否同意了隐私授权
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState8 = (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState7, 2),
    privacyAgreed = _useState8[0],
    setPrivacyAgreed = _useState8[1];

  // 初始化隐私监听（兼容旧版Taro）
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().onNeedPrivacyAuthorization(function (resolve) {
      privacyResolves.add(resolve);
      setPrivacyVisible(true);
    });
  }, []);

  // 处理隐私授权同意
  var handlePrivacyAgree = /*#__PURE__*/function () {
    var _ref = (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])(/*#__PURE__*/(0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee() {
      return (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            console.log('用户同意隐私授权');
            _context.prev = 1;
            setLoading(true);

            // 调用微信的隐私授权API
            _context.next = 5;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().requirePrivacyAuthorize();
          case 5:
            // 更新UI状态
            setPrivacyVisible(false);
            setPrivacyAgreed(true);

            // 保存隐私授权状态
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('privacyAgreed', true);
            _context.next = 15;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            console.error('隐私授权失败:', _context.t0);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
              title: '隐私授权失败，请重试',
              icon: 'none'
            });
            // 重置状态
            setPrivacyAgreed(false);
          case 15:
            _context.prev = 15;
            setLoading(false);
            return _context.finish(15);
          case 18:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 10, 15, 18]]);
    }));
    return function handlePrivacyAgree() {
      return _ref.apply(this, arguments);
    };
  }();

  // 处理获取用户信息和登录
  var handleGetUserInfo = /*#__PURE__*/function () {
    var _ref2 = (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])(/*#__PURE__*/(0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee2(e) {
      var _yield$Taro$login, code, res;
      return (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            console.log('获取用户信息', e);
            if (privacyAgreed) {
              _context2.next = 5;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
              title: '请先同意隐私授权',
              icon: 'none'
            });
            console.log('return return 1');
            return _context2.abrupt("return");
          case 5:
            if (!(!e || !e.detail || !e.detail.userInfo)) {
              _context2.next = 10;
              break;
            }
            console.log('用户拒绝授权获取用户信息');
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
              title: '需要授权获取用户信息才能继续',
              icon: 'none'
            });
            console.log('return return2 ');
            return _context2.abrupt("return");
          case 10:
            _context2.prev = 10;
            setLoading(true);
            // 保存用户信息
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('userInfo', e.detail.userInfo);

            // 获取微信登录code
            _context2.next = 15;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().login();
          case 15:
            _yield$Taro$login = _context2.sent;
            code = _yield$Taro$login.code;
            console.log('code', code);
            if (code) {
              _context2.next = 20;
              break;
            }
            throw new Error('获取登录code失败');
          case 20:
            _context2.next = 22;
            return _services_api__WEBPACK_IMPORTED_MODULE_2__.userApi.login({
              code: code,
              avatarUrl: e.detail.userInfo.avatarUrl,
              nickName: e.detail.userInfo.nickName
            });
          case 22:
            res = _context2.sent;
            if (!(res.data.code !== 200)) {
              _context2.next = 25;
              break;
            }
            throw new Error(res.data.msg || '登录失败');
          case 25:
            // 保存token
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('token', res.data.data);

            // 返回首页
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().switchTab({
              url: '/pages/index/index'
            });
            _context2.next = 33;
            break;
          case 29:
            _context2.prev = 29;
            _context2.t0 = _context2["catch"](10);
            console.error('登录流程失败:', _context2.t0);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
              title: _context2.t0.message || '登录失败，请重试',
              icon: 'none'
            });
          case 33:
            _context2.prev = 33;
            setLoading(false);
            return _context2.finish(33);
          case 36:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[10, 29, 33, 36]]);
    }));
    return function handleGetUserInfo(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleLogin = /*#__PURE__*/function () {
    var _ref3 = (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])(/*#__PURE__*/(0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee3() {
      return (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!loading) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
          case 2:
            if (!privacyAgreed) {
              _context3.next = 4;
              break;
            }
            return _context3.abrupt("return");
          case 4:
            try {
              setLoading(true);
              // 显示隐私弹窗
              setPrivacyVisible(true);
              setPrivacyAgreed(false);
            } catch (err) {
              console.error('显示隐私弹窗失败:', err);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
                title: '系统错误，请重试',
                icon: 'none'
              });
            } finally {
              setLoading(false);
            }
          case 5:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function handleLogin() {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleDisagree = function handleDisagree() {
    setPrivacyVisible(false);
    setPrivacyAgreed(false);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
      title: '需要同意隐私授权才能继续',
      icon: 'none'
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_PrivacyPopup__WEBPACK_IMPORTED_MODULE_3__["default"], {
      visible: privacyVisible,
      onAgree: handlePrivacyAgree,
      onDisagree: handleDisagree
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      className: "login-page",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Image, {
          className: "logo",
          src: "../../assets/images/logo.png"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: "title",
          children: "AI\u5934\u50CF\u751F\u6210\u5668"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: "subtitle",
          children: "\u4E00\u952E\u751F\u6210\u4F60\u7684\u4E13\u5C5E\u5934\u50CF"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "content",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Button, {
          className: "login-button",
          loading: loading,
          onClick: handleLogin,
          openType: "getUserInfo",
          onGetUserInfo: handleGetUserInfo,
          children: "\u5FAE\u4FE1\u4E00\u952E\u767B\u5F55"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "footer",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: "tips",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: "tip-item",
            children: "\u767B\u5F55\u540E\u5373\u53EF\u4F7F\u7528\u5B8C\u6574\u529F\u80FD"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: "tip-item",
            children: "\u6211\u4EEC\u627F\u8BFA\u4FDD\u62A4\u60A8\u7684\u9690\u79C1\u5B89\u5168"
          })]
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./src/components/PrivacyPopup/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/PrivacyPopup/index.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PrivacyPopup; }
/* harmony export */ });
/* harmony import */ var D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");









var privacyHandler;
var privacyResolves = new Set();

// PrivacyPopup.tsx

if ((_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default()) !== null && (_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default()) !== void 0 && (_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().onNeedPrivacyAuthorization)) {
  (_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default()) === null || (_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default()) === void 0 || _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().onNeedPrivacyAuthorization(function (resolve) {
    var _privacyHandler;
    (_privacyHandler = privacyHandler) === null || _privacyHandler === void 0 || _privacyHandler(resolve);
  });
}
function PrivacyPopup(props) {
  console.log("ppppppp", props);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.visible),
    _useState2 = (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];

  // 当props.visible变化时更新本地状态
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setVisible(props.visible);
  }, [props.visible]);
  var handleDisagree = function handleDisagree() {
    setVisible(false);
    privacyResolves.forEach(function (resolve) {
      resolve({
        event: 'disagree'
      });
    });
    privacyResolves.clear();
    // 调用父组件的onDisagree回调
    if (props.onDisagree) {
      props.onDisagree();
    }
  };
  var handleAgree = /*#__PURE__*/function () {
    var _ref = (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(/*#__PURE__*/(0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee() {
      return (0,D_code_ai_avatar_ai_avatar_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            console.log('PrivacyPopup: 用户点击同意按钮');
            _context.prev = 1;
            _context.next = 4;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().requirePrivacyAuthorize();
          case 4:
            // 处理所有等待中的隐私授权请求
            privacyResolves.forEach(function (resolve) {
              resolve({
                event: 'agree',
                buttonId: 'agree-btn'
              });
            });
            privacyResolves.clear();

            // 更新UI状态
            setVisible(false);

            // 调用父组件的onAgree回调
            if (props.onAgree) {
              console.log('PrivacyPopup: 调用父组件的onAgree回调');
              props.onAgree();
            }
            _context.next = 14;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            console.error('隐私授权失败:', _context.t0);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '隐私授权失败，请重试',
              icon: 'none'
            });
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 10]]);
    }));
    return function handleAgree() {
      return _ref.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    privacyHandler = function privacyHandler(resolve) {
      privacyResolves.add(resolve);
      setVisible(true);
    };
  }, []);

  // useDidShow还需要调用的原因：比如当前页面需要隐私弹窗，但未触发弹出，允许用户点有些按钮跳转去其他需要隐私弹窗的页面。用户再回退当前页面，此时privacyHandler要重新设置成当前页面的弹窗
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useDidShow)(function () {
    privacyHandler = function privacyHandler(resolve) {
      privacyResolves.add(resolve);
      setVisible(true);
    };
  });
  var openPrivacyContract = function openPrivacyContract() {
    (_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default()) === null || (_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default()) === void 0 || _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().openPrivacyContract({
      success: function success() {
        console.log('openPrivacyContract success');
      },
      fail: function fail(res) {
        console.error('openPrivacyContract fail', res);
      }
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
    className: "pp-container",
    children: [visible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
      className: "pp-mask"
    }), visible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
      className: "pp-wrap",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: "pp-head",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "pp-head-title",
          children: "\u7528\u6237\u9690\u79C1\u4FDD\u62A4\u63D0\u793A"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: "pp-content",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "privacy-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: "privacy-title",
            children: "\u9690\u79C1\u4FDD\u62A4\u6307\u5F15"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: "privacy-text",
            children: "\u611F\u8C22\u60A8\u4F7F\u7528\u6211\u4EEC\u7684\u670D\u52A1\u3002\u4E3A\u4E86\u66F4\u597D\u5730\u4FDD\u62A4\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u8BF7\u60A8\u4ED4\u7EC6\u9605\u8BFB\u4EE5\u4E0B\u5185\u5BB9\uFF1A"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: "privacy-text",
            children: "1. \u6211\u4EEC\u53EF\u80FD\u4F1A\u6536\u96C6\u60A8\u7684\u4EE5\u4E0B\u4FE1\u606F\uFF1A - \u5FAE\u4FE1\u5934\u50CF\u548C\u6635\u79F0 - \u76F8\u518C\u4E2D\u7684\u56FE\u7247\uFF08\u7528\u4E8E\u5934\u50CF\u751F\u6210\uFF09 - \u8BBE\u5907\u4FE1\u606F"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: "privacy-text",
            children: "2. \u6211\u4EEC\u627F\u8BFA\uFF1A - \u4EC5\u5C06\u60A8\u7684\u4FE1\u606F\u7528\u4E8E\u63D0\u4F9B\u670D\u52A1 - \u4E0D\u4F1A\u5C06\u60A8\u7684\u4FE1\u606F\u7528\u4E8E\u5176\u4ED6\u7528\u9014 - \u91C7\u53D6\u4E25\u683C\u7684\u5B89\u5168\u63AA\u65BD\u4FDD\u62A4\u60A8\u7684\u4FE1\u606F"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: "privacy-text",
            children: "3. \u60A8\u9700\u8981\u6388\u6743\uFF1A - \u83B7\u53D6\u7528\u6237\u4FE1\u606F\uFF08\u5934\u50CF\u3001\u6635\u79F0\uFF09 - \u8BBF\u95EE\u76F8\u518C\uFF08\u7528\u4E8E\u9009\u62E9\u5934\u50CF\u56FE\u7247\uFF09"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: "privacy-text",
            children: "4. \u6743\u9650\u8BF4\u660E\uFF1A - \u76F8\u518C\u6743\u9650\uFF1A\u7528\u4E8E\u9009\u62E9\u5934\u50CF\u56FE\u7247 - \u76F8\u673A\u6743\u9650\uFF1A\u7528\u4E8E\u62CD\u6444\u5934\u50CF\u56FE\u7247 - \u5B58\u50A8\u6743\u9650\uFF1A\u7528\u4E8E\u4FDD\u5B58\u751F\u6210\u7684\u5934\u50CF"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: "privacy-text",
            children: "5. \u9690\u79C1\u534F\u8BAE\uFF1A \u6211\u4EEC\u4E25\u683C\u9075\u5B88\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684\u9690\u79C1\u534F\u8BAE\u8981\u6C42\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A - \u660E\u786E\u544A\u77E5\u7528\u6237\u6536\u96C6\u7684\u4FE1\u606F\u7C7B\u578B\u548C\u7528\u9014 - \u83B7\u53D6\u7528\u6237\u660E\u786E\u6388\u6743 - \u4FDD\u62A4\u7528\u6237\u6570\u636E\u5B89\u5168 - \u9075\u5B88\u76F8\u5173\u6CD5\u5F8B\u6CD5\u89C4"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: "privacy-text",
            children: "\u5982\u60A8\u540C\u610F\u4EE5\u4E0A\u5185\u5BB9\uFF0C\u8BF7\u70B9\u51FB\"\u540C\u610F\"\u7EE7\u7EED\u4F7F\u7528\u6211\u4EEC\u7684\u670D\u52A1\u3002"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: "pp-footer",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          id: "disagree-btn",
          className: "pp-btn pp-btn_refuse",
          onClick: handleDisagree,
          children: "\u62D2\u7EDD"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
          id: "agree-btn",
          className: "pp-btn",
          onClick: handleAgree,
          children: "\u540C\u610F"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: "pp-safearea"
      })]
    })]
  });
}
;

/***/ }),

/***/ "./src/pages/login/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/login/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_login_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/login/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/login/index!./src/pages/login/index.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_login_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/login/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_login_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/login/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map