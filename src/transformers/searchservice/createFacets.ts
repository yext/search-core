import { NumberRangeValue } from '../../models/searchservice/common/NumberRangeValue';
import { DisplayableFacet, DisplayableFacetOption } from '../../models/searchservice/response/DisplayableFacet';
import { createFieldValueFilter } from '../core/createFieldValueFilter';

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
    const filter = createFieldValueFilter(option.filter);

    return {
      displayName: option.displayName,
      count: option.count,
      selected: option.selected,
      matcher: filter.matcher,
      value: filter.value as string | number | boolean | NumberRangeValue
    };
  });
}
