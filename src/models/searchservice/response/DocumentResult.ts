import { Segment } from './Segment';

/**
 * Details about the document and the document search algorithm
 *
 * @public
 */
export interface DocumentResult {
  /** The score calculated from whatever document search strategy was used. */
  documentScore: number,
  /** All the relevant segments extracted from the document. */
  segments: Segment[]
}