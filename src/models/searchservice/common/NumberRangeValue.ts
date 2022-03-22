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
  matcher: NumberRangeMatcher,
  value: number
}

/**
 * A filter value for a filter with a $between {@link Matcher}.
 *
 * @public
 */
export interface NumberRangeValue {
  start: NumberRangeLimit
  end: NumberRangeLimit
}
