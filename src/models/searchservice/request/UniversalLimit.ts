/**
 * The maximum limit of results per vertical.
 * Each limit can be set from 1-50, inclusive.
 *
 * @example
 * \{
 *    people: 5,
 *    locations: 10,
 *    events: 8
 * \}
 *
 * @public
 */
export interface UniversalLimit {
  [verticalKey: string]: number
}

