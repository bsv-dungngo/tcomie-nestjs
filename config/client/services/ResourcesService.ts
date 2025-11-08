/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Page_ResourceReadDto_ } from '../models/Page_ResourceReadDto_';
import type { ResourceCreateDto } from '../models/ResourceCreateDto';
import type { ResourceReadDto } from '../models/ResourceReadDto';
import type { ResourceUpdateDto } from '../models/ResourceUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ResourcesService {
    /**
     * Create Resource Route
     * This function is creates a resource, send email and returns the created resource.
     * @returns ResourceReadDto Successful Response
     * @throws ApiError
     */
    public static createResourceApi({
        requestBody,
        locale = 'vi',
    }: {
        requestBody: ResourceCreateDto,
        locale?: string,
    }): CancelablePromise<ResourceReadDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/resources/',
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
     * Read Resources Route
     * The function is returns a list of resources as a response.
     * @returns Page_ResourceReadDto_ Successful Response
     * @throws ApiError
     */
    public static readResourcesApi({
        keyword = '',
        locale = 'vi',
        page = 1,
        size = 50,
    }: {
        keyword?: string,
        locale?: string,
        /**
         * Page number
         */
        page?: number,
        /**
         * Page size
         */
        size?: number,
    }): CancelablePromise<Page_ResourceReadDto_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/resources/',
            query: {
                'keyword': keyword,
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
     * Read Resource Route
     * The function is a GET route that retrieves a resource by its ID and returns it as a resource object.
     * @returns ResourceReadDto Successful Response
     * @throws ApiError
     */
    public static readResourceApi({
        resourceId,
        locale = 'vi',
    }: {
        resourceId: number,
        locale?: string,
    }): CancelablePromise<ResourceReadDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/resources/{resource_id}',
            path: {
                'resource_id': resourceId,
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
     * Update Resource Route
     * This function is update a resource, send email and returns the updated resource.
     * @returns ResourceReadDto Successful Response
     * @throws ApiError
     */
    public static updateResourceApi({
        resourceId,
        requestBody,
        locale = 'vi',
    }: {
        resourceId: number,
        requestBody: ResourceUpdateDto,
        locale?: string,
    }): CancelablePromise<ResourceReadDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/resources/{resource_id}',
            path: {
                'resource_id': resourceId,
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
     * Delete Resource Route
     * This function is delete a resource.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteResourceApi({
        resourceId,
        locale = 'vi',
    }: {
        resourceId: number,
        locale?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/resources/{resource_id}',
            path: {
                'resource_id': resourceId,
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
