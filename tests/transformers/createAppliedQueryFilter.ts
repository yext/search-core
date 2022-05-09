import { Matcher } from '../../src/models/searchservice/common/Matcher';
import { AppliedQueryFilter } from '../../src/models/searchservice/response/AppliedQueryFilter';
import { AppliedQueryFilterType } from '../../src/models/searchservice/response/AppliedQueryFilterType';
import { LocationFilterDetails } from '../../src/models/searchservice/response/LocationFilterDetails';
import { createAppliedQueryFilter } from '../../src/transformers/searchservice/createAppliedQueryFilter';

it('createAppliedQueryFilter correctly transforms appliedQueryFilters with "FIELD_VALUE" filter type', () => {
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
  const expectedResult: AppliedQueryFilter = {
    displayKey: 'Job Category',
    displayValue: 'Sales',
    filter: {
      fieldId: 'c_jobCategory',
      matcher: Matcher.Equals,
      value: 'Sales'
    },
    type: AppliedQueryFilterType.FieldValue
  };
  const transformedAppliedQueryFilters = createAppliedQueryFilter(response.appliedQueryFilters[0]);
  expect(transformedAppliedQueryFilters).toEqual(expectedResult);
});

it('createAppliedQueryFilter correctly transforms appliedQueryFilters with "INTENT" filter type', () => {
  const response = {
    appliedQueryFilters: [
      {
        displayKey: 'Location',
        displayValue: 'near me',
        filter: {
          'builtin.location': {
            $near: {
              lat: 38.8955,
              lng: -77.0699,
              radius: 40233.6
            }
          }
        },
        type:'INTENT'
      }
    ]
  };
  const expectedResult: AppliedQueryFilter = {
    displayKey: 'Location',
    displayValue: 'near me',
    filter: {
      fieldId: 'builtin.location',
      matcher: Matcher.Near,
      value: {
        lat: 38.8955,
        lng: -77.0699,
        radius: 40233.6
      }
    },
    type: AppliedQueryFilterType.Intent
  };
  const transformedAppliedQueryFilters = createAppliedQueryFilter(response.appliedQueryFilters[0]);
  expect(transformedAppliedQueryFilters).toEqual(expectedResult);
});

it('createAppliedQueryFilter correctly transforms appliedQueryFilters with "PLACE" filter type', () => {
  const filterDetails: LocationFilterDetails = {
    latitude: 37.677592044,
    longitude: -78.6190526172645,
    placeName: 'Virginia, United States',
    featureTypes: [
      'region'
    ],
    boundingBox: {
      minLatitude: 36.540855,
      minLongitude: -83.6753959969438,
      maxLatitude: 39.4660129984577,
      maxLongitude: -75.165704098375
    }
  };

  const response = {
    appliedQueryFilters: [
      {
        displayKey: 'Location',
        displayValue: 'Virginia',
        filter:{
          'builtin.location': {
            '$eq': 'P-region.7919684583758790'
          }
        },
        type: 'PLACE',
        details: filterDetails
      }
    ],
  };
  const expectedResult: AppliedQueryFilter = {
    displayKey: 'Location',
    displayValue: 'Virginia',
    filter: {
      fieldId: 'builtin.location',
      matcher: Matcher.Equals,
      value: 'P-region.7919684583758790'
    },
    type: AppliedQueryFilterType.Place,
    details: filterDetails
  };
  const transformedAppliedQueryFilters = createAppliedQueryFilter(response.appliedQueryFilters[0]);
  expect(transformedAppliedQueryFilters).toMatchObject(expectedResult);
});
