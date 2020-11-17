import AnswersError from '../../models/core/AnswersError';

export default function createAnswersError(data: any): Readonly<AnswersError> {
  return Object.freeze({
    code: data.code,
    type: data.type,
    message: data.message
  });
}