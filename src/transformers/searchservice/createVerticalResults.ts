import { ResultsFactory } from './ResultsFactory';
import { createAppliedQueryFilter } from './createAppliedQueryFilter';
import { VerticalResults } from '../../models/searchservice/response/VerticalResults';

export function createVerticalResults(data: any): VerticalResults {
  const appliedQueryFilters = data.appliedQueryFilters
    ? data.appliedQueryFilters.map(createAppliedQueryFilter)
    : [];

  return {
    appliedQueryFilters: appliedQueryFilters,
    queryDurationMillis: data.queryDurationMillis,
    results: ResultsFactory.create(data.results, data.source),
    resultsCount: data.resultsCount,
    source: data.source,
    verticalKey: data.verticalConfigId,
  };
}