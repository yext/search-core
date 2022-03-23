import { Facet, FacetOption } from '../models/searchservice/request/Facet';
import { ApiStaticFilters } from '../models/searchservice/request/ApiStaticFilters';
import { shapeFilterForApi } from './serializeStaticFilters';

export function serializeFacets(filters: Facet[]): string {
  return JSON.stringify(filters.reduce((obj, facet) => {
    const fieldId = facet.fieldId;
    const shapedFacets = shapeFacetOptionArrayForApi(facet.options, fieldId);
    obj[fieldId] = shapedFacets;
    return obj;
  }, {} as { [key: string]: ApiStaticFilters[] }));
}

function shapeFacetOptionArrayForApi(options: FacetOption[], fieldId: string): ApiStaticFilters[] {
  return options.map((option) => {
    return shapeFilterForApi({...option, fieldId: fieldId});
  });
}