import { HighlightedFields } from './HighlightedFields';
import { Source } from './Source';

/**
 * An individual search result.
 *
 * @public
 */
export interface Result<T = Record<string, unknown>> {
  /** Raw entity profile data in the shape of key-value pairs. */
  rawData: T,
  /** {@inheritDoc Source} */
  source: Source,
  /** The index of the result among the other results in the search. */
  index?: number,
  /** The name of the result. */
  name?: string,
  /** A description of the result. */
  description?: string,
  /** A hyperlink associated with the result. */
  link?: string,
  /** The result ID which depends on the Result Source. */
  id?: string,
  /** The distance from the user to the result in meters. */
  distance?: number,
  /**
   * The distance from a {@link AppliedQueryFilter} location to the result in meters.
   *
   * @remarks
   * The filter may be an inferred from the search query, or it may be specified
   * explicitly through a facet or static filter on a {@link VerticalSearchRequest}.
   *
   * @example
   * If a user searches for 'Offices in New York' and the VerticalResults contain an
   * `AppliedQueryFilter` for 'New York', the distanceFromFilter value will be from
   * the search result to 'New York'.
   */
  distanceFromFilter?: number,
  /** The {@link HighlightedFields | highlighted fields} emphasized by the api. */
  highlightedFields?: HighlightedFields,
  /** The entity type of the result. */
  entityType?: string
}