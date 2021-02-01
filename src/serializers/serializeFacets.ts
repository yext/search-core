import { Facet, FacetOption } from '../models/searchservice/request/Facet';
import { StaticFilters } from '../models/searchservice/request/StaticFilters';
import { shapeSimpleFilterForApi } from './serializeStaticFilters';

export function serializeFacets(filters: Facet[]): string {
  return JSON.stringify(filters.reduce((obj, facet) => {
    const fieldId = facet.fieldId;
    const shapedFacets = shapeFacetOptionArrayForApi(facet.options, fieldId);
    obj[fieldId] = shapedFacets;
    return obj;
  }, {} as { [key: string]: StaticFilters[] }));
}

function shapeFacetOptionArrayForApi(options: FacetOption[], fieldId: string): StaticFilters[] {
  return options.map((option) => {
    return shapeSimpleFilterForApi({...option, fieldId: fieldId});
  });
}