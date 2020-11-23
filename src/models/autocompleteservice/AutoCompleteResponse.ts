import SimpleFilter from '../searchservice/request/SimpleFilter';

export interface AutoCompleteResponse {
  sections: any;
  queryId: string;
  inputIntents: any;
}

export interface AutoCompleteResponseResult {
  filter: SimpleFilter;
  key: string;
  matchedSubstrings: any;
  value: string;
  shortValue: string;
  intents: any;
}