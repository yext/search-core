import { Facet, FacetOption } from '../../models/searchservice/response/Facet';
import { createSimpleFilter } from '../core/createSimpleFilter';

export function createFacets(facets: any): Readonly<Facet[]> {
  if (!facets) {
    return [];
  }

  return Object.freeze(facets.map((facet: any) => ({
    fieldId: facet.fieldId,
    displayName: facet.displayName,
    options: createFacetOptions(facet.options)
  })));
}

function createFacetOptions(options: any[]): FacetOption[] {
  return options.map((option: any) => ({
    displayName: option.displayName,
    count: option.count,
    selected: option.selected,
    filter: createSimpleFilter(option.filter)
  }));
}