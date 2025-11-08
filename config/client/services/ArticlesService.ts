/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArticleCreateDto } from '../models/ArticleCreateDto';
import type { ArticleReadDto } from '../models/ArticleReadDto';
import type { ArticleUpdateDto } from '../models/ArticleUpdateDto';
import type { Page_ArticleReadDto_ } from '../models/Page_ArticleReadDto_';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ArticlesService {
    /**
     * Create Article Route
     * This function is creates a article and returns the created article.
     * @returns ArticleReadDto Successful Response
     * @throws ApiError
     */
    public static createArticleApi({
        requestBody,
        locale = 'vi',
    }: {
        requestBody: ArticleCreateDto,
        locale?: string,
    }): CancelablePromise<ArticleReadDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/articles/',
            query: {
                'locale': locale,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Read Articles Route
     * The function is returns a list of articles as a response.
     * @returns Page_ArticleReadDto_ Successful Response
     * @throws ApiError
     */
    public static readArticlesApi({
        type,
        isPublished,
        locale = 'vi',
        page = 1,
        size = 50,
    }: {
        type: (string | null),
        isPublished?: (string | null),
        locale?: string,
        /**
         * Page number
         */
        page?: number,
        /**
         * Page size
         */
        size?: number,
    }): CancelablePromise<Page_ArticleReadDto_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/articles/',
            query: {
                'type': type,
                'is_published': isPublished,
                'locale': locale,
                'page': page,
                'size': size,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Read Article Route By Slug
     * The function is a GET route that retrieves a article by its slug and returns it as a article object.
     * @returns ArticleReadDto Successful Response
     * @throws ApiError
     */
    public static readArticleApiBySlug({
        articleSlug,
        locale = 'vi',
    }: {
        articleSlug: string,
        locale?: string,
    }): CancelablePromise<ArticleReadDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/articles/{article_slug}',
            path: {
                'article_slug': articleSlug,
            },
            query: {
                'locale': locale,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Article Route
     * This function is update a article and returns the updated article.
     * @returns ArticleReadDto Successful Response
     * @throws ApiError
     */
    public static updateArticleApi({
        articleId,
        requestBody,
        locale = 'vi',
    }: {
        articleId: number,
        requestBody: ArticleUpdateDto,
        locale?: string,
    }): CancelablePromise<ArticleReadDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/articles/{article_id}',
            path: {
                'article_id': articleId,
            },
            query: {
                'locale': locale,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Article Route
     * This function is delete a article.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteArticleApi({
        articleId,
        locale = 'vi',
    }: {
        articleId: number,
        locale?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/articles/{article_id}',
            path: {
                'article_id': articleId,
            },
            query: {
                'locale': locale,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
