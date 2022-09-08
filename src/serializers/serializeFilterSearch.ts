import { SearchParameterField } from '../models/autocompleteservice/AutocompleteRequest';
import { FieldValueFilter } from '../models/searchservice/request/FieldValueFilter';

export function serializeSearchParameterFields(fields: SearchParameterField[]) {
  return fields.map(({ fieldApiName, entityType, fetchEntities }) => (
    {
      fieldId: fieldApiName,
      entityTypeId: entityType,
      shouldFetchEntities: fetchEntities
    }
  ));
}

export function serializeExcludedFields(excludedFields?: FieldValueFilter[]) {
  return excludedFields?.map(({ fieldId, matcher, value }) => (
    {
      [fieldId]: {
        [matcher]: value
      }
    }
  ));
}