/**
 * Represents an error
 *
 * @remarks
 * If the error originates from the Answer API, the code and type property will be present.
 *
 * @public
 */
export declare class AnswersError extends Error {
    /** The error message. */
    message: string;
    /** Answers API error code. */
    code?: number;
    /** Answers API error type. */
    type?: string;
    /** @internal */
    constructor(message: string, code?: number, type?: string);
}
//# sourceMappingURL=AnswersError.d.ts.map