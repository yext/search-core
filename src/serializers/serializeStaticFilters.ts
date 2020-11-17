import CombinedFilter from '../models/searchservice/request/CombinedFilter';
import SimpleFilter from '../models/searchservice/request/SimpleFilter';
import StaticFilters from '../models/searchservice/request/StaticFilters';

export default function serializeStaticFilters(
  filter: CombinedFilter | SimpleFilter): string | undefined {
  if (isCombinedFilter(filter)) {
    return JSON.stringify(shapeCombinedFilterForApi(filter));
  }

  return JSON.stringify(shapeSimpleFilterForApi(filter));
}

function shapeCombinedFilterForApi(combinedFilter: CombinedFilter): StaticFilters {
  const shapedFilters: StaticFilters[] = [];
  for (const filter of combinedFilter.filters) {
    if (isCombinedFilter(filter)) {
      shapedFilters.push(shapeCombinedFilterForApi(filter));
    } else {
      shapedFilters.push(shapeSimpleFilterForApi(filter));
    }
  }
  return shapedFilters.length === 1
    ? shapedFilters[0]
    : { [combinedFilter.combinator]: shapedFilters };
}

function shapeSimpleFilterForApi(filter: SimpleFilter): StaticFilters {
  return {
    [filter.fieldId]: {
      [filter.comparator]: filter.comparedValue
    }
  };
}

function isCombinedFilter(filter: CombinedFilter | SimpleFilter): filter is CombinedFilter {
  return ((filter as CombinedFilter).filters !== undefined)
    && ((filter as CombinedFilter).combinator !== undefined);
}