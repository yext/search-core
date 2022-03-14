import { ClientSdk, CustomClientSdk } from '../models/core/ClientSdk';
import packageJson from '../../package.json';

const { version } = packageJson;

export function getClientSdk(clientSdk?: CustomClientSdk): ClientSdk {
  return {
    ...clientSdk,
    ANSWERS_CORE: version
  };
}