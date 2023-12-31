"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHandler = exports.setHandler = void 0;
var error_1 = require("./error");
var handler = function (apiConfig, requestData, requestConfig, needTrim) {
    return Promise.reject(new error_1.NoHandlerError("Call `setHandler` first"));
};
/**
 * @example
 * ```ts
 *  setAxiosInstance(axios.create())
    setSocketIOInstance(io());

    setHandler(axiosHandler);
    setHandler(socketIOHandler);
 * ```
 * @param _handler
 */
function setHandler(_handler) {
    handler = _handler;
}
exports.setHandler = setHandler;
function getHandler() {
    return handler;
}
exports.getHandler = getHandler;
/**
 * Generate API
 *
 * @param apiConfig - {@link APIConfig}
 *
 * @example
 * ```ts
 * const apiDemo = genApi<ApiDemoReqPayload, ApiDemoResData>(ApiDemoConfig);
 * ```
 */
function genAPICall(apiConfig) {
    function APICall(data, requestConfig, 
    /** remove fields with undefined */
    needTrim) {
        if (needTrim === void 0) { needTrim = true; }
        return getHandler()(apiConfig, data, requestConfig, needTrim);
    }
    // now you can access the config with api
    // without another import
    APICall.config = apiConfig;
    return APICall;
}
exports.default = genAPICall;
