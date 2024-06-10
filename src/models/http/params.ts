export interface QueryParams {
  [key: string]: string | number | boolean | undefined
}

export interface BodyParams {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export interface SanitizedQueryParams {
  [key: string]: string | number | boolean
}
