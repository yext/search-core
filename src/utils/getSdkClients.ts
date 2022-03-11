import { SdkClients, CustomSdkClients } from '../models/core/SdkClients';
import { version } from '../../package.json';

export function getSdkClients(sdkClients?: CustomSdkClients): SdkClients {
  return {
    ...sdkClients,
    ANSWERS_CORE: '123'
  };
}