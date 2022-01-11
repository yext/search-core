import { QueryParams } from '../http/params';

export interface AutocompleteQueryParams extends QueryParams {
  input: string,
  experienceKey: string,
  api_key?: string,
  v: number,
  version?: string | number,
  locale?: string,
  sessionTrackingEnabled?: boolean,
  visitorId?: string,
  visitorIdMethod?: string
}