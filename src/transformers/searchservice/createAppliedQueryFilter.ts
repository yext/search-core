import { AppliedQueryFilter } from '../../models/searchservice/response/AppliedQueryFilter';
import { createFilter } from '../core/createFilter';

export function createAppliedQueryFilter(data: any): AppliedQueryFilter {
  return {
    displayKey: data.displayKey,
    displayValue: data.displayValue,
    filter: createFilter(data.filter),
    type: data.type,
    ...(data.details && { details: data.details })
  };
}