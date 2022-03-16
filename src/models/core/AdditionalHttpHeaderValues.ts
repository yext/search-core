
/**
 * AdditionalHttpHeaderValues allows users to specify additional values for specific HTTP headers.
 *
 * @public
 **/
export interface AdditionalHttpHeaderValues {
  /** {@inheritDoc ClientSDKHeaderValues} */
  'Client-SDK'?: ClientSDKHeaderValues
}

/**
 * Additional agents and their versions used to create the Answers experience. The information for these
 * agents is added to the Client-SDK HTTP header along with that of the ANSWERS_CORE agent.
 *
 * @public
 */
export interface ClientSDKHeaderValues {
  /** A mapping of the additional agents that are part of the Client-SDK to their versions. */
  [agent: string]: string | undefined,
  /**
   * The ANSWERS_CORE agent should not be supplied. Instead, it will be automatically added to the
   * header and populated with the version of Answers Core being used.
   */
  ANSWERS_CORE?: never
}
