import { ApiResponse } from '../models/answersapi/ApiResponse';
import { AnswersError } from '../models/answersapi/AnswersError';

/**
 * Determines whether or not an API response can be used to construct an answers-core response
 *
 * @internal
 */
export class ApiResponseValidator {
  public validate(apiResponse: ApiResponse): AnswersError | undefined {
    const testFunctions = [
      this.validateResponseProp,
      this.validateMetaProp,
      this.checkForApiErrors
    ];

    const testResults = testFunctions.map(testFn => testFn(apiResponse));

    return testResults.find(result => result);
  }

  private validateResponseProp(apiResponse: ApiResponse): AnswersError | undefined {
    if (!apiResponse.response) {
      return new AnswersError('Malformed Answers API response: missing response property.');
    }
  }

  private validateMetaProp(apiResponse: ApiResponse): AnswersError | undefined {
    if (!apiResponse.meta) {
      return new AnswersError('Malformed Answers API response: missing meta property.');
    }
  }

  private checkForApiErrors(apiResponse: ApiResponse): AnswersError | undefined {
    if (apiResponse.meta?.errors?.length >= 1) {
      const error = apiResponse.meta.errors[0];
      return new AnswersError(error.message, error.code, error.type);
    }
  }
}