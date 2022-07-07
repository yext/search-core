import { AdditionalHttpHeaders } from '../models/core/AdditionalHttpHeaders';
import packageJson from '../../package.json';

const { version } = packageJson;

export function getClientSdk(
  additionalHttpHeaders?: AdditionalHttpHeaders
): Record<string, string> {
  const coreAgent = { ANSWERS_CORE: version };
  if (!additionalHttpHeaders) {
    return coreAgent;
  }
  const customClientSdk = additionalHttpHeaders['Client-SDK'] ?? {};

  return Object.entries(customClientSdk).reduce((clientSdk, [agent, version]) => {
    return version
      ? {
        ...clientSdk,
        [agent]: version
      }
      : clientSdk;
  }, coreAgent);
}