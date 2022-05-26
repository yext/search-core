import { Endpoints } from './Endpoints';
import { Visitor } from './Visitor';

/**
 * The base configuration options for {@link AnswersCore}.
 * @public
 */
export interface BaseAnswersConfig {
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
 * Configuration options for {@link AnswersCore}, which includes the
 * options from {@link BaseAnswersConfig}, but requires apiKey.
 * @public
 */
export interface AnswersConfigWithApiKey extends BaseAnswersConfig {
  /** The api key of the answers experience which will be sent as a query param. */
  apiKey: string,
  /**
   * token should NOT be provided along with apiKey.
   */
  token?: never
}

/**
 * Configuration options for {@link AnswersCore}, which includes the
 * options from {@link BaseAnswersConfig}, but requires token.
 * @public
 */
export interface AnswersConfigWithToken extends BaseAnswersConfig {
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
 * The main configuration options for {@link AnswersCore}.
 * For a full description of the options, see {@link BaseAnswersConfig}.
 * The config requires either an apiKey or a token.
 *
 * @public
 */
export type AnswersConfig = AnswersConfigWithApiKey | AnswersConfigWithToken;

/**
 * The AnswersConfig after any defaulting has been done from within answers-core.
 *
 * @internal
 */
export type AnswersConfigWithDefaulting = AnswersConfig & { endpoints: Required<Endpoints> };