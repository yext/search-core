import { DirectAnswer } from '../../models/searchservice/response/DirectAnswer';
import { ResultsFactory } from './ResultsFactory';

export function createDirectAnswer(data: any): DirectAnswer {
  return {
    relatedResult: ResultsFactory.fromDirectAnswer(data.relatedItem.data),
    verticalKey: data.relatedItem.verticalConfigId,
    entityName: data.answer.entityName,
    fieldName: data.answer.fieldName,
    fieldApiName: data.answer.fieldApiName,
    value: data.answer.value,
    fieldType: data.answer.fieldType
  };
}