interface ResultProps {
  rawData: Record<string, unknown>,
  index?: number,
  name?: string,
  description?: string,
  link?: string,
  id?: string,
  distance?: number,
  distanceFromFilter?: number,
}
/**
 * An individual search result
 */
export default class Result {
  public constructor(private props: ResultProps) {}

  get rawData(): Record<string, unknown> {
    return this.props.rawData;
  }

  get index(): number | undefined {
    return this.props.index;
  }

  get name(): string | undefined {
    return this.props.name;
  }

  get description(): string | undefined {
    return this.props.description;
  }

  get link(): string | undefined {
    return this.props.link;
  }

  get id(): string | undefined {
    return this.props.id;
  }

  get distance(): number | undefined {
    return this.props.distance;
  }

  get distanceFromFilter(): number | undefined {
    return this.props.distanceFromFilter;
  }
}