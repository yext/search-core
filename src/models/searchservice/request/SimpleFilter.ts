/**
 * Represents a single filter comparing a value to a field
 */
export default interface SimpleFilter<T> {
  fieldId: string;
  comparator: string;
  comparedValue: T;
}