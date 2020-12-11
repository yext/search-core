import VerticalResults from './VerticalResults';
import { SearchIntent } from './SearchIntent';
import Facet from './Facet';
import LocationBias from './LocationBias';
import SpellCheck from './SpellCheck';

/**
 * A representation of a response from a vertical search
 *
 * @public
 */
export default interface VerticalSearchResponse {
  /** {@inheritDoc VerticalResults} */
  verticalResults: VerticalResults;
  /** The ID of the query */
  queryId: string;
  /** An array of {@link SearchIntent | search intents} */
  searchIntents?: SearchIntent[];
  /** An array of {@link Facet | facets} asociated with the search results */
  facets?: Readonly<Facet[]>;
  /** {@inheritDoc SpellCheck} */
  spellCheck?: SpellCheck,
  /** {@inheritDoc LocationBias} */
  locationBias?: LocationBias,
  /** {@inheritDoc VerticalSearchResponse} */
  allResultsForVertical?: VerticalSearchResponse,
  /** The {@link VerticalResults | vertical results} for each search vertical */
  alternativeVerticals?: Readonly<VerticalResults[]>
}