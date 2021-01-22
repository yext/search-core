import { ApiResponse } from '../models/answersapi/ApiResponse';
import { ApiError } from '../models/answersapi/ApiError';

/**
 * Determines whether or not an API response can be used to construct an answers-core response
 *
 * @remarks
 * Throws an error if the API response fails validation.
 *
 * @internal
 */
export class ApiResponseValidator {
  constructor(
    private apiResponse: ApiResponse
  ) {}

  validate(): void {
    this.validateResponseProp();
    this.validateApiErrors();
  }

  private validateResponseProp(): void {
    if (!this.apiResponse.response){
      throw new Error('Malformatted Answers API response: missing response property.');
    }
  }

  private validateApiErrors(): void {
    if(this.apiResponse.meta?.errors?.length >= 1){
      const error = this.apiResponse.meta.errors[0];
      throw new ApiError(error.message, error.code, error.type);
    }
  }
}