import { Environments } from '../../constants';

export default interface Config {
  apiKey: string,
  experienceKey: string,
  environment: Environments,
  jsLibVersion: string,
  locale: string,
  configurationLabel?: 'STAGING' | 'PRODUCTION' | string,
}