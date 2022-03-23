import { Matcher } from './Matcher';

/**
 * Matcher values of a lower limit for a filter with a $between {@link Matcher}.
 *
 * @public
 */
export type LowerNumberRangeMatcher = Matcher.GreaterThan | Matcher.GreaterThanOrEqualTo;

/**
 * Matcher values of an upper limit for a filter with a $between {@link Matcher}.
 *
 * @public
 */
export type UpperNumberRangeMatcher = Matcher.LessThan | Matcher.LessThanOrEqualTo;


/**
 * The start limit of {@link NumberRangeValue}.
 *
 * @public
 */
export interface LowerNumberRangeLimit {
  /** {@link Matcher} for the start limit */
  matcher: LowerNumberRangeMatcher,
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
  matcher: UpperNumberRangeMatcher,
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
  start?: LowerNumberRangeLimit
  /** End limit of the number range value. */
  end?: UpperNumberRangeLimit
}

export function isNumberRangeValue(data: unknown): data is NumberRangeValue {
  return typeof data === 'object' && !!data && ('start' in data || 'end' in data);
}