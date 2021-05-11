self["webpackHotUpdate_N_E"]("pages/projects/[project]",{

/***/ "./src/pages/projects/[project].tsx":
/*!******************************************!*\
  !*** ./src/pages/projects/[project].tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_home_TopBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home/TopBar */ "./src/components/home/TopBar.tsx");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "./node_modules/@material-ui/icons/GitHub.js");
/* harmony import */ var _material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Link */ "./node_modules/@material-ui/icons/Link.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/ThemeContext */ "./src/contexts/ThemeContext.tsx");
/* harmony import */ var _utils_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/enums */ "./src/utils/enums.ts");
/* harmony import */ var _project_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project.module.scss */ "./src/pages/projects/project.module.scss");
/* harmony import */ var _project_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_project_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\alanc\\Documents\\Projects\\portifolio3\\src\\pages\\projects\\[project].tsx",
    _this = undefined,
    _s = $RefreshSig$();











var ProjectPage = function ProjectPage(_ref) {
  _s();

  var title = _ref.title,
      description = _ref.description,
      techList = _ref.techList,
      projectGif = _ref.projectGif,
      sourceCodeUrl = _ref.sourceCodeUrl,
      linkUrl = _ref.linkUrl;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)(),
      t = _useTranslation.t;

  var _useThemeContext = (0,_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.useThemeContext)(),
      theme = _useThemeContext.theme;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Alan Oli | ".concat(title)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: "".concat((_project_module_scss__WEBPACK_IMPORTED_MODULE_7___default().projectPageRoot), " ").concat(theme === _utils_enums__WEBPACK_IMPORTED_MODULE_5__.Themes.DARK ? (_project_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dark) : ""),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_TopBar__WEBPACK_IMPORTED_MODULE_3__.default, {
        withArrowBack: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_project_module_scss__WEBPACK_IMPORTED_MODULE_7___default().projectDetails),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
          className: (_project_module_scss__WEBPACK_IMPORTED_MODULE_7___default().gifContainer),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: projectGif,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
          className: (_project_module_scss__WEBPACK_IMPORTED_MODULE_7___default().descriptionContainer),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: t(description)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: techList.map(function (item, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: item
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 10
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: function onClick() {
                return window.open(sourceCodeUrl, "_blank");
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 69
              }, _this), t("sourceCode")]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 8
            }, _this), linkUrl !== "" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: function onClick() {
                return window.open(linkUrl, "_blank");
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 65
              }, _this), t("projectUrl")]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 10
            }, _this) : ""]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_s(ProjectPage, "AIo0ak7CRTDsrO4hZkNrDvBXo4g=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation, _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.useThemeContext];
});

_c = ProjectPage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (ProjectPage);

var _c;

$RefreshReg$(_c, "ProjectPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2plY3RzL1twcm9qZWN0XS50c3giXSwibmFtZXMiOlsiUHJvamVjdFBhZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGVjaExpc3QiLCJwcm9qZWN0R2lmIiwic291cmNlQ29kZVVybCIsImxpbmtVcmwiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJ1c2VUaGVtZUNvbnRleHQiLCJ0aGVtZSIsInN0eWxlcyIsIlRoZW1lcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIndpbmRvdyIsIm9wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQVdBLElBQU1BLFdBQW1DLEdBQUcsU0FBdENBLFdBQXNDLE9BT3RDO0FBQUE7O0FBQUEsTUFOTEMsS0FNSyxRQU5MQSxLQU1LO0FBQUEsTUFMTEMsV0FLSyxRQUxMQSxXQUtLO0FBQUEsTUFKTEMsUUFJSyxRQUpMQSxRQUlLO0FBQUEsTUFITEMsVUFHSyxRQUhMQSxVQUdLO0FBQUEsTUFGTEMsYUFFSyxRQUZMQSxhQUVLO0FBQUEsTUFETEMsT0FDSyxRQURMQSxPQUNLOztBQUFBLHdCQUVTQyw2REFBYyxFQUZ2QjtBQUFBLE1BRUdDLENBRkgsbUJBRUdBLENBRkg7O0FBQUEseUJBR2FDLHVFQUFlLEVBSDVCO0FBQUEsTUFHR0MsS0FISCxvQkFHR0EsS0FISDs7QUFLTCxzQkFDQztBQUFBLDRCQUNDLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0M7QUFBQSx1Q0FBc0JULEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUlDO0FBQVMsZUFBUyxZQUFLVSw2RUFBTCxjQUErQkQsS0FBSyxLQUFLRSxxREFBVixHQUF3QkQsa0VBQXhCLEdBQXNDLEVBQXJFLENBQWxCO0FBQUEsOEJBQ0MsOERBQUMsNERBQUQ7QUFBUSxxQkFBYTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFFQztBQUFLLGlCQUFTLEVBQUVBLDRFQUFoQjtBQUFBLGdDQUNDO0FBQUEsb0JBQUtWO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDO0FBQVMsbUJBQVMsRUFBRVUsMEVBQXBCO0FBQUEsaUNBQ0M7QUFBSyxlQUFHLEVBQUVQLFVBQVY7QUFBc0IsZUFBRyxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZELGVBS0M7QUFBUyxtQkFBUyxFQUFFTyxrRkFBcEI7QUFBQSxrQ0FDQztBQUFBLHNCQUFJSCxDQUFDLENBQUNOLFdBQUQ7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBRUM7QUFBQSxzQkFDRUMsUUFBUSxDQUFDVSxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQzlCLGtDQUNDO0FBQUEsMEJBQW1CRDtBQUFuQixpQkFBV0MsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUREO0FBR0EsYUFKQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkQsZUFTQztBQUFBLG9DQUNDO0FBQVEscUJBQU8sRUFBRTtBQUFBLHVCQUFNQyxNQUFNLENBQUNDLElBQVAsQ0FBWVosYUFBWixFQUEyQixRQUEzQixDQUFOO0FBQUEsZUFBakI7QUFBQSxzQ0FBNkQsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBN0QsRUFBNEVHLENBQUMsQ0FBQyxZQUFELENBQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxFQUdFRixPQUFPLEtBQUssRUFBWixnQkFDQztBQUFRLHFCQUFPLEVBQUU7QUFBQSx1QkFBTVUsTUFBTSxDQUFDQyxJQUFQLENBQVlYLE9BQVosRUFBcUIsUUFBckIsQ0FBTjtBQUFBLGVBQWpCO0FBQUEsc0NBQXVELDhEQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQXZELEVBQW9FRSxDQUFDLENBQUMsWUFBRCxDQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsR0FFRyxFQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkQ7QUFBQSxrQkFERDtBQWtDQSxDQTlDRDs7R0FBTVIsVztVQVNTTyx5RCxFQUNJRSxtRTs7O0tBVmJULFc7O0FBaUZOLCtEQUFlQSxXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzL1twcm9qZWN0XS43NDA4MjMwOTY3NzEzNmFlNzBhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMsIEdldFN0YXRpY1BhdGhzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLi4vLi4vYXNzZXRzL3Byb2plY3RzXCI7XG5pbXBvcnQgVG9wQmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvbWUvVG9wQmFyXCI7XG5cbmltcG9ydCBBcnJvd0JhY2tJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrXCI7XG5pbXBvcnQgR2l0SHViSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0dpdEh1YlwiO1xuaW1wb3J0IExpbmtJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlua1wiO1xuXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5pbXBvcnQgeyB1c2VUaGVtZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvVGhlbWVDb250ZXh0XCI7XG5pbXBvcnQgeyBUaGVtZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZW51bXNcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wcm9qZWN0Lm1vZHVsZS5zY3NzXCI7XG5cbnR5cGUgUHJvamVjdFByb3BzID0ge1xuXHR0aXRsZTogc3RyaW5nXG5cdGRlc2NyaXB0aW9uOiBzdHJpbmdcblx0dGVjaExpc3Q6IHN0cmluZ1tdXG5cdHByb2plY3RHaWY6IHN0cmluZ1xuXHRzb3VyY2VDb2RlVXJsOiBzdHJpbmdcblx0bGlua1VybDogc3RyaW5nXG59XG5cbmNvbnN0IFByb2plY3RQYWdlOiBSZWFjdC5GQzxQcm9qZWN0UHJvcHM+ID0gKHtcblx0dGl0bGUsXG5cdGRlc2NyaXB0aW9uLFxuXHR0ZWNoTGlzdCxcblx0cHJvamVjdEdpZixcblx0c291cmNlQ29kZVVybCxcblx0bGlua1VybFxufSkgPT4ge1xuXG5cdGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblx0Y29uc3QgeyB0aGVtZSB9ID0gdXNlVGhlbWVDb250ZXh0KCk7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDx0aXRsZT57YEFsYW4gT2xpIHwgJHt0aXRsZX1gfTwvdGl0bGU+XG5cdFx0XHQ8L0hlYWQ+XG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5wcm9qZWN0UGFnZVJvb3R9ICR7dGhlbWUgPT09IFRoZW1lcy5EQVJLID8gc3R5bGVzLmRhcmsgOiBcIlwifWB9PlxuXHRcdFx0XHQ8VG9wQmFyIHdpdGhBcnJvd0JhY2sgLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9qZWN0RGV0YWlsc30+XG5cdFx0XHRcdFx0PGgxPnt0aXRsZX08L2gxPlxuXHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmdpZkNvbnRhaW5lcn0+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17cHJvamVjdEdpZn0gYWx0PVwiXCIgLz5cblx0XHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb25Db250YWluZXJ9PlxuXHRcdFx0XHRcdFx0PHA+e3QoZGVzY3JpcHRpb24pfTwvcD5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdHt0ZWNoTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGtleT17aW5kZXh9PntpdGVtfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oc291cmNlQ29kZVVybCwgXCJfYmxhbmtcIil9PjxHaXRIdWJJY29uIC8+e3QoXCJzb3VyY2VDb2RlXCIpfTwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0bGlua1VybCAhPT0gXCJcIiA/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKGxpbmtVcmwsIFwiX2JsYW5rXCIpfT48TGlua0ljb24gLz57dChcInByb2plY3RVcmxcIil9PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ6IFwiXCJcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0PC8+XG5cdCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHBhdGhzOiBbXG5cdFx0XHR7IHBhcmFtczogeyBwcm9qZWN0OiBcIm1yZ2VsYWRvXCIgfSB9LFxuXHRcdFx0eyBwYXJhbXM6IHsgcHJvamVjdDogXCJ0cmljYWNhdVwiIH0gfSxcblx0XHRcdHsgcGFyYW1zOiB7IHByb2plY3Q6IFwicG9kY2FzdHJcIiB9IH0sXG5cdFx0XHR7IHBhcmFtczogeyBwcm9qZWN0OiBcImJldGhlaGVyb1wiIH0gfVxuXHRcdF0sXG5cdFx0ZmFsbGJhY2s6IGZhbHNlXG5cdH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcblxuXHRjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RMaXN0LmZpbmQoKGl0ZW0pID0+IHtcblx0XHRpZiAoaXRlbS5pZCA9PSBjb250ZXh0LnBhcmFtcy5wcm9qZWN0KSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdHRpdGxlOiBjdXJyZW50UHJvamVjdC50aXRsZSxcblx0XHRcdGRlc2NyaXB0aW9uOiBjdXJyZW50UHJvamVjdC5kZXNjcmlwdGlvbixcblx0XHRcdHRlY2hMaXN0OiBjdXJyZW50UHJvamVjdC50ZWNoTGlzdCxcblx0XHRcdHByb2plY3RHaWY6IGN1cnJlbnRQcm9qZWN0LnByb2plY3RHaWYsXG5cdFx0XHRzb3VyY2VDb2RlVXJsOiBjdXJyZW50UHJvamVjdC5zb3VyY2VDb2RlVXJsLFxuXHRcdFx0bGlua1VybDogY3VycmVudFByb2plY3QubGlua1VybFxuXHRcdH0sXG5cdFx0cmV2YWxpZGF0ZTogNjAgKiA2MCAqIDI0LCAvLyAyNCBob3Vyc1xuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9