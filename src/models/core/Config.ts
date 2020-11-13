export default interface Config {
  apiKey: string,
  experienceKey: string,
  locale?: string,
  configurationLabel?: 'STAGING' | 'PRODUCTION' | string,
}