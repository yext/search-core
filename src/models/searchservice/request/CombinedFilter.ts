import SimpleFilter from './SimpleFilter';

/**
 * Represents multiple filters that will be combined to refine results.
 *
 * @public
 */
export default interface CombinedFilter {
  /**
   * The filters to be combined
   */
  filters: (SimpleFilter | CombinedFilter)[];
  /**
   * The logical operator used to combine the filters
   */
  combinator: FilterCombinator;
}

/**
 * Indicates how the filters in a {@link CombinedFilter} should be combined
 *
 * @public
 */
export enum FilterCombinator {
  /**
   * Indicates that filters should be combined with a logical AND
   * */
  AND = '$and',
  /**
   * Indicates that filters should be combined with a logical OR
   */
  OR = '$or'
}