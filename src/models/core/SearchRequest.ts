import { AdditionalHttpHeaders } from './AdditionalHttpHeaders';

/**
 * Options for a Search API request.
 *
 * @public
 */
export interface SearchRequest {
  /** {@inheritDoc AdditionalHttpHeaders} */
  additionalHttpHeaders?: AdditionalHttpHeaders
}