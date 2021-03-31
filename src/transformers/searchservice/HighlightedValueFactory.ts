import { HighlightedFieldLeaf } from '../../models/searchservice/response/HighlightedFieldLeaf';
import { HighlightedValue } from '../../models/searchservice/response/HighlightedValue';

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
    if (typeof data !== 'object' || data === null){
      return [];
    }
    const highlightedValues: HighlightedValue[] = [];
    Object.entries(data).forEach(([currentFieldName, highlightedField]) => {
      highlightedValues.push(
        ...this.createRecursively(highlightedField, [currentFieldName], currentFieldName));
    });
    return highlightedValues;
  }

  /**
   * Constructs an array of {@link HighlightedValue}s
   *
   * @param data The raw highlightedFields data from the knowledge graph
   * @param path The path to the current field which reflects its nested structure
   */
  private static createRecursively(
    data: any,
    path: (string|number)[],
    fieldName: string): HighlightedValue[]
{
    if (typeof data !== 'object' || data === null){
      return [];
    }
    if (this.isHighlightedFieldLeaf(data)) {
      return [ this.from(data.value, fieldName, path, data.matchedSubstrings) ];
    }

    const highlightedValues: HighlightedValue[] = [];
    if (Array.isArray(data)) {
      data.forEach((highlightedField, index) => {
        highlightedValues.push(...this.createRecursively(highlightedField, [...path, index], fieldName));
      });
    } else {
      Object.entries(data).forEach(([currentFieldName, highlightedField]) => {
        const currentPath = [...path, currentFieldName];
        const nestedHighlightedValues =
          this.createRecursively(highlightedField, currentPath, currentFieldName);
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
    path: (string|number)[],
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
  private static isHighlightedFieldLeaf(field: unknown): field is HighlightedFieldLeaf {
    return (field as HighlightedFieldLeaf).value !== undefined &&
      (field as HighlightedFieldLeaf).matchedSubstrings !== undefined;
  }
}
