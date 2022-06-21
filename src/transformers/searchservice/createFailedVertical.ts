import { FailedVertical } from '../../models/searchservice/response/FailedVertical';

export function createFailedVertical(data: any): FailedVertical {
  return {
    verticalKey: data.verticalConfigId,
    errorType: data.errorType,
    queryDurationMillis: data.queryDurationMillis,
    details: data.details
  };
}