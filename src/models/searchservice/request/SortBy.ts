/**
 * Represents a criterion that can be used to sort results
 */
export default class SortBy {
  private constructor(
    private type: string,
    private field: string,
    private direction: string) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static from(data: any): SortBy {
    return new SortBy(
      data.type,
      data.field,
      data.direction,
    );
  }

  getType(): string {
    return this.type;
  }

  getField(): string {
    return this.field;
  }

  getDirection(): string {
    return this.direction;
  }
}