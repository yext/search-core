import QuestionSubmissionResponse from '../models/questionsubmission/QuestionSubmissionResponse';
import QuestionSubmissionRequest from '../models/questionsubmission/QuestionSubmissionRequest';

export default interface QuestionSubmissionService {
  submitQuestion(request: QuestionSubmissionRequest): Promise<QuestionSubmissionResponse>
}