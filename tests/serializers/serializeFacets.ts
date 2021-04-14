import { Matcher } from '../../src/models/searchservice/common/Matcher';
import { serializeFacets } from '../../src/serializers/serializeFacets';

it('serializeFacets serializes facets properly', () => {
  const actualSerializedFilters = serializeFacets([
    { fieldId: 'c_jobCategory', options: [
      { matcher: Matcher.Equals, value: 'Sales'},
      { matcher: Matcher.Equals, value: 'Client Success' },
      { matcher: Matcher.Equals, value: 'Finance' }]},
    { fieldId: 'c_jobLocationShortDescription', options: [
      { matcher: Matcher.Equals, value: 'New York'},
      { matcher: Matcher.Equals, value: 'Chicago'}]},
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
      {matcher: Matcher.Equals, value: 'Sales' },
      {matcher: Matcher.Equals, value: 'Client Success'}]},
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