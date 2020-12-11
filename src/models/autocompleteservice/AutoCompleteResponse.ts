import { SimpleFilter } from '../searchservice/request/SimpleFilter';
import { SearchIntent } from '../searchservice/response/SearchIntent';

export interface AutoCompleteResponse {
  results: AutoCompleteResult[];
  inputIntents: SearchIntent[];
  queryId?: string;
}

export interface FilterAutoCompleteResponse {
  sectioned: boolean,
  sections?: {
    label: string,
    results: AutoCompleteResult[];
  }[],
  results?: AutoCompleteResult[],
  inputIntents: SearchIntent[];
  queryId?: string
}

export interface AutoCompleteResult {
  value: string;
  filter?: SimpleFilter;
  key?: string;
  matchedSubstrings?: {
    length: number,
    offset: number
  }[];
  shortValue?: string;
  relatedItem?: {
    data: Record<string, unknown>,
    highlightedFields: Record<string, unknown>
  };
}