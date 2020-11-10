import Result from './Result';

/**
 * A direct answer to a search
 */
export default class DirectAnswer {
  private constructor(
    private type: string,
    private content: DirectAnswerContent,
    private relatedItem: RelatedItem
  ) {}
}

interface DirectAnswerContent {
  entityName?: string,
  fieldName?: string,
  fieldApiName?: string,
  value?: string,
  fieldType?: string,
}

interface RelatedItem {
  verticalKey: string;
  result: Result;
}