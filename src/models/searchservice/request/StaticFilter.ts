import { FieldValueFilter } from './FieldValueFilter';

/**
 * Represents a static filter that will be used to refine results.
 *
 * @public
 */
export type StaticFilter =
	{ kind: 'fieldValue', value: FieldValueFilter } |
	{ kind: 'combination', combinator: FilterCombinator, children: StaticFilter[] };

/**
 * Indicates how child filters in a {@link StaticFilter} should be combined.
 *
 * @public
 */
export enum FilterCombinator {
  /** Indicates that filters should be combined with a logical AND. */
  AND = '$and',
  /** Indicates that filters should be combined with a logical OR. */
  OR = '$or'
}