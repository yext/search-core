import VerticalResult from './VerticalResult';
import SearchIntent from './SearchIntent';

export default class VerticalSearchResponse {

  constructor(
    verticalResult: VerticalResult,
    queryId: string,
    // directAnswer?: DirectAnswer;
    searchIntents?: [SearchIntent],
    // spellCheckedQuery?: SpellCheckedQuery,
    // alternativeVerticals?: [AlternativeVertical];
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
