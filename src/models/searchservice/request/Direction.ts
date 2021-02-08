/**
 * The direction of a sort.
 *
 * @public
 */
export enum Direction {
  /**
   *  An ascending sort
   *
   * @remarks
   * For numbers this sort is low to high. For text it is alphabetical. For dates it is chronological order.
   */
  Ascending = 'ASC',
  /**
   * A descending soft
   *
   * @remarks
   * For numbers this sort is high to low. For text it is reverse alphabetical. For dates it is reverse
   * chronological order.
   */
  Descending = 'DESC'
}