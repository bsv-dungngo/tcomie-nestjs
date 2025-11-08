/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TypeArticleEnum } from './TypeArticleEnum';
export type ArticleUpdateDto = {
    title_vi?: (string | null);
    title_en?: (string | null);
    description_vi?: (string | null);
    description_en?: (string | null);
    content_vi?: (string | null);
    content_en?: (string | null);
    thumbnail?: (string | null);
    position?: number;
    is_published?: boolean;
    type?: TypeArticleEnum;
    create_id?: (number | null);
    update_id?: (number | null);
};

