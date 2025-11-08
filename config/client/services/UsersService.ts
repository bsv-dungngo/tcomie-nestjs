/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Page_UserFullReadDto_ } from '../models/Page_UserFullReadDto_';
import type { UserCreateDto } from '../models/UserCreateDto';
import type { UserFullReadDto } from '../models/UserFullReadDto';
import type { UserReadDto } from '../models/UserReadDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * Create User Route
     * This function creates a user using the provided `UserCreateModel` object.
     * @returns UserReadDto Successful Response
     * @throws ApiError
     */
    public static createUserApi({
        requestBody,
        locale = 'vi',
    }: {
        requestBody: UserCreateDto,
        locale?: string,
    }): CancelablePromise<UserReadDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/',
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
     * Read Users Route
     * This function returns a subset of users based on the provided offset and limit values.
     * @returns Page_UserFullReadDto_ Successful Response
     * @throws ApiError
     */
    public static readUsersApi({
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
    }): CancelablePromise<Page_UserFullReadDto_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/',
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
     * Read User Route
     * The function is a GET route that returns the details of a user based on their user ID.
     * @returns UserFullReadDto Successful Response
     * @throws ApiError
     */
    public static readUserApi({
        userId,
        locale = 'vi',
    }: {
        userId: number,
        locale?: string,
    }): CancelablePromise<UserFullReadDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user_id}',
            path: {
                'user_id': userId,
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
     * Update User Route
     * This function updates a user using the provided `UserCreateModel` object.
     * @returns UserReadDto Successful Response
     * @throws ApiError
     */
    public static updateUserApi({
        userId,
        requestBody,
        locale = 'vi',
    }: {
        userId: number,
        requestBody: UserCreateDto,
        locale?: string,
    }): CancelablePromise<UserReadDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/{user_id}',
            path: {
                'user_id': userId,
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
     * Delete User Route
     * The function is a DELETE route that deletes a user based on their user ID.
     * @returns UserReadDto Successful Response
     * @throws ApiError
     */
    public static deleteUserApi({
        userId,
        locale = 'vi',
    }: {
        userId: number,
        locale?: string,
    }): CancelablePromise<UserReadDto> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{user_id}',
            path: {
                'user_id': userId,
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
