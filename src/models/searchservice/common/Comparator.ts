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
   * Compatible with all field types.
   */
  Equals = '$eq',
  /**
   * A not equals comparison.
   *
   * @remarks
   * Compatible with all field types.
   */
  NotEquals = '!$eq',
  /**
   * A less than comparison.
   *
   * @remarks
   * Compatible with integer, float, date, datetime, and time fields.
   */
  LessThan = '$lt',
  /**
   * A less or equal to comparison.
   *
   * @remarks
   * Compatible with integer, float, date, datetime, and time fields.
   */
  LessThanOrEqualTo = '$le',
  /**
   * A greater than comparison.
   *
   * @remarks
   * Compatible with integer, float, date, datetime, and time fields.
   */
  GreaterThan = '$gt',
  /**
   * A greater than or equal to comparison.
   *
   * @remarks
   * Compatible with integer, float, date, datetime, and time fields.
   */
  GreaterThanOrEqualTo = '$ge'
}