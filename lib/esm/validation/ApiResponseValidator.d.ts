import { ApiResponse } from '../models/answersapi/ApiResponse';
import { AnswersError } from '../models/answersapi/AnswersError';
/**
 * Determines whether or not an API response can be used to construct an answers-core response
 *
 * @internal
 */
export declare class ApiResponseValidator {
    validate(apiResponse: ApiResponse): AnswersError | undefined;
    private validateResponseProp;
    private validateMetaProp;
    private checkForApiErrors;
}
//# sourceMappingURL=ApiResponseValidator.d.ts.map