import { Matcher } from '../../src/models/searchservice/common/Matcher';
import { FilterCombinator } from '../../src/models/searchservice/request/StaticFilter';
import { serializeStaticFilters } from '../../src/serializers/serializeStaticFilters';

it('serializeStaticFilters works with multiple levels of nesting', () => {
  const actualSerializedFilters = serializeStaticFilters({
    kind: 'conjunction',
    filters: [
      {
        kind: 'disjunction',
        filters:
          [
            {
              kind: 'fieldValue',
              fieldId: 'c_Region',
              matcher: Matcher.Equals,
              value: 'APAC'
            },
            {
              kind: 'disjunction',
              filters: [
                {
                  kind: 'fieldValue',
                  fieldId: 'c_Region',
                  matcher: Matcher.Equals,
                  value: 'EMEA'
                },
                {
                  kind: 'fieldValue',
                  fieldId: 'c_puppyPreference',
                  matcher: Matcher.Equals,
                  value: 'Frodo'
                }
              ],
              combinator: FilterCombinator.OR
            }
          ],
        combinator: FilterCombinator.OR
      },
      {
        kind: 'fieldValue',
        fieldId: 'builtin.entityType',
        matcher: Matcher.Equals,
        value: 'Publication'
      },
      {
        kind: 'conjunction',
        filters: [
          {
            kind: 'fieldValue',
            fieldId: 'c_puppyPreference',
            matcher: Matcher.Equals,
            value: 'Marty'
          },
          {
            kind: 'fieldValue',
            fieldId: 'c_employeeDepartment',
            matcher: Matcher.Equals,
            value: 'Technology'
          },
        ],
        combinator: FilterCombinator.AND
      }
    ],
    combinator: FilterCombinator.AND
  });

  const expectedSerializedFilters = {
    $and: [
      {
        $or: [
          { c_Region: { $eq: 'APAC' } },
          {
            $or: [
              { c_Region: { $eq: 'EMEA' } },
              { c_puppyPreference: { $eq: 'Frodo' } }
            ]
          }
        ]
      },
      { 'builtin.entityType': { $eq: 'Publication' } },
      {
        $and: [
          { c_puppyPreference: { $eq: 'Marty' } },
          { c_employeeDepartment: { $eq: 'Technology' } }
        ]
      },
    ]
  };
  expect(actualSerializedFilters).toEqual(JSON.stringify(expectedSerializedFilters));
});

it('serializeStaticFilters works with a DisjunctionStaticFilter', () => {
  const actualSerializedFilters = serializeStaticFilters({
    kind: 'disjunction',
    filters: [
      {
        kind: 'fieldValue',
        fieldId: 'c_Region',
        matcher: Matcher.Equals,
        value: 'APAC'
      },
      {
        kind: 'fieldValue',
        fieldId: 'c_Region',
        matcher: Matcher.Equals,
        value: 'EMEA'
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

it('serializeStaticFilters works with a ConjunctionStaticFilter', () => {
  const actualSerializedFilters = serializeStaticFilters({
    kind: 'conjunction',
    filters: [
      {
        kind: 'fieldValue',
        fieldId: 'c_Region',
        matcher: Matcher.Equals,
        value: 'APAC'
      },
      {
        kind: 'fieldValue',
        fieldId: 'builtin.entityType',
        matcher: Matcher.Equals,
        value: 'Publication'
      }
    ],
    combinator: FilterCombinator.AND
  });

  const expectedSerializedFilters = {
    $and: [
      { c_Region: { $eq: 'APAC' } },
      { 'builtin.entityType': { $eq: 'Publication' } }
    ]
  };
  expect(actualSerializedFilters).toEqual(JSON.stringify(expectedSerializedFilters));
});

it('serializeStaticFilters works with a FieldValueStaticFilter', () => {
  const actualSerializedFilters = serializeStaticFilters({
    kind: 'fieldValue',
    fieldId: 'c_Region',
    matcher: Matcher.Equals,
    value: 'APAC'
  });

  const expectedSerializedFilters = { c_Region: { $eq: 'APAC' } };
  expect(actualSerializedFilters).toEqual(JSON.stringify(expectedSerializedFilters));
});

it('serializeStaticFilters works with a $near FieldValueStaticFilter', () => {
  const actualSerializedFilters = serializeStaticFilters({
    kind: 'fieldValue',
    fieldId: 'builtin.location',
    matcher: Matcher.Near,
    value: {
      lat: 1,
      lng: 2,
      radius: 3
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

it('serializeStaticFilters works with a $between FieldValueStaticFilter', () => {
  const actualSerializedFilters = serializeStaticFilters(
    {
      kind: 'fieldValue',
      fieldId: 'price',
      matcher: Matcher.Between,
      value: {
        start: { matcher: Matcher.GreaterThan, value: 0 },
        end: { matcher: Matcher.LessThan, value: 10 }
      }
    }
  );

  const expectedSerializedFilters = {
    price: { $gt: 0, $lt: 10 }
  };
  expect(actualSerializedFilters).toEqual(JSON.stringify(expectedSerializedFilters));
});

it('serializeStaticFilters works with only lower limit defined for a $between FieldValueStaticFilter', () => {
  const actualSerializedFilters = serializeStaticFilters(
    {
      kind: 'fieldValue',
      fieldId: 'price',
      matcher: Matcher.Between,
      value: {
        start: { matcher: Matcher.GreaterThan, value: 0 }
      }
    }
  );
  const expectedSerializedFilters = {
    price: { $gt: 0 }
  };
  expect(actualSerializedFilters).toEqual(JSON.stringify(expectedSerializedFilters));
});

it('serializeStaticFilters works with only upper limit defined for a $between FieldValueStaticFilter', () => {
  const actualSerializedFilters = serializeStaticFilters(
    {
      kind: 'fieldValue',
      fieldId: 'price',
      matcher: Matcher.Between,
      value: {
        end: { matcher: Matcher.LessThan, value: 10 }
      }
    }
  );
  const expectedSerializedFilters = {
    price: { $lt: 10 }
  };
  expect(actualSerializedFilters).toEqual(JSON.stringify(expectedSerializedFilters));
});

it('serializeStaticFilters works with an $openAt FieldValueStaticFilter', () => {
  const actualSerializedFilters = serializeStaticFilters({
    kind: 'fieldValue',
    fieldId: 'builtin.hours',
    matcher: Matcher.OpenAt,
    value: 'now'
  });

  const expectedSerializedFilters = {
    'builtin.hours': {
      $openAt: 'now'
    }
  };
  expect(actualSerializedFilters).toEqual(JSON.stringify(expectedSerializedFilters));
});

it('serializeStaticFilters works with a nested filter with single or no children', () => {
  const actualSerializedFilters = serializeStaticFilters({
    kind: 'conjunction',
    filters: [
      {
        kind: 'disjunction',
        filters: [],
        combinator: FilterCombinator.OR
      },
      {
        kind: 'fieldValue',
        fieldId: 'builtin.entityType',
        matcher: Matcher.Equals,
        value: 'Publication'
      },
    ],
    combinator: FilterCombinator.AND
  });

  const expectedSerializedFilters = {
    'builtin.entityType': { $eq: 'Publication' }
  };
  expect(actualSerializedFilters).toEqual(JSON.stringify(expectedSerializedFilters));
});

it('serializeStaticFilters works with a DisjunctionStaticFilter with no children', () => {
  const actualSerializedFilters = serializeStaticFilters({
    kind: 'disjunction',
    filters: [],
    combinator: FilterCombinator.OR
  });

  expect(actualSerializedFilters).toBeUndefined();
});

it('serializeStaticFilters works with a nested ConjunctionStaticFilter with no children', () => {
  const actualSerializedFilters = serializeStaticFilters({
    kind: 'conjunction',
    filters: [{
      kind: 'conjunction',
      filters: [],
      combinator: FilterCombinator.AND
    }, {
      kind: 'disjunction',
      filters: [],
      combinator: FilterCombinator.OR
    }],
    combinator: FilterCombinator.AND
  });

  expect(actualSerializedFilters).toBeUndefined();
});
