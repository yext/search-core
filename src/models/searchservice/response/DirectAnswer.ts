import { Result } from './Result';
import { DirectAnswerType } from './DirectAnswerType';

/**
 * A direct answer to a search.
 *
 * @public
 */
export interface DirectAnswer {
  /** The type of direct answer. */
  type: DirectAnswerType;
  /** The result of the direct answer. */
  value: string;
  /** The entity associated with the direct answer. */
  relatedResult: Result;
  /** The vertical key of the direct answer. */
  verticalKey: string;
}

/**
 * A direct answer which was found within a document.
 *
 * @public
 */
export interface FeaturedSnippetDirectAnswer extends DirectAnswer {
  /** Indicates that the type is a FeaturedSnippetDirectAnswer */
  type: DirectAnswerType.FeaturedSnippet;
  /** {@inheritDoc DirectAnswer.value} */
  value: string;
  /** {@inheritDoc DirectAnswer.relatedResult} */
  relatedResult: Result;
  /** {@inheritDoc DirectAnswer.verticalKey} */
  verticalKey: string;
  /** The document text which the featured snippet came from. */
  documentText: string;
  /** The locations in the document text of the featured snippet. */
  matchedSubstrings: {offset: number, length: number}[];
}

/**
 * A direct answer where the answer came from a field from the knowledge graph.
 *
 * @public
 */
export interface FieldValueDirectAnswer extends DirectAnswer {
  /** Indicates that the type is a FieldValueDirectAnswer */
  type: DirectAnswerType.FieldValue;
  /** {@inheritDoc DirectAnswer.value} */
  value: string;
  /** {@inheritDoc DirectAnswer.relatedResult} */
  relatedResult: Result;
  /** {@inheritDoc DirectAnswer.verticalKey} */
  verticalKey: string;
  /** The name of the entity that direct answer came from. */
  entityName: string;
  /** The field name of the direct answer. */
  fieldName: string;
  /** The field api name of the direct answer. */
  fieldApiName: string;
  /** The field type of the direct answer. */
  fieldType: string;
}