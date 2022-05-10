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

it('createFacets with number range filter', () => {
  const actualCoreResponse = createFacets([
    {
      fieldId: 'price',
      displayName: 'Price',
      options: [
        {
          displayName: '0 - 23',
          count: 20,
          selected: false,
          filter: {
            price: { $between: { $lt: 23, $ge: 0 } }
          }
        },
        {
          displayName: '23 - 60',
          count: 20,
          selected: false,
          filter: {
            price: { $between: { $ge: 23, $lt: 60 } }
          }
        }
      ]
    }
  ]);

  expect(actualCoreResponse).toEqual([
    {
      fieldId: 'price',
      displayName: 'Price',
      options: [
        {
          displayName: '0 - 23',
          count: 20,
          selected: false,
          matcher: '$between',
          value: {
            start: { matcher: '$ge', value: 0 },
            end: { matcher: '$lt', value: 23 }
          }
        },
        {
          displayName: '23 - 60',
          count: 20,
          selected: false,
          matcher: '$between',
          value: {
            start: { matcher: '$ge', value: 23 },
            end: { matcher: '$lt', value: 60 }
          }
        }
      ]
    }
  ]);
});

