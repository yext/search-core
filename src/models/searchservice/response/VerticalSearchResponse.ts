import VerticalResults from './VerticalResults';
import { SearchIntent } from './SearchIntent';
import DirectAnswer from './DirectAnswer';
import Facet from './Facet';
import LocationBias from './LocationBias';
import SpellCheck from './SpellCheck';

/**
 * A representation of a response from a vertical search
 */
export default interface VerticalSearchResponseProps {
  verticalResults: VerticalResults;
  queryId: string;
  searchIntents?: SearchIntent[];
  facets?: Readonly<Facet[]>;
  spellCheck?: SpellCheck,
  locationBias?: LocationBias,
  allResultsForVertical?: VerticalSearchResponseProps
}