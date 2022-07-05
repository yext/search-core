import { SearchError } from './answersapi/AnswersError';
export class AnswersError extends SearchError{};

import { SearchConfigWithApiKey } from './core/AnswersConfig';
export interface AnswersConfigWithApiKey extends SearchConfigWithApiKey{};

import { SearchConfigWithToken } from './core/AnswersConfig';
export interface AnswersConfigWithToken extends SearchConfigWithToken{};

import { SearchRequest } from './core/SearchRequest';
export interface AnswersRequest extends SearchRequest{};