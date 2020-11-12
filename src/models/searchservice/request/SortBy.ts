interface SortByProps {
  type: string,
  field: string,
  direction: string
}

/**
 * Represents a criterion that can be used to sort results
 */
export default class SortBy {
  private constructor(private props: SortByProps) { }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static from(data: any): SortBy {
    return new SortBy({
      type: data.type,
      field: data.field,
      direction: data.direction,
    });
  }

  get type(): string {
    return this.props.type;
  }

  get field(): string {
    return this.props.field;
  }

  get direction(): string {
    return this.props.direction;
  }
}