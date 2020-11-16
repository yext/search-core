/**
 * Suggested highlighed values
 */
export default interface HighlightedValue {
  fieldName: string,
  path?: string[],
  value: string,
  matchedSubstrings: {
    length?: number,
    index?: number
  }[]
}