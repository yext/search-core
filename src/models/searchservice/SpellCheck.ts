interface SpellCheckProps {
  originalQuery: string;
  correctedQuery: string;
  spellCheckType: SpellCheckType;
}

enum SpellCheckType {
  /**
   * 'Did you mean ...?'
   */
  Suggest = 'SUGGEST',
  /**
   * 'Showing results for ... instead of ...'
   */
  AutoCorrect = 'AUTOCORRECT',
  /**
   * 'Including results for ..'
   */
  Combine = 'COMBINE'
}

/**
 * A spellcheck response from a search query
 */
export default class SpellCheck {
  private constructor(private props: SpellCheckProps) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static from(data: any): SpellCheck {
    return new SpellCheck({
      originalQuery: data.originalQuery,
      correctedQuery: data.correctedQuery.value,
      spellCheckType: data.spellCheckType,
    });
  }
}