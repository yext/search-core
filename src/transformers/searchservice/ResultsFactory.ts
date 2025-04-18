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
        case Source.DocumentVertical:
          return this.fromDocumentVertical(result, resultIndex);
        case Source.FunctionVertical:
          return this.fromFunctionVertical(result, resultIndex);
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

  private static fromDocumentVertical(result: any, index: number): Result {
    const rawData = result.data ?? result;
    return {
      rawData: rawData,
      source: Source.DocumentVertical,
      name: rawData.name,
      description: rawData.description,
      link: rawData.website,
      id: rawData.id,
      index: index,
      segment: result.segment,
      document: result.document,
      documents: result.documents
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

  private static fromCustomSource(result: any, index: number): Result {
    return this.fromCustomDataHelper(result, index, Source.Custom);
  }

  private static fromFunctionVertical(result: any, index: number): Result {
    return this.fromCustomDataHelper(result, index, Source.FunctionVertical);
  }

  private static fromCustomDataHelper(result: any, index: number, source: Source): Result {
    const rawData = result.data ?? result;
    return {
      rawData: rawData,
      source: source,
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
