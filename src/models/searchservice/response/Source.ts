/**
 * Represents the source of a {@link Result}.
 *
 * @public
 */
export enum Source {
  /** The result is from a Knowledge Graph. */
  KnowledgeManager = 'KNOWLEDGE_MANAGER',
  /** The result is from Google Custom Search Engine. */
  Google = 'GOOGLE_CSE',
  /** The result is from Bing Search Engine. */
  Bing = 'BING_CSE',
  /** The result is from Zendesk. */
  Zendesk = 'ZENDESK',
  /** The result is from Algolia. */
  Algolia = 'ALGOLIA',
  /** The result was from a custom source. */
  Custom = 'CUSTOM_SEARCHER'
}