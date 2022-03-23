import { isNumberRangeValue } from '../models/searchservice/common/NumberRangeValue';
import { CombinedFilter } from '../models/searchservice/request/CombinedFilter';
import { Filter } from '../models/searchservice/request/Filter';
import { ApiStaticFilters, ApiFilter } from '../models/searchservice/request/ApiStaticFilters';

export function serializeStaticFilters(
  filter: CombinedFilter | Filter): string | undefined {
  if (isCombinedFilter(filter)) {
    return JSON.stringify(shapeCombinedFilterForApi(filter));
  }

  return JSON.stringify(shapeFilterForApi(filter));
}

function shapeCombinedFilterForApi(combinedFilter: CombinedFilter): ApiStaticFilters {
  const shapedFilters: ApiStaticFilters[] = [];
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

export function shapeFilterForApi(filter: Filter): ApiStaticFilters {
  let filterValues: ApiFilter = {};
  if (isNumberRangeValue(filter.value)) {
    if (filter.value.start) {
      filterValues[filter.value.start.matcher] = filter.value.start.value;
    }
    if (filter.value.end) {
      filterValues[filter.value.end.matcher] = filter.value.end.value;
    }
  } else {
    filterValues = { [filter.matcher]: filter.value };
  }
  return {
    [filter.fieldId]: filterValues
  };
}

function isCombinedFilter(filter: CombinedFilter | Filter): filter is CombinedFilter {
  return ((filter as CombinedFilter).filters !== undefined)
    && ((filter as CombinedFilter).combinator !== undefined);
}