import VerticalResults from './VerticalResults';
import { SearchIntent } from '../../constants';
import DirectAnswer from './DirectAnswer';

interface VerticalSearchResponseProps {
  verticalResults: VerticalResults;
  queryId: string;
  directAnswer?: DirectAnswer;
  searchIntents?: SearchIntent[];
  // private spellCheck?: SpellCheck;
  // private alternativeVerticals?: [AlternativeVertical];
}

/**
 * A representation of a response from a vertical search
 */
export default class VerticalSearchResponse {

  private constructor(private props: VerticalSearchResponseProps) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static from(data: any): VerticalSearchResponse {
    if (!data.response){
      throw new Error('The search data does not contain a response property');
    }

    return new VerticalSearchResponse({
      verticalResults: VerticalResults.from(data.response),
      queryId: data.response.queryId,
      directAnswer: data.response.directAnswer,
      searchIntents: data.response.searchIntents
    });
  }

  getVerticalResults(): VerticalResults {
    return this.props.verticalResults;
  }

  getQueryId(): string {
    return this.props.queryId;
  }

  getDirectAnswer(): DirectAnswer | undefined {
    return this.props.directAnswer;
  }

  getSearchIntents(): SearchIntent[] | undefined {
    return this.props.searchIntents;
  }
}
