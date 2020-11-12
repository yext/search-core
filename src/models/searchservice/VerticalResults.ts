/* eslint-disable @typescript-eslint/no-explicit-any */

//import Facet from './Facet';
import { default as ResultsFactory, Source } from './ResultsFactory';
import Result from './Result';
import AppliedQueryFilter from './AppliedQueryFilter';

interface VerticalResultsProps {
  appliedQueryFilters: AppliedQueryFilter[];
  // facets: Facet[];
  queryDurationMillis: number;
  results: Result[];
  resultsCount: number;
  source: Source;
  verticalKey: string;
}

/**
 * A result from an individual vertical
 */
export default class VerticalResults{
  constructor(private props: VerticalResultsProps) {}

  static from(data: any): VerticalResults {
    const appliedQueryFilters = data.appliedQueryFilters.map((appliedQueryFilter: any) => {
      return AppliedQueryFilter.from(appliedQueryFilter);
    });

    return new VerticalResults({
      appliedQueryFilters: appliedQueryFilters,
      // facets: facet.fromArray(data.facets),
      queryDurationMillis: data.queryDurationMillis,
      results: ResultsFactory.create(data.results, data.source),
      resultsCount: data.resultsCount,
      source: data.source,
      verticalKey: data.verticalConfigId,
    });
  }

  get queryDurationMillis(): number {
    return this.props.queryDurationMillis;
  }

  get results(): Result[] {
    return this.props.results;
  }

  get resultsCount(): number {
    return this.props.resultsCount;
  }

  get source(): string {
    return this.props.source;
  }

  get verticalKey(): string {
    return this.props.verticalKey;
  }

}
