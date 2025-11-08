/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CourseEnum } from './CourseEnum';
export type CourseReadDto = {
    title: string;
    banner: string;
    video_intro: string;
    gallery?: Record<string, any>;
    description?: string;
    target?: Record<string, any>;
    content?: Record<string, any>;
    type?: CourseEnum;
    price_base?: number;
    price_discount?: number;
    total_student?: number;
    total_study_time: string;
    total_hour?: number;
    is_published?: boolean;
    start_course?: (string | null);
    end_course?: (string | null);
    total_downloadable_resource?: number;
    address: string;
    slug: string;
    id: number;
    created_at: string;
    updated_at: string;
};

