import Result from './Result';
import ResultFactory from './ResultFactory';

interface DirectAnswerProps {
  relatedResult: Result;
  verticalKey: string;
  entityName?: string;
  fieldName?: string;
  fieldApiName?: string;
  value?: string;
  fieldType?: string;
}

/**
 * A direct answer to a search
 */
export default class DirectAnswer {
  private constructor(private props: DirectAnswerProps) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static from(data: any): DirectAnswer {
    if (!data.relatedItem) {
      throw new Error('The direct answer does not contain a relatedItem property');
    }
    if (!data.answer) {
      throw new Error('The direct answer does not contain an answer property');
    }

    return new DirectAnswer({
      relatedResult: ResultFactory.fromDirectAnswer(data.relatedItem.data),
      verticalKey: data.relatedItem.verticalConfigId,
      entityName: data.answer.entityName,
      fieldName: data.answer.fieldName,
      fieldApiName: data.answer.fieldApiName,
      value: data.answer.value,
      fieldType: data.answer.fieldType
    });
  }

  get relatedResult(): Result {
    return this.props.relatedResult;
  }

  get verticalKey(): string {
    return this.props.verticalKey;
  }

  get entityName(): string | undefined {
    return this.props.entityName;
  }

  get fieldName(): string | undefined {
    return this.props.fieldName;
  }

  get fieldApiName(): string | undefined {
    return this.props.fieldApiName;
  }

  get value(): string | undefined {
    return this.props.value;
  }

  get fieldType(): string | undefined {
    return this.props.fieldType;
  }
}