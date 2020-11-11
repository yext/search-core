/*
  The SDK computes a formatted and a highlighed data field. Do we want that processing to happen
  here? I think that processing should probably not be the responsibility of this class. The SDK
  also contains other fields that don't seem to be used. Do we want those as well? They include:
    - 'modifier'
    - 'bigDate'
    - 'image' (I belive we typically access images from the raw data, not the result data )
    - 'callsToAction' (Again, I belive that's usually in the raw data)
    - 'collapsed'
  */
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