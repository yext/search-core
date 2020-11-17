import VerticalResults from './VerticalResults';
import { SearchIntent } from './SearchIntent';
import DirectAnswer from './DirectAnswer';
import SpellCheck from './SpellCheck';
import LocationBias from './LocationBias';
import AnswersError from '../../core/AnswersError';

/**
 * A representation of a response from a universal search
 */
export default interface UniversalSearchResponse {
  verticalResults: VerticalResults[],
  queryId?: string,
  directAnswer?: DirectAnswer,
  searchIntents?: SearchIntent[],
  spellCheck?: SpellCheck,
  locationBias?: LocationBias,
  errors?: AnswersError[]
}