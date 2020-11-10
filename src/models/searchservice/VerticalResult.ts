//import Facet from './Facet';
import { default as ResultFactory, Source } from './ResultFactory';
import Result from './Result';

/**
 * A result from an individual vertical
 */
export default class VerticalResult{
  // Currently the SDk iterates through the results and constructs a map object shaped like
  // { mapCenter: centerCordinates, mapMarkers: mapMarkers }
  // Do we also want this functionality?
  constructor(
    // private appliedQueryFilters: [AppliedQueryFilter]
    private encodedState: string,
    // private facets: [Facet],
    private queryDurationMillis: number,
    private results: [Result],
    private resultsCount: number,
    private source: Source,
    private verticalKey: string
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static from(data: any): VerticalResult {
    return new VerticalResult(
      //data.appliedQueryFilters,
      data.encodedState,
      //Facet.fromArray(data.facets),
      data.queryDurationMillis,
      ResultFactory.createResultArray(data.results, data.source),
      data.resultsCount,
      data.source,
      data.verticalConfigId,
    );
  }
}
