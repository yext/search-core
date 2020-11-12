import VerticalResults from './VerticalResults';
import { SearchIntent } from './SearchIntent';
import DirectAnswer from './DirectAnswer';

/**
 * A representation of a response from a vertical search
 */
export default interface VerticalSearchResponseProps {
  verticalResults: VerticalResults;
  queryId: string;
  directAnswer?: DirectAnswer;
  searchIntents?: SearchIntent[];
}