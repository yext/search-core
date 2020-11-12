import DirectAnswer from '../../models/searchservice/response/DirectAnswer';
import ResultsFactory from './ResultsFactory';

export default function createDirectAnswer(data: any): Readonly<DirectAnswer> {
  return Object.freeze({
    relatedResult: ResultsFactory.fromDirectAnswer(data.relatedItem.data),
    verticalKey: data.relatedItem.verticalConfigId,
    entityName: data.answer.entityName,
    fieldName: data.answer.fieldName,
    fieldApiName: data.answer.fieldApiName,
    value: data.answer.value,
    fieldType: data.answer.fieldType
  });
}