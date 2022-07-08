import { ApiResponse } from '../models/searchapi/ApiResponse';
import { SearchError } from '../models/searchapi/SearchError';

/**
 * Determines whether or not an API response can be used to construct a search-core response.
 *
 * @internal
 */
export class ApiResponseValidator {
  public validate(apiResponse: ApiResponse): SearchError | undefined {
    const testFunctions = [
      this.validateResponseProp,
      this.validateMetaProp,
      this.checkForApiErrors
    ];

    const testResults = testFunctions.map(testFn => testFn(apiResponse));

    return testResults.find(result => result);
  }

  private validateResponseProp(apiResponse: ApiResponse): SearchError | undefined {
    if (!apiResponse.response) {
      return new SearchError('Malformed Search API response: missing response property.');
    }
  }

  private validateMetaProp(apiResponse: ApiResponse): SearchError | undefined {
    if (!apiResponse.meta) {
      return new SearchError('Malformed Search API response: missing meta property.');
    }
  }

  private checkForApiErrors(apiResponse: ApiResponse): SearchError | undefined {
    if (apiResponse.meta?.errors?.length >= 1) {
      const error = apiResponse.meta.errors[0];
      return new SearchError(error.message, error.code, error.type);
    }
  }
}