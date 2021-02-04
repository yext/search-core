import { HighlightedValue } from '../../models/searchservice/response/HighlightedValue';

/**
 * A highlighted field object from the API that does not contain nested fields
 */
interface ChildHighlightedField {
  value: string,
  matchedSubstrings: {
    length: number,
    offset: number
  }[]
}

/**
 * Responsible for constructing {@link HighlightedValue}s
 */
export class HighlightedValueFactory {
  /**
   * Constructs an array of {@link HighlightedValue}s
   *
   * @param data The raw highlightedFields data from the knowledge graph
   */
  public static create(data: any): HighlightedValue[]{
    return this.createRecursively(data);
  }

  /**
   * Constructs an array of {@link HighlightedValue}s
   *
   * @param data The raw highlightedFields data from the knowledge graph
   * @param path The path to the current field which reflects its nested structure
   */
  private static createRecursively(data: any, path: string[] = []): HighlightedValue[]{
    if (typeof data !== 'object' || data === null){
      return [];
    }

    const highlightedValues: HighlightedValue[] = [];

    Object.entries(data).forEach(([fieldName, highlightedField]) => {
      const currentPath = [...path];
      currentPath.push(fieldName);

      if (this.isChildHighlightedField(highlightedField)) {
        const { value, matchedSubstrings } = highlightedField;

        const highlightedValue = this.from(value, fieldName, currentPath, matchedSubstrings);
        highlightedValues.push(highlightedValue);
      } else {
        const nestedHighlightedValues = this.createRecursively(data[fieldName], currentPath);
        highlightedValues.push(...nestedHighlightedValues);
      }
    });

    return highlightedValues;
  }

  /**
   * Constructs a single {@link HighlightedValue}
   */
  private static from(
    value: string,
    fieldName: string,
    path: string[],
    matchedSubstrings: {
      length: number,
      offset: number
    }[]): HighlightedValue
  {
    return {
      value: value,
      fieldName: fieldName,
      path: path,
      matchedSubstrings: matchedSubstrings
    };
  }

  /**
   * Determines whether or not a field is a {@link ChildHighlightedField}
   *
   * @param field
   */
  private static isChildHighlightedField(field: unknown): field is ChildHighlightedField {
    return (field as ChildHighlightedField).value !== undefined &&
      (field as ChildHighlightedField).matchedSubstrings !== undefined;
  }
}
