import SimpleFilter from '../searchservice/request/SimpleFilter';
import { SearchIntent } from '../searchservice/response/SearchIntent';

export interface AutoCompleteResponse {
  results: AutoCompleteResult[];
  queryId: string;
  inputIntents: SearchIntent[];
}

export interface AutoCompleteResult {
  filter: SimpleFilter;
  key: string;
  matchedSubstrings: {
    length: number,
    offset: number
  }[];
  inputValue: string;
  shortValue: string;
}