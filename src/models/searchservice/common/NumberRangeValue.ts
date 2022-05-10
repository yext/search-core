import { Matcher } from './Matcher';

/**
 * The start limit of {@link NumberRangeValue}.
 *
 * @public
 */
export interface LowerNumberRangeLimit {
  /** {@link Matcher} for the start limit */
  matcher: Matcher.GreaterThan | Matcher.GreaterThanOrEqualTo,
  /** Value of the limit. */
  value: number
}

/**
 * The end limit of {@link NumberRangeValue}.
 *
 * @public
 */
export interface UpperNumberRangeLimit {
  /** {@link Matcher} for the end limit */
  matcher: Matcher.LessThan | Matcher.LessThanOrEqualTo,
  /** Value of the limit. */
  value: number
}

/**
 * A filter value for a filter with a $between {@link Matcher}.
 *
 * @public
 */
export interface NumberRangeValue {
  /** Start limit of the number range value. */
  start?: LowerNumberRangeLimit,
  /** End limit of the number range value. */
  end?: UpperNumberRangeLimit
}

export function isNumberRangeValue(data: unknown): data is NumberRangeValue {
  return typeof data === 'object' && !!data && ('start' in data || 'end' in data);
}