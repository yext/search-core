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

      // check for nested fields
      if (typeof highlightedField === 'object' &&
          Object.keys(highlightedField).length > 0 &&
          highlightedField['matchedSubstrings'] === undefined) {
        const currentPath = [...path];
        currentPath.push(fieldName);

        // recurse to children fields
        const nestedHighlightedValues = this.create(data[fieldName], currentPath);
        highlightedValues.push(...nestedHighlightedValues);
      } else {
        const currentPath = [...path];
        currentPath.push(fieldName);

        const highlightedValue = this.from(data[fieldName], fieldName, currentPath);
        highlightedValues.push(highlightedValue);
      }
    });

    return highlightedValues;
  }

  private static from(data: any, fieldName: string, path: string[]): Readonly<HighlightedValue>{
    return Object.freeze({
      fieldName: fieldName,
      path: path,
      value: data.value,
      matchedSubstrings: data.matchedSubstrings
    });
  }
}