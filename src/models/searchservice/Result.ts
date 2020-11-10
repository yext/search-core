/* eslint-disable @typescript-eslint/no-explicit-any */
export const enum Source {
  KnowledgeManager = 'KNOWLEDGE_MANAGER',
  Google = 'GOOGLE_CSE',
  Bing = 'BING_CSE',
  Zendesk = 'ZENDESK',
  Algolia = 'ALGOLIA',
}

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
    - 'subtitle'
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

  static fromArray(results: any, source: Source): [Result] {
    return results.map((result: any, index: number) => {
      result = {
        ...result,
        index: index + 1
      };

      switch (source) {
        case Source.KnowledgeManager:
          return Result.fromKnowledgeManager(result);
        case Source.Google:
          return Result.fromGoogleCustomSearchEngine(result);
        case Source.Bing:
          return Result.fromBingCustomSearchEngine(result);
        case Source.Zendesk:
          return Result.fromZendeskSearchEngine(result);
        case Source.Algolia:
          return Result.fromAlgoliaSearchEngine(result);
        default:
          return Result.fromGeneric(result);
      }
    });
  }

  static fromKnowledgeManager(result: any): Result {
    const rawData = result.data || {};
    return new Result(
      rawData,
      result.index,
      rawData.name,
      rawData.description,
      rawData.website,
      rawData.id,
      result.distance,
      result.distanceFromFilter
    );
  }

  static fromGoogleCustomSearchEngine(result: any): Result {
    return new Result(
      result,
      result.index,
      result.htmlTitle.replace(/(<([^>]+)>)/ig, ''),
      result.htmlSnippet,
      result.link
    );
  }

  static fromBingCustomSearchEngine(result: any): Result {
    return new Result(
      result,
      result.index,
      result.name,
      result.snippet,
      result.url
    );
  }

  static fromZendeskSearchEngine(result: any): Result {
    return new Result(
      result,
      result.index,
      result.title,
      result.snippet,
      result.html_url
    );
  }

  static fromAlgoliaSearchEngine(result: any): Result {
    return new Result(
      result,
      result.index,
      result.name,
      undefined,
      undefined,
      result.objectID
    );
  }

  static fromGeneric(result: any): Result {
    return new Result(
      result,
      result.index,
      result.name,
      result.description, // Do we want to truncate this like in the SDK?
      result.website,
      result.id,
    );
  }

}