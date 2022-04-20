import { Result } from './Result';
import { AppliedQueryFilter } from './AppliedQueryFilter';
import { Source } from './Source';

/**
 * Represents results from a search vertical.
 *
 * @public
 */
export interface VerticalResults {
  /** A array of {@link AppliedQueryFilter}s which were applied to the vertical results. */
  appliedQueryFilters: AppliedQueryFilter[],
  /** The duration of the query in milliseconds. */
  queryDurationMillis: number,
  /** An array of search {@link Result}s for the vertical. */
  results: Result[],
  /**
   * The total number of results within the vertical.
   *
   * @remarks
   * This number may be higher than the number of results in the results array
   * since the API limits the number of results returned in each request.
  */
  resultsCount: number,
  /** {@inheritDoc Source} */
  source: Source,
  /** The vertical key associated with the vertical results. */
  verticalKey: string
}
