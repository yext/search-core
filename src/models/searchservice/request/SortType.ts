/**
 * The method of sorting.
 *
 * @public
 */
export enum SortType {
  /**
   * Sorts based on a field with the direction specified.
   */
  Field = 'FIELD',
  /**
   * Sorts based on entity distance alone.
   */
  EntityDistance = 'ENTITY_DISTANCE',
  /**
   * Sorts based on relevance according to the algorithm and, when relevant, location bias.
   */
  Relevance = 'RELEVANCE'
}