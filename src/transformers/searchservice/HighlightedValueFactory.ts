import HighlightedValue from '../../models/searchservice/response/HighlightedValue';

export default class HighlightedValueFactory {
  public static create(data: any, fieldPath: string[]): Readonly<HighlightedValue[]>{
    if (typeof data === 'object' && data != null){
      throw new Error('Highlighed value data is not an array');
    }

    const highlightedValues: HighlightedValue[] = [];

    Object.entries(data).forEach(([highlightedFieldName]) => {
      const highlightedField = data[highlightedFieldName];

      // check for nested fields
      if (typeof highlightedField === 'object' &&
          Object.keys(highlightedField).length > 0 &&
          highlightedField['matchedSubstrings'] === undefined) {
        // recurse to children fields
        const highlightedValue = this.create(data[highlightedFieldName], fieldPath);
        highlightedValues.push(highlightedValue);
      } else {
        fieldPath.push(highlightedFieldName);
        const highlightedValue = this.from(data[highlightedFieldName], highlightedFieldName, fieldPath);
        highlightedValues.push(highlightedValue);
      }
    });

    return highlightedValues;;
  }

  private static from(data: any, fieldName: string, fieldPath: string[]): Readonly<HighlightedValue>{
    return Object.freeze({
      fieldName: fieldName,
      fieldPath: fieldPath,
      value: data.value,
      matchedSubstrings: data.matchedSubstrings
    });
  }
}