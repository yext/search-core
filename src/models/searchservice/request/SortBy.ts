/**
 * Represents a criterion that can be used to sort results.
 *
 * @public
 */
export interface SortBy {
  /** The type of sort. */
  type: 'FIELD' | 'ENTITY_DISTANCE' | 'RELEVANCE';
  /** The field name to sort by. Required only if SortBy type is 'FIELD'. */
  field: string;
  /** Direction to sort by. */
  direction: 'ASC' | 'DESC';
}