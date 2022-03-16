import { QuestionSubmissionRequest } from '@yext/answers-core';

const questionRequest: QuestionSubmissionRequest = {
  email: 'oshi@yext.com',
  entityId: 'Org-1',
  name: 'bob',
  questionText: 'wow wow wow!',
  sessionTrackingEnabled: true,
  additionalHttpHeaderValues: {
    'Client-SDK': {
      CORE_TEST_SITE: 'test'
    }
  }
};

export default questionRequest;