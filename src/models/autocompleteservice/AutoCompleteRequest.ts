/**
* A domain model representation of an AutoComplete request. This model can be used for
* AutoComplete on vertical, universal, or filter search.
*/

export default interface AutoCompleteRequest {
  input: string,
  verticalKey? : string,
  sessionTrackingEnabled?: boolean
}
