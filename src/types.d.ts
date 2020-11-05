declare module 'whatwg-fetch';

interface CoreConfig {
  apiKey: string,
  experienceKey: string,
  locale?: string,
  apiVersion?: number,
  configurationLabel?: 'STAGING' | 'PRODUCTION' | string,
}

interface Geolocation {
  lat: string;
  lng: string;
}

