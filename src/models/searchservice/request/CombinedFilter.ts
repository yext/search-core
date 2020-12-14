import { SimpleFilter } from './SimpleFilter';

/**
 * Represents more than one filter that will be combined to refine results.
 */
export interface CombinedFilter {
  filters: (SimpleFilter | CombinedFilter)[];
  combinator: FilterCombinator;
}

export enum FilterCombinator {
  AND = '$and',
  OR = '$or'
}