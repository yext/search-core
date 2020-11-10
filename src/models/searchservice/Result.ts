/**
 * An individual search result
 */
export default class Result {
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
  private constructor(
    private rawData: unknown,
    private index?: number,
    private name?: string,
    private description?: string,
    private link?: string,
    private id?: string,
    private distance?: number,
    private distanceFromFilter?: number,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromObject(result: any): Result {
    return new Result(
      result.rawData,
      result.index,
      result.name,
      result.description,
      result.link,
      result.id,
      result.distance,
      result.distanceFromFilter
    );
  }
}