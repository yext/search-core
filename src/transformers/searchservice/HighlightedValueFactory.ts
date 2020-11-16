import HighlightedValue from '../../models/searchservice/response/HighlightedValue';

/**
 * Responsible for constructing HighlightedValues
 */
export default class HighlightedValueFactory {
  /**
   * Constructs an array of HighlightedValues
   * @param data The raw highlightedFields data from the knowledge graph
   * @param path The path to the current field which reflects its nested structure
   */
  public static create(data: any, path: string[] = []): HighlightedValue[]{
    if (typeof data !== 'object' || data === null){
      return [];
    }

    const highlightedValues: HighlightedValue[] = [];

    Object.entries(data).forEach(([fieldName]) => {
      const highlightedField = data[fieldName];

      const fieldIsNested = typeof highlightedField === 'object' &&
        Object.keys(highlightedField).length > 0 &&
        highlightedField['matchedSubstrings'] === undefined;

      if (fieldIsNested) {
        const currentPath = [...path];
        currentPath.push(fieldName);

        const nestedHighlightedValues = this.create(data[fieldName], currentPath);
        highlightedValues.push(...nestedHighlightedValues);
      } else {
        const value = data[fieldName].value;
        const currentPath = [...path];
        currentPath.push(fieldName);
        const matchedSubstrings = data[fieldName].matchedSubstrings;

        const highlightedValue = this.from(value, fieldName, currentPath, matchedSubstrings);
        highlightedValues.push(highlightedValue);
      }
    });

    return highlightedValues;
  }

  /**
   * Constructs a single HighlightedValue
   */
  private static from(
    value: string,
    fieldName: string,
    path: string[],
    matchedSubstrings: {
      length: number,
      offset: number
    }[]): Readonly<HighlightedValue>
  {
    return Object.freeze({
      value: value,
      fieldName: fieldName,
      path: path,
      matchedSubstrings: matchedSubstrings
    });
  }
}