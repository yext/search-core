import { Result } from './Result';
import { AppliedQueryFilter } from './AppliedQueryFilter';
import { Source } from './Source';

/**
 * A result from an individual vertical
 */
export interface VerticalResults {
  appliedQueryFilters: AppliedQueryFilter[];
  queryDurationMillis: number;
  results: Result[];
  resultsCount: number;
  source: Source;
  verticalKey: string;
}