export interface CoreOptions {
  apiKey: string;
  experienceKey: string;
  environment: string;
  apiVersion: string | number;
  sessionTrackingEnabled: boolean;
  jsLibVersion: string;
  beta: string;
}

export class Core {
  constructor() {
    console.log('I\'m alive!');
  }
}