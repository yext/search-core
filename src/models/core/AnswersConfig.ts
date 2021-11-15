import { Endpoints } from './Endpoints';
import { Visitor } from './Visitor';

/**
 * Configuration options for {@link AnswersCore}.
 * @public
 */
export interface AnswersConfig {
  /** The api key of the answers experience. */
  apiKey: string,
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
 * options from {@link AnswersConfig}, but requires token instead of apiKey.
 * @public
 */
export interface AnswersConfigWithToken extends Omit<AnswersConfig,'apiKey'> {
  /** The authentication token of the answers experience. */
  token: string
}
