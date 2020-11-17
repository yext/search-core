export default class SimpleFilter {
  constructor(private fieldName: string,
    private comparator: string,
    private comparedValue: string) {}

  getFieldName(): string {
    return this.fieldName;
  }

  getComparator(): string {
    return this.comparator;
  }

  getComparedValue(): string {
    return this.comparedValue;
  }
}