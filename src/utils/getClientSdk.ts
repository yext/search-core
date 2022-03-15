import { ClientSdk, CustomClientSdk } from '../models/core/ClientSdk';
import packageJson from '../../package.json';

const { version } = packageJson;

export function getClientSdk(customClientSdk?: CustomClientSdk): ClientSdk {
  const coreAgent = { ANSWERS_CORE: version };

  return Object.entries(customClientSdk ?? {}).reduce((clientSdk, [agent, version]) => {
    return version ? {
      ...clientSdk,
      [agent]: version
    } : clientSdk;
  }, coreAgent);
}