import { AppliedQueryFilter } from '../../models/searchservice/response/AppliedQueryFilter';
import { createSimpleFilter } from '../core/createSimpleFilter';

export function createAppliedQueryFilter(data: any): AppliedQueryFilter {
  return {
    displayKey: data.displayKey,
    displayValue: data.displayValue,
    filter: createSimpleFilter(data.filter)
  };
}