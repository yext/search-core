/**
 * Represents a single filter comparing a value to a field
 */
export interface SimpleFilter {
  fieldId: string;
  comparator: string;
  comparedValue: string | number | boolean;
}