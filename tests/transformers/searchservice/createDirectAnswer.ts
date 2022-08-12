import { createDirectAnswer } from '../../../src/transformers/searchservice/createDirectAnswer';
import { DirectAnswerType } from '../../../src/models/searchservice/response/directanswer/DirectAnswerType';
import { CustomFieldValueDA } from '../../../src/models/searchservice/response/directanswer/CustomFieldValueDA';
import { Source } from '../../../src/models/searchservice/response/Source';

it('can create a FeaturedSnippetDirectAnswer', () => {
  const apiFeaturedSnippetDirectAnswer = {
    type: 'FEATURED_SNIPPET',
    answer: {
      value: 'Honolulu. Hawaii',
      fieldType: 'multi_line_text',
      snippet: {
        matchedSubstrings: [{ offset: 31, length: 16 }],
        value: '... senator from 1997 to 2004. Obama was born in Honolulu. Hawaii. After graduating ...'
      }
    },
    relatedItem: {
      verticalConfigId: 'wiki_bios',
      data: {}
    }
  };
  const actualDirectAnswer = createDirectAnswer(apiFeaturedSnippetDirectAnswer);
  const expectedDirectAnswer = {
    type: DirectAnswerType.FeaturedSnippet,
    value: 'Honolulu. Hawaii',
    relatedResult: {},
    verticalKey: 'wiki_bios',
    fieldType: 'multi_line_text',
    snippet: {
      matchedSubstrings: [{ offset: 31, length: 16 }],
      value: '... senator from 1997 to 2004. Obama was born in Honolulu. Hawaii. After graduating ...'
    }
  };
  expect(actualDirectAnswer).toMatchObject(expectedDirectAnswer);
});

it('can create a FieldValueDirectAnswer', () => {
  const apiFieldValueDirectAnswer = {
    type: 'FIELD_VALUE',
    answer: {
      value: '18888888888',
      entityName: 'Barack Obama',
      fieldName: 'Phone Number',
      fieldApiName: 'mainPhone',
      fieldType: 'phone'
    },
    relatedItem: {
      verticalConfigId: 'people',
      data: {}
    }
  };
  const actualDirectAnswer = createDirectAnswer(apiFieldValueDirectAnswer);
  const expectedDirectAnswer = {
    type: DirectAnswerType.FieldValue,
    value: '18888888888',
    relatedResult: {},
    verticalKey: 'people',
    entityName: 'Barack Obama',
    fieldName: 'Phone Number',
    fieldApiName: 'mainPhone',
    fieldType: 'phone'
  };
  expect(actualDirectAnswer).toMatchObject(expectedDirectAnswer);
});

it('can create a custom FieldValueDirectAnswer', () => {
  const apiFieldValueDirectAnswer = {
    type: 'FIELD_VALUE',
    answer: {
      value: '18888888888',
      entityName: 'Barack Obama',
      fieldName: 'Phone Number',
      fieldApiName: 'mainPhone',
      fieldType: 'c010101.specialtype'
    },
    relatedItem: {
      verticalConfigId: 'people',
      data: {}
    }
  };
  const actualDirectAnswer = createDirectAnswer(apiFieldValueDirectAnswer);
  const expectedDirectAnswer: CustomFieldValueDA = {
    type: DirectAnswerType.FieldValue,
    value: '18888888888',
    relatedResult: {
      rawData: {},
      source: Source.KnowledgeManager
    },
    verticalKey: 'people',
    entityName: 'Barack Obama',
    fieldName: 'Phone Number',
    fieldApiName: 'mainPhone',
    fieldType: 'unknown'
  };
  expect(actualDirectAnswer).toMatchObject(expectedDirectAnswer);
});