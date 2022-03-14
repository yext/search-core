import { SdkClients, CustomSdkClients } from '../models/core/SdkClients';
import packageJson from '../../package.json';

const { version } = packageJson;

export function getSdkClients(sdkClients?: CustomSdkClients): SdkClients {
  return {
    ...sdkClients,
    ANSWERS_CORE: version
  };
}