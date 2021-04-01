import { HighlightedValue } from './HighlightedValue';

/**
 * A mapping of the values emphasized by the Answers API.
 *
 * @remarks
 * The structure of HighlightedFields matches the structure of the corresponding rawData of a {@link Result}.
 *
 * @example
 * If a user searches for 'pet' and a description field in the results contains the value 'A pet store',
 * the API will likely match the word 'pet'.
 *
 * @example
 * ```js
 * {
 *   name: {
 *     value: 'Yext',
 *     matchedSubstrings: [{ offset: 0, length: 4}]
 *   },
 *   c_food: [
 *     {
 *       fruits: [
 *       {
 *         value: 'apple',
 *         matchedSubstrings: []
 *       },
 *       {
 *         value: 'pear',
 *         matchedSubstrings: []
 *       }
 *     }
 *   ]
 * }
 * ```
 *
 * @public
 */
export interface HighlightedFields {
  /**
   * A mapping of a field to either an array of HighlightedFields, HighlightedFields for
   * this field's subfields, or a {@link HighlightedValue} for the field.
   *
   * @remarks
   * HighlightedFields is an object of arbitrary shape which contains {@link HighlightedValue} objects.
   */
  [fieldId: string]: HighlightedValue | HighlightedValue[] | HighlightedFields | HighlightedFields[]
}
