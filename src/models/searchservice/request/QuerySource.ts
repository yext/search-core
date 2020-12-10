/**
 * The source of the search request
 *
 * @public
 */
export enum QuerySource {
  /**
   * Indicates that the query was initiated from a standard Answers integration
   */
  Standard = 'STANDARD',
  /**
   * Indicates that the query was initaited from an Answers Overlay
   */
  Overlay = 'OVERLAY'
}