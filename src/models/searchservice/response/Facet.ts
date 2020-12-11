import { SimpleFilter } from '../request/SimpleFilter';

export interface Facet {
  fieldId: string;
  displayName: string;
  options: FacetOption[];
}

export interface FacetOption {
  displayName: string;
  count: number;
  selected: boolean;
  filter: SimpleFilter;
}