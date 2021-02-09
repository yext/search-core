import { CombinedFilter } from '../models/searchservice/request/CombinedFilter';
import { Filter } from '../models/searchservice/request/Filter';
import { StaticFilters } from '../models/searchservice/request/StaticFilters';

export function serializeStaticFilters(
  filter: CombinedFilter | Filter): string | undefined {
  if (isCombinedFilter(filter)) {
    return JSON.stringify(shapeCombinedFilterForApi(filter));
  }

  return JSON.stringify(shapeFilterForApi(filter));
}

function shapeCombinedFilterForApi(combinedFilter: CombinedFilter): StaticFilters {
  const shapedFilters: StaticFilters[] = [];
  for (const filter of combinedFilter.filters) {
    if (isCombinedFilter(filter)) {
      shapedFilters.push(shapeCombinedFilterForApi(filter));
    } else {
      shapedFilters.push(shapeFilterForApi(filter));
    }
  }
  return shapedFilters.length === 1
    ? shapedFilters[0]
    : { [combinedFilter.combinator]: shapedFilters };
}

export function shapeFilterForApi(filter: Filter): StaticFilters {
  return {
    [filter.fieldId]: {
      [filter.comparator]: filter.comparedValue
    }
  };
}

function isCombinedFilter(filter: CombinedFilter | Filter): filter is CombinedFilter {
  return ((filter as CombinedFilter).filters !== undefined)
    && ((filter as CombinedFilter).combinator !== undefined);
}