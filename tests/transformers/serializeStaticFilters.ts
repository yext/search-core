import CombinedFilter from '../../src/models/searchservice/request/CombinedFilter';
import SimpleFilter from '../../src/models/searchservice/request/SimpleFilter';
import serializeStaticFilters from '../../src/transformers/searchservice/serializeStaticFilters';

it('serializeStaticFilters works with multiple levels of nesting', () => {
  const actualSerializedFilters = serializeStaticFilters(new CombinedFilter([
    new CombinedFilter(
      [
        new SimpleFilter('c_Region', '$eq', 'APAC'),
        new SimpleFilter('c_Region', '$eq', 'EMEA')
      ],
      '$or'
    ),
    new SimpleFilter('builtin.entityType', '$eq', 'Publication'),
  ], '$and'));

  const expectedSerializedFilters =
    '{"$and":[{"$or":[{"c_Region":{"$eq":"APAC"}},{"c_Region":{"$eq":"EMEA"}}]},' +
    '{"builtin.entityType":{"$eq":"Publication"}}]}';
  expect(actualSerializedFilters).toEqual(expectedSerializedFilters);
});

it('serializeStaticFilters works with a simple Combined Filter', () => {
  const actualSerializedFilters = serializeStaticFilters(new CombinedFilter(
    [
      new SimpleFilter('c_Region', '$eq', 'APAC'),
      new SimpleFilter('c_Region', '$eq', 'EMEA')
    ],
    '$or'
  ));

  const expectedSerializedFilters = '{"$or":[{"c_Region":{"$eq":"APAC"}},{"c_Region":{"$eq":"EMEA"}}]}';
  expect(actualSerializedFilters).toEqual(expectedSerializedFilters);
});

it('serializeStaticFilters works with only a Simple Filter', () => {
  const actualSerializedFilters = serializeStaticFilters( new SimpleFilter('c_Region', '$eq', 'APAC'));

  const expectedSerializedFilters = '{"c_Region":{"$eq":"APAC"}}';
  expect(actualSerializedFilters).toEqual(expectedSerializedFilters);
});