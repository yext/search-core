/**
 * Represents an error
 *
 * @remarks
 * If the error originates from the Answer API, the code and type property will be present.
 *
 * @public
 */
export class AnswersError extends Error {
  /** The error message */
  public message: string;
  /** Answers API error code */
  public code?: number;
  /** Answers API error type */
  public type?: string;

  /** @internal */
  constructor(message: string, code?: number, type?: string) {
    super(message);

    this.message = message;
    this.code = code;
    this.type = type;
  }
}