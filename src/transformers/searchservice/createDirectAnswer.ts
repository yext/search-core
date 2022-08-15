import { FeaturedSnippetDirectAnswer } from '../../models/searchservice/response/directanswer/FeaturedSnippetDirectAnswer';
import { FieldValueDirectAnswer } from '../../models/searchservice/response/directanswer/FieldValueDirectAnswer';
import { DirectAnswerType } from '../../models/searchservice/response/directanswer/DirectAnswerType';
import { ResultsFactory } from './ResultsFactory';
import { BuiltInFieldType } from '../../models/searchservice/response/directanswer/BuiltInFieldType';

export function createDirectAnswer(data: any): FeaturedSnippetDirectAnswer | FieldValueDirectAnswer {
  const isFieldValueDirectAnswer = data?.type === DirectAnswerType.FieldValue;
  const isFeaturedSnippetDirectAnswer = data?.type === DirectAnswerType.FeaturedSnippet;

  const commonDirectAnswerData = {
    value: data.answer.value,
    relatedResult: ResultsFactory.fromDirectAnswer(data.relatedItem.data),
    verticalKey: data.relatedItem.verticalConfigId,
    fieldType: Object.values(BuiltInFieldType).includes(data.answer.fieldType) ? data.answer.fieldType : 'unknown'
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
    const fieldType = commonDirectAnswerData.fieldType;
    if (fieldType != BuiltInFieldType.MultiLineText && fieldType != BuiltInFieldType.RichText) {
      throw new Error(`Unexpected fieldType for featured snippet direct answer: ${fieldType}`);
    }
    return {
      type: DirectAnswerType.FeaturedSnippet,
      ...commonDirectAnswerData,
      snippet: data.answer.snippet
    };
  } else {
    throw new Error(`The Search API returned an unknown direct answer type: ${data?.type}`);
  }
}