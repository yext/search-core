import { Comparator } from '../../src/models/searchservice/common/Comparator';
import { FilterCombinator } from '../../src/models/searchservice/request/CombinedFilter';
import { serializeStaticFilters } from '../../src/serializers/serializeStaticFilters';

it('serializeStaticFilters works with multiple levels of nesting', () => {
  const actualSerializedFilters = serializeStaticFilters({
    filters: [
      {
        filters:
          [
            { fieldId: 'c_Region', comparator: Comparator.Equals, comparedValue: 'APAC' },
            { fieldId: 'c_Region', comparator: Comparator.Equals, comparedValue: 'EMEA' }
          ],
        combinator: FilterCombinator.OR
      },
      { fieldId: 'builtin.entityType', comparator: Comparator.Equals, comparedValue: 'Publication' },
    ],
    combinator: FilterCombinator.AND
  });

  const expectedSerializedFilters = {
    $and: [
      {
        $or: [
          { c_Region: { $eq: 'APAC' } },
          { c_Region: { $eq: 'EMEA' } }
        ]
      },
      { 'builtin.entityType': { $eq: 'Publication' } }
    ]
  };
  expect(actualSerializedFilters).toEqual(JSON.stringify(expectedSerializedFilters));
});

it('serializeStaticFilters works with a simple Combined Filter', () => {
  const actualSerializedFilters = serializeStaticFilters({
    filters: [
      { fieldId: 'c_Region', comparator: Comparator.Equals, comparedValue: 'APAC' },
      { fieldId: 'c_Region', comparator: Comparator.Equals, comparedValue: 'EMEA' }
    ],
    combinator: FilterCombinator.OR
  });

  const expectedSerializedFilters = {
    $or: [
      { c_Region: { $eq: 'APAC' } },
      { c_Region: { $eq: 'EMEA' } }
    ]
  };
  expect(actualSerializedFilters).toEqual(JSON.stringify(expectedSerializedFilters));
});

it('serializeStaticFilters works with only a Simple Filter', () => {
  const actualSerializedFilters = serializeStaticFilters({
    fieldId: 'c_Region',
    comparator: Comparator.Equals,
    comparedValue: 'APAC'
  });

  const expectedSerializedFilters = { c_Region: { $eq: 'APAC' } };
  expect(actualSerializedFilters).toEqual(JSON.stringify(expectedSerializedFilters));
});