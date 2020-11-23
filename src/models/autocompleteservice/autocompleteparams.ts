import { SearchParameters } from './AutoCompleteRequest';

export interface AutoCompleteQueryParams {
  [key: string]: string | number | boolean | undefined | SearchParameters
  input: string,
  experienceKey: string,
  api_key: string,
  v: number,
  version?: string | number,
  locale?: string,
  sessionTrackingEnabled?: boolean
}