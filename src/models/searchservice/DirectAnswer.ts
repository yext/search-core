import Result from './Result';

export default class DirectAnswer {
  private constructor(
    readonly type: string,
    readonly content: Record<string, unknown>,
    readonly relatedItem: RelatedItem
  ) {}
}

interface RelatedItem {
  readonly verticalKey: string;
  readonly result: Result;
}