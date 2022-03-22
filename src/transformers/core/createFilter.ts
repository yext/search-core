import { Filter, NearFilterValue } from '../../models/searchservice/request/Filter';
import { Matcher } from '../../models/searchservice/common/Matcher';
import { NumberRangeValue } from '../../models/searchservice/common/NumberRangeValue';

export function createFilter(filter: any): Filter {
  const fieldId = Object.keys(filter)[0];
  const matcher = Object.keys(filter[fieldId])[0];
  const rawValue = filter[fieldId][matcher];
  let value: string | number | boolean | NearFilterValue | NumberRangeValue;
  if (matcher === Matcher.Between) {
    value = {
      start: { matcher: Object.keys(rawValue)[0], value: Object.values(rawValue)[0] },
      end: { matcher: Object.keys(rawValue)[1], value: Object.values(rawValue)[1] }
    } as NumberRangeValue;
  } else {
    value = filter[fieldId][matcher];
  }
  return {
    fieldId: fieldId,
    matcher: matcher as Matcher,
    value
  };
}