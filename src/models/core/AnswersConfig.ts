import { Endpoints } from './Endpoints';

/**
 * The main configuration options for {@link AnswersCore}.
 */
interface BaseAnswersConfig {
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
 * The main configuration options for {@link AnswersCore}
 * that requires apiKey
 */
export interface ApiKeyRequiredAnswersConfig extends BaseAnswersConfig {
  apiKey: string
}

/**
 * The main configuration options for {@link AnswersCore}
 * that requires token
 */
export interface TokenRequiredAnswersConfig extends BaseAnswersConfig {
  token: string
}

/**
 * The main configuration options for {@link AnswersCore}
 * that requires either apiKey {@link ApiKeyRequiredAnswersConfig}
 * or token {@link TokenRequiredAnswersConfig}.
 *
 * @public
 */
export type AnswersConfig = ApiKeyRequiredAnswersConfig | TokenRequiredAnswersConfig;
