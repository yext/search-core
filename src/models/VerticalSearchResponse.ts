import VerticalResult from './VerticalResult';
import SearchIntent from './SearchIntent';

export default class VerticalSearchResponse {

  constructor(
    readonly verticalResult: VerticalResult,
    readonly queryId: string,
    // readonly directAnswer?: DirectAnswer;
    readonly searchIntents?: [SearchIntent],
    // readonly spellCheckedQuery?: SpellCheckedQuery,
    // readonly alternativeVerticals?: [AlternativeVertical];
  ) {}

  static from(data: any): VerticalSearchResponse {
    if (!data.response){
      throw Error('The search data does not contain a response property');
    }

    return new VerticalSearchResponse(
      VerticalResult.from(data.response),
      data.response.queryId
    );
  }
}
