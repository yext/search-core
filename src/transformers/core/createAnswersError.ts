import { AnswersError } from '../../models/core/AnswersError';

export function createAnswersError(data: any): Readonly<AnswersError> {
  return Object.freeze({
    code: data.code,
    message: data.message
  });
}