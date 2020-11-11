/* eslint-disable @typescript-eslint/no-explicit-any */
import VerticalResult from './VerticalResult';
import { SearchIntent } from '../../constants';
//import DirectAnswer from './DirectAnswer';

/**
 * A representation of a response from a universal search
 */
export default class UniversalSearchResponse {
  private constructor(
    private verticalResults: VerticalResult[],
    private queryId: string,
    // private directAnswer?: DirectAnswer,
    private searchIntents?: SearchIntent[],
    // private spellCheckedQuery?: SpellCheckedQuery,
  ) {}

  static from(data: any): UniversalSearchResponse {
    if (!data.response){
      throw Error('The search data does not contain a response property');
    }

    const verticalResults = Array.isArray(data.response.modules)
      ? data.response.modules.map((vertical: any) => VerticalResult.from(vertical))
      : [];

    return new UniversalSearchResponse(
      verticalResults,
      data.response.queryId,
      data.searchIntent
    );
  }

  getVerticalResults(): VerticalResult[] {
    return this.verticalResults ?? [];
  }

  getQueryId(): string {
    return this.queryId ?? null;
  }

  getSearchIntents(): SearchIntent[] {
    return this.searchIntents ?? [];
  }

  /* getDirectAnswer(): DirectAnswer {
    return this.directAnswer;
  }

  getSpellCheckedQuery(): SpellCheckedQuery {
    return this.spellCheckedQuery;
  } */
}
