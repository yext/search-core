import { SortType } from './SortType';
import { Direction } from './Direction';
/**
 * Represents a criterion that can be used to sort results.
 *
 * @remarks
 * Overrides the sort options that are configured on the experience configuration.
 *
 * @public
 */
export interface SortBy {
  /** {@inheritDoc SortType} */
  type: SortType,
  /** The field name to sort by. Required if the SortBy type is {@link SortType.Field}. */
  field?: string,
  /** The direction of the sort. Required if the SortBy type is {@link SortType.Field}. */
  direction?: Direction
}