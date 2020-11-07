import VerticalResult from './VerticalResult';
import SearchIntent from './SearchIntent';

export default class UniversalSearchResponse {
  verticalResults: [VerticalResult];
  queryId: string;
  directAnswer?: DirectAnswer;
  searchIntents?: [SearchIntent];
  spellCheckedQuery?: SpellCheckedQuery;

  constructor (props: UniversalSearchResponse) {
    this.verticalResults = props.verticalResults;
    this.queryId = props.queryId;
    this.directAnswer = props.directAnswer;
    this.searchIntents = props.searchIntents;
    this.spellCheckedQuery = props.spellCheckedQuery;
  };

  static from (data: any): UniversalSearchResponse {
    if (!data.response){
      throw Error('The search data does not contain a response property');
    }

    return new UniversalSearchResponse({
      verticalResults: VerticalResult.fromArray(data.response.modules),
      queryId: data.response.queryId
    });
  }
}
