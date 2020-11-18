export default class AutoCompleteData {
  private sections: any;
  private queryId: string;
  private inputIntents: any;

  constructor(data: any) {
    this.sections = data.sections || [];
    this.queryId = data.queryId || '';
    this.inputIntents = data.inputIntents || [];
    Object.freeze(this);
  }

  static from(response: any): AutoCompleteData {
    let sections;
    if (response.sections) {
      sections = response.sections.map((s: any) => ({
        label: s.label,
        results: s.results.map((r: any) => new AutoCompleteResult(r)),
        resultsCount: s.results.length
      }));
    } else {
      sections = [{
        results: response.results.map((r: any) => new AutoCompleteResult(r)),
        resultsCount: response.results.length
      }];
    }
    const inputIntents = response.input ? response.input.queryIntents : [];
    return new AutoCompleteData({
      sections,
      queryId: response.queryId,
      inputIntents });
  }
}

export class AutoCompleteResult {
  private filter: any;
  private key: string;
  private matchedSubstrings: any;
  private value: string;
  private shortValue: any;
  private intents: any;

  constructor(data: any) {
    this.filter = data.filter || {};
    this.key = data.key || '';
    this.matchedSubstrings = data.matchedSubstrings || [];
    this.value = data.value || '';
    this.shortValue = data.shortValue || this.value;
    this.intents = data.queryIntents || [];
    Object.freeze(this);
  }
}