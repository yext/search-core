export interface AnswersBaseError {
  errorCode: number,
  errorMessage: string,
  boundary: string,
  causedBy?: Error,
  reported: boolean
}

/**
 * AnswersBaseError is an extension of the base Error object.
 * This is the object that is used to when reporting to the server.
 * @extends Error
 *
 * Error codes fall into one of four categories:
 * 1XX errors: Basic errors
 * 2XX errors: UI errors
 * 3XX errors: Endpoint errors
 * 4XX errors: Core errors
 */
export class AnswersBaseError extends Error {
  constructor(errorCode: number, message: string, boundary: string, causedBy: Error | undefined) {
    super(message);
    this.errorCode = errorCode;
    this.errorMessage = message;
    this.boundary = boundary;
    this.reported = false;

    if (causedBy) {
      this.causedBy = causedBy instanceof AnswersBaseError
        ? causedBy
        : AnswersBaseError.from(causedBy, 'unknown');
      this.stack = `${this.stack}\nCaused By: ${this.causedBy.stack}`;
    }
  }

  toJson(): string {
    return JSON.stringify(this);
  }

  toString(): string {
    let string = `${this.errorMessage} (${this.boundary})`;
    if (this.causedBy) {
      string += `\n  Caused By: ${this.causedBy.toString()}`;
    }
    return string;
  }

  static from(builtinError: Error, boundary: string): Error {
    const error = new AnswersBasicError(builtinError.message, boundary);
    error.stack = builtinError.stack;
    return error;
  }
}

/**
 * AnswersBasicError is a wrapper around all the built-in errors
 * e.g. undefined variables, incorrect syntax, types, missing methods, etc.
 * @extends AnswersBaseError
 */
export class AnswersBasicError extends AnswersBaseError {
  constructor(message: string, boundary: string, causedBy?: Error) {
    super(100, message, boundary, causedBy);
  }
}

/**
 * AnswersEndpointError represents all network related errors.
 * @extends AnswersBaseError
 */
export class AnswersEndpointError extends AnswersBaseError {
  constructor(message: string, boundary: string, causedBy?: Error) {
    super(300, message, boundary, causedBy);
  }
}
