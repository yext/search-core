import { serializeFacets } from '../../src/serializers/serializeFacets';

it('serializeFacets serializes facets properly', () => {
  const actualSerializedFilters = serializeFacets([
    { fieldId: 'c_jobCategory', options: [
        { comparator: '$eq', comparedValue: 'Sales'},
        { comparator: '$eq', comparedValue: 'Client Success' },
        { comparator: '$eq', comparedValue: 'Finance' }]},
    { fieldId: 'c_jobLocationShortDescription', options: [
        { comparator: '$eq', comparedValue: 'New York'},
        { comparator: '$eq', comparedValue: 'Chicago'}]},
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

it('serializeFacets serializes disabled facets properly', () => {
  const actualSerializedFilters = serializeFacets([
    { fieldId: 'c_jobCategory', options: [] },
    { fieldId: 'c_jobLocationShortDescription', options: []},
  ]);

  const expectedSerializedFilters = {
    c_jobCategory: [],
    c_jobLocationShortDescription: []
  };
  expect(actualSerializedFilters).toEqual(JSON.stringify(expectedSerializedFilters));
});

it('serializeFacets serializes a mix of disabled and enabled filters properly', () => {
  const actualSerializedFilters = serializeFacets([
    { fieldId: 'c_jobCategory', options: [
        {comparator: '$eq', comparedValue: 'Sales' },
        {comparator: '$eq', comparedValue: 'Client Success'}]},
    { fieldId: 'c_jobLocationShortDescription', options: []},
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