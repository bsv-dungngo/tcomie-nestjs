/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Page_PermissionReadDto_ } from '../models/Page_PermissionReadDto_';
import type { PermissionCreateDto } from '../models/PermissionCreateDto';
import type { PermissionReadDto } from '../models/PermissionReadDto';
import type { PermissionUpdateDto } from '../models/PermissionUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PermissionsService {
    /**
     * Create Permission Route
     * This function is creates a permission, send email and returns the created permission.
     * @returns PermissionReadDto Successful Response
     * @throws ApiError
     */
    public static createPermissionApi({
        requestBody,
        locale = 'vi',
    }: {
        requestBody: PermissionCreateDto,
        locale?: string,
    }): CancelablePromise<PermissionReadDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/permissions/',
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
     * Read Permissions Route
     * The function is returns a list of permissions as a response.
     * @returns Page_PermissionReadDto_ Successful Response
     * @throws ApiError
     */
    public static readPermissionsApi({
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
    }): CancelablePromise<Page_PermissionReadDto_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/permissions/',
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
     * Read Permission Route
     * The function is a GET route that retrieves a permission by its ID and returns it as a permission object.
     * @returns PermissionReadDto Successful Response
     * @throws ApiError
     */
    public static readPermissionApi({
        permissionId,
        locale = 'vi',
    }: {
        permissionId: number,
        locale?: string,
    }): CancelablePromise<PermissionReadDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/permissions/{permission_id}',
            path: {
                'permission_id': permissionId,
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
     * Update Permission Route
     * This function is update a permission, send email and returns the updated permission.
     * @returns PermissionReadDto Successful Response
     * @throws ApiError
     */
    public static updatePermissionApi({
        permissionId,
        requestBody,
        locale = 'vi',
    }: {
        permissionId: number,
        requestBody: PermissionUpdateDto,
        locale?: string,
    }): CancelablePromise<PermissionReadDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/permissions/{permission_id}',
            path: {
                'permission_id': permissionId,
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
     * Delete Permission Route
     * This function is delete a permission.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deletePermissionApi({
        permissionId,
        locale = 'vi',
    }: {
        permissionId: number,
        locale?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/permissions/{permission_id}',
            path: {
                'permission_id': permissionId,
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
