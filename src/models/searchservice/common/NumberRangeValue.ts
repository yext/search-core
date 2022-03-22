import { Matcher } from './Matcher';

/**
 * Matcher values for a filter with a $between {@link Matcher}.
 *
 * @public
 */
export type NumberRangeMatcher = Matcher.GreaterThan
| Matcher.GreaterThanOrEqualTo
| Matcher.LessThan
| Matcher.LessThanOrEqualTo;


/**
 * The start/end limit of {@link NumberRangeValue}.
 *
 * @public
 */
export interface NumberRangeLimit {
  /** {@link Matcher} for the limit */
  matcher: NumberRangeMatcher,
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
  start: NumberRangeLimit
  /** End limit of the number range value. */
  end: NumberRangeLimit
}
