import { FeaturedSnippetDirectAnswer } from '../../models/searchservice/response/FeaturedSnippetDirectAnswer';
import { FieldValueDirectAnswer } from '../../models/searchservice/response/FieldValueDirectAnswer';
import { DirectAnswerType } from '../../models/searchservice/response/DirectAnswerType';
import { ResultsFactory } from './ResultsFactory';

export function createDirectAnswer(data: any): FeaturedSnippetDirectAnswer | FieldValueDirectAnswer {
  const isFieldValueDirectAnswer = data?.type === DirectAnswerType.FieldValue;
  const isFeaturedSnippetDirectAnswer = data?.type === DirectAnswerType.FeaturedSnippet;

  const commonDirectAnswerData = {
    value: data.answer.value,
    relatedResult: ResultsFactory.fromDirectAnswer(data.relatedItem.data),
    verticalKey: data.relatedItem.verticalConfigId,
    fieldType: data.answer.fieldType
  };

  if (isFieldValueDirectAnswer) {
    return {
      type: DirectAnswerType.FieldValue,
      ...commonDirectAnswerData,
      entityName: data.answer.entityName,
      fieldName: data.answer.fieldName,
      fieldApiName: data.answer.fieldApiName,
    };
  } else if (isFeaturedSnippetDirectAnswer) {
    return {
      type: DirectAnswerType.FeaturedSnippet,
      ...commonDirectAnswerData,
      snippet: data.answer.snippet
    };
  } else {
    throw new Error('The Search API returned an unknown direct answer type');
  }
}