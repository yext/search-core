import { ApiResponseValidator } from '../../src/validation/ApiResponseValidator';
import { ApiResponse } from '../../src/models/searchapi/ApiResponse';
import { SearchError } from '../../src/models/searchapi/SearchError';

const apiResponseValidator = new ApiResponseValidator();

it('A response with no errors passes validation', () => {
  const response = {
    response: {},
    meta: {
      uuid: 'test',
      errors: []
    }
  };
  const validationResponse = apiResponseValidator.validate(response);

  return expect(validationResponse).toBeUndefined();
});

it('A response without a response property fails validation', () => {
  const response = {
    meta: {
      uuid: 'test',
      errors: []
    }
  } as ApiResponse;
  const validationResponse = apiResponseValidator.validate(response);

  return expect(validationResponse).toBeInstanceOf(SearchError);
});

it('A response without a meta property fails validation', () => {
  const response = {
    response: {}
  } as ApiResponse;
  const validationResponse = apiResponseValidator.validate(response);

  return expect(validationResponse).toBeInstanceOf(SearchError);
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

  return expect(validationResponse).toBeInstanceOf(SearchError);
});