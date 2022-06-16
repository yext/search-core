import { SearchParameterField } from '../models/autocompleteservice/AutocompleteRequest';
import { Filter } from '../models/searchservice/request/Filter';

export function serializeSearchParameterFields(fields: SearchParameterField[]) {
  return fields.map(({ fieldApiName, entityType, fetchEntities }) => (
    {
      fieldId: fieldApiName,
      entityTypeId: entityType,
      shouldFetchEntities: fetchEntities
    }
  ));
}

export function serializeExcludedFields(excludedFields?: Filter[]) {
  return excludedFields?.map(({ fieldId, matcher, value }) => (
    {
      [fieldId]: {
        [matcher]: value
      }
    }
  ));
}