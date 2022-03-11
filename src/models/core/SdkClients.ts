
/**
 * Additional agents to add to the SDK-Clients HTTP header.
 *
 * @public
 **/
export type CustomSdkClients = Record<string, string> & { ANSWERS_CORE: never };

/** SDK-Clients including the ANSWERS_CORE one */
export type SdkClients = Record<string, string> & { ANSWERS_CORE: string };
