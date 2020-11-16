/**
 * A value that the API suggests to highlight
 */
export default interface HighlightedValue {
  fieldName: string,
  fieldPath?: string[],
  value: string,
  matchedSubstrings: {
    length: number,
    index: number
  }[]
}