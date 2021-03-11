import { FeaturedSnippetDirectAnswer, FieldValueDirectAnswer } from '../../models/searchservice/response/DirectAnswer';
import { DirectAnswerType } from '../../models/searchservice/response/DirectAnswerType';
import { ResultsFactory } from './ResultsFactory';

export function createDirectAnswer(data: any): FeaturedSnippetDirectAnswer | FieldValueDirectAnswer | undefined {
  const isFieldValueDirectAnswer = data?.type === DirectAnswerType.FieldValue;
  const isFeaturedSnippetDirectAnswer = data?.type === DirectAnswerType.FeaturedSnippet;
  if (isFieldValueDirectAnswer) {
    return {
      type: DirectAnswerType.FieldValue,
      value: data.answer.value,
      relatedResult: ResultsFactory.fromDirectAnswer(data.relatedItem.data),
      verticalKey: data.relatedItem.verticalConfigId,
      entityName: data.answer.entityName,
      fieldName: data.answer.fieldName,
      fieldApiName: data.answer.fieldApiName,
      fieldType: data.answer.fieldType
    };
  } else if (isFeaturedSnippetDirectAnswer) {
    return {
      type: DirectAnswerType.FeaturedSnippet,
      value: data.answer.value,
      relatedResult: ResultsFactory.fromDirectAnswer(data.relatedItem.data),
      verticalKey: data.relatedItem.verticalConfigId,
      snippet: data.answer.snippet,
    };
  }
}