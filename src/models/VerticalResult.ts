//import Facet from './Facet';
import Result from './Result';

export const enum Source {
  KnowledgeMananger = 'KNOWLEDGE_MANAGER',
  Google = 'GOOGLE_CSE',
  Bing = 'BING_CSE',
  Zendesk = 'ZENDESK',
  Algolia = 'ALGOLIA',
}

export default class VerticalResult{
  // Currently the SDk iterates through the results and constructs a map object shaped like
  // { mapCenter: centerCordinates, mapMarkers: mapMarkers }
  // Do we also want this functionality?
  constructor(
    // appliedQueryFilters: [AppliedQueryFilter]
    encodedState: string,
    // facets: [Facet],
    queryDurationMillis: number,
    results: [Result],
    resultsCount: number,
    source: Source,
    verticalKey: string
  ) {}

  static from(data: any): VerticalResult {
    return new VerticalResult(
      //data.appliedQueryFilters,
      data.encodedState,
      //Facet.fromArray(data.facets),
      data.queryDurationMillis,
      Result.fromArray(data.results, data.source),
      data.resultsCount,
      data.source,
      data.verticalConfigId,
    );
  }

  static fromArray(verticals: any): [VerticalResult] {
    return verticals.map((vertical: any) => VerticalResult.from(vertical));
  }
}



