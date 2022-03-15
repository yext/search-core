
/**
 * Additional agents and their versions used to create the Answers experience. The information for these
 * agents is added to the Client-SDK HTTP header along with that of the ANSWERS_CORE agent.
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
