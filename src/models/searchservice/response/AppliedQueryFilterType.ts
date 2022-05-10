/**
 * Represents the type of {@link AppliedQueryFilter} applied to a search.
 *
 * @public
 */
export enum AppliedQueryFilterType {
  /** Indicates that a field value filter is applied based on the query. */
  FieldValue = 'FIELD_VALUE',
  /** Indicates that a location filter is applied based on the query. */
  Place = 'PLACE',
  /** Indicates that a search intent filter is applied based on the query. */
  Intent = 'INTENT'
}
