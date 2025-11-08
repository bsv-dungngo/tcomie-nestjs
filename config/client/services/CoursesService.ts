/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CourseCreateDto } from '../models/CourseCreateDto';
import type { CourseReadDto } from '../models/CourseReadDto';
import type { CourseUpdateDto } from '../models/CourseUpdateDto';
import type { Page_CourseReadDto_ } from '../models/Page_CourseReadDto_';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CoursesService {
    /**
     * Create Course Route
     * This function is creates a course and returns the created course.
     * @returns CourseReadDto Successful Response
     * @throws ApiError
     */
    public static createCourseApi({
        requestBody,
        locale = 'vi',
    }: {
        requestBody: CourseCreateDto,
        locale?: string,
    }): CancelablePromise<CourseReadDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/courses/',
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
     * Read Course List Route
     * The function is returns a list of courses as a response.
     * @returns Page_CourseReadDto_ Successful Response
     * @throws ApiError
     */
    public static readCourseListApi({
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
    }): CancelablePromise<Page_CourseReadDto_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/courses/',
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
     * Read Course Route
     * The function is a GET route that retrieves a course by its ID and returns it as a course object.
     * @returns CourseReadDto Successful Response
     * @throws ApiError
     */
    public static readCourseApi({
        courseId,
        locale = 'vi',
    }: {
        courseId: number,
        locale?: string,
    }): CancelablePromise<CourseReadDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/courses/{course_id}',
            path: {
                'course_id': courseId,
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
     * Update Course Route
     * This function is update a course and returns the updated course.
     * @returns CourseReadDto Successful Response
     * @throws ApiError
     */
    public static updateCourseApi({
        courseId,
        requestBody,
        locale = 'vi',
    }: {
        courseId: number,
        requestBody: CourseUpdateDto,
        locale?: string,
    }): CancelablePromise<CourseReadDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/courses/{course_id}',
            path: {
                'course_id': courseId,
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
     * Delete Course Route
     * This function is delete a course.
     * @returns CourseReadDto Successful Response
     * @throws ApiError
     */
    public static deleteCourseApi({
        courseId,
        locale = 'vi',
    }: {
        courseId: number,
        locale?: string,
    }): CancelablePromise<CourseReadDto> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/courses/{course_id}',
            path: {
                'course_id': courseId,
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
     * Read Course Slug Route
     * The function is a GET route that retrieves a course by its ID and returns it as a course object.
     * @returns CourseReadDto Successful Response
     * @throws ApiError
     */
    public static readCourseSlugApi({
        courseSlug,
        locale = 'vi',
    }: {
        courseSlug: string,
        locale?: string,
    }): CancelablePromise<CourseReadDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/courses/slug/{course_slug}',
            path: {
                'course_slug': courseSlug,
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
