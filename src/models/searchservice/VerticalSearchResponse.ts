import VerticalResult from './VerticalResult';
import { SearchIntent } from '../../constants';
import DirectAnswer from './DirectAnswer';

interface VerticalSearchResponseProps {
  verticalResult: VerticalResult;
  queryId: string;
  directAnswer?: DirectAnswer;
  searchIntents?: SearchIntent[];
  // private spellCheckedQuery?: SpellCheckedQuery;
  // private alternativeVerticals?: [AlternativeVertical];
}

export default class VerticalSearchResponse {

  private constructor(private props: VerticalSearchResponseProps) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static from(data: any): VerticalSearchResponse {
    if (!data.response){
      throw Error('The search data does not contain a response property');
    }

    return new VerticalSearchResponse({
      verticalResult: VerticalResult.from(data.response),
      queryId: data.response.queryId,
      directAnswer: data.response.directAnswer,
      searchIntents: data.response.searchIntents
    });
  }

  getVerticalResult(): VerticalResult {
    return this.props.verticalResult;
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
