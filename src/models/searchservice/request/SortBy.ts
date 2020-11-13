/**
 * Represents a criterion that can be used to sort results
 */
export default interface SortBy {
  type: string;
  field: string;
  direction: string;
}