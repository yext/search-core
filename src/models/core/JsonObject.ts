export type JsonObject =
  | string
  | number
  | boolean
  | null
  | { [property: string]: JsonObject }
  | JsonObject[];