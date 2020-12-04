import { SearchParameterField } from '../../models/autocompleteservice/AutoCompleteRequest';

export function createConvertedSearchParamField(field: SearchParameterField) {
  return {
    fieldId: field.fieldApiName,
    entityTypeId: field.entityType,
    fetchEntities: field.fetchEntities
  };
}