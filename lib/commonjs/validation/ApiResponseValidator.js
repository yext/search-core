"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponseValidator = void 0;
const AnswersError_1 = require("../models/answersapi/AnswersError");
/**
 * Determines whether or not an API response can be used to construct an answers-core response
 *
 * @internal
 */
class ApiResponseValidator {
    validate(apiResponse) {
        const testFunctions = [
            this.validateResponseProp,
            this.validateMetaProp,
            this.checkForApiErrors
        ];
        const testResults = testFunctions.map(testFn => testFn(apiResponse));
        return testResults.find(result => result instanceof AnswersError_1.AnswersError);
    }
    validateResponseProp(apiResponse) {
        if (!apiResponse.response) {
            return new AnswersError_1.AnswersError('Malformed Answers API response: missing response property.');
        }
    }
    validateMetaProp(apiResponse) {
        if (!apiResponse.meta) {
            return new AnswersError_1.AnswersError('Malformed Answers API response: missing meta property.');
        }
    }
    checkForApiErrors(apiResponse) {
        var _a, _b;
        if (((_b = (_a = apiResponse.meta) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.length) >= 1) {
            const error = apiResponse.meta.errors[0];
            return new AnswersError_1.AnswersError(error.message, error.code, error.type);
        }
    }
}
exports.ApiResponseValidator = ApiResponseValidator;
//# sourceMappingURL=ApiResponseValidator.js.map