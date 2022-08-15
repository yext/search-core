import { isNumberRangeValue } from '../models/searchservice/common/NumberRangeValue';
import { FilterCombinator, StaticFilter } from '../models/searchservice/request/StaticFilter';
import { FieldValueFilter } from '../models/searchservice/request/FieldValueFilter';
import { ApiStaticFilters, ApiFilter } from '../models/searchservice/request/ApiStaticFilters';

export function serializeStaticFilters(filter: StaticFilter): string | undefined {
  if (filter.kind !== 'fieldValue') {
    const shapedFilter = shapeCombinedFilterForApi(filter.combinator, filter.filters);
    return shapedFilter && JSON.stringify(shapedFilter);
  }

  return JSON.stringify(shapeFieldValueFilterForApi(filter));
}

function shapeCombinedFilterForApi(
  combinator: FilterCombinator,
  filters: StaticFilter[]
): ApiStaticFilters | undefined {
  const shapedFilters: ApiStaticFilters[] = [];
  for (const filter of filters) {
    if (filter.kind !== 'fieldValue') {
      const shapedFilter = shapeCombinedFilterForApi(filter.combinator, filter.filters);
      shapedFilter && shapedFilters.push(shapedFilter);
    } else {
      shapedFilters.push(shapeFieldValueFilterForApi(filter));
    }
  }

  return shapedFilters.length === 0
    ? undefined
    : shapedFilters.length === 1
      ? shapedFilters[0]
      : { [combinator]: shapedFilters };
}

export function shapeFieldValueFilterForApi(filter: FieldValueFilter): ApiStaticFilters {
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
