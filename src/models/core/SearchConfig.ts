import { Endpoints } from './Endpoints';
import { Visitor } from './Visitor';

/**
 * The base configuration options for {@link SearchCore}.
 * @public
 */
export interface BaseSearchConfig {
  /** The experience key of the answers experience. */
  experienceKey: string,
  /** The locale of the answers experience. */
  locale: string,
  /**
   * The version of the answers experience configuration.
   *
   * @remarks
   * May be a configuration label (string) or a configuration version (number).
   *
   * @example
   * Examples: 'PRODUCTION', 42
   */
  experienceVersion?: 'STAGING' | 'PRODUCTION' | string | number,
  /** {@inheritDoc Visitor} */
  visitor?: Visitor,
  /**
   * {@inheritDoc Endpoints}
   *
   * @public
   */
  endpoints?: Endpoints,
  /**
   * Additional query params added on to every request.
   *
   * @alpha
   */
  additionalQueryParams?: {
    [key: string]: string | number | boolean
  }
}

/**
 * Configuration options for {@link SearchCore}, which includes the
 * options from {@link BaseSearchConfig}, but requires apiKey.
 * @public
 */
export interface SearchConfigWithApiKey extends BaseSearchConfig {
  /** The api key of the answers experience which will be sent as a query param. */
  apiKey: string,
  /**
   * token should NOT be provided along with apiKey.
   */
  token?: never
}

/**
 * Configuration options for {@link SearchCore}, which includes the
 * options from {@link BaseSearchConfig}, but requires token.
 * @public
 */
export interface AnswersConfigWithToken extends BaseSearchConfig {
  /**
   * The authentication token of the answers experience
   * which will be passed in the Auth header as a Bearer token.
   */
  token: string,
  /**
   * apiKey should NOT be provided along with token.
   */
  apiKey?: never
}

/**
 * The main configuration options for {@link SearchCore}.
 * For a full description of the options, see {@link BaseSearchConfig}.
 * The config requires either an apiKey or a token.
 *
 * @public
 */
export type SearchConfig = SearchConfigWithApiKey | AnswersConfigWithToken;

/**
 * The AnswersConfig after any defaulting has been done from within answers-core.
 *
 * @internal
 */
export type AnswersConfigWithDefaulting = SearchConfig & { endpoints: Required<Endpoints> };