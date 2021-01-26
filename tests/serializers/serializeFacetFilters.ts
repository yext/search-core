import { serializeFacetFilters } from '../../src/serializers/serializeFacetFilters';

it('serializeFacetFilters serializes facets properly', () => {
  const actualSerializedFilters = serializeFacetFilters([
    { fieldId: 'c_jobCategory', comparator: '$eq', comparedValue: 'Sales' },
    { fieldId: 'c_jobCategory', comparator: '$eq', comparedValue: 'Client Success' },
    { fieldId: 'c_jobCategory', comparator: '$eq', comparedValue: 'Finance' },
    { fieldId: 'c_jobLocationShortDescription', comparator: '$eq', comparedValue: 'New York' },
    { fieldId: 'c_jobLocationShortDescription', comparator: '$eq', comparedValue: 'Chicago' },
  ]);

  const expectedSerializedFilters = {
    c_jobCategory: [
      { c_jobCategory: { $eq: 'Sales' } },
      { c_jobCategory: { $eq: 'Client Success' } },
      { c_jobCategory: { $eq: 'Finance' } }
    ],
    c_jobLocationShortDescription: [
      { c_jobLocationShortDescription: { $eq: 'New York' } },
      { c_jobLocationShortDescription: { $eq: 'Chicago' } }
    ]
  };
  expect(actualSerializedFilters).toEqual(JSON.stringify(expectedSerializedFilters));
});

it('serializeFacetFilters serializes disabled facets properly', () => {
  const actualSerializedFilters = serializeFacetFilters([
    { fieldId: 'c_jobCategory', disabled: true },
    { fieldId: 'c_jobLocationShortDescription', disabled: true},
  ]);

  const expectedSerializedFilters = {
    c_jobCategory: [],
    c_jobLocationShortDescription: []
  };
  expect(actualSerializedFilters).toEqual(JSON.stringify(expectedSerializedFilters));
});

it('serializeFacetFilters serializes a mix of disabled and enabled filters properly', () => {
  const actualSerializedFilters = serializeFacetFilters([
    { fieldId: 'c_jobCategory', comparator: '$eq', comparedValue: 'Sales' },
    { fieldId: 'c_jobCategory', comparator: '$eq', comparedValue: 'Client Success' },
    { fieldId: 'c_jobLocationShortDescription', disabled: true},
  ]);

  const expectedSerializedFilters = {
    c_jobCategory: [
      { c_jobCategory: { $eq: 'Sales' } },
      { c_jobCategory: { $eq: 'Client Success' } },
    ],
    c_jobLocationShortDescription: []
  };
  expect(actualSerializedFilters).toEqual(JSON.stringify(expectedSerializedFilters));
});