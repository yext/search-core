/**
 * A result produced by a document vertical.
 *
 * @public
 */
export interface Segment {
  /** The value of the segment as plain text. */
  text: string,
  /** The similarity score of the segment from 0 to 1 */
  score: number,
  /** The page number of the document that the segment came from. Populated only for pdf files. */
  pageNumber?: number
}