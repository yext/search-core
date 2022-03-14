
/**
 * Additional agents to add to the Client-SDK HTTP header.
 *
 * @public
 **/
export type CustomClientSdk = Record<string, string> & { ANSWERS_CORE?: never };

/** The Client-SDK including the ANSWERS_CORE agent. */
export type ClientSdk = Record<string, string> & { ANSWERS_CORE: string };
