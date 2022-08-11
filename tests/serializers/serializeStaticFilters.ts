import { Matcher } from '../../src/models/searchservice/common/Matcher';
import { FilterCombinator } from '../../src/models/searchservice/request/StaticFilter';
import { serializeStaticFilters } from '../../src/serializers/serializeStaticFilters';

it('serializeStaticFilters works with multiple levels of nesting', () => {
  const actualSerializedFilters = serializeStaticFilters({
    kind: 'combination',
    children: [
      {
        kind: 'combination',
        children:
          [
            {
              kind: 'fieldValue',
              value: { fieldId: 'c_Region', matcher: Matcher.Equals, value: 'APAC' }
            },
            {
              kind: 'fieldValue',
              value: { fieldId: 'c_Region', matcher: Matcher.Equals, value: 'EMEA' }
            }
          ],
        combinator: FilterCombinator.OR
      },
      {
        kind: 'fieldValue',
        value: { fieldId: 'builtin.entityType', matcher: Matcher.Equals, value: 'Publication' }
      },
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

it('serializeStaticFilters works with a simple combined filter', () => {
  const actualSerializedFilters = serializeStaticFilters({
    kind: 'combination',
    children: [
      {
        kind: 'fieldValue',
        value: { fieldId: 'c_Region', matcher: Matcher.Equals, value: 'APAC' }
      },
      {
        kind: 'fieldValue',
        value: { fieldId: 'c_Region', matcher: Matcher.Equals, value: 'EMEA' }
      }
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

it('serializeStaticFilters works with only a FieldValueFilter', () => {
  const actualSerializedFilters = serializeStaticFilters({
    kind: 'fieldValue',
    value: {
      fieldId: 'c_Region',
      matcher: Matcher.Equals,
      value: 'APAC'
    }
  });

  const expectedSerializedFilters = { c_Region: { $eq: 'APAC' } };
  expect(actualSerializedFilters).toEqual(JSON.stringify(expectedSerializedFilters));
});

it('serializeStaticFilters works with a $near FieldValueFilter', () => {
  const actualSerializedFilters = serializeStaticFilters({
    kind: 'fieldValue',
    value: {
      fieldId: 'builtin.location',
      matcher: Matcher.Near,
      value: {
        lat: 1,
        lng: 2,
        radius: 3
      }
    }
  });

  const expectedSerializedFilters = {
    'builtin.location': {
      $near: {
        lat: 1,
        lng: 2,
        radius: 3
      }
    }
  };
  expect(actualSerializedFilters).toEqual(JSON.stringify(expectedSerializedFilters));
});

it('serializeStaticFilters works with a $between FieldValueFilter', () => {
  const actualSerializedFilters = serializeStaticFilters(
    {
      kind: 'fieldValue',
      value: {
        fieldId: 'price',
        matcher: Matcher.Between,
        value: {
          start: { matcher: Matcher.GreaterThan, value: 0 },
          end: { matcher: Matcher.LessThan, value: 10 }
        }
      }
    }
  );

  const expectedSerializedFilters = {
    price: { $gt: 0, $lt: 10 }
  };
  expect(actualSerializedFilters).toEqual(JSON.stringify(expectedSerializedFilters));
});

it('serializeStaticFilters works with only lower limit defined for a $between FieldValueFilter', () => {
  const actualSerializedFilters = serializeStaticFilters(
    {
      kind: 'fieldValue',
      value: {
        fieldId: 'price',
        matcher: Matcher.Between,
        value: {
          start: { matcher: Matcher.GreaterThan, value: 0 }
        }
      }
    }
  );
  const expectedSerializedFilters = {
    price: { $gt: 0 }
  };
  expect(actualSerializedFilters).toEqual(JSON.stringify(expectedSerializedFilters));
});

it('serializeStaticFilters works with only upper limit defined for a $between FieldValueFilter', () => {
  const actualSerializedFilters = serializeStaticFilters(
    {
      kind: 'fieldValue',
      value: {
        fieldId: 'price',
        matcher: Matcher.Between,
        value: {
          end: { matcher: Matcher.LessThan, value: 10 }
        }
      }
    }
  );
  const expectedSerializedFilters = {
    price: { $lt: 10 }
  };
  expect(actualSerializedFilters).toEqual(JSON.stringify(expectedSerializedFilters));
});

it('serializeStaticFilters works with a nested filter with single or no children', () => {
  const actualSerializedFilters = serializeStaticFilters({
    kind: 'combination',
    children: [
      {
        kind: 'combination',
        children: [],
        combinator: FilterCombinator.OR
      },
      {
        kind: 'fieldValue',
        value: { fieldId: 'builtin.entityType', matcher: Matcher.Equals, value: 'Publication' }
      },
    ],
    combinator: FilterCombinator.AND
  });

  const expectedSerializedFilters = {
    'builtin.entityType': { $eq: 'Publication' }
  };
  expect(actualSerializedFilters).toEqual(JSON.stringify(expectedSerializedFilters));
});

it('serializeStaticFilters works with a simple combined filter with no children', () => {
  const actualSerializedFilters = serializeStaticFilters({
    kind: 'combination',
    children: [],
    combinator: FilterCombinator.OR
  });

  expect(actualSerializedFilters).toBeUndefined();
});
