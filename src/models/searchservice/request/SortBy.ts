/**
 * Represents a criterion that can be used to sort results
 */
export default class SortBy {
  constructor(
    private type: string,
    private field: string,
    private direction: string) {}

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