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


it('serializeFacets serializes number range facets properly', () => {
  const actualSerializedFilters = serializeFacets([
    {
      fieldId: 'price',
      options: [
        {
          matcher: Matcher.Between,
          value: {
            start: { matcher: Matcher.GreaterThan, value: 0 },
            end: { matcher: Matcher.LessThan, value: 10 }
          }
        },
        {
          matcher: Matcher.Between,
          value: {
            start: {matcher: Matcher.GreaterThanOrEqualTo, value: 30 },
            end: { matcher: Matcher.LessThanOrEqualTo, value: 50 }
          }
        },
      ]
    },
    { fieldId: 'count', options: []},
  ]);

  const expectedSerializedFilters = {
    price: [
      { price: { $gt: 0, $lt: 10 } },
      { price: { $ge: 30, $le: 50 } }
    ],
    count: []
  };
  expect(actualSerializedFilters).toEqual(JSON.stringify(expectedSerializedFilters));
});