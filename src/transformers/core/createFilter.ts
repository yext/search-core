import { Filter } from '../../models/searchservice/request/Filter';
import { Matcher } from '../../models/searchservice/common/Matcher';

export function createFilter(filter: any): Filter {
  const fieldId = Object.keys(filter)[0];
  const matcher = Object.keys(filter[fieldId])[0];

  return {
    fieldId: fieldId,
    matcher: matcher as Matcher,
    value: filter[fieldId][matcher] as string | number | boolean
  };
}