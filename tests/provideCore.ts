import { EndpointsFactory } from '../src/provideEndpoints';
import { AutocompleteServiceImpl } from '../src/infra/AutocompleteServiceImpl';
import { QuestionSubmissionServiceImpl } from '../src/infra/QuestionSubmissionServiceImpl';
import { SearchServiceImpl } from '../src/infra/SearchServiceImpl';
import { Endpoints } from '../src/models/core/Endpoints';
import { provideCore } from '../src/provideCore';
import { GenerativeDirectAnswerServiceImpl } from '../src/infra/GenerativeDirectAnswerServiceImpl';

jest.mock('../src/SearchCore');
jest.mock('../src/infra/AutocompleteServiceImpl');
jest.mock('../src/infra/QuestionSubmissionServiceImpl');
jest.mock('../src/infra/SearchServiceImpl');
jest.mock('../src/infra/GenerativeDirectAnswerServiceImpl');

it('can specify custom endpoints', () => {
  const customEndPoints: Required<Endpoints> = {
    ...new EndpointsFactory().getEndpoints(),
    verticalSearch: '<verticalSearchEndpoint>'
  };

  provideCore({
    apiKey: '',
    experienceKey: '',
    locale: '',
    endpoints: customEndPoints
  });

  const expectedObject = expect.objectContaining({ endpoints: customEndPoints });

  expect(AutocompleteServiceImpl).toHaveBeenCalledWith(expectedObject, {}, {});
  expect(QuestionSubmissionServiceImpl).toHaveBeenCalledWith(expectedObject, {}, {});
  expect(SearchServiceImpl).toHaveBeenCalledWith(expectedObject, {}, {});
  expect(GenerativeDirectAnswerServiceImpl).toHaveBeenCalledWith(expectedObject, {}, {});
});