import AppliedQueryFilter from '../../models/searchservice/response/AppliedQueryFilter';
import createSimpleFilter from '../core/createSimpleFilter';

export default function createAppliedQueryFilter(data: any): Readonly<AppliedQueryFilter> {
  return Object.freeze({
    displayKey: data.displayKey,
    displayValue: data.displayValue,
    filter: createSimpleFilter(data.filter)
  });
}