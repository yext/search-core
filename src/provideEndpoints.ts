import { Endpoints } from './models/core/Endpoints';

export const defaultApiVersion = 20220511;

/**
 * Defines the cloud region of the API domains.
 *
 * @public
 */
export enum CloudRegion {
  US = 'us',
  EU = 'eu',
}

/**
 * Defines the environment of the API domains.
 *
 * @public
 */
export enum Environment {
  PROD = 'prod',
  SANDBOX = 'sbx',
}

/**
 * Provides methods for getting various endpoints.
 *
 * @internal
 */
export class EndpointsProvider {
  private readonly environment: Environment;
  private readonly cloudRegion: CloudRegion;

  constructor(environment?: Environment, cloudRegion?: CloudRegion) {
    this.environment = environment || Environment.PROD;
    this.cloudRegion = cloudRegion || CloudRegion.US;
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
  new EndpointsProvider(Environment.SANDBOX, CloudRegion.US).getEndpoints();

/**
 * Provides all endpoints based on environment and cloud region.
 *
 * @remarks
 * Returns an {@link Endpoints} instance.
 *
 * @param environment - environment of the domain to use, defaults to prod if not provided
 * @param cloudRegion - cloud region of the domain to use, defaults to us if not provided
 *
 * @public
 */
export function provideEndpoints(
  environment?: Environment,
  cloudRegion?: CloudRegion
): Required<Endpoints> {
  return new EndpointsProvider(environment, cloudRegion).getEndpoints();
}
