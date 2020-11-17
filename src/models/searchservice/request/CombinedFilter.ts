import SimpleFilter from './SimpleFilter';

export default class CombinedFilter {
  constructor(
    private filters: (SimpleFilter | CombinedFilter)[],
    private combinator: string) {}

  getFilters(): (SimpleFilter | CombinedFilter)[] {
    return this.filters;
  }

  getCombinator(): string {
    return this.combinator;
  }
}