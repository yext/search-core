import Endpoints from './Endpoints';

export default interface Config {
  apiKey: string,
  experienceKey: string,
  locale: string,
  experienceVersion?: 'STAGING' | 'PRODUCTION' | string | number,
  endpoints?: Endpoints
}