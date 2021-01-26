import { ApiResponseValidator } from '../../src/validation/ApiResponseValidator';
import { ApiResponse } from '../../src/models/answersapi/ApiResponse';
import { AnswersError } from '../../src/models/answersapi/AnswersError';

const apiResponseValidator = new ApiResponseValidator();

it('A response with a response property and no errors passes validation', () => {
  const response = {
    response: {},
    meta: {
      uuid: 'test',
      errors: []
    }
  };
  const validationResponse = apiResponseValidator.validate(response);

  return expect(validationResponse instanceof Error).toBeFalsy();
});

it('A response without a response property fails validation', () => {
  const response = {
    meta: {
      uuid: 'test',
      errors: []
    }
  } as ApiResponse;
  const validationResponse = apiResponseValidator.validate(response);

  return expect(validationResponse instanceof AnswersError).toBeTruthy();
});

it('A response with an error fails validation', () => {
  const response: ApiResponse = {
    response: {},
    meta: {
      uuid: 'test',
      errors: [
        {
          message: 'Invalid API Key',
          code: 1,
          type: 'FATAL_ERROR'
        }
      ]
    }
  };
  const validationResponse = apiResponseValidator.validate(response);

  return expect(validationResponse).toBeTruthy();
});