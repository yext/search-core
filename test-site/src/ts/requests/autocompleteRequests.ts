import { UniversalAutocompleteRequest, VerticalAutocompleteRequest, FilterSearchRequest, Matcher }
  from '@yext/answers-core';

export const univeralAutocompleteRequest: UniversalAutocompleteRequest = {
  input: 'virginiaa',
  additionalHttpHeaders: {
    'Client-SDK': {
      CORE_TEST_SITE: 'test'
    }
  }
};

export const verticalAutocompleteRequest: VerticalAutocompleteRequest = {
  input: 'virginiaa',
  verticalKey: 'KM',
  additionalHttpHeaders: {
    'Client-SDK': {
      CORE_TEST_SITE: 'test'
    }
  }
};

export const filterSearchRequest: FilterSearchRequest = {
  input: 'tom',
  verticalKey: 'people',
  sectioned: false,
  fields: [
    {
      fieldApiName: 'name',
      entityType: 'ce_person',
      fetchEntities: true
    }
  ],
  additionalHttpHeaders: {
    'Client-SDK': {
      CORE_TEST_SITE: 'test'
    }
  },
  excluded: [
    {
      fieldId: 'name',
      value: 'Tom Dixon',
      matcher: Matcher.Equals
    },
    {
      fieldId: 'name',
      value: 'Tom Elliott',
      matcher: Matcher.Equals
    }
  ]
};
