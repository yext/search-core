import ResultsFactory from './ResultsFactory';
import createAppliedQueryFilter from './createAppliedQueryFilter';
import VerticalResults from '../../models/searchservice/response/VerticalResults';

export default function createVerticalResults(data: any): Readonly<VerticalResults> {
  const appliedQueryFilters = data.appliedQueryFilters.map((appliedQueryFilter: any) => {
    return createAppliedQueryFilter(appliedQueryFilter);
  });

  return Object.freeze({
    appliedQueryFilters: appliedQueryFilters,
    queryDurationMillis: data.queryDurationMillis,
    results: ResultsFactory.create(data.results, data.source),
    resultsCount: data.resultsCount,
    source: data.source,
    verticalKey: data.verticalConfigId,
  });
}