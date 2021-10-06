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
export interface ApiKeyRequiredAnswersConfig extends BaseAnswersConfig {
  /**
   * {@inheritDoc BaseAnswersConfig.apiKey}
   */
  apiKey: string,
  /**
   * {@inheritDoc BaseAnswersConfig.token}
   *
   * @remarks
   * token should not be provided along with apiKey
   */
  token?: never
}

/**
 * Configuration options for {@link AnswersCore}, following {@link BaseAnswersConfig},
 * but requires token.
 * @public
 */
export interface TokenRequiredAnswersConfig extends BaseAnswersConfig {
  /**
   * {@inheritDoc BaseAnswersConfig.token}
   */
  token: string,
  /**
   * {@inheritDoc BaseAnswersConfig.apiKey}
   *
   * @remarks
   * apiKey should not be provided along with token
   */
  apiKey?: never
}

/**
 * The main configuration options for {@link AnswersCore}
 * that requires either apiKey ({@link ApiKeyRequiredAnswersConfig})
 * or token ({@link TokenRequiredAnswersConfig}).
 *
 * @public
 */
export type AnswersConfig = ApiKeyRequiredAnswersConfig | TokenRequiredAnswersConfig;
