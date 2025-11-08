/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactCreateDto } from '../models/ContactCreateDto';
import type { ContactReadDto } from '../models/ContactReadDto';
import type { ContactUpdateDto } from '../models/ContactUpdateDto';
import type { Page_ContactReadDto_ } from '../models/Page_ContactReadDto_';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ContactsService {
    /**
     * Create Contact Route
     * This function is creates a contact, send email and returns the created contact.
     * @returns ContactReadDto Successful Response
     * @throws ApiError
     */
    public static createContactApi({
        requestBody,
        locale = 'vi',
    }: {
        requestBody: ContactCreateDto,
        locale?: string,
    }): CancelablePromise<ContactReadDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/contacts/',
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
     * Read Contact List Route
     * The function is returns a list of contacts as a response.
     * @returns Page_ContactReadDto_ Successful Response
     * @throws ApiError
     */
    public static readContactListApi({
        locale = 'vi',
        page = 1,
        size = 50,
    }: {
        locale?: string,
        /**
         * Page number
         */
        page?: number,
        /**
         * Page size
         */
        size?: number,
    }): CancelablePromise<Page_ContactReadDto_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/contacts/',
            query: {
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
     * Read Contact Route
     * The function is a GET route that retrieves a contact by its ID and returns it as a contact object.
     * @returns ContactReadDto Successful Response
     * @throws ApiError
     */
    public static readContactApi({
        contactId,
        locale = 'vi',
    }: {
        contactId: number,
        locale?: string,
    }): CancelablePromise<ContactReadDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/contacts/{contact_id}',
            path: {
                'contact_id': contactId,
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
     * Update Contact Route
     * This function is update a contact, send email and returns the updated contact.
     * @returns ContactReadDto Successful Response
     * @throws ApiError
     */
    public static updateContactApi({
        contactId,
        requestBody,
        locale = 'vi',
    }: {
        contactId: number,
        requestBody: ContactUpdateDto,
        locale?: string,
    }): CancelablePromise<ContactReadDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/contacts/{contact_id}',
            path: {
                'contact_id': contactId,
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
     * Delete Contact Route
     * This function is delete a contact.
     * @returns ContactReadDto Successful Response
     * @throws ApiError
     */
    public static deleteContactApi({
        contactId,
        locale = 'vi',
    }: {
        contactId: number,
        locale?: string,
    }): CancelablePromise<ContactReadDto> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/contacts/{contact_id}',
            path: {
                'contact_id': contactId,
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
