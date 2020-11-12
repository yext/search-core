interface SpellCheckProps {
  originalQuery: string;
  correctedQuery: string;
  type: SpellCheckType;
}

enum SpellCheckType {
  Suggest = 'SUGGEST',
  AutoCorrect = 'AUTOCORRECT',
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
      type: data.spellCheckType,
    });
  }

  get originalQuery(): string {
    return this.props.originalQuery;
  }

  get correctedQuery(): string {
    return this.props.correctedQuery;
  }

  get type(): SpellCheckType {
    return this.props.type;
  }
}