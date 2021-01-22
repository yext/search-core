/**
 * Represents an Error from the Answers API
 *
 * @public
 */
export class ApiError extends Error {
  /** The Answers API error message */
  public message: string;
  /** The Answers API error code */
  public code: number;
  /** The Answers API error type */
  public type: string;

  constructor(message: string, code: number, type: string) {
    super(message);

    this.message = message;
    this.code = code;
    this.type = type;
  }
}