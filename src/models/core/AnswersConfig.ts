import { Endpoints } from './Endpoints';

/**
 * The main configuration options for {@link AnswersCore}.
 *
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
  /**
   * {@inheritDoc Endpoints}
   *
   * @internal
   */
  endpoints?: Endpoints
}