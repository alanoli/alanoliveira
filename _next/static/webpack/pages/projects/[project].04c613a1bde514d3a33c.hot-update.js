self["webpackHotUpdate_N_E"]("pages/projects/[project]",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9Ub3BCYXIudHN4Il0sIm5hbWVzIjpbIlRvcEJhciIsIndpdGhBcnJvd0JhY2siLCJ1c2VDb3B5VG9DbGlwYm9hcmQiLCJjb3B5VG9DbGlwYm9hcmQiLCJDb3BpZWRUb2FzdCIsInVzZUxhbmd1YWdlIiwic2V0Q3VycmVudExhbmd1YWdlIiwiY3VycmVudExhbmd1YWdlIiwibGFuZ3VhZ2VPcHRpb25zIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwidXNlVGhlbWVDb250ZXh0IiwidG9nZ2xlVGhlbWUiLCJ0aGVtZSIsInN0eWxlcyIsIlRoZW1lcyIsImFycm93QmFjayIsInNlbGVjdGVkT3B0aW9uIiwiY29udHJvbCIsInByb3ZpZGVkIiwic3RhdGUiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsInNpbmdsZVZhbHVlIiwib3B0aW9uIiwid2luZG93Iiwib3BlbiIsIlNPQ0lBTF9NRURJQV9MSU5LUyIsIndwcEljb24iLCJsaW5rZWRJbkljb24iLCJnaXRodWJJY29uIiwidG9wQmFySWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBTUEsSUFBTUEsTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0MsT0FBdUI7QUFBQTs7QUFBQSxNQUFwQkMsYUFBb0IsUUFBcEJBLGFBQW9COztBQUFBLDRCQUt4REMsZ0VBQWtCLEVBTHNDO0FBQUEsTUFHM0RDLGVBSDJELHVCQUczREEsZUFIMkQ7QUFBQSxNQUkzREMsV0FKMkQsdUJBSTNEQSxXQUoyRDs7QUFBQSxxQkFXeERDLHlEQUFXLEVBWDZDO0FBQUEsTUFRM0RDLGtCQVIyRCxnQkFRM0RBLGtCQVIyRDtBQUFBLE1BUzNEQyxlQVQyRCxnQkFTM0RB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QUFBVSxpQkFBTyxFQUFFO0FBQUEsbUJBQU0zQixlQUFlLENBQUNPLENBQUMsQ0FBQyxhQUFELENBQUYsRUFBbUJpQixtRUFBbkIsQ0FBckI7QUFBQSxXQUFuQjtBQUFzRixtQkFBUyxFQUFFYix1RUFBaUJpQjtBQUFsSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQWtDQyw4REFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQ0Q7QUFBQSxrQkFERDtBQXNDQSxDQXZERDs7R0FBTS9CLE07VUFLREUsNEQsRUFNQUcscUQsRUFFVUkseUQsRUFFaUJFLG1FOzs7S0FmMUJYLE07QUF5RE4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMvW3Byb2plY3RdLjA0YzYxM2ExYmRlNTE0ZDNhMzNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi90b3BiYXIubW9kdWxlLnNjc3NcIjtcblxuaW1wb3J0IFNPQ0lBTF9NRURJQV9MSU5LUyBmcm9tIFwiLi4vLi4vYXNzZXRzL3NvY2lhbE1lZGlhTGlua3NcIjtcblxuaW1wb3J0IFdoYXRzQXBwTG9nbyBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1doYXRzQXBwXCI7XG5pbXBvcnQgTGlua2VkSW5Mb2dvIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlua2VkSW5cIjtcbmltcG9ydCBHaXRodWJMb2dvIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvR2l0SHViXCI7XG5pbXBvcnQgTWFpbExvZ28gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NYWlsXCI7XG5pbXBvcnQgQXJyb3dCYWNrSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93QmFja1wiO1xuaW1wb3J0IEJyaWdodG5lc3MzSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0JyaWdodG5lc3MzXCI7XG5pbXBvcnQgQnJpZ2h0bmVzczdJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQnJpZ2h0bmVzczdcIjtcblxuaW1wb3J0IHsgVGhlbWVzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2VudW1zXCI7XG5pbXBvcnQgeyB1c2VUaGVtZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvVGhlbWVDb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5cbmltcG9ydCB7IHVzZUNvcHlUb0NsaXBib2FyZCwgdXNlTGFuZ3VhZ2UgfSBmcm9tIFwiLi4vLi4vdXRpbHMvaG9va3NcIjtcblxudHlwZSBUb3BCYXJQcm9wcyA9IHtcblx0d2l0aEFycm93QmFjazogYm9vbGVhblxufVxuXG5jb25zdCBUb3BCYXI6IFJlYWN0LkZDPFRvcEJhclByb3BzPiA9ICh7IHdpdGhBcnJvd0JhY2sgfSkgPT4ge1xuXG5cdGNvbnN0IHtcblx0XHRjb3B5VG9DbGlwYm9hcmQsXG5cdFx0Q29waWVkVG9hc3Rcblx0fSA9IHVzZUNvcHlUb0NsaXBib2FyZCgpO1xuXG5cdGNvbnN0IHtcblx0XHRzZXRDdXJyZW50TGFuZ3VhZ2UsXG5cdFx0Y3VycmVudExhbmd1YWdlLFxuXHRcdGxhbmd1YWdlT3B0aW9uc1xuXHR9ID0gdXNlTGFuZ3VhZ2UoKTtcblxuXHRjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cblx0Y29uc3QgeyB0b2dnbGVUaGVtZSwgdGhlbWUgfSA9IHVzZVRoZW1lQ29udGV4dCgpO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMudG9wQmFyUm9vdH0gJHt0aGVtZSA9PT0gVGhlbWVzLkRBUksgPyBzdHlsZXMuZGFyayA6IFwiXCJ9YH0+XG5cdFx0XHRcdDxMaW5rIGhyZWY9e1wiL1wifT5cblx0XHRcdFx0XHR7d2l0aEFycm93QmFjayA/IDxBcnJvd0JhY2tJY29uIGNsYXNzTmFtZT17c3R5bGVzLmFycm93QmFja30gLz4gOiBcIlwifVxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wQmFyTWVudU9wdGlvbnN9PlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmtNb2RlfSBvbkNsaWNrPXt0b2dnbGVUaGVtZX0+e3RoZW1lID09PSBUaGVtZXMuREFSSyA/IDxCcmlnaHRuZXNzN0ljb24gLz4gOiA8QnJpZ2h0bmVzczNJY29uIC8+fTwvc3Bhbj5cblx0XHRcdFx0XHQ8U2VsZWN0XG5cdFx0XHRcdFx0XHRvcHRpb25zPXtsYW5ndWFnZU9wdGlvbnN9XG5cdFx0XHRcdFx0XHR2YWx1ZT17Y3VycmVudExhbmd1YWdlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhzZWxlY3RlZE9wdGlvbikgPT4gc2V0Q3VycmVudExhbmd1YWdlKHNlbGVjdGVkT3B0aW9uKX1cblx0XHRcdFx0XHRcdGlzU2VhcmNoYWJsZT17ZmFsc2V9XG5cdFx0XHRcdFx0XHRzdHlsZXM9e3tcblx0XHRcdFx0XHRcdFx0Y29udHJvbDogKHByb3ZpZGVkLCBzdGF0ZSkgPT4gKHtcblx0XHRcdFx0XHRcdFx0XHQuLi5wcm92aWRlZCxcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJub25lXCJcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdHNpbmdsZVZhbHVlOiAocHJvdmlkZWQsIHN0YXRlKSA9PiAoe1xuXHRcdFx0XHRcdFx0XHRcdC4uLnByb3ZpZGVkLFxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB0aGVtZSA9PT0gVGhlbWVzLkRBUksgPyBcIndoaXRlXCIgOiBcImJsYWNrXCJcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdG9wdGlvbjogKHByb3ZpZGVkLCBzdGF0ZSkgPT4gKHtcblx0XHRcdFx0XHRcdFx0XHQuLi5wcm92aWRlZCxcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogXCJibGFja1wiXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFdoYXRzQXBwTG9nbyBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbihTT0NJQUxfTUVESUFfTElOS1Mud2hhdHNBcHAsIFwiX2JsYW5ja1wiKX0gY2xhc3NOYW1lPXtzdHlsZXMudG9wQmFySWNvbiArIFwiIFwiICsgc3R5bGVzLndwcEljb259IC8+XG5cdFx0XHRcdFx0PExpbmtlZEluTG9nbyBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbihTT0NJQUxfTUVESUFfTElOS1MubGlua2VkSW4sIFwiX2JsYW5ja1wiKX0gY2xhc3NOYW1lPXtzdHlsZXMudG9wQmFySWNvbiArIFwiIFwiICsgc3R5bGVzLmxpbmtlZEluSWNvbn0gLz5cblx0XHRcdFx0XHQ8R2l0aHViTG9nbyBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbihTT0NJQUxfTUVESUFfTElOS1MuZ2l0SHViLCBcIl9ibGFuY2tcIil9IGNsYXNzTmFtZT17c3R5bGVzLnRvcEJhckljb24gKyBcIiBcIiArIHN0eWxlcy5naXRodWJJY29ufSAvPlxuXHRcdFx0XHRcdDxNYWlsTG9nbyBvbkNsaWNrPXsoKSA9PiBjb3B5VG9DbGlwYm9hcmQodChcImVtYWlsQ29waWVkXCIpLCBTT0NJQUxfTUVESUFfTElOS1MuZW1haWwpfSBjbGFzc05hbWU9e3N0eWxlcy50b3BCYXJJY29ufSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PENvcGllZFRvYXN0IC8+XG5cdFx0PC8+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb3BCYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9