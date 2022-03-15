
/**
 * Additional agents used to create the Answers experience. These agents are added to the
 * Client-SDK HTTP header along with the ANSWERS_CORE agent.
 *
 * @public
 **/
export interface CustomClientSdk {
  /** A mapping of the additional agents that are part of the Client-SDK to their versions. */
  [agent: string]: string | undefined,
  /**
   * The ANSWERS_CORE agent should not be supplied. Instead, it will be automatically added to the
   * header and populated with the version of Answers Core being used.
   */
  ANSWERS_CORE?: never
}

/** The Client-SDK including the ANSWERS_CORE agent. */
export interface ClientSdk {
  [agent: string]: string,
  ANSWERS_CORE: string
}
