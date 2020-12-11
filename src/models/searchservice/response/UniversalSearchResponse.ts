import VerticalResults from './VerticalResults';
import { SearchIntent } from './SearchIntent';
import DirectAnswer from './DirectAnswer';
import SpellCheck from './SpellCheck';
import LocationBias from './LocationBias';
import AnswersError from '../../core/AnswersError';

/**
 * A representation of a response from a universal search.
 *
 * @public
 */
export default interface UniversalSearchResponse {
  /** An array of {@link VerticalResults} which represent the results for each vertical. */
  verticalResults: VerticalResults[],
  /** The ID of the search query. */
  queryId?: string,
  /** {@inheritDoc DirectAnswer} */
  directAnswer?: DirectAnswer,
  /** An array of {@link SearchIntent}s which represents requests from the API. */
  searchIntents?: SearchIntent[],
  /** {@inheritDoc SpellCheck} */
  spellCheck?: SpellCheck,
  /** {@inheritDoc LocationBias} */
  locationBias?: LocationBias,
  /** An array of {@link AnswersError}s from the API. */
  errors?: AnswersError[]
}