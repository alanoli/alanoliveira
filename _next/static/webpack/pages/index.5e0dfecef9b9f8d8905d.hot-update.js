self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/utils/hooks.tsx":
/*!*****************************!*\
  !*** ./src/utils/hooks.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCopyToClipboard": function() { return /* binding */ useCopyToClipboard; },
/* harmony export */   "useLanguage": function() { return /* binding */ useLanguage; },
/* harmony export */   "useTypeWriter": function() { return /* binding */ useTypeWriter; },
/* harmony export */   "usePageScroll": function() { return /* binding */ usePageScroll; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _copyclipboard_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./copyclipboard.module.scss */ "./src/utils/copyclipboard.module.scss");
/* harmony import */ var _copyclipboard_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_copyclipboard_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\alanc\\Documents\\Projects\\portifolio3\\src\\utils\\hooks.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();




var useCopyToClipboard = function useCopyToClipboard() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      copyItemVisible = _useState[0],
      setCopyItemVisible = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      copiedText = _useState2[0],
      setCopiedText = _useState2[1];

  var copyToClipboard = function copyToClipboard(copiedText, copiedData) {
    navigator.clipboard.writeText(copiedData);
    setCopiedText(copiedText);
    setCopyItemVisible(true);
    setTimeout(function () {
      return setCopyItemVisible(false);
    }, 3000);
  };

  var CopiedToast = function CopiedToast() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: "".concat((_copyclipboard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().copiedItem), " ").concat(copyItemVisible ? (_copyclipboard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active) : ""),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text",
        children: copiedText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }, _this);
  };

  return {
    copyItemVisible: copyItemVisible,
    copyToClipboard: copyToClipboard,
    CopiedToast: CopiedToast
  };
};

_s(useCopyToClipboard, "pk4DSMbcRIWyJMkVg/eYF1mvrEk=");

var useLanguage = function useLanguage() {
  _s2();

  var languageOptions = [{
    value: "en",
    label: "EN"
  }, {
    value: "pt",
    label: "PT"
  }, {
    value: "es",
    label: "ES"
  }];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    value: "en",
    label: "EN"
  }),
      currentLanguage = _useState3[0],
      setCurrentLanguage = _useState3[1];

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)(),
      i18n = _useTranslation.i18n;

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    i18n.changeLanguage(currentLanguage.value);
  }, [currentLanguage]);
  return {
    setCurrentLanguage: setCurrentLanguage,
    currentLanguage: currentLanguage,
    languageOptions: languageOptions
  };
};

_s2(useLanguage, "CAhhdikjQUz6sbacuO1gFeJmHRE=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation];
});

var useTypeWriter = function useTypeWriter() {
  var typeWriter = function typeWriter(text, className, callBack) {
    var currentLetterPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    if (currentLetterPosition < text.length) {
      document.getElementsByClassName(className)[0].innerHTML = text.substring(0, currentLetterPosition + 1);
      setTimeout(function () {
        typeWriter(text, className, callBack, currentLetterPosition + 1);
      }, 50);
    } else if (typeof callBack == "function") {
      setTimeout(function () {
        callBack();
      }, 300);
    }
  };

  return {
    typeWriter: typeWriter
  };
};
var usePageScroll = function usePageScroll() {
  _s3();

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      pageScrolled = _useState4[0],
      setPageScrolled = _useState4[1];

  var handleScroll = function handleScroll() {
    var offset = window.scrollY;

    if (offset >= 1000) {
      setPageScrolled(true);
    } else {
      setPageScrolled(false);
    }
  };

  return {
    handleScroll: handleScroll,
    pageScrolled: pageScrolled
  };
};

_s3(usePageScroll, "Xzr/1KFRZmUgx4gbRiSd8gKxPlA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2hvb2tzLnRzeCJdLCJuYW1lcyI6WyJ1c2VDb3B5VG9DbGlwYm9hcmQiLCJ1c2VTdGF0ZSIsImNvcHlJdGVtVmlzaWJsZSIsInNldENvcHlJdGVtVmlzaWJsZSIsImNvcGllZFRleHQiLCJzZXRDb3BpZWRUZXh0IiwiY29weVRvQ2xpcGJvYXJkIiwiY29waWVkRGF0YSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNldFRpbWVvdXQiLCJDb3BpZWRUb2FzdCIsInN0eWxlcyIsInVzZUxhbmd1YWdlIiwibGFuZ3VhZ2VPcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsImN1cnJlbnRMYW5ndWFnZSIsInNldEN1cnJlbnRMYW5ndWFnZSIsInVzZVRyYW5zbGF0aW9uIiwiaTE4biIsInVzZUVmZmVjdCIsImNoYW5nZUxhbmd1YWdlIiwidXNlVHlwZVdyaXRlciIsInR5cGVXcml0ZXIiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiY2FsbEJhY2siLCJjdXJyZW50TGV0dGVyUG9zaXRpb24iLCJsZW5ndGgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpbm5lckhUTUwiLCJzdWJzdHJpbmciLCJ1c2VQYWdlU2Nyb2xsIiwicGFnZVNjcm9sbGVkIiwic2V0UGFnZVNjcm9sbGVkIiwiaGFuZGxlU2Nyb2xsIiwib2Zmc2V0Iiwid2luZG93Iiwic2Nyb2xsWSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFtQk8sSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFnQztBQUFBOztBQUFBLGtCQUVuQkMsK0NBQVEsQ0FBQyxLQUFELENBRlc7QUFBQSxNQUUxREMsZUFGMEQ7QUFBQSxNQUV6Q0Msa0JBRnlDOztBQUFBLG1CQUc3QkYsK0NBQVEsQ0FBQyxFQUFELENBSHFCO0FBQUEsTUFHMURHLFVBSDBEO0FBQUEs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LENBQVY7QUFHQTtBQUNELEdBWEQ7O0FBYUEsU0FBTztBQUFFSCxjQUFVLEVBQVZBO0FBQUYsR0FBUDtBQUNBLENBZk07QUFpQkEsSUFBTVUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQUEsbUJBQ01sQywrQ0FBUSxDQUFDLEtBQUQsQ0FEZDtBQUFBLE1BQzNCbUMsWUFEMkI7QUFBQSxNQUNiQyxlQURhOztBQUdsQyxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQzFCLFFBQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxPQUF0Qjs7QUFDQSxRQUFJRixNQUFNLElBQUksSUFBZCxFQUFvQjtBQUNuQkYscUJBQWUsQ0FBQyxJQUFELENBQWY7QUFDQSxLQUZELE1BRU87QUFDTkEscUJBQWUsQ0FBQyxLQUFELENBQWY7QUFDQTtBQUNELEdBUEQ7O0FBUUEsU0FBTztBQUFFQyxnQkFBWSxFQUFaQSxZQUFGO0FBQWdCRixnQkFBWSxFQUFaQTtBQUFoQixHQUFQO0FBQ0EsQ0FaTTs7SUFBTUQsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZTBkZmVjZWY5YjlmOGQ4OTA1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NvcHljbGlwYm9hcmQubW9kdWxlLnNjc3NcIjtcblxudHlwZSBMYW5ndWFnZSA9IHtcblx0dmFsdWU6IHN0cmluZ1xuXHRsYWJlbDogc3RyaW5nXG59XG5cbnR5cGUgVXNlQ29weVRvQ2xpcGJvYXJkUmV0dXJuID0ge1xuXHRjb3B5SXRlbVZpc2libGU6IGJvb2xlYW5cblx0Y29weVRvQ2xpcGJvYXJkOiAoY29waWVkVGV4dDogc3RyaW5nLCBjb3BpZWREYXRhOiBzdHJpbmcpID0+IHZvaWRcblx0Q29waWVkVG9hc3Q6IFJlYWN0LkZDXG59XG5cbnR5cGUgVXNlTGFuZ3VhZ2VSZXR1cm4gPSB7XG5cdHNldEN1cnJlbnRMYW5ndWFnZTogYW55XG5cdGN1cnJlbnRMYW5ndWFnZTogTGFuZ3VhZ2Vcblx0bGFuZ3VhZ2VPcHRpb25zOiBMYW5ndWFnZVtdXG59XG5cbmV4cG9ydCBjb25zdCB1c2VDb3B5VG9DbGlwYm9hcmQgPSAoKTogVXNlQ29weVRvQ2xpcGJvYXJkUmV0dXJuID0+IHtcblxuXHRjb25zdCBbY29weUl0ZW1WaXNpYmxlLCBzZXRDb3B5SXRlbVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbY29waWVkVGV4dCwgc2V0Q29waWVkVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXHRjb25zdCBjb3B5VG9DbGlwYm9hcmQgPSAoY29waWVkVGV4dDogc3RyaW5nLCBjb3BpZWREYXRhOiBzdHJpbmcpID0+IHtcblx0XHRuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb3BpZWREYXRhKTtcblx0XHRzZXRDb3BpZWRUZXh0KGNvcGllZFRleHQpO1xuXHRcdHNldENvcHlJdGVtVmlzaWJsZSh0cnVlKTtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHNldENvcHlJdGVtVmlzaWJsZShmYWxzZSksIDMwMDApO1xuXHR9O1xuXG5cdGNvbnN0IENvcGllZFRvYXN0OiBSZWFjdC5GQyA9ICgpID0+IHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29waWVkSXRlbX0gJHtjb3B5SXRlbVZpc2libGUgPyBzdHlsZXMuYWN0aXZlIDogXCJcIn1gfT5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dFwiPntjb3BpZWRUZXh0fTwvcD5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpO1xuXHR9O1xuXG5cdHJldHVybiB7IGNvcHlJdGVtVmlzaWJsZSwgY29weVRvQ2xpcGJvYXJkLCBDb3BpZWRUb2FzdCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUxhbmd1YWdlID0gKCk6IFVzZUxhbmd1YWdlUmV0dXJuID0+IHtcblxuXHRjb25zdCBsYW5ndWFnZU9wdGlvbnMgPSBbXG5cdFx0eyB2YWx1ZTogXCJlblwiLCBsYWJlbDogXCJFTlwiIH0sXG5cdFx0eyB2YWx1ZTogXCJwdFwiLCBsYWJlbDogXCJQVFwiIH0sXG5cdFx0eyB2YWx1ZTogXCJlc1wiLCBsYWJlbDogXCJFU1wiIH1cblx0XTtcblxuXHRjb25zdCBbY3VycmVudExhbmd1YWdlLCBzZXRDdXJyZW50TGFuZ3VhZ2VdID0gdXNlU3RhdGUoeyB2YWx1ZTogXCJlblwiLCBsYWJlbDogXCJFTlwiIH0pO1xuXHRjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpMThuLmNoYW5nZUxhbmd1YWdlKGN1cnJlbnRMYW5ndWFnZS52YWx1ZSk7XG5cdH0sIFtjdXJyZW50TGFuZ3VhZ2VdKTtcblxuXHRyZXR1cm4geyBzZXRDdXJyZW50TGFuZ3VhZ2UsIGN1cnJlbnRMYW5ndWFnZSwgbGFuZ3VhZ2VPcHRpb25zIH07XG59O1xuXG5leHBvcnQgY29uc3QgdXNlVHlwZVdyaXRlciA9ICgpID0+IHtcblx0Y29uc3QgdHlwZVdyaXRlciA9ICh0ZXh0OiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nLCBjYWxsQmFjaywgY3VycmVudExldHRlclBvc2l0aW9uID0gMCkgPT4ge1xuXHRcdGlmIChjdXJyZW50TGV0dGVyUG9zaXRpb24gPCAodGV4dC5sZW5ndGgpKSB7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSlbMF0uaW5uZXJIVE1MID0gdGV4dC5zdWJzdHJpbmcoMCwgY3VycmVudExldHRlclBvc2l0aW9uICsgMSk7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dHlwZVdyaXRlcih0ZXh0LCBjbGFzc05hbWUsIGNhbGxCYWNrLCBjdXJyZW50TGV0dGVyUG9zaXRpb24gKyAxKTtcblx0XHRcdH0sIDUwKTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjYWxsQmFjayA9PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRjYWxsQmFjaygpO1xuXHRcdFx0fSwgMzAwKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIHsgdHlwZVdyaXRlciB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVBhZ2VTY3JvbGwgPSAoKSA9PiB7XG5cdGNvbnN0IFtwYWdlU2Nyb2xsZWQsIHNldFBhZ2VTY3JvbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0Y29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuXHRcdGNvbnN0IG9mZnNldCA9IHdpbmRvdy5zY3JvbGxZO1xuXHRcdGlmIChvZmZzZXQgPj0gMTAwMCkge1xuXHRcdFx0c2V0UGFnZVNjcm9sbGVkKHRydWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRQYWdlU2Nyb2xsZWQoZmFsc2UpO1xuXHRcdH1cblx0fTtcblx0cmV0dXJuIHsgaGFuZGxlU2Nyb2xsLCBwYWdlU2Nyb2xsZWQgfTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==