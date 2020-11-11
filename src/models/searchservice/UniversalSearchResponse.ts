/* eslint-disable @typescript-eslint/no-explicit-any */
import VerticalResult from './VerticalResult';
import { SearchIntent } from '../../constants';
import DirectAnswer from './DirectAnswer';

interface UniversalSearchResponseProps {
  verticalResults: VerticalResult[],
  queryId: string,
  directAnswer?: DirectAnswer,
  searchIntents?: SearchIntent[],
  // spellCheckedQuery?: SpellCheckedQuery,
}
/**
 * A representation of a response from a universal search
 */
export default class UniversalSearchResponse {
  private constructor(private props: UniversalSearchResponseProps) {}

  static from(data: any): UniversalSearchResponse {
    if (!data.response){
      throw Error('The search data does not contain a response property');
    }

    const verticalResults = Array.isArray(data.response.modules)
      ? data.response.modules.map((vertical: any) => VerticalResult.from(vertical))
      : [];

    return new UniversalSearchResponse({
      verticalResults: verticalResults,
      queryId: data.response.queryId,
      searchIntents: data.searchIntents
    });
  }

  get verticalResults(): VerticalResult[] {
    return this.props.verticalResults;
  }

  get queryId(): string {
    return this.props.queryId;
  }

  get searchIntents(): SearchIntent[] | undefined {
    return this.props.searchIntents;
  }

 get directAnswer(): DirectAnswer | undefined{
    return this.props.directAnswer;
  }

  /* get spellCheckedQuery(): SpellCheckedQuery {
    return this.spellCheckedQuery;
  } */
}
