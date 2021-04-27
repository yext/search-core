import { Matcher } from '../common/Matcher';
/**
 * Represents a filter which compares values to a single field.
 *
 * @public
 */
export interface Filter {
    /**
     * The fieldId to apply the filter against.
     *
     * @example
     * 'c_jobCategory'
     */
    fieldId: string;
    /** {@inheritDoc Matcher} */
    matcher: Matcher;
    /**
     * The value to compare.
     *
     * @example
     * 'Sales'
     */
    value: string | number | boolean | NearFilterValue;
}
/**
 * A filter value for a filter with a $near {@link Matcher}.
 *
 * @public
 */
export interface NearFilterValue {
    /** The radius (in meters) around the latitude and longitude. */
    radius: number;
    /** The latitude of the location. */
    lat: number;
    /** The longitude of the location. */
    lng: number;
}
//# sourceMappingURL=Filter.d.ts.map