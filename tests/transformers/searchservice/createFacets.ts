import { createFacets } from '../../../src/transformers/searchservice/createFacets';

it('createFacets', () => {
  const actualCoreResponse = createFacets([
    {
      fieldId: 'c_jobCategory',
      displayName: 'Job Category',
      options: [
        {
          displayName: 'Sales',
          count: 26,
          selected: true,
          filter: { c_jobCategory: { $eq: 'Sales' } }
        },
        {
          displayName: 'Client Success',
          count: 4,
          selected: true,
          filter: { c_jobCategory: { $eq: 'Client Success' } }
        }
      ]
    },
    {
      fieldId: 'c_jobLocationShortDescription',
      displayName: 'Job Locations',
      options: [
        {
          displayName: 'Chicago',
          count: 18,
          selected: false,
          filter: { c_jobLocationShortDescription: { $eq: 'Chicago' } }
        }
      ]
    }
  ]);

  expect(actualCoreResponse).toEqual([
    {
      fieldId: 'c_jobCategory',
      displayName: 'Job Category',
      options: [
        {
          displayName: 'Sales',
          count: 26,
          selected: true,
          matcher: '$eq',
          value: 'Sales'
        },
        {
          displayName: 'Client Success',
          count: 4,
          selected: true,
          matcher: '$eq',
          value: 'Client Success'
        }
      ]
    },
    {
      fieldId: 'c_jobLocationShortDescription',
      displayName: 'Job Locations',
      options: [
        {
          displayName: 'Chicago',
          count: 18,
          selected: false,
          matcher: '$eq',
          value: 'Chicago'
        }
      ]
    }
  ]);
});