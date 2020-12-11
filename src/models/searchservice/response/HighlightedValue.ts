/**
 * Represents field values or substrings of field values that the answers API emphasized
 *
 * For example, if a user searches for 'pet' and a description field in the results contains the value 'A pet store',
 * the API will likely match the word 'pet'
 */
export interface HighlightedValue {
  fieldName: string,
  path: string[],
  value: string,
  matchedSubstrings: {
    length: number,
    offset: number
  }[]
}
