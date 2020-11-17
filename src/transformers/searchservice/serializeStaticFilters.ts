import CombinedFilter from '../../models/searchservice/request/CombinedFilter';
import SimpleFilter from '../../models/searchservice/request/SimpleFilter';

export default function serializeStaticFilters(filter: CombinedFilter | SimpleFilter): string | undefined {
  if (filter instanceof CombinedFilter) {
    return JSON.stringify(shapeCombinedFilterForApi([ filter ], filter.getCombinator()));
  }

  if (filter instanceof SimpleFilter) {
    return JSON.stringify(shapeSimpleFilterForApi(filter));
  }
}

function shapeCombinedFilterForApi(filters: (CombinedFilter|SimpleFilter)[], combinator: string): any {
  const shapedFilters: any[] = [];
  for (const filter of filters) {
    if (filter instanceof SimpleFilter) {
      shapedFilters.push(shapeSimpleFilterForApi(filter));
    } else {
      shapedFilters.push(shapeCombinedFilterForApi(filter.getFilters(), filter.getCombinator()));
    }
  }
  return shapedFilters.length === 1
    ? shapedFilters[0]
    : { [combinator]: shapedFilters };
}

function shapeSimpleFilterForApi(filter: SimpleFilter): any {
  return {
    [filter.getFieldName()]: {
      [filter.getComparator()]: filter.getComparedValue()
    }
  };
}