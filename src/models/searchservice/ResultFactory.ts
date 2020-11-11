/* eslint-disable @typescript-eslint/no-explicit-any */
import Result from './Result';

export const enum Source {
  KnowledgeManager = 'KNOWLEDGE_MANAGER',
  Google = 'GOOGLE_CSE',
  Bing = 'BING_CSE',
  Zendesk = 'ZENDESK',
  Algolia = 'ALGOLIA',
}

/**
 * A factory which creates results from different sources
 */
export default class ResultFactory {
  public static createResultArray(results: any, source: Source): [Result] {
    return results.map((result: any, index: number) => {
      result = {
        ...result,
        index: index + 1
      };

      switch (source) {
        case Source.KnowledgeManager:
          return this.fromKnowledgeManager(result);
        case Source.Google:
          return this.fromGoogleCustomSearchEngine(result);
        case Source.Bing:
          return this.fromBingCustomSearchEngine(result);
        case Source.Zendesk:
          return this.fromZendeskSearchEngine(result);
        case Source.Algolia:
          return this.fromAlgoliaSearchEngine(result);
        default:
          return this.fromGeneric(result);
      }
    });
  }

  private static fromKnowledgeManager(result: any): Result {
    const rawData = result.data ?? {};
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

  private static fromGoogleCustomSearchEngine(result: any): Result {
    return new Result({
      rawData: result,
      index: result.index,
      name: result.htmlTitle.replace(/(<([^>]+)>)/ig, ''),
      description: result.htmlSnippet,
      link: result.link
    });
  }

  private static fromBingCustomSearchEngine(result: any): Result {
    return new Result({
      rawData: result,
      index: result.index,
      name: result.name,
      description: result.snippet,
      link: result.url
    });
  }

  private static fromZendeskSearchEngine(result: any): Result {
    return new Result({
      rawData: result,
      index: result.index,
      name: result.title,
      description: result.snippet,
      link: result.html_url
    });
  }

  private static fromAlgoliaSearchEngine(result: any): Result {
    return new Result({
      rawData: result,
      index: result.index,
      name: result.name,
      id: result.objectID
    });
  }

  private static fromGeneric(result: any): Result {
    return new Result({
      rawData: result,
      index: result.index,
      name: result.name,
      description: result.description, // Do we want to truncate this like in the SDK?
      link: result.website,
      id: result.id,
    });
  }

  public static fromDirectAnswer(result: any): Result {
    const rawData = result.fieldValues ?? {};
    return new Result({
      rawData: rawData,
      name: rawData.name,
      description: rawData.description,
      link: result.website,
      id: result.id
    });
  }
}