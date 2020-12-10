/**
 * Represents a filter which compares values to a single field
 *
 * @public
 */
export default interface SimpleFilter {
  fieldId: string;
  comparator: string;
  comparedValue: string | number | boolean;
}