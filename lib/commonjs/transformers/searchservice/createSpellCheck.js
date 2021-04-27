"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSpellCheck = void 0;
function createSpellCheck(data) {
    return {
        originalQuery: data.originalQuery,
        correctedQuery: data.correctedQuery.value,
        type: data.type,
    };
}
exports.createSpellCheck = createSpellCheck;
//# sourceMappingURL=createSpellCheck.js.map