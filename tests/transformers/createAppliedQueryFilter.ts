import createAppliedQueryFilter from '../../src/transformers/searchservice/createAppliedQueryFilter';

it('createAppliedQueryFilter correctly transforms appliedQueryFilters', () => {
  const response = {
    appliedQueryFilters: [
      {
        displayKey: 'Job Category',
        displayValue: 'Sales',
        filter: {
          c_jobCategory: {
            $eq: 'Sales'
          }
        },
        type: 'FIELD_VALUE'
      }
    ],
  };

  const transformedAppliedQueryFilters = createAppliedQueryFilter(response.appliedQueryFilters[0]);
  expect(transformedAppliedQueryFilters).toMatchObject({
    displayKey: 'Job Category',
    displayValue: 'Sales',
    filter: {
      fieldId: 'c_jobCategory',
      comparator: '$eq',
      comparedValue: 'Sales'
    },
  });
});