import { Endpoints } from './Endpoints';

export interface AnswersConfig {
  apiKey: string,
  experienceKey: string,
  locale: string,
  experienceVersion?: 'STAGING' | 'PRODUCTION' | string | number,
  endpoints?: Endpoints
}