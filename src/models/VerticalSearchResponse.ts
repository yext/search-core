import VerticalResult from './VerticalResult';
import SearchIntent from './SearchIntent';

export default class VerticalSearchResponse {
  verticalResult: VerticalResult;
  queryId: string;
  directAnswer?: DirectAnswer;
  searchIntents?: [SearchIntent];
  spellCheckedQuery?: SpellCheckedQuery;
  alternativeVerticals?: [AlternativeVertical];

  constructor (props: VerticalSearchResponse) {
    this.verticalResult = props.verticalResult;
    this.queryId = props.queryId;
    this.directAnswer = props.directAnswer;
    this.searchIntents = props.searchIntents;
    this.spellCheckedQuery = props.spellCheckedQuery;
  };

  static from (data: any): VerticalSearchResponse {
    if (!data.response){
      throw Error('The search data does not contain a response property');
    }

    return new VerticalSearchResponse({
      verticalResult: VerticalResult.from(data.response),
      queryId: data.response.queryId
    });
  }
}
