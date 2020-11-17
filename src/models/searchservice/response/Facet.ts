import SimpleFilter from '../request/SimpleFilter';

export default interface Facet {
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