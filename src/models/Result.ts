import { Source } from './VerticalResult';

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
  constructor(
    rawData: unknown,
    index?: number, // Can we remove index?
    name?: string,
    description?: string,
    link?: string,
    id?: string,
    //subtitle?: string;
    distance?: number,
    distanceFromFilter?: number,
  ) {}

  static fromArray(results: any, source: Source): [Result] {
    return results.map((result: any, index: number) => {
      result = {
        ...result,
        index: index + 1
      };

      switch (source) {
        case Source.KnowledgeMananger:
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
    return new Result({
      rawData: rawData,
      index: result.index,
      name: rawData.name,
      description: rawData.description,
      link: rawData.website,
      id: rawData.id,
      distance: result.distance,
      distanceFromFilter: result.distanceFromFilter
    });
  }

  static fromGoogleCustomSearchEngine(result: any): Result {
    return new Result({
      rawData: result,
      name: result.htmlTitle.replace(/(<([^>]+)>)/ig, ''),
      description: result.htmlSnippet,
      link: result.link
    });
  }

  static fromBingCustomSearchEngine(result: any): Result {
    return new Result({
      rawData: result,
      name: result.name,
      description: result.snippet,
      link: result.url
    });
  }

  static fromZendeskSearchEngine(result: any) {
    return new Result({
      rawData: result,
      name: result.title,
      description: result.snippet,
      link: result.html_url
    });
  }

  static fromAlgoliaSearchEngine(result: any) {
    return new Result({
      rawData: result.data,
      description: result.objectID,
      id: result.objectID
    });
  }

  static fromGeneric(result: any) {
    return new Result({
      rawData: result,
      name: result.name,
      description: result.description, // Do we want to truncate this like in the SDK?
      link: result.website,
      id: result.id,
      index: result.index
    });
  }

}