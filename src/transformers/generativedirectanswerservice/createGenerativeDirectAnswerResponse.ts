import { GenerativeDirectAnswerResponse } from '../../models/generativedirectanswer/GenerativeDirectAnswerResponse';

export function createGenerativeDirectAnswerResponse(data: any): GenerativeDirectAnswerResponse {
  if (!data.response) {
    throw new Error('The direct answer data does not contain a response property');
  }
  if (!Object.keys(data.response).length) {
    throw new Error('The direct answer response is empty');
  }
  return {
    directAnswer: data.response.directAnswer,
    resultStatus: data.response.resultStatus,
    citations: data.response.citations
  };
}