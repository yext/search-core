import { createAppliedQueryFilter } from '../../src/transformers/searchservice/createAppliedQueryFilter';

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
        type: 'FIELD_VALUE',
        details: {
          latitutde: 10, 
          longitutde: 20
        }
      }
    ],
  };

  const transformedAppliedQueryFilters = createAppliedQueryFilter(response.appliedQueryFilters[0]);
  expect(transformedAppliedQueryFilters).toMatchObject({
    displayKey: 'Job Category',
    displayValue: 'Sales',
    filter: {
      fieldId: 'c_jobCategory',
      matcher: '$eq',
      value: 'Sales'
    },
    details: {
      latitutde: 10,
      longitutde: 20
    }
  });
});