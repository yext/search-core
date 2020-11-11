interface AppliedQueryFilterProps {
  key: string;
  value: string;
  // filter: Filter,
}

/**
 * A filter that the Answers API determined should be applied to the search
 */
export default class AppliedQueryFilter {
  private constructor(private props: AppliedQueryFilterProps) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static from(data: any) {
    return new AppliedQueryFilter({
      key: data.displayKey,
      value: data.displayValue
    });
  }

  get key(): string {
    return this.props.key;
  }

  get value(): string {
    return this.props.value;
  }
}