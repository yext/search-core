/**
* A domain model representation of an AutoComplete request. This model can be used for
* AutoComplete on vertical, universal, or filter search.
*/

export interface UniversalAutoCompleteRequest {
  input: string,
  sessionTrackingEnabled?: boolean,
}

export interface VerticalAutoCompleteRequest extends UniversalAutoCompleteRequest {
  verticalKey: string,
}

export interface FilterAutoCompleteRequest extends VerticalAutoCompleteRequest {
  searchParameters: SearchParameters
}

export interface SearchParameterField {
  fieldApiName: string,
  entityType: string,
  fetchEntities: boolean
}

export interface SearchParameters {
  sectioned: boolean,
  fields: SearchParameterField[];
}
