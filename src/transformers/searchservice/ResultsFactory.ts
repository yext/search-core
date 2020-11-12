import Result from '../../models/searchservice/response/Result';
import { Source } from '../../models/searchservice/response/Source';

/**
 * A factory which creates results from different sources
 */
export default class ResultsFactory {
  public static create(results: any, source: Source): [Result] {
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

  private static fromKnowledgeManager(result: any): Readonly<Result> {
    const rawData = result.data ?? {};
    return Object.freeze({
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

  private static fromGoogleCustomSearchEngine(result: any): Readonly<Result> {
    return Object.freeze({
      rawData: result,
      index: result.index,
      name: result.htmlTitle.replace(/(<([^>]+)>)/ig, ''),
      description: result.htmlSnippet,
      link: result.link
    });
  }

  private static fromBingCustomSearchEngine(result: any): Readonly<Result> {
    return Object.freeze({
      rawData: result,
      index: result.index,
      name: result.name,
      description: result.snippet,
      link: result.url
    });
  }

  private static fromZendeskSearchEngine(result: any): Readonly<Result> {
    return Object.freeze({
      rawData: result,
      index: result.index,
      name: result.title,
      description: result.snippet,
      link: result.html_url
    });
  }

  private static fromAlgoliaSearchEngine(result: any): Readonly<Result> {
    return Object.freeze({
      rawData: result,
      index: result.index,
      name: result.name,
      id: result.objectID
    });
  }

  private static fromGeneric(result: any): Readonly<Result> {
    return Object.freeze({
      rawData: result,
      index: result.index,
      name: result.name,
      description: result.description, // Do we want to truncate this like in the SDK?
      link: result.website,
      id: result.id,
    });
  }

  public static fromDirectAnswer(result: any): Readonly<Result> {
    const rawData = result.fieldValues ?? {};
    return Object.freeze({
      rawData: rawData,
      name: rawData.name,
      description: rawData.description,
      link: result.website,
      id: result.id
    });
  }
}