import { Endpoints } from './Endpoints';
import { Visitor } from './Visitor';
import { Environment } from './Environment';
import { CloudRegion } from './CloudRegion';

/**
 * The configuration options for getting the endpoints.
 *
 * @public
 */
export interface ServingConfig {
  /**
   * {@inheritDoc Environment}
   *
   * @public
   */
  environment?: Environment,
  /**
   * {@inheritDoc CloudRegion}
   *
   * @public
   */
  cloudRegion?: CloudRegion
}

/**
 * The base configuration options for {@link SearchCore}, which includes the
 * options from {@link ServingConfig}.
 *
 * @public
 */
export interface BaseSearchConfig extends ServingConfig {
  /** The experience key of the search experience. */
  experienceKey: string,
  /** The locale of the search experience. */
  locale: string,
  /**
   * The version of the search experience configuration.
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
   * @public
   */
  additionalQueryParams?: {
    [key: string]: string | number | boolean
  },
  /**
   * {@inheritDoc Environment}
   *
   * @public
   */
  environment?: Environment,
  /**
   * {@inheritDoc CloudRegion}
   *
   * @public
   */
  cloudRegion?: CloudRegion
}

/**
 * Configuration options for {@link SearchCore}, which includes the
 * options from {@link BaseSearchConfig}, but requires apiKey.
 * @public
 */
export interface SearchConfigWithApiKey extends BaseSearchConfig {
  /** The api key of the search experience which will be sent as a query param. */
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
export interface SearchConfigWithToken extends BaseSearchConfig {
  /**
   * The authentication token of the search experience
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
export type SearchConfig = SearchConfigWithApiKey | SearchConfigWithToken;

/**
 * The SearchConfig after any defaulting has been done from within search-core.
 *
 * @internal
 */
export type SearchConfigWithDefaulting = SearchConfig & { endpoints: Required<Endpoints> };