import { Facet, FacetOption } from '../models/searchservice/request/Facet';
import { ApiStaticFilters } from '../models/searchservice/request/ApiStaticFilters';
import { shapeFieldValueFilterForApi } from './serializeStaticFilters';

export function serializeFacets(filters: Facet[]): string {
  return JSON.stringify(filters.reduce<Record<string, ApiStaticFilters[]>>((obj, facet) => {
    const fieldId = facet.fieldId;
    const shapedFacets = shapeFacetOptionArrayForApi(facet.options, fieldId);
    obj[fieldId] = shapedFacets;
    return obj;
  }, {}));
}

function shapeFacetOptionArrayForApi(options: FacetOption[], fieldId: string): ApiStaticFilters[] {
  return options.map((option) => {
    return shapeFieldValueFilterForApi({ ...option, fieldId: fieldId });
  });
}