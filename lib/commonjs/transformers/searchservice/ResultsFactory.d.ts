import { Result } from '../../models/searchservice/response/Result';
import { Source } from '../../models/searchservice/response/Source';
/**
 * A factory which creates results from different sources
 */
export declare class ResultsFactory {
    static create(results: any, source: Source): Result[];
    private static fromKnowledgeManager;
    private static fromGoogleCustomSearchEngine;
    private static fromBingCustomSearchEngine;
    private static fromZendeskSearchEngine;
    private static fromAlgoliaSearchEngine;
    private static fromGeneric;
    static fromDirectAnswer(result: any): Result;
}
//# sourceMappingURL=ResultsFactory.d.ts.map