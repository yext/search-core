/**
* A domain model representation of an AutoComplete request. This model can be used for
* AutoComplete on vertical, universal, or filter search.
*/

export interface AutoCompleteRequest {
  input: string,
  sessionTrackingEnabled?: boolean,
}

export interface VerticalAutoCompleteRequest extends AutoCompleteRequest {
  verticalKey: string,
}

export interface FilterAutoCompleteRequest extends VerticalAutoCompleteRequest {
  searchParameters: SearchParameters
}

export interface SearchParameters {
  sectioned: boolean,
  fields: {
    fieldApiName: string,
    entityTypeId: string,
    fetchEntities: boolean
  }[];
}
