/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_upload_file_api } from '../models/Body_upload_file_api';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FilesService {
    /**
     * Upload File Route
     * The function is a handles file uploads and resizes the uploaded file to the specified width and height.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static uploadFileApi({
        formData,
        width = 500,
        height = 500,
        locale = 'vi',
    }: {
        formData: Body_upload_file_api,
        width?: number,
        height?: number,
        locale?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/files/upload',
            query: {
                'width': width,
                'height': height,
                'locale': locale,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
