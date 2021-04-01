import { HighlightedValue } from './HighlightedValue';

/**
 * A mapping of the values emphasized by the Answers API.
 *
 * @remarks
 * The structure of HighlightedFields matches the structure of the corresponding rawData of a {@link Result}.
 *
 * @example
 * If a user searches for 'apple' and a description field in the results contains the value 'apple pie',
 * the API will likely match the word 'apple'.
 *
 * ```js
 * {
 *   name: {
 *     value: 'Johnny Appleseed',
 *     matchedSubstrings: [{ offset: 7, length: 5}]
 *   },
 *   c_favoriteFruits: [
 *     {
 *       apples: [
 *         {
 *           value: 'Granny Smith',
 *           matchedSubstrings: []
 *         },
 *         {
 *           value: 'Upton Pyne Apple',
 *           matchedSubstrings: [{ offset: 11, length: 5}]
 *         }
 *       ]
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
