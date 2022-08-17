import { Context } from './Context';
import { LatLong } from './LatLong';
import { QueryTrigger } from './QueryTrigger';
import { QuerySource } from './QuerySource';
import { UniversalLimit } from './UniversalLimit';
import { SearchRequest } from '../../core/SearchRequest';

/**
 * Options which can be specified for a universal search.
 *
 * @public
 */
export interface UniversalSearchRequest extends SearchRequest {
  /** The search query. */
  query: string,
  /** {@inheritDoc QueryTrigger} */
  queryTrigger?: QueryTrigger,
  /** Disables spellcheck if true. */
  skipSpellCheck?: boolean,
  /** Used to track session state when cookies are blocked. */
  sessionId?: string,
  /** Enables session tracking. */
  sessionTrackingEnabled?: boolean,
  /** {@inheritDoc LatLong} */
  location?: LatLong,
  /** {@inheritDoc Context} */
  context?: Context,
  /**
   * The URl of the page which referred the user to the current page.
   *
   * @example
   * If a user is on https://www.yext.com/ and navigates to https://search.yext.com/ and perform a search,
   * the referrerPageUrl would be https://www.yext.com/.
   */
  referrerPageUrl?: string,
  /** {@inheritDoc QuerySource} */
  querySource?: QuerySource | string,
  /** {@inheritDoc UniversalLimit} */
  limit?: UniversalLimit,
  /** If included, the response will only include these verticals. */
  restrictVerticals?: string[]
}