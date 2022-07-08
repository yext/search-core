import { HighlightedValue } from './HighlightedValue';

/**
 * A mapping of fields to the values emphasized by the Search API.
 *
 * @remarks
 * Only fields that have been marked as highlighted will be present - which may not be
 * all fields of the corresponding {@link Result}'s rawData.
 * Fields that are present will match the rawData's structure and order.
 *
 * @example
 * If a user searches for 'apple', the API will likely match fields that contain
 * the word 'apple'.
 *
 * ```js
 * {
 *   description: {
 *     value: 'likes apple pie and green apples',
 *     matchedSubstrings: [
 *       { offset: 6, length: 5 },
 *       { offset: 26, length: 5 }
 *     ]
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
 *       ],
 *       pears: [
 *         {
 *           value: 'Callery Pear',
 *           matchedSubstrings: []
 *         }
 *       ]
 *     }
 *   ]
 * }
 * ```
 *
 * @public
 */
export type HighlightedFields = {
  /**
   * A mapping of a field to either an array of HighlightedFields, HighlightedFields for
   * this field's subfields, or a {@link HighlightedValue} for the field.
   *
   * @remarks
   * HighlightedFields is an object of arbitrary shape which contains {@link HighlightedValue} objects.
   */
  [fieldId: string]: HighlightedValue | HighlightedValue[] | HighlightedFields | HighlightedFields[]
};
