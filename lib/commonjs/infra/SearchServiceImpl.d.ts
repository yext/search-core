import { SearchService } from '../services/SearchService';
import { UniversalSearchRequest } from '../models/searchservice/request/UniversalSearchRequest';
import { UniversalSearchResponse } from '../models/searchservice/response/UniversalSearchResponse';
import { HttpService } from '../services/HttpService';
import { AnswersConfig } from '../models/core/AnswersConfig';
import { VerticalSearchRequest } from '../models/searchservice/request/VerticalSearchRequest';
import { VerticalSearchResponse } from '../models/searchservice/response/VerticalSearchResponse';
import { ApiResponseValidator } from '../validation/ApiResponseValidator';
/**
 * The implementation of SearchService which hits LiveAPI.
 *
 * @internal
 */
export declare class SearchServiceImpl implements SearchService {
    private config;
    private httpService;
    private apiResponseValidator;
    private verticalSearchEndpoint;
    private universalSearchEndpoint;
    constructor(config: AnswersConfig, httpService: HttpService, apiResponseValidator: ApiResponseValidator);
    universalSearch(request: UniversalSearchRequest): Promise<UniversalSearchResponse>;
    verticalSearch(request: VerticalSearchRequest): Promise<VerticalSearchResponse>;
    /**
     * Injects toString() methods into the request objects that require them
     */
    private injectToStringMethods;
}
//# sourceMappingURL=SearchServiceImpl.d.ts.map