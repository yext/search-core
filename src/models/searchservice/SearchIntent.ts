export default class SearchIntent {
  private constructor(
    readonly nearMe: boolean
  ) {}

  static from(data: any): SearchIntent{
    return new SearchIntent(
      data.includes('NEAR_ME')
    );
  }
}