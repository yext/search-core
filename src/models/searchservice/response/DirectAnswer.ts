import { Result } from './Result';
import { DirectAnswerType } from './DirectAnswerType';
import { Snippet } from './Snippet';

/**
 * A direct answer to a search.
 *
 * @public
 */
export interface DirectAnswer {
  /** The type of direct answer. */
  type: DirectAnswerType | string;
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
  /** Indicates that the type is a FeaturedSnippetDirectAnswer. */
  type: 'FEATURED_SNIPPET';
  /** {@inheritDoc DirectAnswer.value} */
  value: string;
  /** {@inheritDoc DirectAnswer.relatedResult} */
  relatedResult: Result;
  /** {@inheritDoc DirectAnswer.verticalKey} */
  verticalKey: string;
  /** The snippet where the direct answer was found */
  snippet: Snippet;
}

/**
 * A direct answer where the answer came from a field from the knowledge graph.
 *
 * @public
 */
export interface FieldValueDirectAnswer extends DirectAnswer {
  /** Indicates that the type is a FieldValueDirectAnswer. */
  type: 'FIELD_VALUE';
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