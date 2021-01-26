import { ApiResponse } from '../models/answersapi/ApiResponse';
import { AnswersError } from '../models/answersapi/AnswersError';

/**
 * Determines whether or not an API response can be used to construct an answers-core response
 *
 * @internal
 */
export class ApiResponseValidator {
  public validate(response: ApiResponse): AnswersError | undefined {
    const validators = [
      this.validateResponseProp,
      this.validateMetaProp,
      this.validateAnswersErrors
    ];

    const validationResults = validators.map((validator) => {
      return validator(response);
    });

    if (validationResults.length >= 1)
      return validationResults[0];
  }

  private validateResponseProp(response: ApiResponse): AnswersError | undefined {
    if (!response.response){
      return new Error('Malformed Answers API response: missing response property.');
    }
  }

  private validateMetaProp(response: ApiResponse): AnswersError | undefined {
    if (!response.meta){
      return new Error('Malformed Answers API response: missing meta property.');
    }
  }

  private validateAnswersErrors(response: ApiResponse): AnswersError | undefined {
    if(response.meta?.errors?.length >= 1){
      const error = response.meta.errors[0];
      return new AnswersError(error.message, error.code, error.type);
    }
  }
}