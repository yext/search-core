import { FeaturedSnippetDirectAnswer } from '../../models/searchservice/response/FeaturedSnippetDirectAnswer';
import { FieldValueDirectAnswer } from '../../models/searchservice/response/FieldValueDirectAnswer';
import { DirectAnswerType } from '../../models/searchservice/response/DirectAnswerType';
import { ResultsFactory } from './ResultsFactory';

export function createDirectAnswer(data: any): FeaturedSnippetDirectAnswer | FieldValueDirectAnswer {
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
  } else {
    throw new Error('The Answers API returned an unknown direct answer type');
  }
}