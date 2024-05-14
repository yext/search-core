import { GenerativeDirectAnswerRequest } from '../models/generativedirectanswer/GenerativeDirectAnswerRequest';
import { GenerativeDirectAnswerResponse } from '../models/generativedirectanswer/GenerativeDirectAnswerResponse';

/**
 * A service for autocomplete requests.
 *
 * @public
 */
export interface GenerativeDirectAnswerService {
  /**
   * Generates an answer to a search query.
   */
  generateAnswer(request: GenerativeDirectAnswerRequest): Promise<GenerativeDirectAnswerResponse>
}