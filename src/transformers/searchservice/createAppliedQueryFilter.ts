import { AppliedQueryFilter } from '../../models/searchservice/response/AppliedQueryFilter';
import { createFieldValueFilter } from '../core/createFieldValueFilter';

export function createAppliedQueryFilter(data: any): AppliedQueryFilter {
  return {
    displayKey: data.displayKey,
    displayValue: data.displayValue,
    filter: createFieldValueFilter(data.filter),
    type: data.type,
    ...(data.details && { details: data.details })
  };
}