import { EndpointsFactory } from '../src/provideEndpoints';
import { CloudChoice, CloudRegion, Environment } from '../src';

it('Sandbox, US, Multi produces expected endpoint', () => {
  const endPoints = new EndpointsFactory({
    environment: Environment.SANDBOX,
    cloudRegion: CloudRegion.US,
    cloudChoice: CloudChoice.GLOBAL_MULTI
  }).getEndpoints();
  expect(endPoints).toHaveProperty('universalSearch', 'https://sbx-cdn-cached.us.yextapis.com/v2/accounts/me/search/query');
});

it('Prod, US, Multi produces expected endpoint', () => {
  const endPoints = new EndpointsFactory({
    environment: Environment.PROD,
    cloudRegion: CloudRegion.US,
    cloudChoice: CloudChoice.GLOBAL_MULTI
  }).getEndpoints();
  expect(endPoints).toHaveProperty('verticalSearch', 'https://prod-cdn-cached.us.yextapis.com/v2/accounts/me/search/vertical/query');
});

it('Prod, US, GCP produces expected endpoint', () => {
  const endPoints = new EndpointsFactory({
    environment: Environment.PROD,
    cloudRegion: CloudRegion.US,
    cloudChoice: CloudChoice.GLOBAL_GCP
  }).getEndpoints();
  expect(endPoints).toHaveProperty('universalAutocomplete', 'https://prod-cdn-cached-gcp.us.yextapis.com/v2/accounts/me/search/autocomplete');
});

it('Prod, EU, Multi produces expected endpoint', () => {
  const endPoints = new EndpointsFactory({
    environment: Environment.PROD,
    cloudRegion: CloudRegion.EU,
    cloudChoice: CloudChoice.GLOBAL_MULTI
  }).getEndpoints();
  expect(endPoints).toHaveProperty('verticalAutocomplete', 'https://prod-cdn-cached.eu.yextapis.com/v2/accounts/me/search/vertical/autocomplete');
});

it('Prod, EU, GCP produces expected endpoint', () => {
  const endPoints = new EndpointsFactory({
    environment: Environment.PROD,
    cloudRegion: CloudRegion.EU,
    cloudChoice: CloudChoice.GLOBAL_GCP
  }).getEndpoints();
  expect(endPoints).toHaveProperty('filterSearch', 'https://prod-cdn-cached-gcp.eu.yextapis.com/v2/accounts/me/search/filtersearch');
});
