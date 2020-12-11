import HighlightedValue from './HighlightedValue';
import { Source } from './Source';

/**
 * An individual search result.
 *
 * @public
 */
export default interface Result {
  /** Raw entity profile data in the shape of key-value pairs. */
  rawData: Record<string, unknown>;
  /** {@inheritDoc Source}*/
  source: Source;
  /** The index of the result among the other results in the search. */
  index?: number;
  /** The name of the result. */
  name?: string;
  /** A description of the result. */
  description?: string;
  /** A hyperlink associated with the result. */
  link?: string;
  /** The result ID which depends on the Result Source. */
  id?: string;
  /** The distance from the user to the result. */
  distance?: number;
  /**
   * The distance from the filter to the result.
   *
   * @privateRemarks
   * Can someone double check me on this?
   */
  distanceFromFilter?: number;
  /** An array of {@link HighlightedValue | highlighted values} associated with the result. */
  highlightedValues?: HighlightedValue[];
  /** The entity type of the result */
  entityType?: string;
}