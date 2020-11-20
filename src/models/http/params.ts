import { SearchParameters } from '../autocompleteservice/AutoCompleteRequest';

export interface QueryParams {
  [key: string]: string | number | boolean | undefined
}

export interface SanitizedQueryParams {
  [key: string]: string | number | boolean
}

export interface AutoCompleteQueryParams {
  [key: string]: string | number | boolean | SearchParameters | undefined
}
