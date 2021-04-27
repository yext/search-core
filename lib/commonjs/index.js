"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswersCore = exports.provideCore = void 0;
const AnswersCore_1 = require("./AnswersCore");
Object.defineProperty(exports, "AnswersCore", { enumerable: true, get: function () { return AnswersCore_1.AnswersCore; } });
const SearchServiceImpl_1 = require("./infra/SearchServiceImpl");
const QuestionSubmissionServiceImpl_1 = require("./infra/QuestionSubmissionServiceImpl");
const HttpServiceImpl_1 = require("./infra/HttpServiceImpl");
const AutocompleteServiceImpl_1 = require("./infra/AutocompleteServiceImpl");
const ApiResponseValidator_1 = require("./validation/ApiResponseValidator");
/**
 * The entrypoint to the answers-core library.
 *
 * @remarks
 * Returns an {@link AnswersCore} instance.
 *
 * @param config - The answers-core config
 *
 * @public
 */
function provideCore(config) {
    const httpService = new HttpServiceImpl_1.HttpServiceImpl();
    const apiResponseValidator = new ApiResponseValidator_1.ApiResponseValidator();
    const searchService = new SearchServiceImpl_1.SearchServiceImpl(config, httpService, apiResponseValidator);
    const questionSubmissionService = new QuestionSubmissionServiceImpl_1.QuestionSubmissionServiceImpl(config, httpService, apiResponseValidator);
    const autoCompleteService = new AutocompleteServiceImpl_1.AutocompleteServiceImpl(config, httpService, apiResponseValidator);
    return new AnswersCore_1.AnswersCore(searchService, questionSubmissionService, autoCompleteService);
}
exports.provideCore = provideCore;
__exportStar(require("./models"), exports);
//# sourceMappingURL=index.js.map