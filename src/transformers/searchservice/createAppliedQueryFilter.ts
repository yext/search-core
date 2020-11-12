import AppliedQueryFilter from '../../models/searchservice/response/AppliedQueryFilter';

export default function createAppliedQueryFilter(data: any): Readonly<AppliedQueryFilter> {
  return Object.freeze({
    key: data.displayKey,
    value: data.displayValue
  });
}