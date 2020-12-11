import { Result } from './Result';

/**
 * A direct answer to a search
 */
export interface DirectAnswer {
  value: string;
  relatedResult: Result;
  verticalKey: string;
  entityName: string;
  fieldName: string;
  fieldApiName: string;
  fieldType: string;
}
