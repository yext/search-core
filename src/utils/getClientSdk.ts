import { AdditionalHttpHeaderValues } from '../models/core/AdditionalHttpHeaderValues';
import packageJson from '../../package.json';

const { version } = packageJson;

export function getClientSdk(
  additionalHttpHeaderValues?: AdditionalHttpHeaderValues
): Record<string, string> {
  const coreAgent = { ANSWERS_CORE: version };
  if (!additionalHttpHeaderValues) {
    return coreAgent;
  }
  const customClientSdk = additionalHttpHeaderValues['Client-SDK'] ?? {};

  return Object.entries(customClientSdk).reduce((clientSdk, [agent, version]) => {
    return version
      ? {
        ...clientSdk,
        [agent]: version
      }
      : clientSdk;
  }, coreAgent);
}