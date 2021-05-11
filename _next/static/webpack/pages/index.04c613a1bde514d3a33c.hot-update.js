self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/home/TopBar.tsx":
/*!****************************************!*\
  !*** ./src/components/home/TopBar.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_alanc_Documents_Projects_portifolio3_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _topbar_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./topbar.module.scss */ "./src/components/home/topbar.module.scss");
/* harmony import */ var _topbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_topbar_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_socialMediaLinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/socialMediaLinks */ "./src/assets/socialMediaLinks.js");
/* harmony import */ var _material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/WhatsApp */ "./node_modules/@material-ui/icons/WhatsApp.js");
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ "./node_modules/@material-ui/icons/LinkedIn.js");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "./node_modules/@material-ui/icons/GitHub.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "./node_modules/@material-ui/icons/ArrowBack.js");
/* harmony import */ var _material_ui_icons_Brightness3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Brightness3 */ "./node_modules/@material-ui/icons/Brightness3.js");
/* harmony import */ var _material_ui_icons_Brightness7__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Brightness7 */ "./node_modules/@material-ui/icons/Brightness7.js");
/* harmony import */ var _utils_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/enums */ "./src/utils/enums.ts");
/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/ThemeContext */ "./src/contexts/ThemeContext.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/hooks */ "./src/utils/hooks.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\alanc\\Documents\\Projects\\portifolio3\\src\\components\\home\\TopBar.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_alanc_Documents_Projects_portifolio3_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


















var TopBar = function TopBar(_ref) {
  _s();

  var withArrowBack = _ref.withArrowBack;

  var _useCopyToClipboard = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_7__.useCopyToClipboard)(),
      copyToClipboard = _useCopyToClipboard.copyToClipboard,
      CopiedToast = _useCopyToClipboard.CopiedToast;

  var _useLanguage = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_7__.useLanguage)(),
      setCurrentLanguage = _useLanguage.setCurrentLanguage,
      currentLanguage = _useLanguage.currentLanguage,
      languageOptions = _useLanguage.languageOptions;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)(),
      t = _useTranslation.t;

  var _useThemeContext = (0,_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_6__.useThemeContext)(),
      toggleTheme = _useThemeContext.toggleTheme,
      theme = _useThemeContext.theme;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "".concat((_topbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().topBarRoot), " ").concat(theme === _utils_enums__WEBPACK_IMPORTED_MODULE_5__.Themes.DARK ? (_topbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().dark) : ""),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/",
        children: withArrowBack ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_10__.default, {
          className: (_topbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().arrowBack)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 23
        }, _this) : ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_topbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().topBarMenuOptions),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_topbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().darkMode),
          onClick: toggleTheme,
          children: theme === _utils_enums__WEBPACK_IMPORTED_MODULE_5__.Themes.DARK ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Brightness7__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 87
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Brightness3__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 109
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_select__WEBPACK_IMPORTED_MODULE_13__.default, {
          options: languageOptions,
          value: currentLanguage,
          onChange: function onChange(selectedOption) {
            return setCurrentLanguage(selectedOption);
          },
          isSearchable: false,
          styles: {
            control: function control(provided, state) {
              return _objectSpread(_objectSpread({}, provided), {}, {
                color: "white",
                backgroundColor: "none"
              });
            },
            singleValue: function singleValue(provided, state) {
              return _objectSpread(_objectSpread({}, provided), {}, {
                color: theme === _utils_enums__WEBPACK_IMPORTED_MODULE_5__.Themes.DARK ? "white" : "black"
              });
            },
            option: function option(provided, state) {
              return _objectSpread(_objectSpread({}, provided), {}, {
                color: "black"
              });
            }
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_14__.default, {
          onClick: function onClick() {
            return window.open(_assets_socialMediaLinks__WEBPACK_IMPORTED_MODULE_4__.default.whatsApp, "_blanck");
          },
          className: (_topbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().topBarIcon) + " " + (_topbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().wppIcon)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_15__.default, {
          onClick: function onClick() {
            return window.open(_assets_socialMediaLinks__WEBPACK_IMPORTED_MODULE_4__.default.linkedIn, "_blanck");
          },
          className: (_topbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().topBarIcon) + " " + (_topbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().linkedInIcon)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_16__.default, {
          onClick: function onClick() {
            return window.open(_assets_socialMediaLinks__WEBPACK_IMPORTED_MODULE_4__.default.gitHub, "_blanck");
          },
          className: (_topbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().topBarIcon) + " " + (_topbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().githubIcon)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_17__.default, {
          onClick: function onClick() {
            return copyToClipboard(t("emailCopied"), _assets_socialMediaLinks__WEBPACK_IMPORTED_MODULE_4__.default.email);
          },
          className: (_topbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default().topBarIcon)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CopiedToast, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_s(TopBar, "TW8v09JWhONJBWZ1o3v/2S8kZ9A=", false, function () {
  return [_utils_hooks__WEBPACK_IMPORTED_MODULE_7__.useCopyToClipboard, _utils_hooks__WEBPACK_IMPORTED_MODULE_7__.useLanguage, react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation, _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_6__.useThemeContext];
});

_c = TopBar;
/* harmony default export */ __webpack_exports__["default"] = (TopBar);

var _c;

$RefreshReg$(_c, "TopBar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9Ub3BCYXIudHN4Il0sIm5hbWVzIjpbIlRvcEJhciIsIndpdGhBcnJvd0JhY2siLCJ1c2VDb3B5VG9DbGlwYm9hcmQiLCJjb3B5VG9DbGlwYm9hcmQiLCJDb3BpZWRUb2FzdCIsInVzZUxhbmd1YWdlIiwic2V0Q3VycmVudExhbmd1YWdlIiwiY3VycmVudExhbmd1YWdlIiwibGFuZ3VhZ2VPcHRpb25zIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwidXNlVGhlbWVDb250ZXh0IiwidG9nZ2xlVGhlbWUiLCJ0aGVtZSIsInN0eWxlcyIsIlRoZW1lcyIsImFycm93QmFjayIsInNlbGVjdGVkT3B0aW9uIiwiY29udHJvbCIsInByb3ZpZGVkIiwic3RhdGUiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsInNpbmdsZVZhbHVlIiwib3B0aW9uIiwid2luZG93Iiwib3BlbiIsIlNPQ0lBTF9NRURJQV9MSU5LUyIsIndwcEljb24iLCJsaW5rZWRJbkljb24iLCJnaXRodWJJY29uIiwidG9wQmFySWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBTUEsSUFBTUEsTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0MsT0FBdUI7QUFBQTs7QUFBQSxNQUFwQkMsYUFBb0IsUUFBcEJBLGFBQW9COztBQUFBLDRCQUt4REMsZ0VBQWtCLEVBTHNDO0FBQUEsTUFHM0RDLGVBSDJELHVCQUczREEsZUFIMkQ7QUFBQSxNQUkzREMsV0FKMkQsdUJBSTNEQSxXQUoyRDs7QUFBQSxxQkFXeERDLHlEQUFXLEVBWDZDO0FBQUEsTUFRM0RDLGtCQVIyRCxnQkFRM0RBLGtCQVIyRDtBQUFBLE1BUzNEQyxlQVQyRCxnQkFTM0RB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QUFBVSxpQkFBTyxFQUFFO0FBQUEsbUJBQU0zQixlQUFlLENBQUNPLENBQUMsQ0FBQyxhQUFELENBQUYsRUFBbUJpQixtRUFBbkIsQ0FBckI7QUFBQSxXQUFuQjtBQUFzRixtQkFBUyxFQUFFYix1RUFBaUJpQjtBQUFsSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQWtDQyw4REFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQ0Q7QUFBQSxrQkFERDtBQXNDQSxDQXZERDs7R0FBTS9CLE07VUFLREUsNEQsRUFNQUcscUQsRUFFVUkseUQsRUFFaUJFLG1FOzs7S0FmMUJYLE07QUF5RE4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDRjNjEzYTFiZGU1MTRkM2EzM2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3RvcGJhci5tb2R1bGUuc2Nzc1wiO1xuXG5pbXBvcnQgU09DSUFMX01FRElBX0xJTktTIGZyb20gXCIuLi8uLi9hc3NldHMvc29jaWFsTWVkaWFMaW5rc1wiO1xuXG5pbXBvcnQgV2hhdHNBcHBMb2dvIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvV2hhdHNBcHBcIjtcbmltcG9ydCBMaW5rZWRJbkxvZ28gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9MaW5rZWRJblwiO1xuaW1wb3J0IEdpdGh1YkxvZ28gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9HaXRIdWJcIjtcbmltcG9ydCBNYWlsTG9nbyBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01haWxcIjtcbmltcG9ydCBBcnJvd0JhY2tJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrXCI7XG5pbXBvcnQgQnJpZ2h0bmVzczNJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQnJpZ2h0bmVzczNcIjtcbmltcG9ydCBCcmlnaHRuZXNzN0ljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9CcmlnaHRuZXNzN1wiO1xuXG5pbXBvcnQgeyBUaGVtZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZW51bXNcIjtcbmltcG9ydCB7IHVzZVRoZW1lQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9UaGVtZUNvbnRleHRcIjtcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcblxuaW1wb3J0IHsgdXNlQ29weVRvQ2xpcGJvYXJkLCB1c2VMYW5ndWFnZSB9IGZyb20gXCIuLi8uLi91dGlscy9ob29rc1wiO1xuXG50eXBlIFRvcEJhclByb3BzID0ge1xuXHR3aXRoQXJyb3dCYWNrOiBib29sZWFuXG59XG5cbmNvbnN0IFRvcEJhcjogUmVhY3QuRkM8VG9wQmFyUHJvcHM+ID0gKHsgd2l0aEFycm93QmFjayB9KSA9PiB7XG5cblx0Y29uc3Qge1xuXHRcdGNvcHlUb0NsaXBib2FyZCxcblx0XHRDb3BpZWRUb2FzdFxuXHR9ID0gdXNlQ29weVRvQ2xpcGJvYXJkKCk7XG5cblx0Y29uc3Qge1xuXHRcdHNldEN1cnJlbnRMYW5ndWFnZSxcblx0XHRjdXJyZW50TGFuZ3VhZ2UsXG5cdFx0bGFuZ3VhZ2VPcHRpb25zXG5cdH0gPSB1c2VMYW5ndWFnZSgpO1xuXG5cdGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuXHRjb25zdCB7IHRvZ2dsZVRoZW1lLCB0aGVtZSB9ID0gdXNlVGhlbWVDb250ZXh0KCk7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy50b3BCYXJSb290fSAke3RoZW1lID09PSBUaGVtZXMuREFSSyA/IHN0eWxlcy5kYXJrIDogXCJcIn1gfT5cblx0XHRcdFx0PExpbmsgaHJlZj17XCIvXCJ9PlxuXHRcdFx0XHRcdHt3aXRoQXJyb3dCYWNrID8gPEFycm93QmFja0ljb24gY2xhc3NOYW1lPXtzdHlsZXMuYXJyb3dCYWNrfSAvPiA6IFwiXCJ9XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3BCYXJNZW51T3B0aW9uc30+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGFya01vZGV9IG9uQ2xpY2s9e3RvZ2dsZVRoZW1lfT57dGhlbWUgPT09IFRoZW1lcy5EQVJLID8gPEJyaWdodG5lc3M3SWNvbiAvPiA6IDxCcmlnaHRuZXNzM0ljb24gLz59PC9zcGFuPlxuXHRcdFx0XHRcdDxTZWxlY3Rcblx0XHRcdFx0XHRcdG9wdGlvbnM9e2xhbmd1YWdlT3B0aW9uc31cblx0XHRcdFx0XHRcdHZhbHVlPXtjdXJyZW50TGFuZ3VhZ2V9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHNlbGVjdGVkT3B0aW9uKSA9PiBzZXRDdXJyZW50TGFuZ3VhZ2Uoc2VsZWN0ZWRPcHRpb24pfVxuXHRcdFx0XHRcdFx0aXNTZWFyY2hhYmxlPXtmYWxzZX1cblx0XHRcdFx0XHRcdHN0eWxlcz17e1xuXHRcdFx0XHRcdFx0XHRjb250cm9sOiAocHJvdmlkZWQsIHN0YXRlKSA9PiAoe1xuXHRcdFx0XHRcdFx0XHRcdC4uLnByb3ZpZGVkLFxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIm5vbmVcIlxuXHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0c2luZ2xlVmFsdWU6IChwcm92aWRlZCwgc3RhdGUpID0+ICh7XG5cdFx0XHRcdFx0XHRcdFx0Li4ucHJvdmlkZWQsXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHRoZW1lID09PSBUaGVtZXMuREFSSyA/IFwid2hpdGVcIiA6IFwiYmxhY2tcIlxuXHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0b3B0aW9uOiAocHJvdmlkZWQsIHN0YXRlKSA9PiAoe1xuXHRcdFx0XHRcdFx0XHRcdC4uLnByb3ZpZGVkLFxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiBcImJsYWNrXCJcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8V2hhdHNBcHBMb2dvIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKFNPQ0lBTF9NRURJQV9MSU5LUy53aGF0c0FwcCwgXCJfYmxhbmNrXCIpfSBjbGFzc05hbWU9e3N0eWxlcy50b3BCYXJJY29uICsgXCIgXCIgKyBzdHlsZXMud3BwSWNvbn0gLz5cblx0XHRcdFx0XHQ8TGlua2VkSW5Mb2dvIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKFNPQ0lBTF9NRURJQV9MSU5LUy5saW5rZWRJbiwgXCJfYmxhbmNrXCIpfSBjbGFzc05hbWU9e3N0eWxlcy50b3BCYXJJY29uICsgXCIgXCIgKyBzdHlsZXMubGlua2VkSW5JY29ufSAvPlxuXHRcdFx0XHRcdDxHaXRodWJMb2dvIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKFNPQ0lBTF9NRURJQV9MSU5LUy5naXRIdWIsIFwiX2JsYW5ja1wiKX0gY2xhc3NOYW1lPXtzdHlsZXMudG9wQmFySWNvbiArIFwiIFwiICsgc3R5bGVzLmdpdGh1Ykljb259IC8+XG5cdFx0XHRcdFx0PE1haWxMb2dvIG9uQ2xpY2s9eygpID0+IGNvcHlUb0NsaXBib2FyZCh0KFwiZW1haWxDb3BpZWRcIiksIFNPQ0lBTF9NRURJQV9MSU5LUy5lbWFpbCl9IGNsYXNzTmFtZT17c3R5bGVzLnRvcEJhckljb259IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8Q29waWVkVG9hc3QgLz5cblx0XHQ8Lz5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvcEJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=