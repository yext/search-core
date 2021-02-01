export interface QueryParams {
  [key: string]: string | number | boolean | undefined
}

export interface SanitizedQueryParams {
  [key: string]: string | number | boolean
}
