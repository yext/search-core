import { ApiResponseValidator } from '../../src/validation/ApiResponseValidator';
import { ApiResponse } from '../../src/models/answersapi/ApiResponse';

it('A response with a response property and no errors passes validation', () => {
  const response = {
    response: {},
    meta: {
      uuid: 'test',
      errors: []
    }
  };
  const validateResponse = () => new ApiResponseValidator(response).validate();

  return expect(validateResponse).not.toThrow();
});

it('A response without a response property fails validation', () => {
  const response = {
    meta: {
      uuid: 'test',
      errors: []
    }
  } as ApiResponse;
  const validateResponse = () => new ApiResponseValidator(response).validate();

  return expect(validateResponse).toThrow();
});

it('A response with an error fails validation', () => {
  const response = {
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
  const validateResponse = () => new ApiResponseValidator(response).validate();

  return expect(validateResponse).toThrow();
});