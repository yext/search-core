import CombinedFilter from '../../models/searchservice/request/CombinedFilter';
import SimpleFilter from '../../models/searchservice/request/SimpleFilter';

export default function serializeStaticFilters(
  filter: CombinedFilter | SimpleFilter): string | undefined {
  if (filter instanceof CombinedFilter) {
    return JSON.stringify(shapeCombinedFilterForApi(filter));
  }

  if (filter instanceof SimpleFilter) {
    return JSON.stringify(shapeSimpleFilterForApi(filter));
  }
}

function shapeCombinedFilterForApi(combinedFilter: CombinedFilter): any {
  const shapedFilters: any[] = [];
  for (const filter of combinedFilter.getFilters()) {
    if (filter instanceof SimpleFilter) {
      shapedFilters.push(shapeSimpleFilterForApi(filter));
    } else {
      shapedFilters.push(shapeCombinedFilterForApi(filter));
    }
  }
  return shapedFilters.length === 1
    ? shapedFilters[0]
    : { [combinedFilter.getCombinator()]: shapedFilters };
}

function shapeSimpleFilterForApi(filter: SimpleFilter): any {
  return {
    [filter.getFieldId()]: {
      [filter.getComparator()]: filter.getComparedValue()
    }
  };
}