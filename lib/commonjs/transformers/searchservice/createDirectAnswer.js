"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDirectAnswer = void 0;
const DirectAnswerType_1 = require("../../models/searchservice/response/DirectAnswerType");
const ResultsFactory_1 = require("./ResultsFactory");
function createDirectAnswer(data) {
    const isFieldValueDirectAnswer = (data === null || data === void 0 ? void 0 : data.type) === DirectAnswerType_1.DirectAnswerType.FieldValue;
    const isFeaturedSnippetDirectAnswer = (data === null || data === void 0 ? void 0 : data.type) === DirectAnswerType_1.DirectAnswerType.FeaturedSnippet;
    if (isFieldValueDirectAnswer) {
        return {
            type: DirectAnswerType_1.DirectAnswerType.FieldValue,
            value: data.answer.value,
            relatedResult: ResultsFactory_1.ResultsFactory.fromDirectAnswer(data.relatedItem.data),
            verticalKey: data.relatedItem.verticalConfigId,
            entityName: data.answer.entityName,
            fieldName: data.answer.fieldName,
            fieldApiName: data.answer.fieldApiName,
            fieldType: data.answer.fieldType
        };
    }
    else if (isFeaturedSnippetDirectAnswer) {
        return {
            type: DirectAnswerType_1.DirectAnswerType.FeaturedSnippet,
            value: data.answer.value,
            relatedResult: ResultsFactory_1.ResultsFactory.fromDirectAnswer(data.relatedItem.data),
            verticalKey: data.relatedItem.verticalConfigId,
            snippet: data.answer.snippet,
        };
    }
    else {
        throw new Error('The Answers API returned an unknown direct answer type');
    }
}
exports.createDirectAnswer = createDirectAnswer;
//# sourceMappingURL=createDirectAnswer.js.map