/* eslint-disable @typescript-eslint/no-explicit-any */
import VerticalResults from './VerticalResults';
import { SearchIntent } from '../../constants';
import DirectAnswer from './DirectAnswer';
import SpellCheck from './SpellCheck';

interface UniversalSearchResponseProps {
  verticalResults: VerticalResults[],
  queryId: string,
  directAnswer?: DirectAnswer,
  searchIntents?: SearchIntent[],
  spellCheck?: SpellCheck,
}
/**
 * A representation of a response from a universal search
 */
export default class UniversalSearchResponse {
  private constructor(private props: UniversalSearchResponseProps) {}

  static from(data: any): UniversalSearchResponse {
    if (!data.response){
      throw new Error('The search data does not contain a response property');
    }

    const verticalResults = Array.isArray(data.response.modules)
      ? data.response.modules.map((vertical: any) => VerticalResults.from(vertical))
      : [];

    return new UniversalSearchResponse({
      verticalResults: verticalResults,
      queryId: data.response.queryId,
      directAnswer: data.response.directAnswer && DirectAnswer.from(data.response.directAnswer),
      searchIntents: data.response.searchIntents,
      spellCheck: data.response.spellCheck && SpellCheck.from(data.response.spellCheck)
    });
  }

  get verticalResults(): VerticalResults[] {
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

  get spellCheck(): SpellCheck | undefined {
    return this.props.spellCheck;
  }
}
