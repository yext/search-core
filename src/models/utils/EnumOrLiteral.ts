/**
 * Produces a union type from the enum passed as a generic which consists of the enum values
 * and the string literals of the enum.
 * @public
 */
export type EnumOrLiteral<T extends string> = T | `${T}`;