/**
 * A Matcher is a filtering operation.
 *
 * @public
 */
export enum Matcher {
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
   * A less than or equal to comparison.
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
  GreaterThanOrEqualTo = '$ge',
  /**
   * A comparison of whether an entity is within a certain radius of a certain location.
   *
   * @remarks
   * Only compatible with the builtin.location field.
   */
  Near = '$near',
  /**
   * A limitation of the dataset to a range of values.
   *
   * @remarks
   * Compatible with integer and float.
   */
  Between = '$between'
}
