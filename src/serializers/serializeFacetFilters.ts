import { DisabledFilter } from '../models/searchservice/request/DisabledFilter';
import { SimpleFilter } from '../models/searchservice/request/SimpleFilter';
import { StaticFilters } from '../models/searchservice/request/StaticFilters';
import { shapeSimpleFilterForApi } from './serializeStaticFilters';

export function serializeFacetFilters(filters: (SimpleFilter | DisabledFilter)[]): string {
  return JSON.stringify(filters
    .reduce(function(obj, filter) {
      const fieldId = filter.fieldId;
      obj[fieldId] = obj[fieldId] || [];
      if (!isDisabledFilter(filter)) {
        obj[fieldId].push(shapeSimpleFilterForApi(filter));
      }
      return obj;
  }, {} as { [key: string]: StaticFilters[] }));
}

function isDisabledFilter(filter: SimpleFilter | DisabledFilter): filter is DisabledFilter {
  return (filter as DisabledFilter).disabled;
}