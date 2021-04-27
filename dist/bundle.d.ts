
/**
 * The main configuration options for {@link AnswersCore}.
 *
 * @public
 */
export declare interface AnswersConfig {
    /** The api key of the answers experience. */
    apiKey: string;
    /** The experience key of the answers experience. */
    experienceKey: string;
    /** The locale of the answers experience. */
    locale: string;
    /**
     * The version of the answers experience configuration.
     *
     * @remarks
     * May be a configuration label (string) or a configuration version (number).
     *
     * @example
     * Examples: 'PRODUCTION', 42
     */
    experienceVersion?: 'STAGING' | 'PRODUCTION' | string | number;
    /* Excluded from this release type: endpoints */
}

/**
 * Provides methods for executing searches, submitting questions, and performing autocompletes.
 *
 * @public
 */
export declare class AnswersCore {
    private searchService;
    private questionSubmissionService;
    private autoCompleteService;
    /* Excluded from this release type: __constructor */
    /**
     * Performs an Answers search across all verticals.
     *
     * @remarks
     * If rejected, the reason will be an {@link AnswersError}.
     *
     * @param request - Universal search request options
     */
    universalSearch(request: UniversalSearchRequest): Promise<UniversalSearchResponse>;
    /**
     * Performs an Answers search for a single vertical.
     *
     * @remarks
     * If rejected, the reason will be an {@link AnswersError}.
     *
     * @param request - Vertical search request options
     */
    verticalSearch(request: VerticalSearchRequest): Promise<VerticalSearchResponse>;
    /**
     * Submits a custom question to the Answers API.
     *
     * @remarks
     * If rejected, the reason will be an {@link AnswersError}.
     *
     * @param request - Question submission request options
     */
    submitQuestion(request: QuestionSubmissionRequest): Promise<QuestionSubmissionResponse>;
    /**
     * Performs an autocomplete request across all verticals.
     *
     * @remarks
     * If rejected, the reason will be an {@link AnswersError}.
     *
     * @param request - Universal autocomplete request options
     */
    universalAutocomplete(request: UniversalAutocompleteRequest): Promise<AutocompleteResponse>;
    /**
     * Performs an autocomplete request for a single vertical.
     *
     * @remarks
     * If rejected, the reason will be an {@link AnswersError}.
     *
     * @param request - Vertical autocomplete request options
     */
    verticalAutocomplete(request: VerticalAutocompleteRequest): Promise<AutocompleteResponse>;
    /**
     * Performs a filtersearch request against specified fields within a single vertical.
     *
     * @remarks
     * This differs from the vertical autocomplete because the vertical autocomplete operates on all entity fields whereas
     * filtersearch operates only on specified fields. If rejected, the reason will be an {@link AnswersError}.
     *
     * @example
     * A site has a 'products' vertical and would like a way to allow the user to narrow down the results by the product name.
     * The site can add a second search bar powered by filtersearch which will include only product names as search
     * suggestions.
     *
     * @param request - filtersearch request options
     */
    filterSearch(request: FilterSearchRequest): Promise<FilterSearchResponse>;
}

/**
 * Represents an error
 *
 * @remarks
 * If the error originates from the Answer API, the code and type property will be present.
 *
 * @public
 */
export declare class AnswersError extends Error {
    /** The error message. */
    message: string;
    /** Answers API error code. */
    code?: number;
    /** Answers API error type. */
    type?: string;
    /* Excluded from this release type: __constructor */
}

/**
 * A filter that the Answers API applied to the search.
 *
 * @public
 */
export declare interface AppliedQueryFilter {
    /**
     * The display name of the filter key.
     *
     * @example
     * 'Job Category'
     */
    displayKey: string;
    /**
     * The value used in the filter.
     *
     * @example
     * 'Sales'
     */
    displayValue: string;
    /** The filter applied to the query results. */
    filter: Filter;
    details: any;
}

/**
 * The response of a universal or vertical autocomplete request.
 *
 * @public
 */
export declare interface AutocompleteResponse {
    /** An array of {@link AutocompleteResult}s. */
    results: AutocompleteResult[];
    /** {@inheritDoc SearchIntent} */
    inputIntents: SearchIntent[];
    /** The ID of the search query. */
    queryId?: string;
    /** A unique id which corresponds to the request. */
    uuid: string;
}

/**
 * An autocomplete suggestion.
 *
 * @public
 */
export declare interface AutocompleteResult {
    /** The value of an autocomplete suggestion. */
    value: string;
    /**
     * A filter applied to the autocomplete response.
     *
     * @remarks
     * This property is only defined for filtersearch.
     */
    filter?: Filter;
    /**
     * The fieldId which corresponds to the AutocompleteResult value.
     *
     * @remarks
     * This property is only defined for filtersearch.
     */
    key?: string;
    /**
     * An array of substrings which overlap with the autocomplete input.
     *
     * @remarks
     * Offset indicates the index of the match, and the length indicates the number of characters of the match.
     */
    matchedSubstrings?: {
        length: number;
        offset: number;
    }[];
    /**
     * An entity that corresponds to the autocomplete result.
     *
     * @remarks
     * This property is only defined if the corresponding {@link SearchParameterField.fetchEntities} field is true.
     */
    relatedItem?: Result;
}

/**
 * A service for autocomplete requests.
 */
declare interface AutocompleteService {
    universalAutocomplete(request: UniversalAutocompleteRequest): Promise<AutocompleteResponse>;
    verticalAutocomplete(request: VerticalAutocompleteRequest): Promise<AutocompleteResponse>;
    filterSearch(request: FilterSearchRequest): Promise<FilterSearchResponse>;
}

/**
 * Represents multiple filters that will be combined to refine results.
 *
 * @public
 */
export declare interface CombinedFilter {
    /** An array of filters applied to the search. */
    filters: (Filter | CombinedFilter)[];
    /** The logical operator used to combine the filters. */
    combinator: FilterCombinator;
}

/**
 * Used to trigger Answers {@link https://hitchhikers.yext.com/tracks/answers-advanced/ans302-query-rules/ | Query Rules}.
 *
 * @remarks
 * May be any valid JSON object
 *
 * @public
 */
export declare type Context = any;

/**
 * A direct answer to a search.
 *
 * @public
 */
export declare interface DirectAnswer {
    /** The {@link DirectAnswerType}. */
    type: DirectAnswerType;
    /** The result of the direct answer. */
    value: string;
    /** The entity associated with the direct answer. */
    relatedResult: Result;
    /** The vertical key of the direct answer. */
    verticalKey: string;
}

/**
 * Represents the type of direct answer.
 *
 * @public
 */
export declare enum DirectAnswerType {
    /** Indicates that the DirectAnswer is a {@link FeaturedSnippetDirectAnswer}. */
    FeaturedSnippet = "FEATURED_SNIPPET",
    /** Indicates that the DirectAnswer is a {@link FieldValueDirectAnswer}. */
    FieldValue = "FIELD_VALUE"
}

/**
 * The direction of a sort.
 *
 * @public
 */
export declare enum Direction {
    /**
     *  An ascending sort
     *
     * @remarks
     * For numbers this sort is low to high. For text it is alphabetical. For dates it is chronological order.
     */
    Ascending = "ASC",
    /**
     * A descending soft
     *
     * @remarks
     * For numbers this sort is high to low. For text it is reverse alphabetical. For dates it is reverse
     * chronological order.
     */
    Descending = "DESC"
}

/**
 * A {@link Facet} which contains extra fields meant to be displayed to the end user.
 *
 * @public
 */
export declare interface DisplayableFacet extends Facet {
    /** {@inheritDoc Facet.fieldId} */
    fieldId: string;
    /** An array of {@link DisplayableFacetOption} */
    options: DisplayableFacetOption[];
    /** The name of the facet which is meant to be displayed to the user. */
    displayName: string;
}

/**
 * A {@link FacetOption} with extra data meant to be displayed to the end user.
 *
 * @public
 */
export declare interface DisplayableFacetOption extends FacetOption {
    /** {@inheritDoc Matcher} */
    matcher: Matcher;
    /** {@inheritDoc FacetOption.value} */
    value: string | number | boolean;
    /** The name of the facet option which is meant  to be displayed to the end user. */
    displayName: string;
    /** The number of results associated with this facet option. */
    count: number;
    /** Whether or not the filter is selected in the search results. */
    selected: boolean;
}

/* Excluded from this release type: Endpoints */

/**
 * Represents dynamic filter options for the Answers API.
 *
 * @public
 */
export declare interface Facet {
    /** The associated fieldId. */
    fieldId: string;
    /**
     * An array of {@link FacetOption}
     *
     * @remarks
     * To indicate that a facet should be disabled, supply an empty array
     */
    options: FacetOption[];
}

/**
 * A filter associated with the facet.
 *
 * @public
 */
export declare interface FacetOption {
    /** {@inheritDoc Matcher} */
    matcher: Matcher;
    /**
     * The value to compare.
     *
     * @example
     * 'Sales'
     */
    value: string | number | boolean;
}

/**
 * A direct answer which was found within a document.
 *
 * @public
 */
export declare interface FeaturedSnippetDirectAnswer extends DirectAnswer {
    /** {@link DirectAnswerType}.FeaturedSnippet. */
    type: DirectAnswerType.FeaturedSnippet;
    /** {@inheritDoc DirectAnswer.value} */
    value: string;
    /** {@inheritDoc DirectAnswer.relatedResult} */
    relatedResult: Result;
    /** {@inheritDoc DirectAnswer.verticalKey} */
    verticalKey: string;
    /** The snippet where the direct answer was found. */
    snippet: Snippet;
}

/**
 * A direct answer where the answer came from a field from the knowledge graph.
 *
 * @public
 */
export declare interface FieldValueDirectAnswer extends DirectAnswer {
    /** {@link DirectAnswerType}.FieldValue. */
    type: DirectAnswerType.FieldValue;
    /** {@inheritDoc DirectAnswer.value} */
    value: string;
    /** {@inheritDoc DirectAnswer.relatedResult} */
    relatedResult: Result;
    /** {@inheritDoc DirectAnswer.verticalKey} */
    verticalKey: string;
    /** The name of the entity that direct answer came from. */
    entityName: string;
    /** The field name of the direct answer. */
    fieldName: string;
    /** The field api name of the direct answer. */
    fieldApiName: string;
    /** The field type of the direct answer. */
    fieldType: string;
}

/**
 * Represents a filter which compares values to a single field.
 *
 * @public
 */
export declare interface Filter {
    /**
     * The fieldId to apply the filter against.
     *
     * @example
     * 'c_jobCategory'
     */
    fieldId: string;
    /** {@inheritDoc Matcher} */
    matcher: Matcher;
    /**
     * The value to compare.
     *
     * @example
     * 'Sales'
     */
    value: string | number | boolean | NearFilterValue;
}

/**
 * Indicates how the filters in a {@link CombinedFilter} should be combined.
 *
 * @public
 */
export declare enum FilterCombinator {
    /** Indicates that filters should be combined with a logical AND. */
    AND = "$and",
    /** Indicates that filters should be combined with a logical OR. */
    OR = "$or"
}

/**
 * Options for a filtersearch request.
 *
 * @public
 */
export declare interface FilterSearchRequest {
    /** {@inheritDoc UniversalAutocompleteRequest.input} */
    input: string;
    /** {@inheritDoc UniversalAutocompleteRequest.sessionTrackingEnabled} */
    sessionTrackingEnabled?: boolean;
    /** {@inheritDoc VerticalAutocompleteRequest.verticalKey} */
    verticalKey: string;
    /** Determines whether or not the results of the {@link FilterSearchResponse} are separated by field. */
    sectioned: boolean;
    /** An array of {@link SearchParameterField} */
    fields: SearchParameterField[];
}

/**
 * The response of a filtersearch request.
 *
 * @public
 */
export declare interface FilterSearchResponse {
    /** Indicates that the results are separated by field in the sections property. */
    sectioned: boolean;
    /**
     * Represents autocomplete results separated by field.
     *
     * @remarks
     * This array will only be populated if sectioned is true.
     */
    sections: {
        /** A display label for the field. */
        label: string;
        /** An array of {@link AutocompleteResult}s. */
        results: AutocompleteResult[];
    }[];
    /**
     * An array of {@link AutocompleteResult}s.
     *
     * @remarks
     * This array will only be populated if sectioned is false.
     */
    results: AutocompleteResult[];
    /** {@inheritDoc SearchIntent} */
    inputIntents: SearchIntent[];
    /** {@inheritDoc AutocompleteResponse.queryId} */
    queryId?: string;
    /** A unique id which corresponds to the request. */
    uuid: string;
}

/**
 * A mapping of fields to the values emphasized by the Answers API
 *
 * @remarks
 * Only fields that have been marked as highlighted will be present - which may not be
 * all fields of the corresponding {@link Result}'s rawData.
 * Fields that are present will match the rawData's structure and order.
 *
 * @example
 * If a user searches for 'apple', the API will likely match fields that contain
 * the word 'apple'.
 *
 * ```js
 * {
 *   description: {
 *     value: 'likes apple pie and green apples',
 *     matchedSubstrings: [
 *       { offset: 6, length: 5 },
 *       { offset: 26, length: 5 }
 *     ]
 *   },
 *   c_favoriteFruits: [
 *     {
 *       apples: [
 *         {
 *           value: 'Granny Smith',
 *           matchedSubstrings: []
 *         },
 *         {
 *           value: 'Upton Pyne Apple',
 *           matchedSubstrings: [{ offset: 11, length: 5}]
 *         }
 *       ],
 *       pears: [
 *         {
 *           value: 'Callery Pear',
 *           matchedSubstrings: []
 *         }
 *       ]
 *     }
 *   ]
 * }
 * ```
 *
 * @public
 */
export declare type HighlightedFields = {
    /**
     * A mapping of a field to either an array of HighlightedFields, HighlightedFields for
     * this field's subfields, or a {@link HighlightedValue} for the field.
     *
     * @remarks
     * HighlightedFields is an object of arbitrary shape which contains {@link HighlightedValue} objects.
     */
    [fieldId: string]: HighlightedValue | HighlightedValue[] | HighlightedFields | HighlightedFields[];
};

/**
 * A field value and its substring matches as emphasized by the Answers API.
 *
 * @public
 */
export declare interface HighlightedValue {
    /**
     * The value of the field which should be highlighted.
     *
     * @remarks
     * No formatting is applied to this value. This is simply the value that the Answers API determined should be highlighted.
     */
    value: string;
    /**
     * An array of substring matches which correspond to the highlighting.
     *
     * @remarks
     * Offset indicates the index of the match, and the length indicates the number of characters of the match.
     *
     * @example
     * A user may search for 'Yext', and the result may include the value 'Yext is a search company'. The matched substrings
     * would correspond to 'Yext' and the matchedSubstrings array would be: `[{ length: 4, offset: 0 }]`
     */
    matchedSubstrings: {
        length: number;
        offset: number;
    }[];
}

/**
 * The latitude and longitude of the user making the request.
 * Used to bias the results.
 *
 * @remarks
 * If omitted from a request, Yext will attempt to determine the location.
 *
 * @public
 */
export declare interface LatLong {
    /**
     * Latitude formatted as a decimal degree number.
     *
     * @example
     * `40.741895`
     */
    latitude: number;
    /**
     * Longitude formatted as a decimal degree number.
     *
     * @example
     * `-73.989308`
     */
    longitude: number;
}

/**
 * Information about the user's location.
 *
 * @public
 */
export declare interface LocationBias {
    /** The location's latitude. */
    latitude: number;
    /** The location's longitude. */
    longitude: number;
    /**
     * The name of the location.
     *
     * @example
     * Arlington, Virginia.
     */
    displayName: string;
    /** {@inheritDoc LocationBiasMethod} */
    method: LocationBiasMethod;
}

/**
 * The method used to determine the location.
 *
 * @public
 */
export declare enum LocationBiasMethod {
    /** Location was determined by IP address. */
    Ip = "IP",
    /**
     * Location was supplied by the user's device.
     *
     * @remarks
     * This location bias method is set when a location is supplied in search requests.
     * */
    Device = "DEVICE",
    /**
     * Location is unknown.
     */
    Unknown = "UNKNOWN"
}

/**
 * A Matcher is a filtering operation.
 *
 * @public
 */
export declare enum Matcher {
    /**
     * An equals comparison.
     *
     * @remarks
     * Compatible with all field types.
     */
    Equals = "$eq",
    /**
     * A not equals comparison.
     *
     * @remarks
     * Compatible with all field types.
     */
    NotEquals = "!$eq",
    /**
     * A less than comparison.
     *
     * @remarks
     * Compatible with integer, float, date, datetime, and time fields.
     */
    LessThan = "$lt",
    /**
     * A less than or equal to comparison.
     *
     * @remarks
     * Compatible with integer, float, date, datetime, and time fields.
     */
    LessThanOrEqualTo = "$le",
    /**
     * A greater than comparison.
     *
     * @remarks
     * Compatible with integer, float, date, datetime, and time fields.
     */
    GreaterThan = "$gt",
    /**
     * A greater than or equal to comparison.
     *
     * @remarks
     * Compatible with integer, float, date, datetime, and time fields.
     */
    GreaterThanOrEqualTo = "$ge",
    /**
     * A comparison of whether an entity is within a certain radius of a certain location.
     *
     * @remarks
     * Only compatible with the builtin.location field.
     */
    Near = "$near"
}

/**
 * A filter value for a filter with a $near {@link Matcher}.
 *
 * @public
 */
export declare interface NearFilterValue {
    /** The radius (in meters) around the latitude and longitude. */
    radius: number;
    /** The latitude of the location. */
    lat: number;
    /** The longitude of the location. */
    lng: number;
}

/**
 * The entrypoint to the answers-core library.
 *
 * @remarks
 * Returns an {@link AnswersCore} instance.
 *
 * @param config - The answers-core config
 *
 * @public
 */
export declare function provideCore(config: AnswersConfig): AnswersCore;

/**
 * The source of the search request.
 *
 * @public
 */
export declare enum QuerySource {
    /**
     * Indicates that the query was initiated from a standard Answers integration.
     */
    Standard = "STANDARD",
    /**
     * Indicates that the query was initaited from an Answers Overlay.
     */
    Overlay = "OVERLAY"
}

/**
 * Describes the ways a search can be executed besides user input.
 *
 * @remarks
 * Used for search analytics. If a user supplied the search query, do not include a QueryTrigger.
 *
 * @example
 * An answers site may be configured to perform a search for 'What services do you offer?' when the page
 * loads. Because that query is a default query rather than a user-supplied query, the Initialize QueryTrigger
 * should be included in the request.
 *
 * @public
 */
export declare enum QueryTrigger {
    /** Indicates that the query was triggered by a default initial search. */
    Initialize = "initialize",
    /** Indicates that the query was suggested by a {@link SpellCheck} response. */
    Suggest = "suggest"
}

/**
 * Options for a QuestionSubmission request.
 *
 * @public
 */
export declare interface QuestionSubmissionRequest {
    /** The email of the user that is submitting the question. */
    email: string;
    /** The ID of the entity to associate with the question. */
    entityId: string;
    /** The name of the user. */
    name: string;
    /** The question. */
    questionText: string;
    /** Additional information about the question. */
    questionDescription?: string;
    /** Enables session tracking. */
    sessionTrackingEnabled?: boolean;
}

/**
 * A representation of a question submission response.
 *
 * @public
 */
export declare interface QuestionSubmissionResponse {
    /** A unique id which corresponds to the request. */
    uuid: string;
}

/* Excluded from this release type: QuestionSubmissionService */

/**
 * An individual search result.
 *
 * @public
 */
export declare interface Result {
    /** Raw entity profile data in the shape of key-value pairs. */
    rawData: Record<string, unknown>;
    /** {@inheritDoc Source}*/
    source: Source;
    /** The index of the result among the other results in the search. */
    index?: number;
    /** The name of the result. */
    name?: string;
    /** A description of the result. */
    description?: string;
    /** A hyperlink associated with the result. */
    link?: string;
    /** The result ID which depends on the Result Source. */
    id?: string;
    /** The distance from the user to the result in meters. */
    distance?: number;
    /**
     * The distance from a {@link AppliedQueryFilter} location to the result in meters.
     *
     * @remarks
     * The filter may be an inferred from the search query, or it may be specified explicitly through a facet or static filter
     * on a {@link VerticalSearchRequest}.
     *
     * @example
     * If a user searches for 'Offices in New York' and the VerticalResults contain an `AppliedQueryFilter` for 'New York', the
     * distanceFromFilter value will be from the search result to 'New York'.
     */
    distanceFromFilter?: number;
    /** The {@link HighlightedFields | highlighted fields} emphasized by the api. */
    highlightedFields?: HighlightedFields;
    /** The entity type of the result */
    entityType?: string;
}

/**
 * Represents intents from the Answers API.
 *
 * @public
 */
export declare enum SearchIntent {
    /** The Answers API is requesting a prompt for the user's location. */
    NearMe = "NEAR_ME"
}

/**
 * Indicates which entity field to perform the autocomplete request on.
 *
 * @public
 */
export declare interface SearchParameterField {
    /** The fieldApiName to perform the autocomplete on. */
    fieldApiName: string;
    /** The entityType to perform the autocomplete on. */
    entityType: string;
    /**
     * Indicates whether or not to return the {@link AutocompleteResult.relatedItem} associated with the autocomplete result.
     */
    fetchEntities: boolean;
}

/**
 * A service which performs Yext Answers searches
 */
declare interface SearchService {
    universalSearch(request: UniversalSearchRequest): Promise<UniversalSearchResponse>;
    verticalSearch(request: VerticalSearchRequest): Promise<VerticalSearchResponse>;
}

/**
 * The section of text where a {@link FeaturedSnippetDirectAnswer} was found.
 *
 * @public
 */
declare interface Snippet {
    /** The snippet's body of text */
    value: string;
    /** The locations in the document text of the {@link FeaturedSnippetDirectAnswer.value} */
    matchedSubstrings: {
        offset: number;
        length: number;
    }[];
}

/**
 * Represents a criterion that can be used to sort results.
 *
 * @remarks
 * Overrides the sort options that are configured on the experience configuration.
 *
 * @public
 */
export declare interface SortBy {
    /** {@inheritDoc SortType} */
    type: SortType;
    /** The field name to sort by. Required if the SortBy type is {@link SortType.Field}. */
    field?: string;
    /** The direction of the sort. Required if the SortBy type is {@link SortType.Field}. */
    direction?: Direction;
}

/**
 * The method of sorting.
 *
 * @public
 */
export declare enum SortType {
    /**
     * Sorts based on a field with the direction specified.
     */
    Field = "FIELD",
    /**
     * Sorts based on entity distance alone.
     */
    EntityDistance = "ENTITY_DISTANCE",
    /**
     * Sorts based on relevance according to the algorithm and, when relevant, location bias.
     */
    Relevance = "RELEVANCE"
}

/**
 * Represents the source of a {@link Result}.
 *
 * @public
 */
export declare enum Source {
    /** The result is from an Answers Knowledge Graph. */
    KnowledgeManager = "KNOWLEDGE_MANAGER",
    /** The result is from Google Custom Search Engine. */
    Google = "GOOGLE_CSE",
    /** The result is from Bing Search Engine. */
    Bing = "BING_CSE",
    /** The result is from Zendesk. */
    Zendesk = "ZENDESK",
    /** The result is from Algolia. */
    Algolia = "ALGOLIA",
    /** The result was from a generic source. */
    Generic = "GENERIC"
}

/**
 * A spellcheck response from a search query.
 *
 * @public
 */
export declare interface SpellCheck {
    /** The query that was input into the spell checker. */
    originalQuery: string;
    /** The corrected version of the originalQuery. */
    correctedQuery: string;
    /** The type of spell check. */
    type: SpellCheckType;
}

/**
 * Represents the type of spell check performed.
 *
 * @public
 */
export declare enum SpellCheckType {
    /** The API is suggesting an alternative query. */
    Suggest = "SUGGEST",
    /** The API is autocorrecting the original query. */
    AutoCorrect = "AUTOCORRECT",
    /** The API may be doing some combination of suggesting or autocorrecting. */
    Combine = "COMBINE"
}

/**
 * Options for a universal autocomplete request.
 *
 * @public
 */
export declare interface UniversalAutocompleteRequest {
    /** The input string for autocomplete. */
    input: string;
    /** Enables session tracking. */
    sessionTrackingEnabled?: boolean;
}

/**
 * Options which can be specified for a universal search.
 *
 * @public
 */
export declare interface UniversalSearchRequest {
    /** The search query. */
    query: string;
    /** {@inheritDoc QueryTrigger} */
    queryTrigger?: QueryTrigger;
    /** Disables spellcheck if true. */
    skipSpellCheck?: boolean;
    /** Enables session tracking. */
    sessionTrackingEnabled?: boolean;
    /** {@inheritDoc LatLong} */
    location?: LatLong;
    /** {@inheritDoc Context} */
    context?: Context;
    /**
     * The URl of the page which referred the user to the current page.
     *
     * @example
     * If a user is on https://www.yext.com/ and navigates to https://www.yext.com/answers and perform a search,
     * the referrerPageUrl would be https://www.yext.com/.
     */
    referrerPageUrl?: string;
    /** {@inheritDoc QuerySource} */
    querySource?: QuerySource;
}

/**
 * A representation of a response from a universal search.
 *
 * @public
 */
export declare interface UniversalSearchResponse {
    /** An array of {@link VerticalResults} which represent the results for each vertical. */
    verticalResults: VerticalResults[];
    /** The ID of the search query. */
    queryId?: string;
    /** {@inheritDoc DirectAnswer} */
    directAnswer?: FeaturedSnippetDirectAnswer | FieldValueDirectAnswer;
    /** An array of {@link SearchIntent}s which represents requests from the API. */
    searchIntents?: SearchIntent[];
    /** {@inheritDoc SpellCheck} */
    spellCheck?: SpellCheck;
    /** {@inheritDoc LocationBias} */
    locationBias?: LocationBias;
    /** A unique id which corresponds to the request. */
    uuid: string;
}

/**
 * Options for a vertial autocomplete request.
 *
 * @public
 */
export declare interface VerticalAutocompleteRequest {
    /** {@inheritDoc UniversalAutocompleteRequest.input} */
    input: string;
    /** {@inheritDoc UniversalAutocompleteRequest.sessionTrackingEnabled} */
    sessionTrackingEnabled?: boolean;
    /** The key for the vertical to get autocomplete suggestions from. */
    verticalKey: string;
}

/**
 * Represents results from a search vertical.
 *
 * @public
 */
export declare interface VerticalResults {
    /** A array of {@link AppliedQueryFilter}s which were applied to the vertical results. */
    appliedQueryFilters: AppliedQueryFilter[];
    /** The duration of the query in milliseconds. */
    queryDurationMillis: number;
    /** An array of search {@link Result}s for the vertical. */
    results: Result[];
    /**
     * The total number of results within the vertical.
     *
     * @remarks
     * This number may be higher than the number of results in the results array since the API limits the number of results
     * returned in each request.
    */
    resultsCount: number;
    /** {@inheritDoc Source} */
    source: Source;
    /** The vertical key associated with the vertical results. */
    verticalKey: string;
}

/**
 * Options which can be specified for a vertical search.
 *
 * @public
 */
export declare interface VerticalSearchRequest {
    /** The search query. */
    query: string;
    /** The key associated with the vertical. */
    verticalKey: string;
    /** {@inheritDoc Context} */
    context?: Context;
    /** The maximum number of results to include with a max of 50. */
    limit?: number;
    /** The result offset which allows for fetching more results with the same query. */
    offset?: number;
    /** Indicates that facets should be retrieved. */
    retrieveFacets?: boolean;
    /** The facet filters to apply to the search. */
    facets?: Facet[];
    /** Skips spell checking if true. */
    skipSpellCheck?: boolean;
    /** {@inheritDoc LatLong} */
    location?: LatLong;
    /** {@inheritDoc QueryTrigger} */
    queryTrigger?: QueryTrigger;
    /** Enables session tracking. */
    sessionTrackingEnabled?: boolean;
    /** The static filters to apply to the search. */
    staticFilters?: CombinedFilter | Filter;
    /** Determines how results are sorted. **/
    sortBys?: SortBy[];
    /** {@inheritdoc UniversalSearchRequest.referrerPageUrl} */
    referrerPageUrl?: string;
    /** {@inheritDoc QuerySource} */
    querySource?: QuerySource;
    /** The radius (in meters) to filter the vertical search by. */
    locationRadius?: number;
    /** The queryId for the query, if this is a repeat query. */
    queryId?: string;
}

/**
 * A representation of a response from a vertical search.
 *
 * @public
 */
export declare interface VerticalSearchResponse {
    /** {@inheritDoc VerticalResults} */
    verticalResults: VerticalResults;
    /** The ID of the query. */
    queryId: string;
    /** An array of {@link SearchIntent}s. */
    searchIntents?: SearchIntent[];
    /** An array of {@link Facet}s associated with the search results. */
    facets?: DisplayableFacet[];
    /** {@inheritDoc SpellCheck} */
    spellCheck?: SpellCheck;
    /** {@inheritDoc LocationBias} */
    locationBias?: LocationBias;
    /** {@inheritDoc VerticalSearchResponse} */
    allResultsForVertical?: VerticalSearchResponse;
    /** The {@link VerticalResults} for each search vertical. */
    alternativeVerticals?: VerticalResults[];
    /** A unique id which corresponds to the request. */
    uuid: string;
}

export { }
