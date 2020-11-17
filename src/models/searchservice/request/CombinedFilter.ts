import SimpleFilter from './SimpleFilter';

/**
 * Represents more than one filter that will be combined to refine results.
 */
export default class CombinedFilter {
  constructor(
    private filters: (SimpleFilter | CombinedFilter)[],
    private combinator: FilterCombinator) {}

  getFilters(): (SimpleFilter | CombinedFilter)[] {
    return this.filters;
  }

  getCombinator(): FilterCombinator {
    return this.combinator;
  }
}

export enum FilterCombinator {
  AND = '$and',
  OR = '$or'
}