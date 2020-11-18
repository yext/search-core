import { Environments } from '../../constants';

export default interface Config {
  apiKey: string,
  experienceKey: string,
  locale: string,
  environment?: Environments,
  configurationLabel?: 'STAGING' | 'PRODUCTION' | string,
}