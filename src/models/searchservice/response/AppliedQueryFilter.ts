/**
 * A filter that the Answers API determined should be applied to the search
 */
export default interface AppliedQueryFilter {
  key: string;
  value: string;
  // filter: Filter,
}