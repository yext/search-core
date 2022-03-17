import { UniversalAutocompleteRequest, VerticalAutocompleteRequest, FilterSearchRequest }
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
  input: 'virginiaa',
  verticalKey: 'KM',
  sectioned: false,
  fields: [
    {
      fieldApiName: 'name',
      entityType: 'location',
      fetchEntities: true
    }
  ],
  additionalHttpHeaders: {
    'Client-SDK': {
      CORE_TEST_SITE: 'test'
    }
  }
};
