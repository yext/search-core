/**
 * Represents a criterion that can be used to sort results
 */
export interface SortBy {
  type: string;
  field: string;
  direction: string;
}