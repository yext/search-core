"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionSubmissionServiceImpl = void 0;
const constants_1 = require("../constants");
/**
 * An implementation of QuestionSubmissionService which hits LiveAPI.
 *
 * @internal
 */
class QuestionSubmissionServiceImpl {
    constructor(config, httpService, apiResponseValidator) {
        var _a, _b;
        this.config = config;
        this.httpService = httpService;
        this.apiResponseValidator = apiResponseValidator;
        this.endpoint = (_b = (_a = this.config.endpoints) === null || _a === void 0 ? void 0 : _a.questionSubmission) !== null && _b !== void 0 ? _b : constants_1.defaultEndpoints.questionSubmission;
    }
    submitQuestion(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = {
                v: constants_1.defaultApiVersion,
                api_key: this.config.apiKey,
                sessionTrackingEnabled: request.sessionTrackingEnabled
            };
            const body = {
                email: request.email,
                entityId: request.entityId,
                name: request.name,
                questionDescription: request.questionDescription,
                questionLanguage: this.config.locale,
                questionText: request.questionText,
                site: 'FIRSTPARTY'
            };
            const requestInit = {
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const response = yield this.httpService.post(this.endpoint, queryParams, body, requestInit);
            const validationResult = this.apiResponseValidator.validate(response);
            if (validationResult instanceof Error) {
                return Promise.reject(validationResult);
            }
            return {
                uuid: response.meta.uuid
            };
        });
    }
}
exports.QuestionSubmissionServiceImpl = QuestionSubmissionServiceImpl;
//# sourceMappingURL=QuestionSubmissionServiceImpl.js.map