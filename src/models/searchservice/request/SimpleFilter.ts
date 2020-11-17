/**
 * Represents a single filter comparing a value to a field
 */
export default class SimpleFilter {
  constructor(
    private fieldId: string,
    private comparator: string,
    private comparedValue: string) {}

  getFieldId(): string {
    return this.fieldId;
  }

  getComparator(): string {
    return this.comparator;
  }

  getComparedValue(): string | number | boolean {
    return this.comparedValue;
  }
}