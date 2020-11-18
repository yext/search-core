import { Environments } from '../../constants';

export default interface Config {
  apiKey: string,
  experienceKey: string,
  locale?: string,
  experienceVersion?: 'STAGING' | 'PRODUCTION' | string,
  environment: string,
  searchParameters?: any
}