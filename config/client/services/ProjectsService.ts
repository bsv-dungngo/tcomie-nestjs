/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Page_ProjectReadDto_ } from '../models/Page_ProjectReadDto_';
import type { ProjectCreateDto } from '../models/ProjectCreateDto';
import type { ProjectReadDto } from '../models/ProjectReadDto';
import type { ProjectUpdateDto } from '../models/ProjectUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProjectsService {
    /**
     * Create Project Route
     * This function is creates a project and returns the created project.
     * @returns ProjectReadDto Successful Response
     * @throws ApiError
     */
    public static createProjectApi({
        requestBody,
        locale = 'vi',
    }: {
        requestBody: ProjectCreateDto,
        locale?: string,
    }): CancelablePromise<ProjectReadDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/projects/',
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
     * Read Projects Route
     * The function is returns a list of projects as a response.
     * @returns Page_ProjectReadDto_ Successful Response
     * @throws ApiError
     */
    public static readProjectsApi({
        type,
        locale = 'vi',
        page = 1,
        size = 50,
    }: {
        type: (string | null),
        locale?: string,
        /**
         * Page number
         */
        page?: number,
        /**
         * Page size
         */
        size?: number,
    }): CancelablePromise<Page_ProjectReadDto_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/projects/',
            query: {
                'type': type,
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
     * Read Project Route By Slug
     * The function is a GET route that retrieves a project by its slug and returns it as a project object.
     * @returns ProjectReadDto Successful Response
     * @throws ApiError
     */
    public static readProjectApiBySlug({
        projectSlug,
        locale = 'vi',
    }: {
        projectSlug: string,
        locale?: string,
    }): CancelablePromise<ProjectReadDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/projects/{project_slug}',
            path: {
                'project_slug': projectSlug,
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
     * Update Project Route
     * This function is update a project and returns the updated project.
     * @returns ProjectReadDto Successful Response
     * @throws ApiError
     */
    public static updateProjectApi({
        projectId,
        requestBody,
        locale = 'vi',
    }: {
        projectId: number,
        requestBody: ProjectUpdateDto,
        locale?: string,
    }): CancelablePromise<ProjectReadDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/projects/{project_id}',
            path: {
                'project_id': projectId,
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
     * Delete Project Route
     * This function is delete a project.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteProjectApi({
        projectId,
        locale = 'vi',
    }: {
        projectId: number,
        locale?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/projects/{project_id}',
            path: {
                'project_id': projectId,
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
