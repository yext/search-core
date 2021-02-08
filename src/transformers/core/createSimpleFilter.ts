import { SimpleFilter } from '../../models/searchservice/request/SimpleFilter';
import { Comparator } from '../../models/searchservice/common/Comparator';

export function createSimpleFilter(filter: any): SimpleFilter {
  const fieldId = Object.keys(filter)[0];
  const comparator = Object.keys(filter[fieldId])[0];

  return {
    fieldId: fieldId,
    comparator: comparator as Comparator,
    comparedValue: filter[fieldId][comparator] as string | number | boolean
  };
}