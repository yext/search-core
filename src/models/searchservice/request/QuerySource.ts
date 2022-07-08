/**
 * The source of the search request.
 *
 * @public
 */
export enum QuerySource {
  /**
   * Indicates that the query was initiated from a standard Search integration.
   */
  Standard = 'STANDARD',
  /**
   * Indicates that the query was initiated from a Search Overlay.
   */
  Overlay = 'OVERLAY',
  /**
   * Indicates that the query was initiated from visual autocomplete.
   */
  Autocomplete = 'AUTOCOMPLETE'
}