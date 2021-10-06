import { Endpoints } from './Endpoints';

/**
 * The base configuration options for {@link AnswersCore}.
 * @public
 */
export interface BaseAnswersConfig {
  /** The api key of the answers experience. */
  apiKey?: string,
  /** The authentication token of the answers experience. */
  token?: string,
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
 * Configuration options for {@link AnswersCore}, following {@link BaseAnswersConfig},
 * but requires apiKey.
 * @public
 */
export interface AnswersConfigWithApiKey extends BaseAnswersConfig {
  /**
   * {@inheritDoc BaseAnswersConfig.apiKey}
   */
  apiKey: string,
  /**
   * token should NOT be provided along with apiKey
   */
  token?: never
}

/**
 * Configuration options for {@link AnswersCore}, following {@link BaseAnswersConfig},
 * but requires token.
 * @public
 */
export interface AnswersConfigWithToken extends BaseAnswersConfig {
  /**
   * {@inheritDoc BaseAnswersConfig.token}
   */
  token: string,
  /**
   * apiKey should NOT be provided along with token
   */
  apiKey?: never
}

/**
 * The main configuration options for {@link AnswersCore}
 * that requires either apiKey ({@link AnswersConfigWithApiKey})
 * or token ({@link AnswersConfigWithToken}) in addition to the
 * options specified in {@link BaseAnswersConfig}.
 *
 * @public
 */
export type AnswersConfig = AnswersConfigWithApiKey | AnswersConfigWithToken;
