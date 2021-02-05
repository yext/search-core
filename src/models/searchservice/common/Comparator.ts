/**
 * A filter's method of comparison.
 *
 * @public
 */
export enum Comparator {
  /**
   * An equals comparison.
   *
   * @remarks
   * Compatible for string, boolean, and numeric filters.
   */
  Equals = '$eq',
  /**
   * A less than comparison.
   *
   * @remarks
   * Only compatible with numeric filters.
   */
  LessThan = '$lt',
  /**
   * A greater than comparison.
   *
   * @remarks
   * Only compatible with numeric filters.
   */
  GreaterThan = '$gt'
}