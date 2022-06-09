"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./vwo.js":
/*!****************!*\
  !*** ./vwo.js ***!
  \****************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"VWO_UUID_COOKIE_NAME\": function() { return /* binding */ VWO_UUID_COOKIE_NAME; },\n/* harmony export */   \"fetchVWOExperiment\": function() { return /* binding */ fetchVWOExperiment; },\n/* harmony export */   \"getVWOClient\": function() { return /* binding */ getVWOClient; },\n/* harmony export */   \"getVWOExperiment\": function() { return /* binding */ getVWOExperiment; },\n/* harmony export */   \"prefetchVWOExperiment\": function() { return /* binding */ prefetchVWOExperiment; },\n/* harmony export */   \"useVWOExperiment\": function() { return /* binding */ useVWOExperiment; }\n/* harmony export */ });\n/* harmony import */ var _home_runner_vwo_node_nextjs_breaking_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_runner_vwo_node_nextjs_breaking_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_vwo_node_nextjs_breaking_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vwo_node_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vwo-node-sdk */ \"./node_modules/vwo-node-sdk/dist/vwo-javascript-sdk.js\");\n/* harmony import */ var vwo_node_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vwo_node_sdk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var cookie_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-storage */ \"./node_modules/cookie-storage/lib/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ \"./config.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar VWO_UUID_COOKIE_NAME = \"_vwo_uuid_v2\";\nfunction getQueryKey(param) {\n    var campaignKey = param.campaignKey, userID = param.userID;\n    return [\n        \"vwo-experiment\",\n        campaignKey,\n        userID\n    ];\n}\nfunction getVWOClient() {\n    return _getVWOClient.apply(this, arguments);\n}\nfunction _getVWOClient() {\n    _getVWOClient = _asyncToGenerator(_home_runner_vwo_node_nextjs_breaking_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var settingsFile, client;\n        return _home_runner_vwo_node_nextjs_breaking_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return vwo_node_sdk__WEBPACK_IMPORTED_MODULE_1___default().getSettingsFile(_config__WEBPACK_IMPORTED_MODULE_4__.VWO_ACCOUNT_ID, _config__WEBPACK_IMPORTED_MODULE_4__.VWO_SDK_KEY);\n                case 2:\n                    settingsFile = _ctx.sent;\n                    client = vwo_node_sdk__WEBPACK_IMPORTED_MODULE_1___default().launch({\n                        settingsFile: settingsFile\n                    });\n                    return _ctx.abrupt(\"return\", client);\n                case 5:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _getVWOClient.apply(this, arguments);\n}\nfunction getVWOExperiment(_) {\n    return _getVWOExperiment.apply(this, arguments);\n}\nfunction _getVWOExperiment() {\n    _getVWOExperiment = _asyncToGenerator(_home_runner_vwo_node_nextjs_breaking_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n        var campaignKey, userID, client, variation;\n        return _home_runner_vwo_node_nextjs_breaking_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    campaignKey = param.campaignKey, userID = param.userID;\n                    _ctx.next = 3;\n                    return getVWOClient();\n                case 3:\n                    client = _ctx.sent;\n                    console.log(campaignKey, userID);\n                    variation = client.activate(campaignKey, userID);\n                    console.log(variation);\n                    return _ctx.abrupt(\"return\", variation);\n                case 8:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _getVWOExperiment.apply(this, arguments);\n}\nfunction prefetchVWOExperiment(_) {\n    return _prefetchVWOExperiment.apply(this, arguments);\n}\nfunction _prefetchVWOExperiment() {\n    _prefetchVWOExperiment = _asyncToGenerator(_home_runner_vwo_node_nextjs_breaking_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1(param) {\n        var queryClient, campaignKey, userID;\n        return _home_runner_vwo_node_nextjs_breaking_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n            while(1)switch(_ctx1.prev = _ctx1.next){\n                case 0:\n                    queryClient = param.queryClient, campaignKey = param.campaignKey, userID = param.userID;\n                    return _ctx1.abrupt(\"return\", queryClient.prefetchQuery(getQueryKey({\n                        campaignKey: campaignKey,\n                        userID: userID\n                    }), _asyncToGenerator(_home_runner_vwo_node_nextjs_breaking_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                        return _home_runner_vwo_node_nextjs_breaking_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                            while(1)switch(_ctx.prev = _ctx.next){\n                                case 0:\n                                    return _ctx.abrupt(\"return\", getVWOExperiment({\n                                        campaignKey: campaignKey,\n                                        userID: userID\n                                    }));\n                                case 1:\n                                case \"end\":\n                                    return _ctx.stop();\n                            }\n                        }, _callee);\n                    }))));\n                case 2:\n                case \"end\":\n                    return _ctx1.stop();\n            }\n        }, _callee1);\n    }));\n    return _prefetchVWOExperiment.apply(this, arguments);\n}\nfunction fetchVWOExperiment(_) {\n    return _fetchVWOExperiment.apply(this, arguments);\n}\nfunction _fetchVWOExperiment() {\n    _fetchVWOExperiment = _asyncToGenerator(_home_runner_vwo_node_nextjs_breaking_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(param) {\n        var queryClient, campaignKey, userID;\n        return _home_runner_vwo_node_nextjs_breaking_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx2) {\n            while(1)switch(_ctx2.prev = _ctx2.next){\n                case 0:\n                    queryClient = param.queryClient, campaignKey = param.campaignKey, userID = param.userID;\n                    return _ctx2.abrupt(\"return\", queryClient.fetchQuery(getQueryKey({\n                        campaignKey: campaignKey,\n                        userID: userID\n                    }), _asyncToGenerator(_home_runner_vwo_node_nextjs_breaking_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                        return _home_runner_vwo_node_nextjs_breaking_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                            while(1)switch(_ctx.prev = _ctx.next){\n                                case 0:\n                                    return _ctx.abrupt(\"return\", getVWOExperiment({\n                                        campaignKey: campaignKey,\n                                        userID: userID\n                                    }));\n                                case 1:\n                                case \"end\":\n                                    return _ctx.stop();\n                            }\n                        }, _callee);\n                    }))));\n                case 2:\n                case \"end\":\n                    return _ctx2.stop();\n            }\n        }, _callee2);\n    }));\n    return _fetchVWOExperiment.apply(this, arguments);\n}\nfunction useVWOExperiment(param) {\n    var campaignKey = param.campaignKey;\n    _s();\n    // to run this experiment serverside, simply call prefetchVWOExperiment, read VWO_UUID_COOKIE_NAME cookie,\n    // and pass through that cookie's value\n    var userID;\n    if (true) {\n        var cookies = new cookie_storage__WEBPACK_IMPORTED_MODULE_3__.CookieStorage();\n        userID = cookies.getItem(VWO_UUID_COOKIE_NAME);\n    }\n    return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(getQueryKey({\n        campaignKey: campaignKey,\n        userID: userID\n    }), _asyncToGenerator(_home_runner_vwo_node_nextjs_breaking_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return _home_runner_vwo_node_nextjs_breaking_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    return _ctx.abrupt(\"return\", getVWOExperiment({\n                        campaignKey: campaignKey,\n                        userID: userID\n                    }));\n                case 1:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), {\n        enabled: !!userID && !!campaignKey,\n        staleTime: 5 * 60 * 1000\n    });\n}\n_s(useVWOExperiment, \"4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBRUMsV0FBVyxFQUFYQSxXQUFXO3dCQUFFQyxNQUFNLEVBQU5BLE1BQU07cUJBQUUsQ0FBQyxFQUNwQywwTEFBWTs7OztpRUFDSE0sZ0JBQWdCLENBQUM7d0NBQUVQLFdBQVcsRUFBWEEsV0FBVzt3Q0FBRUMsTUFBTSxFQUFOQSxNQUFNO3FDQUFFLENBQUM7Ozs7OztxQkFDakQsR0FDRjs7Ozs7O0tBQ0Y7V0FYcUJjLG1CQUFrQjs7QUFhakMsU0FBU0UsZ0JBQWdCLENBQUMsS0FBZSxFQUFFO1FBQWpCLFdBQWEsR0FBYixLQUFlLENBQWJqQixXQUFXOztJQUM1QywwR0FBMEc7SUFDMUcsdUNBQXVDO0lBQ3ZDLElBQUlDLE1BQU07SUFDVixJQUFJLElBQTZCLEVBQUU7UUFDakMsSUFBTWlCLE9BQU8sR0FBRyxJQUFJdkIseURBQWEsRUFBRTtRQUNuQ00sTUFBTSxHQUFHaUIsT0FBTyxDQUFDQyxPQUFPLENBQUNyQixvQkFBb0IsQ0FBQyxDQUFDO0tBQ2hEO0lBRUQsT0FBT0oscURBQVEsQ0FDYkssV0FBVyxDQUFDO1FBQUVDLFdBQVcsRUFBWEEsV0FBVztRQUFFQyxNQUFNLEVBQU5BLE1BQU07S0FBRSxDQUFDLEVBQ3BDOzs7O2lEQUFZTSxnQkFBZ0IsQ0FBQzt3QkFBRVAsV0FBVyxFQUFYQSxXQUFXO3dCQUFFQyxNQUFNLEVBQU5BLE1BQU07cUJBQUUsQ0FBQzs7Ozs7O0tBQUEsSUFDckQ7UUFDRW1CLE9BQU8sRUFBRSxDQUFDLENBQUNuQixNQUFNLElBQUksQ0FBQyxDQUFDRCxXQUFXO1FBQ2xDcUIsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSTtLQUN6QixDQUNGLENBQUM7Q0FDSDtHQWpCZUosZ0JBQWdCOztRQVN2QnZCLGlEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3Z3by5qcz8zYTMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWV08gZnJvbSAndndvLW5vZGUtc2RrJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgQ29va2llU3RvcmFnZSB9IGZyb20gJ2Nvb2tpZS1zdG9yYWdlJztcblxuaW1wb3J0IHtcbiAgVldPX0FDQ09VTlRfSUQsXG4gIFZXT19TREtfS0VZLFxufSBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBWV09fVVVJRF9DT09LSUVfTkFNRSA9ICdfdndvX3V1aWRfdjInO1xuXG5mdW5jdGlvbiBnZXRRdWVyeUtleSh7IGNhbXBhaWduS2V5LCB1c2VySUQgfSkge1xuICByZXR1cm4gWyd2d28tZXhwZXJpbWVudCcsIGNhbXBhaWduS2V5LCB1c2VySURdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VldPQ2xpZW50KCkge1xuICBjb25zdCBzZXR0aW5nc0ZpbGUgPSBhd2FpdCBWV08uZ2V0U2V0dGluZ3NGaWxlKFZXT19BQ0NPVU5UX0lELCBWV09fU0RLX0tFWSk7XG4gIGNvbnN0IGNsaWVudCA9IFZXTy5sYXVuY2goe1xuICAgIHNldHRpbmdzRmlsZSxcbiAgfSk7XG5cbiAgcmV0dXJuIGNsaWVudDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFZXT0V4cGVyaW1lbnQoeyBjYW1wYWlnbktleSwgdXNlcklEIH0pIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgZ2V0VldPQ2xpZW50KCk7XG4gIGNvbnNvbGUubG9nKGNhbXBhaWduS2V5LCB1c2VySUQpO1xuICBjb25zdCB2YXJpYXRpb24gPSBjbGllbnQuYWN0aXZhdGUoY2FtcGFpZ25LZXksIHVzZXJJRCk7XG4gIGNvbnNvbGUubG9nKHZhcmlhdGlvbik7XG4gIHJldHVybiB2YXJpYXRpb247XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVmZXRjaFZXT0V4cGVyaW1lbnQoe1xuICBxdWVyeUNsaWVudCxcbiAgY2FtcGFpZ25LZXksXG4gIHVzZXJJRCxcbn0pIHtcbiAgcmV0dXJuIHF1ZXJ5Q2xpZW50LnByZWZldGNoUXVlcnkoXG4gICAgZ2V0UXVlcnlLZXkoeyBjYW1wYWlnbktleSwgdXNlcklEIH0pLFxuICAgIGFzeW5jICgpID0+IHtcbiAgICAgIHJldHVybiBnZXRWV09FeHBlcmltZW50KHsgY2FtcGFpZ25LZXksIHVzZXJJRCB9KTtcbiAgICB9XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFZXT0V4cGVyaW1lbnQoe1xuICBxdWVyeUNsaWVudCxcbiAgY2FtcGFpZ25LZXksXG4gIHVzZXJJRCxcbn0pIHtcbiAgcmV0dXJuIHF1ZXJ5Q2xpZW50LmZldGNoUXVlcnkoXG4gICAgZ2V0UXVlcnlLZXkoeyBjYW1wYWlnbktleSwgdXNlcklEIH0pLFxuICAgIGFzeW5jICgpID0+IHtcbiAgICAgIHJldHVybiBnZXRWV09FeHBlcmltZW50KHsgY2FtcGFpZ25LZXksIHVzZXJJRCB9KTtcbiAgICB9XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VWV09FeHBlcmltZW50KHsgY2FtcGFpZ25LZXkgfSkge1xuICAvLyB0byBydW4gdGhpcyBleHBlcmltZW50IHNlcnZlcnNpZGUsIHNpbXBseSBjYWxsIHByZWZldGNoVldPRXhwZXJpbWVudCwgcmVhZCBWV09fVVVJRF9DT09LSUVfTkFNRSBjb29raWUsXG4gIC8vIGFuZCBwYXNzIHRocm91Z2ggdGhhdCBjb29raWUncyB2YWx1ZVxuICBsZXQgdXNlcklEO1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZVN0b3JhZ2UoKTtcbiAgICB1c2VySUQgPSBjb29raWVzLmdldEl0ZW0oVldPX1VVSURfQ09PS0lFX05BTUUpO1xuICB9XG5cbiAgcmV0dXJuIHVzZVF1ZXJ5KFxuICAgIGdldFF1ZXJ5S2V5KHsgY2FtcGFpZ25LZXksIHVzZXJJRCB9KSxcbiAgICBhc3luYyAoKSA9PiBnZXRWV09FeHBlcmltZW50KHsgY2FtcGFpZ25LZXksIHVzZXJJRCB9KSxcbiAgICB7XG4gICAgICBlbmFibGVkOiAhIXVzZXJJRCAmJiAhIWNhbXBhaWduS2V5LFxuICAgICAgc3RhbGVUaW1lOiA1ICogNjAgKiAxMDAwLCAvLyA1bWluc1xuICAgIH1cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJWV08iLCJ1c2VRdWVyeSIsIkNvb2tpZVN0b3JhZ2UiLCJWV09fQUNDT1VOVF9JRCIsIlZXT19TREtfS0VZIiwiVldPX1VVSURfQ09PS0lFX05BTUUiLCJnZXRRdWVyeUtleSIsImNhbXBhaWduS2V5IiwidXNlcklEIiwiZ2V0VldPQ2xpZW50Iiwic2V0dGluZ3NGaWxlIiwiY2xpZW50IiwiZ2V0U2V0dGluZ3NGaWxlIiwibGF1bmNoIiwiZ2V0VldPRXhwZXJpbWVudCIsInZhcmlhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJhY3RpdmF0ZSIsInByZWZldGNoVldPRXhwZXJpbWVudCIsInF1ZXJ5Q2xpZW50IiwicHJlZmV0Y2hRdWVyeSIsImZldGNoVldPRXhwZXJpbWVudCIsImZldGNoUXVlcnkiLCJ1c2VWV09FeHBlcmltZW50IiwiY29va2llcyIsImdldEl0ZW0iLCJlbmFibGVkIiwic3RhbGVUaW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./vwo.js\n");

/***/ })

});