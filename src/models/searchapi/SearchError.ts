/**
 * Represents an error
 *
 * @remarks
 * If the error originates from the Search API, the code and type property will be present.
 *
 * @public
 */
export class SearchError extends Error {
  /** The error message. */
  public message: string;
  /** Search API error code. */
  public code?: number;
  /** Search API error type. */
  public type?: string;

  /** @internal */
  constructor(message: string, code?: number, type?: string) {
    super(message);

    this.message = message;
    this.code = code;
    this.type = type;

    // When targeting ES5, it is necessary to manually set the prototype for instance of checks to work
    // See: "Extending built-ins like Error, Array, and Map may no longer work"
    // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes
    Object.setPrototypeOf(this, SearchError.prototype);
  }
}