/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginRequestDto } from '../models/LoginRequestDto';
import type { UserReadDto } from '../models/UserReadDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * Login For Access Token
     * The function is authenticates a user and returns an access token if successful.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static loginForAccessToken({
        requestBody,
        locale = 'vi',
    }: {
        requestBody: LoginRequestDto,
        locale?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/token',
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
     * Read Users Me
     * The function is read the current user's information.
     * @returns UserReadDto Successful Response
     * @throws ApiError
     */
    public static readUsersMe({
        locale = 'vi',
    }: {
        locale?: string,
    }): CancelablePromise<UserReadDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/me/',
            query: {
                'locale': locale,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
