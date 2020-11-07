import Facet from './Facet';
import Result from './Result';

export const enum Source {
  KnowledgeMananger = 'KNOWLEDGE_MANAGER',
  Google = 'GOOGLE_CSE',
  Bing = 'BING_CSE',
  Zendesk = 'ZENDESK',
  Algolia = 'ALGOLIA',
}

export default class VerticalResult{
  appliedQueryFilters: [AppliedQueryFilter];
  encodedState: string;
  facets: [Facet];
  queryDurationMillis: number;
  results: [Result];
  resultsCount: number;
  source: Source;
  verticalKey: string;
  // Currently the SDk iterates through the results and constructs a map object shaped like 
  // { mapCenter: centerCordinates, mapMarkers: mapMarkers }
  // Do we also want this functionality?

  constructor (props: VerticalResult) {
    this.appliedQueryFilters = props.appliedQueryFilters;
    this.encodedState = props.encodedState;
    this.facets = props.facets;
    this.queryDurationMillis = props.queryDurationMillis;
    this.results = props.results;
    this.resultsCount = props.resultsCount;
    this.source = props.source;
    this.verticalKey = props.verticalKey;
  }

  static from (data: any) {
    return new VerticalResult({
      appliedQueryFilters: data.appliedQueryFilters,
      encodedState: data.encodedState,
      facets: Facet.fromArray(data.facets),
      queryDurationMillis: data.queryDurationMillis,
      results: Result.fromArray(data.results, data.source),
      resultsCount: data.resultsCount,
      source: data.source,
      verticalKey: data.verticalConfigId,
    });
  }

  static fromArray (verticals: any): [VerticalResult] {
    return verticals.map((vertical: any) => VerticalResult.from(vertical));
  }
}



