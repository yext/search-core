import { Endpoints } from './models/core/Endpoints';
import { Environment } from './models/core/Environment';
import { CloudRegion } from './models/core/CloudRegion';
import { ServingConfig } from './models/core/SearchConfig';

export const defaultApiVersion = 20220511;

/**
 * Provides methods for getting various endpoints.
 *
 * @internal
 */
export class EndpointsAdapter {
  private readonly environment: Environment;
  private readonly cloudRegion: CloudRegion;

  constructor(config?: ServingConfig) {
    this.environment = config?.environment || Environment.PROD;
    this.cloudRegion = config?.cloudRegion || CloudRegion.US;
  }

  /** Provides the domain based on environment and cloud region.
   * @internal
   */
  getDomain() {
    return `https://${this.environment}-cdn.${this.cloudRegion}.yextapis.com`;
  }

  /**
   * Provides all endpoints based on environment and cloud region.
   * @internal
   */
  getEndpoints() {
    return {
      universalSearch: `${this.getDomain()}/v2/accounts/me/search/query`,
      verticalSearch: `${this.getDomain()}/v2/accounts/me/search/vertical/query`,
      questionSubmission: `${this.getDomain()}/v2/accounts/me/createQuestion`,
      status: 'https://answersstatus.pagescdn.com',
      universalAutocomplete: `${this.getDomain()}/v2/accounts/me/search/autocomplete`,
      verticalAutocomplete: `${this.getDomain()}/v2/accounts/me/search/vertical/autocomplete`,
      filterSearch: `${this.getDomain()}/v2/accounts/me/search/filtersearch`,
    };
  }
}

/**
 * The endpoints to use for sandbox experiences.
 *
 * @deprecated Use {@link provideEndpoints} instead
 *
 * @public
 */
export const SandboxEndpoints: Required<Endpoints> =
  new EndpointsAdapter({ environment: Environment.SANDBOX, cloudRegion: CloudRegion.US })
    .getEndpoints();

/**
 * Provides all endpoints based on environment and cloud region.
 *
 * @remarks
 * Returns an {@link Endpoints} instance.
 *
 * @param config - serving config to use for the domain, defaults to Prod and US if not provided.
 *
 * @public
 */
export function provideEndpoints(config?: ServingConfig): Required<Endpoints> {
  return new EndpointsAdapter(config).getEndpoints();
}
