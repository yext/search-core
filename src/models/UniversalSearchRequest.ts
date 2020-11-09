/**
 * Public interface for constructing a universal search
 */
export default interface UniversalSearchRequest {
  query: string,
  // These query trigger values were in the SDK. Do we want to enforce these values?
  // Does the backend expect them?
  queryTrigger?: 'initialize' | 'query-parameter',
  spellCheckEnabled?: boolean,
  sessionTrackingEnabled?: boolean,
  geolocation?: Geolocation
}