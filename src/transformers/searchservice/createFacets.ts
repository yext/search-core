import { DisplayableFacet, DisplayableFacetOption } from '../../models/searchservice/response/DisplayableFacet';
import { createSimpleFilter } from '../core/createSimpleFilter';

export function createFacets(facets: any): DisplayableFacet[] {
  if (!facets) {
    return [];
  }

  return facets.map((facet: any) => ({
    fieldId: facet.fieldId,
    displayName: facet.displayName,
    options: createFacetOptions(facet.options)
  }));
}

function createFacetOptions(options: any[]): DisplayableFacetOption[] {
  return options.map((option: any) => {
    const simpleFilter = createSimpleFilter(option.filter);

    return {
      displayName: option.displayName,
      count: option.count,
      selected: option.selected,
      comparator: simpleFilter.comparator,
      comparedValue: simpleFilter.comparedValue
    };
  });
}