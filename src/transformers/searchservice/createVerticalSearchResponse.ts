import AppliedQueryFilter from '../../models/searchservice/response/AppliedQueryFilter';
import VerticalSearchResponse from '../../models/searchservice/response/VerticalSearchResponse';
import createVerticalResults from './createVerticalResults';
import createAppliedQueryFilter from './createAppliedQueryFilter';

export default function createVerticalSearchResponse(data: any): Readonly<VerticalSearchResponse> {
  if (!data.response){
    throw new Error('The search data does not contain a response property');
  }

  const appliedQueryFilters: AppliedQueryFilter[] = data.response.appliedQueryFilters
    && data.response.appliedQueryFilters.map((filter: any) => createAppliedQueryFilter(filter));

  return Object.freeze({
    verticalResults: createVerticalResults(data.response),
    queryId: data.response.queryId,
    directAnswer: data.response.directAnswer,
    searchIntents: data.response.searchIntents,
    appliedQueryFilters: appliedQueryFilters
  });
}