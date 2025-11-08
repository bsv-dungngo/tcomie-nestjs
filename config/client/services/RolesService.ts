/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Page_RoleReadDto_ } from '../models/Page_RoleReadDto_';
import type { RoleCreateDto } from '../models/RoleCreateDto';
import type { RoleReadDto } from '../models/RoleReadDto';
import type { RoleUpdateDto } from '../models/RoleUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RolesService {
    /**
     * Create Role Route
     * This function is creates a role, send email and returns the created role.
     * @returns RoleReadDto Successful Response
     * @throws ApiError
     */
    public static createRoleApi({
        requestBody,
        locale = 'vi',
    }: {
        requestBody: RoleCreateDto,
        locale?: string,
    }): CancelablePromise<RoleReadDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/roles/',
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
     * Read Roles Route
     * The function is returns a list of roles as a response.
     * @returns Page_RoleReadDto_ Successful Response
     * @throws ApiError
     */
    public static readRolesApi({
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
    }): CancelablePromise<Page_RoleReadDto_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/roles/',
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
     * Read Role Route
     * The function is a GET route that retrieves a role by its ID and returns it as a role object.
     * @returns RoleReadDto Successful Response
     * @throws ApiError
     */
    public static readRoleApi({
        roleId,
        locale = 'vi',
    }: {
        roleId: number,
        locale?: string,
    }): CancelablePromise<RoleReadDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/roles/{role_id}',
            path: {
                'role_id': roleId,
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
     * Update Role Route
     * This function is update a role, send email and returns the updated role.
     * @returns RoleReadDto Successful Response
     * @throws ApiError
     */
    public static updateRoleApi({
        roleId,
        requestBody,
        locale = 'vi',
    }: {
        roleId: number,
        requestBody: RoleUpdateDto,
        locale?: string,
    }): CancelablePromise<RoleReadDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/roles/{role_id}',
            path: {
                'role_id': roleId,
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
     * Delete Role Route
     * This function is delete a role.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteRoleApi({
        roleId,
        locale = 'vi',
    }: {
        roleId: number,
        locale?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/roles/{role_id}',
            path: {
                'role_id': roleId,
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
