export interface QueryParams {
  [key: string]: string | number | boolean | undefined
}

export interface SanitizedQueryParams {
  [key: string]: string | number | boolean
}

/**
 * Internal interface representing the universal search query params
 */
export interface UniversalSearchQueryParams extends QueryParams {
  input: string,
  experienceKey: string,
  api_key: string,
  v: number,
  version?: string,
  location?: string,
  locale?: string,
  skipSpellCheck?: boolean,
  sessionTrackingEnabled?: boolean
  queryTrigger?: string,
  /* (cea2aj) Does it make sense for the core to send these params? */
  // context?: string,
  // referrerPageUrl?: string
}