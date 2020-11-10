declare module 'whatwg-fetch';

interface Config {
  apiKey: string,
  experienceKey: string,
  locale?: string,
  apiVersion?: number,
  configurationLabel?: 'STAGING' | 'PRODUCTION' | string,
}
