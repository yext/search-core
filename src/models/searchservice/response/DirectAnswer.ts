import Result from './Result';

/**
 * A direct answer to a search
 *
 * @public
 */
export default interface DirectAnswer {
  /** The result of the direct answer */
  value: string;
  /** The entity associated with the direct answer */
  relatedResult: Result;
  /** The vertical key of the direct answer */
  verticalKey: string;
  /** The name of the entity of the direct answer */
  entityName: string;
  /** The field name of the direct answer value */
  fieldName: string;
  /** The field api name of the direct answer */
  fieldApiName: string;
  /** The field type of the direct answer */
  fieldType: string;
}
