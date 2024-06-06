import { GenerativeDirectAnswerResponse } from '../../models/generativedirectanswer/GenerativeDirectAnswerResponse';

export function createGenerativeDirectAnswerResponse(data: any): GenerativeDirectAnswerResponse {
  return {
    directAnswer: data.response.directAnswer,
    resultStatus: data.response.resultStatus,
    citations: data.response.citations
  };
}