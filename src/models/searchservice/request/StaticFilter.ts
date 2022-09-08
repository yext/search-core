import { FieldValueFilter } from './FieldValueFilter';

/**
 * Represents a static filter that will be used to refine results.
 *
 * @public
 */
export type StaticFilter = FieldValueStaticFilter | DisjunctionStaticFilter | ConjunctionStaticFilter;

/**
 * A {@link FieldValueFilter} with the kind of filter specified
 * to discriminate between static filter types.
 *
 * @public
 */
export interface FieldValueStaticFilter extends FieldValueFilter {
  /** The kind of static filter. */
  kind: 'fieldValue'
}

/**
 * A static filter composed by combining filters with the logical OR
 * operator. The combined filters can either be field value filters or
 * other disjunction filters.
 *
 * @public
 */
export interface DisjunctionStaticFilter {
  /** {@inheritDoc FieldValueStaticFilter.kind} */
  kind: 'disjunction',
  /** {@inheritDoc FilterCombinator.OR} */
  combinator: FilterCombinator.OR,
  /** The filters to combine together. */
  filters: (DisjunctionStaticFilter | FieldValueStaticFilter)[]
}

/**
 * A static filter composed by combining other static filters with the
 * logical AND operator.
 *
 * @public
 */
export interface ConjunctionStaticFilter {
  /** {@inheritDoc FieldValueStaticFilter.kind} */
  kind: 'conjunction',
  /** {@inheritDoc FilterCombinator.AND} */
  combinator: FilterCombinator.AND,
  /** {@inheritDoc DisjunctionStaticFilter.filters} */
  filters: StaticFilter[]
}

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