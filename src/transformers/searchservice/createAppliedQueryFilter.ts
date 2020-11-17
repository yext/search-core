import AppliedQueryFilter from '../../models/searchservice/response/AppliedQueryFilter';

export default function createAppliedQueryFilter(data: any): Readonly<AppliedQueryFilter> {
  const fieldId = Object.keys(data.filter)[0];
  const comparator = Object.keys(data.filter[fieldId])[0];
  return Object.freeze({
    key: data.displayKey,
    value: data.displayValue,
    filter: {
      fieldId: fieldId,
      comparator: comparator,
      comparedValue: data.filter[fieldId][comparator]
    }
  });
}