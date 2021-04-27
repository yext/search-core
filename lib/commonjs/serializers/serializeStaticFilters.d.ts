import { CombinedFilter } from '../models/searchservice/request/CombinedFilter';
import { Filter } from '../models/searchservice/request/Filter';
import { StaticFilters } from '../models/searchservice/request/StaticFilters';
export declare function serializeStaticFilters(filter: CombinedFilter | Filter): string | undefined;
export declare function shapeFilterForApi(filter: Filter): StaticFilters;
//# sourceMappingURL=serializeStaticFilters.d.ts.map