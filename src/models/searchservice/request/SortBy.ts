/**
 * Represents a criterion that can be used to sort results
 *
 * @public
 */
export default interface SortBy {
  type: string;
  field: string;
  direction: string;
}