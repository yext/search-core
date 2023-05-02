import { Endpoints } from './models/core/Endpoints';

export const defaultApiVersion = 20220511;

export enum CloudRegion {
  US = 'us',
  EU = 'eu',
}

export enum Environment {
  PROD = 'prod',
  SANDBOX = 'sbx',
}

/**
 * Provides methods for getting various endpoints.
 *
 * @public
 */
export class EndpointsProvider {
  private readonly environment: Environment;
  private readonly cloudRegion: CloudRegion;
  private readonly overrideEndpoints?: Endpoints;

  constructor(environment?: Environment, cloudRegion?: CloudRegion, overrideEndpoints?: Endpoints) {
    this.environment = environment || Environment.PROD;
    this.cloudRegion = cloudRegion || CloudRegion.US;
    this.overrideEndpoints = overrideEndpoints;
  }

  /** @internal */
  getDomain() {
    return `https://${this.environment}-cdn.${this.cloudRegion}.yextapis.com`;
  }

  /**
   * Provides all endpoints based on environment and cloud region. Include any custom
   * overrides in overrideEndpoints.
   *
   * @remarks
   * Returns an {@link Endpoints} instance.
   *
   * @public
   */
  getEndpoints() {
    return {
      universalSearch: this.getUniversalSearchEndpoint(),
      verticalSearch: this.getVerticalSearchEndpoint(),
      questionSubmission: this.getQuestionSubmissionEndpoint(),
      status: this.getStatusEndpoint(),
      universalAutocomplete: this.getUniversalAutocomplete(),
      verticalAutocomplete: this.getVerticalAutocomplete(),
      filterSearch: this.getFilterSearchEndpoint(),
    };
  }

  /**
   * Returns the endpoint for universal search.
   * @public
   * */
  getUniversalSearchEndpoint() {
    return this.overrideEndpoints?.universalSearch ||
      `${this.getDomain()}/v2/accounts/me/search/query`;
  }

  /**
   * Returns the endpoint for vertical search.
   * @public
   * */
  getVerticalSearchEndpoint() {
    return this.overrideEndpoints?.verticalSearch ||
      `${this.getDomain()}/v2/accounts/me/search/vertical/query`;
  }

  /**
   * Returns the endpoint for question submission.
   * @public
   * */
  getQuestionSubmissionEndpoint() {
    return this.overrideEndpoints?.questionSubmission ||
      `${this.getDomain()}/v2/accounts/me/createQuestion`;
  }

  /**
   * Returns the endpoint for status.
   * @public
   * */
  getStatusEndpoint() {
    return this.overrideEndpoints?.status || 'https://answersstatus.pagescdn.com';
  }

  /**
   * Returns the endpoint for universal autocomplete.
   * @public
   * */
  getUniversalAutocomplete() {
    return this.overrideEndpoints?.universalAutocomplete ||
      `${this.getDomain()}/v2/accounts/me/search/autocomplete`;
  }

  /**
   * Returns the endpoint for vertical autocomplete.
   * @public
   * */
  getVerticalAutocomplete() {
    return this.overrideEndpoints?.verticalAutocomplete ||
      `${this.getDomain()}/v2/accounts/me/search/vertical/autocomplete`;
  }

  /**
   * Returns the endpoint for filter search.
   * @public
   * */
  getFilterSearchEndpoint() {
    return this.overrideEndpoints?.filterSearch ||
      `${this.getDomain()}/v2/accounts/me/search/filtersearch`;
  }
}

/**
 * The endpoints to use for sandbox experiences.
 * @deprecated Use {@link EndpointsProvider} instead
 * @public
 */
export const SandboxEndpoints: Required<Endpoints> =
  new EndpointsProvider(Environment.SANDBOX, CloudRegion.US).getEndpoints();