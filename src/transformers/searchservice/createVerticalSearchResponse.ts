import VerticalSearchResponse from '../../models/searchservice/response/VerticalSearchResponse';
import createVerticalResults from './createVerticalResults';

export default function createVerticalSearchResponse(data: any): Readonly<VerticalSearchResponse> {
  if (!data.response){
    throw new Error('The search data does not contain a response property');
  }

  return Object.freeze({
    verticalResults: createVerticalResults(data.response),
    queryId: data.response.queryId,
    directAnswer: data.response.directAnswer,
    searchIntents: data.response.searchIntents
  });
}