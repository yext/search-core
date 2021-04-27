import { AnswersError } from '../models/answersapi/AnswersError';
/**
 * Determines whether or not an API response can be used to construct an answers-core response
 *
 * @internal
 */
var ApiResponseValidator = /** @class */ (function () {
    function ApiResponseValidator() {
    }
    ApiResponseValidator.prototype.validate = function (apiResponse) {
        var testFunctions = [
            this.validateResponseProp,
            this.validateMetaProp,
            this.checkForApiErrors
        ];
        var testResults = testFunctions.map(function (testFn) { return testFn(apiResponse); });
        return testResults.find(function (result) { return result instanceof AnswersError; });
    };
    ApiResponseValidator.prototype.validateResponseProp = function (apiResponse) {
        if (!apiResponse.response) {
            return new AnswersError('Malformed Answers API response: missing response property.');
        }
    };
    ApiResponseValidator.prototype.validateMetaProp = function (apiResponse) {
        if (!apiResponse.meta) {
            return new AnswersError('Malformed Answers API response: missing meta property.');
        }
    };
    ApiResponseValidator.prototype.checkForApiErrors = function (apiResponse) {
        var _a, _b;
        if (((_b = (_a = apiResponse.meta) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.length) >= 1) {
            var error = apiResponse.meta.errors[0];
            return new AnswersError(error.message, error.code, error.type);
        }
    };
    return ApiResponseValidator;
}());
export { ApiResponseValidator };
//# sourceMappingURL=ApiResponseValidator.js.map