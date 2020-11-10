//import Facet from './Facet';
import { default as Result, Source } from './Result';


export default class VerticalResult{
  // Currently the SDk iterates through the results and constructs a map object shaped like
  // { mapCenter: centerCordinates, mapMarkers: mapMarkers }
  // Do we also want this functionality?
  constructor(
    // readonly appliedQueryFilters: [AppliedQueryFilter]
    readonly encodedState: string,
    // readonly facets: [Facet],
    readonly queryDurationMillis: number,
    readonly results: [Result],
    readonly resultsCount: number,
    readonly source: Source,
    readonly verticalKey: string
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
