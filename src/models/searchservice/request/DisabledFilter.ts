/**
 * Represents an unselected facet filter.
 *
 * @remarks
 * This should be used to indicate that a facet filter option is not selected.
 *
 * @public
 */
export interface DisabledFilter {
  /**
   * The fieldId to apply the filter against.
   *
   * @example
   * 'c_jobCategory'
   */
  fieldId: string;

  /**
   * Indicates that the filter is disabled.
   */
  disabled: true;
}
