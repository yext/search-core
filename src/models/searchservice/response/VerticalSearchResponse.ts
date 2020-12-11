import { VerticalResults } from './VerticalResults';
import { SearchIntent } from './SearchIntent';
import { Facet } from './Facet';
import { LocationBias } from './LocationBias';
import { SpellCheck } from './SpellCheck';

/**
 * A representation of a response from a vertical search
 */
export interface VerticalSearchResponse {
  verticalResults: VerticalResults;
  queryId: string;
  searchIntents?: SearchIntent[];
  facets?: Readonly<Facet[]>;
  spellCheck?: SpellCheck,
  locationBias?: LocationBias,
  allResultsForVertical?: VerticalSearchResponse,
  alternativeVerticals?: Readonly<VerticalResults[]>
}