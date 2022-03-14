import { UniversalAutocompleteRequest, VerticalAutocompleteRequest, FilterSearchRequest }
  from '@yext/answers-core';

export const univeralAutocompleteRequest: UniversalAutocompleteRequest = {
  input: 'virginiaa',
  customClientSdk: {
    CORE_TEST_SITE: 'test'
  }
};

export const verticalAutocompleteRequest: VerticalAutocompleteRequest = {
  input: 'virginiaa',
  verticalKey: 'KM',
  customClientSdk: {
    CORE_TEST_SITE: 'test'
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
  customClientSdk: {
    CORE_TEST_SITE: 'test'
  }
};
