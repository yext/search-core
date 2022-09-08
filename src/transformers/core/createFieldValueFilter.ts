import { FieldValueFilter, NearFilterValue } from '../../models/searchservice/request/FieldValueFilter';
import { Matcher } from '../../models/searchservice/common/Matcher';
import { NumberRangeValue } from '../../models/searchservice/common/NumberRangeValue';

export function createFieldValueFilter(filter: any): FieldValueFilter {
  const fieldId = Object.keys(filter)[0];
  const matcher = Object.keys(filter[fieldId])[0];
  let value: string | number | boolean | NearFilterValue | NumberRangeValue;
  if (matcher === Matcher.Between) {
    value = createNumberRangeValue(filter[fieldId][matcher]);
  } else {
    value = filter[fieldId][matcher];
  }
  return {
    fieldId: fieldId,
    matcher: matcher as Matcher,
    value
  };
}

function createNumberRangeValue(value: any): NumberRangeValue {
  const numberRangeValue: NumberRangeValue = {};
  Object.keys(value).forEach(limitMatcher => {
    if (limitMatcher === Matcher.GreaterThan || limitMatcher === Matcher.GreaterThanOrEqualTo) {
      numberRangeValue.start = { matcher: limitMatcher, value: value[limitMatcher] };
    } else if (limitMatcher === Matcher.LessThan || limitMatcher === Matcher.LessThanOrEqualTo) {
      numberRangeValue.end = { matcher: limitMatcher, value: value[limitMatcher] };
    }
  });
  return numberRangeValue;
}