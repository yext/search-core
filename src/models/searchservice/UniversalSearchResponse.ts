import VerticalResult from './VerticalResult';
import SearchIntent from './SearchIntent';

export default class UniversalSearchResponse {
  private constructor(
    readonly verticalResults: [VerticalResult],
    readonly queryId: string,
    // readonly directAnswer?: DirectAnswer,
    readonly searchIntents?: [SearchIntent],
    // readonly spellCheckedQuery?: SpellCheckedQuery,
  ) {}

  static from(data: any): UniversalSearchResponse {
    if (!data.response){
      throw Error('The search data does not contain a response property');
    }

    return new UniversalSearchResponse(
      VerticalResult.fromArray(data.response.modules),
      data.response.queryId
    );
  }
}
