import Facet, { FacetOption } from '../../models/searchservice/response/Facet';

export default function createFacets(rawFacets: any): Readonly<Facet[]> {
  const facets: Facet[] = [];
  for (const facet of rawFacets) {
    const options: FacetOption[] = [];
    for (const option of facet.options) {
      const fieldId = Object.keys(option.filter)[0];
      const comparator = Object.keys(option.filter[fieldId])[0];
      options.push({
        displayName: option.displayName,
        count: option.count,
        selected: option.selected,
        filter: {
          fieldId: fieldId,
          comparator: comparator,
          comparedValue: option.filter[fieldId][comparator] as string | number | boolean
        },
      });
    }
    facets.push({
      fieldId: facet.fieldId,
      displayName: facet.displayName,
      options: options
    });
  }
  return Object.freeze(facets);
}