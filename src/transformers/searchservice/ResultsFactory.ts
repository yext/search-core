import { Result } from '../../models/searchservice/response/Result';
import { Source } from '../../models/searchservice/response/Source';

/**
 * A factory which creates results from different sources
 */
export class ResultsFactory {
  public static create(results: any, source: Source): Result[] {
    if (!results) {
      return [];
    }

    return results.map((result: any, index: number) => {
      const resultIndex = index + 1;

      switch (source) {
        case Source.KnowledgeManager:
          return this.fromKnowledgeManager(result, resultIndex);
        case Source.Google:
          return this.fromGoogleCustomSearchEngine(result, resultIndex);
        case Source.Bing:
          return this.fromBingCustomSearchEngine(result, resultIndex);
        case Source.Zendesk:
          return this.fromZendeskSearchEngine(result, resultIndex);
        case Source.Algolia:
          return this.fromAlgoliaSearchEngine(result, resultIndex);
        default:
          return this.fromCustomSource(result, resultIndex);
      }
    });
  }

  private static fromKnowledgeManager(result: any, index: number): Result {
    const rawData = result.data ?? result;
    return {
      rawData: rawData,
      source: Source.KnowledgeManager,
      index: index,
      name: rawData.name,
      description: rawData.description,
      link: rawData.website,
      id: rawData.id,
      distance: result.distance,
      distanceFromFilter: result.distanceFromFilter,
      highlightedFields: result.highlightedFields,
      entityType: rawData.type
    };
  }

  private static fromGoogleCustomSearchEngine(result: any, index: number): Result {
    const rawData = result.data ?? result;
    return {
      rawData: rawData,
      source: Source.Google,
      index: index,
      name: rawData.htmlTitle.replace(/(<([^>]+)>)/ig, ''),
      description: rawData.htmlSnippet,
      link: rawData.link
    };
  }

  private static fromBingCustomSearchEngine(result: any, index: number): Result {
    const rawData = result.data ?? result;
    return {
      rawData: rawData,
      source: Source.Bing,
      index: index,
      name: rawData.name,
      description: rawData.snippet,
      link: rawData.url
    };
  }

  private static fromZendeskSearchEngine(result: any, index: number): Result {
    const rawData = result.data ?? result;
    return {
      rawData: rawData,
      source: Source.Zendesk,
      index: index,
      name: rawData.title,
      description: rawData.snippet,
      link: rawData.html_url
    };
  }

  private static fromAlgoliaSearchEngine(result: any, index: number): Result {
    const rawData = result.data ?? result;
    return {
      rawData: rawData,
      source: Source.Algolia,
      index: index,
      name: rawData.name,
      id: rawData.objectID
    };
  }

  private static fromCustomSource(result: any, index: number): Result {
    const rawData = result.data ?? result;
    return {
      rawData: rawData,
      source: Source.Custom,
      index: index,
      name: rawData.name,
      description: rawData.description, // Do we want to truncate this like in the SDK?
      link: rawData.website,
      id: rawData.id
    };
  }

  public static fromDirectAnswer(result: any): Result {
    const rawData = result.fieldValues ?? {};
    return {
      rawData: rawData,
      source: Source.KnowledgeManager,
      name: rawData.name,
      description: rawData.description,
      link: result.website,
      id: result.id,
      entityType: result.type,
    };
  }
}
