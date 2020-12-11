import SimpleFilter from '../models/searchservice/request/SimpleFilter';
import StaticFilters from '../models/searchservice/request/StaticFilters';
import { shapeSimpleFilterForApi } from './serializeStaticFilters';

export function serializeFacetFilters(filters: SimpleFilter[]): string {
  return JSON.stringify(filters
    .reduce(function(obj, filter) {
      const fieldId = filter.fieldId;
      obj[fieldId] = obj[fieldId] || [];
      obj[fieldId].push(shapeSimpleFilterForApi(filter));
      return obj;
  }, {} as { [key: string]: StaticFilters[] }));
}
