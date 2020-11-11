import VerticalResult from './VerticalResult';
import { SearchIntent } from '../../constants';

export default class VerticalSearchResponse {

  private constructor(
    private verticalResult: VerticalResult,
    private queryId: string,
    // private directAnswer?: DirectAnswer;
    private searchIntents?: SearchIntent[],
    // private spellCheckedQuery?: SpellCheckedQuery,
    // private alternativeVerticals?: [AlternativeVertical];
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static from(data: any): VerticalSearchResponse {
    if (!data.response){
      throw Error('The search data does not contain a response property');
    }

    return new VerticalSearchResponse(
      VerticalResult.from(data.response),
      data.response.queryId,
      data.response.searchIntents
    );
  }

  getVerticalResult(): VerticalResult {
    return this.verticalResult;
  }

  getQueryId(): string {
    return this.queryId;
  }

  getSearchIntents(): SearchIntent[] {
    return this.searchIntents ?? [];
  }
}
