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
    if (this.isChildHighlightedField(data)) {
      return [ this.from(data.value, path[path.length - 1], path, data.matchedSubstrings) ];
    }

    const highlightedValues: HighlightedValue[] = [];
    if (Array.isArray(data)) {
      data.forEach(d => {
        highlightedValues.push(...this.createRecursively(d, path));
      });
    } else {
      Object.keys(data).forEach(fieldName => {
        const currentPath = [...path, fieldName];
        const nestedHighlightedValues = this.createRecursively(data[fieldName], currentPath);
        highlightedValues.push(...nestedHighlightedValues);
      });
    }
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
