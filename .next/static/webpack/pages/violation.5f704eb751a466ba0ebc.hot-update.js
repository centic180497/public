webpackHotUpdate_N_E("pages/violation",{

/***/ "./pages/violation/violation.jsx":
/*!***************************************!*\
  !*** ./pages/violation/violation.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Violation; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _components_header_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header/index */ \"./components/header/index.jsx\");\n/* harmony import */ var _header_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header_table */ \"./pages/violation/header_table/index.js\");\n/* harmony import */ var _search_violation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search_violation */ \"./pages/violation/search_violation/index.js\");\n/* harmony import */ var _googlemap_violation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./googlemap_violation */ \"./pages/violation/googlemap_violation/index.js\");\n/* harmony import */ var _public_assets_images_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/assets/images.gif */ \"./public/assets/images.gif\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.js\");\n\n\n\nvar _jsxFileName = \"/home/quy/Videos/parking_webapp/pages/violation/violation.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Violation(props) {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    props.getNoparkingViolation();\n  }, []);\n  var classes = useStyles();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      height: \"100vh\"\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_header_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.HeaderTable1,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: classes.HeaderTable,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_search_violation__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_header_table__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this), props.status === _utils_constants__WEBPACK_IMPORTED_MODULE_9__[\"RequestStatus\"].STARTED ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: classes.loadingrequest,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n          src: _public_assets_images_gif__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n          className: classes.loadingimg\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 11\n      }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: classes.map,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_googlemap_violation__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Violation, \"v7TDUGheAkBmKIQo9Gj65jeexyQ=\", false, function () {\n  return [useStyles];\n});\n\n_c = Violation;\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(function (theme) {\n  return {\n    HeaderTable1: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      display: \"flex\",\n      flex: \"1 1 auto\",\n      height: \" calc(100vh - 70px)\"\n    }, theme.breakpoints.down(\"sm\", \"xs\"), {\n      flexDirection: \"column\",\n      flex: 1\n    }),\n    loadingrequest: {\n      position: \"absolute\",\n      top: \"50%\",\n      left: \"25%\",\n      zIndex: 1200\n    },\n    loadingimg: {\n      top: \"20%\",\n      transform: \"translate(-50%,-50%)\",\n      zIndex: 1200,\n      height: 160,\n      display: \"inline-block\"\n    },\n    HeaderTable: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      width: \"45%\",\n      paddingLeft: 10,\n      display: \"flex\",\n      flexDirection: \"column\"\n    }, theme.breakpoints.down(\"sm\", \"xs\"), {\n      width: \"100%\",\n      display: \"flex\",\n      paddingLeft: 10,\n      flexDirection: \"column\"\n    }),\n    map: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      height: \"auto\",\n      flex: \"1 1 auto\"\n    }, theme.breakpoints.down(\"sm\", \"xs\"), {\n      width: \"100%\",\n      order: -1,\n      height: 500\n    })\n  };\n});\n\nvar _c;\n\n$RefreshReg$(_c, \"Violation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlvbGF0aW9uL3Zpb2xhdGlvbi5qc3g/ZjA3YiJdLCJuYW1lcyI6WyJWaW9sYXRpb24iLCJwcm9wcyIsInVzZUVmZmVjdCIsImdldE5vcGFya2luZ1Zpb2xhdGlvbiIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJoZWlnaHQiLCJIZWFkZXJUYWJsZTEiLCJIZWFkZXJUYWJsZSIsInN0YXR1cyIsIlJlcXVlc3RTdGF0dXMiLCJTVEFSVEVEIiwibG9hZGluZ3JlcXVlc3QiLCJpbWFnZXMiLCJsb2FkaW5naW1nIiwibWFwIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiZGlzcGxheSIsImZsZXgiLCJicmVha3BvaW50cyIsImRvd24iLCJmbGV4RGlyZWN0aW9uIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiekluZGV4IiwidHJhbnNmb3JtIiwid2lkdGgiLCJwYWRkaW5nTGVmdCIsIm9yZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUFBOztBQUN2Q0MseURBQVMsQ0FBQyxZQUFNO0FBQ2RELFNBQUssQ0FBQ0UscUJBQU47QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBR0EsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBQ0Esc0JBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FBWjtBQUFBLDRCQUNFO0FBQUEsNkJBQ0UscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUssZUFBUyxFQUFFRixPQUFPLENBQUNHLFlBQXhCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFSCxPQUFPLENBQUNJLFdBQXhCO0FBQUEsZ0NBQ0UscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLHFFQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFLR1AsS0FBSyxDQUFDUSxNQUFOLEtBQWlCQyw4REFBYSxDQUFDQyxPQUEvQixnQkFDQztBQUFLLGlCQUFTLEVBQUVQLE9BQU8sQ0FBQ1EsY0FBeEI7QUFBQSwrQkFDRTtBQUFLLGFBQUcsRUFBRUMsaUVBQVY7QUFBa0IsbUJBQVMsRUFBRVQsT0FBTyxDQUFDVTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELEdBSUcsSUFUTixlQVVFO0FBQUssaUJBQVMsRUFBRVYsT0FBTyxDQUFDVyxHQUF4QjtBQUFBLCtCQUNFLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQkQ7O0dBMUJ1QmYsUztVQUlOSyxTOzs7S0FKTUwsUztBQTJCeEIsSUFBTUssU0FBUyxHQUFHVyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDVixnQkFBWSxFQUFFO0FBQ1pXLGFBQU8sRUFBRSxNQURDO0FBRVZDLFVBQUksRUFBRSxVQUZJO0FBR1ZiLFlBQU0sRUFBRTtBQUhFLE9BSVRXLEtBQUssQ0FBQ0csV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNkIsSUFBN0IsQ0FKUyxFQUk0QjtBQUNwQ0MsbUJBQWEsRUFBRSxRQURxQjtBQUVwQ0gsVUFBSSxFQUFFO0FBRjhCLEtBSjVCLENBRDJCO0FBVXZDUCxrQkFBYyxFQUFFO0FBQ2RXLGNBQVEsRUFBRSxVQURJO0FBRWRDLFNBQUcsRUFBRSxLQUZTO0FBR2RDLFVBQUksRUFBRSxLQUhRO0FBSWRDLFlBQU0sRUFBRTtBQUpNLEtBVnVCO0FBZ0J2Q1osY0FBVSxFQUFFO0FBQ1ZVLFNBQUcsRUFBRSxLQURLO0FBRVZHLGVBQVMsRUFBRSxzQkFGRDtBQUdWRCxZQUFNLEVBQUUsSUFIRTtBQUlWcEIsWUFBTSxFQUFFLEdBSkU7QUFLVlksYUFBTyxFQUFFO0FBTEMsS0FoQjJCO0FBdUJ2Q1YsZUFBVyxFQUFFO0FBQ1hvQixXQUFLLEVBQUUsS0FERTtBQUVUQyxpQkFBVyxFQUFFLEVBRko7QUFHVFgsYUFBTyxFQUFFLE1BSEE7QUFJVEksbUJBQWEsRUFBRTtBQUpOLE9BS1JMLEtBQUssQ0FBQ0csV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNkIsSUFBN0IsQ0FMUSxFQUs2QjtBQUNwQ08sV0FBSyxFQUFFLE1BRDZCO0FBRXBDVixhQUFPLEVBQUUsTUFGMkI7QUFHcENXLGlCQUFXLEVBQUUsRUFIdUI7QUFJcENQLG1CQUFhLEVBQUU7QUFKcUIsS0FMN0IsQ0F2QjRCO0FBbUN2Q1AsT0FBRyxFQUFFO0FBQ0hULFlBQU0sRUFBRSxNQURQO0FBRURhLFVBQUksRUFBRTtBQUZMLE9BR0FGLEtBQUssQ0FBQ0csV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNkIsSUFBN0IsQ0FIQSxFQUdxQztBQUNwQ08sV0FBSyxFQUFFLE1BRDZCO0FBRXBDRSxXQUFLLEVBQUUsQ0FBQyxDQUY0QjtBQUdwQ3hCLFlBQU0sRUFBRTtBQUg0QixLQUhyQztBQW5Db0MsR0FBWjtBQUFBLENBQUQsQ0FBNUIiLCJmaWxlIjoiLi9wYWdlcy92aW9sYXRpb24vdmlvbGF0aW9uLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBNYW5hZ2VOYXZiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4XCI7XG5pbXBvcnQgSGVhZGVyVGFibGUgZnJvbSBcIi4vaGVhZGVyX3RhYmxlXCI7XG5pbXBvcnQgU2VhcmNoVGFibGUgZnJvbSBcIi4vc2VhcmNoX3Zpb2xhdGlvblwiO1xuaW1wb3J0IE1hcFZpb2xhdGlvbiBmcm9tIFwiLi9nb29nbGVtYXBfdmlvbGF0aW9uXCI7XG5pbXBvcnQgaW1hZ2VzIGZyb20gXCIuLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy5naWZcIjtcbmltcG9ydCB7IFJlcXVlc3RTdGF0dXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaW9sYXRpb24ocHJvcHMpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwcm9wcy5nZXROb3BhcmtpbmdWaW9sYXRpb24oKTtcbiAgfSwgW10pO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwdmhcIiB9fT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxNYW5hZ2VOYXZiYXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuSGVhZGVyVGFibGUxfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuSGVhZGVyVGFibGV9PlxuICAgICAgICAgIDxTZWFyY2hUYWJsZSAvPlxuICAgICAgICAgIDxIZWFkZXJUYWJsZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3Byb3BzLnN0YXR1cyA9PT0gUmVxdWVzdFN0YXR1cy5TVEFSVEVEID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvYWRpbmdyZXF1ZXN0fT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZXN9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2FkaW5naW1nfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFwfT5cbiAgICAgICAgICA8TWFwVmlvbGF0aW9uIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgSGVhZGVyVGFibGUxOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleDogXCIxIDEgYXV0b1wiLFxuICAgIGhlaWdodDogXCIgY2FsYygxMDB2aCAtIDcwcHgpXCIsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiLCBcInhzXCIpXToge1xuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgIGZsZXg6IDEsXG4gICAgfSxcbiAgfSxcbiAgbG9hZGluZ3JlcXVlc3Q6IHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHRvcDogXCI1MCVcIixcbiAgICBsZWZ0OiBcIjI1JVwiLFxuICAgIHpJbmRleDogMTIwMCxcbiAgfSxcbiAgbG9hZGluZ2ltZzoge1xuICAgIHRvcDogXCIyMCVcIixcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsLTUwJSlcIixcbiAgICB6SW5kZXg6IDEyMDAsXG4gICAgaGVpZ2h0OiAxNjAsXG4gICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgfSxcbiAgSGVhZGVyVGFibGU6IHtcbiAgICB3aWR0aDogXCI0NSVcIixcbiAgICBwYWRkaW5nTGVmdDogMTAsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIsIFwieHNcIildOiB7XG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIHBhZGRpbmdMZWZ0OiAxMCxcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgfSxcbiAgfSxcbiAgbWFwOiB7XG4gICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICBmbGV4OiBcIjEgMSBhdXRvXCIsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiLCBcInhzXCIpXToge1xuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgb3JkZXI6IC0xLFxuICAgICAgaGVpZ2h0OiA1MDAsXG4gICAgfSxcbiAgfSxcbn0pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/violation/violation.jsx\n");

/***/ })

})