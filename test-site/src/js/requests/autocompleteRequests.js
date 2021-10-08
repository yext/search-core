export const univeralAutocompleteRequest = {
  input: 'virginiaa'
};

export const verticalAutocompleteRequest = {
  input: 'virginiaa',
  verticalKey: 'KM'
};

export const filterSearchRequest = {
  input: 'virginiaa',
  verticalKey: 'KM',
  sectioned: false,
  fields: [
    {
      fieldApiName: 'name',
      entityType: 'location',
      fetchEntities: true
    }
  ]
};
