import { Environments } from '../../constants';

export default interface Config {
  apiKey: string,
  experienceKey: string,
  environment: Environments,
  locale: string,
  configurationLabel?: 'STAGING' | 'PRODUCTION' | string,
}