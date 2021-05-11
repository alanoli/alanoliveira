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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2hvb2tzLnRzeCJdLCJuYW1lcyI6WyJ1c2VDb3B5VG9DbGlwYm9hcmQiLCJ1c2VTdGF0ZSIsImNvcHlJdGVtVmlzaWJsZSIsInNldENvcHlJdGVtVmlzaWJsZSIsImNvcGllZFRleHQiLCJzZXRDb3BpZWRUZXh0IiwiY29weVRvQ2xpcGJvYXJkIiwiY29waWVkRGF0YSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNldFRpbWVvdXQiLCJDb3BpZWRUb2FzdCIsInN0eWxlcyIsInVzZUxhbmd1YWdlIiwibGFuZ3VhZ2VPcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsImN1cnJlbnRMYW5ndWFnZSIsInNldEN1cnJlbnRMYW5ndWFnZSIsInVzZVRyYW5zbGF0aW9uIiwiaTE4biIsInVzZUVmZmVjdCIsImNoYW5nZUxhbmd1YWdlIiwidXNlVHlwZVdyaXRlciIsInR5cGVXcml0ZXIiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiY2FsbEJhY2siLCJjdXJyZW50TGV0dGVyUG9zaXRpb24iLCJsZW5ndGgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpbm5lckhUTUwiLCJzdWJzdHJpbmciLCJ1c2VQYWdlU2Nyb2xsIiwicGFnZVNjcm9sbGVkIiwic2V0UGFnZVNjcm9sbGVkIiwiaGFuZGxlU2Nyb2xsIiwib2Zmc2V0Iiwid2luZG93Iiwic2Nyb2xsWSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFtQk8sSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFnQztBQUFBOztBQUFBLGtCQUVuQkMsK0NBQVEsQ0FBQyxLQUFELENBRlc7QUFBQSxNQUUxREMsZUFGMEQ7QUFBQSxNQUV6Q0Msa0JBRnlDOztBQUFBLG1CQUc3QkYsK0NBQVEsQ0FBQyxFQUFELENBSHFCO0FBQUEsTUFHMURHLFVBSDBEO0FBQUEs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LENBQVY7QUFHQTtBQUNELEdBWEQ7O0FBYUEsU0FBTztBQUFFSCxjQUFVLEVBQVZBO0FBQUYsR0FBUDtBQUNBLENBZk07QUFpQkEsSUFBTVUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQUEsbUJBQ01sQywrQ0FBUSxDQUFDLEtBQUQsQ0FEZDtBQUFBLE1BQzNCbUMsWUFEMkI7QUFBQSxNQUNiQyxlQURhOztBQUdsQyxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQzFCLFFBQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxPQUF0Qjs7QUFDQSxRQUFJRixNQUFNLElBQUksSUFBZCxFQUFvQjtBQUNuQkYscUJBQWUsQ0FBQyxJQUFELENBQWY7QUFDQSxLQUZELE1BRU87QUFDTkEscUJBQWUsQ0FBQyxLQUFELENBQWY7QUFDQTtBQUNELEdBUEQ7O0FBUUEsU0FBTztBQUFFQyxnQkFBWSxFQUFaQSxZQUFGO0FBQWdCRixnQkFBWSxFQUFaQTtBQUFoQixHQUFQO0FBQ0EsQ0FaTTs7SUFBTUQsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iOGU3NjNhMTU3ODRlZDgzMDFlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NvcHljbGlwYm9hcmQubW9kdWxlLnNjc3NcIjtcblxudHlwZSBMYW5ndWFnZSA9IHtcblx0dmFsdWU6IHN0cmluZ1xuXHRsYWJlbDogc3RyaW5nXG59XG5cbnR5cGUgVXNlQ29weVRvQ2xpcGJvYXJkUmV0dXJuID0ge1xuXHRjb3B5SXRlbVZpc2libGU6IGJvb2xlYW5cblx0Y29weVRvQ2xpcGJvYXJkOiAoY29waWVkVGV4dDogc3RyaW5nLCBjb3BpZWREYXRhOiBzdHJpbmcpID0+IHZvaWRcblx0Q29waWVkVG9hc3Q6IFJlYWN0LkZDXG59XG5cbnR5cGUgVXNlTGFuZ3VhZ2VSZXR1cm4gPSB7XG5cdHNldEN1cnJlbnRMYW5ndWFnZTogKCkgPT4gdm9pZFxuXHRjdXJyZW50TGFuZ3VhZ2U6IExhbmd1YWdlXG5cdGxhbmd1YWdlT3B0aW9uczogTGFuZ3VhZ2VbXVxufVxuXG5leHBvcnQgY29uc3QgdXNlQ29weVRvQ2xpcGJvYXJkID0gKCk6IFVzZUNvcHlUb0NsaXBib2FyZFJldHVybiA9PiB7XG5cblx0Y29uc3QgW2NvcHlJdGVtVmlzaWJsZSwgc2V0Q29weUl0ZW1WaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW2NvcGllZFRleHQsIHNldENvcGllZFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG5cblx0Y29uc3QgY29weVRvQ2xpcGJvYXJkID0gKGNvcGllZFRleHQ6IHN0cmluZywgY29waWVkRGF0YTogc3RyaW5nKSA9PiB7XG5cdFx0bmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29waWVkRGF0YSk7XG5cdFx0c2V0Q29waWVkVGV4dChjb3BpZWRUZXh0KTtcblx0XHRzZXRDb3B5SXRlbVZpc2libGUodHJ1ZSk7XG5cdFx0c2V0VGltZW91dCgoKSA9PiBzZXRDb3B5SXRlbVZpc2libGUoZmFsc2UpLCAzMDAwKTtcblx0fTtcblxuXHRjb25zdCBDb3BpZWRUb2FzdDogUmVhY3QuRkMgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvcGllZEl0ZW19ICR7Y29weUl0ZW1WaXNpYmxlID8gc3R5bGVzLmFjdGl2ZSA6IFwiXCJ9YH0+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHRcIj57Y29waWVkVGV4dH08L3A+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KTtcblx0fTtcblxuXHRyZXR1cm4geyBjb3B5SXRlbVZpc2libGUsIGNvcHlUb0NsaXBib2FyZCwgQ29waWVkVG9hc3QgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VMYW5ndWFnZSA9ICgpOiBVc2VMYW5ndWFnZVJldHVybiA9PiB7XG5cblx0Y29uc3QgbGFuZ3VhZ2VPcHRpb25zID0gW1xuXHRcdHsgdmFsdWU6IFwiZW5cIiwgbGFiZWw6IFwiRU5cIiB9LFxuXHRcdHsgdmFsdWU6IFwicHRcIiwgbGFiZWw6IFwiUFRcIiB9LFxuXHRcdHsgdmFsdWU6IFwiZXNcIiwgbGFiZWw6IFwiRVNcIiB9XG5cdF07XG5cblx0Y29uc3QgW2N1cnJlbnRMYW5ndWFnZSwgc2V0Q3VycmVudExhbmd1YWdlXSA9IHVzZVN0YXRlKHsgdmFsdWU6IFwiZW5cIiwgbGFiZWw6IFwiRU5cIiB9KTtcblx0Y29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aTE4bi5jaGFuZ2VMYW5ndWFnZShjdXJyZW50TGFuZ3VhZ2UudmFsdWUpO1xuXHR9LCBbY3VycmVudExhbmd1YWdlXSk7XG5cblx0cmV0dXJuIHsgc2V0Q3VycmVudExhbmd1YWdlLCBjdXJyZW50TGFuZ3VhZ2UsIGxhbmd1YWdlT3B0aW9ucyB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVR5cGVXcml0ZXIgPSAoKSA9PiB7XG5cdGNvbnN0IHR5cGVXcml0ZXIgPSAodGV4dDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZywgY2FsbEJhY2ssIGN1cnJlbnRMZXR0ZXJQb3NpdGlvbiA9IDApID0+IHtcblx0XHRpZiAoY3VycmVudExldHRlclBvc2l0aW9uIDwgKHRleHQubGVuZ3RoKSkge1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpWzBdLmlubmVySFRNTCA9IHRleHQuc3Vic3RyaW5nKDAsIGN1cnJlbnRMZXR0ZXJQb3NpdGlvbiArIDEpO1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHR5cGVXcml0ZXIodGV4dCwgY2xhc3NOYW1lLCBjYWxsQmFjaywgY3VycmVudExldHRlclBvc2l0aW9uICsgMSk7XG5cdFx0XHR9LCA1MCk7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgY2FsbEJhY2sgPT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0Y2FsbEJhY2soKTtcblx0XHRcdH0sIDMwMCk7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiB7IHR5cGVXcml0ZXIgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VQYWdlU2Nyb2xsID0gKCkgPT4ge1xuXHRjb25zdCBbcGFnZVNjcm9sbGVkLCBzZXRQYWdlU2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcblx0XHRjb25zdCBvZmZzZXQgPSB3aW5kb3cuc2Nyb2xsWTtcblx0XHRpZiAob2Zmc2V0ID49IDEwMDApIHtcblx0XHRcdHNldFBhZ2VTY3JvbGxlZCh0cnVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0UGFnZVNjcm9sbGVkKGZhbHNlKTtcblx0XHR9XG5cdH07XG5cdHJldHVybiB7IGhhbmRsZVNjcm9sbCwgcGFnZVNjcm9sbGVkIH07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==