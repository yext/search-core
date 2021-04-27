"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswersError = void 0;
/**
 * Represents an error
 *
 * @remarks
 * If the error originates from the Answer API, the code and type property will be present.
 *
 * @public
 */
class AnswersError extends Error {
    /** @internal */
    constructor(message, code, type) {
        super(message);
        this.message = message;
        this.code = code;
        this.type = type;
    }
}
exports.AnswersError = AnswersError;
//# sourceMappingURL=AnswersError.js.map