import { Endpoints } from '@/libs/apiUtil'
import {
  ArticleDeleteAPIPathParam,
  ArticleLoadAPIQuery,
  ArticleLoadDetailsAPIPathParam,
  ArticleLoadDetailsBySlugAPIPathParam,
  ArticleRegisterAPIQuery,
  ArticleUpdateAPIPathParam,
  ArticleUpdateAPIQuery,
} from '@/types/api/request/articleAPIRequest'
import { IArticleItemResponseModel, TArticleModel } from '@/types/models/TArticleModel'
import { axiosClient } from '@/utils'
import i18n from '@/utils/i18next'

export class ArticleAPI {
  static register = async (query: ArticleRegisterAPIQuery): Promise<IArticleItemResponseModel> => {
    return await axiosClient.post(Endpoints.ArticleRegister, { ...query }).then((res) => {
      return new IArticleItemResponseModel(res.data)
    })
  }

  static update = async (
    pathParams: ArticleUpdateAPIPathParam,
    query: ArticleUpdateAPIQuery
  ): Promise<IArticleItemResponseModel> => {
    return await axiosClient
      .put(Endpoints.ArticleUpdate(pathParams.articleId), { ...query })
      .then((res) => {
        return new IArticleItemResponseModel(res.data)
      })
  }

  static load = async (query: ArticleLoadAPIQuery): Promise<TArticleModel> => {
    return await axiosClient
      .get(Endpoints.ArticleLoad, {
        params: query,
      })
      .then((res) => {
        return new TArticleModel(res.data)
      })
  }

  static loadDetail = async (
    pathParams: ArticleLoadDetailsAPIPathParam
  ): Promise<IArticleItemResponseModel> => {
    return await axiosClient.get(Endpoints.ArticleLoadDetail(pathParams.articleId)).then((res) => {
      return new IArticleItemResponseModel(res.data)
    })
  }

  static loadDetailBySlug = async (
    pathParams: ArticleLoadDetailsBySlugAPIPathParam
  ): Promise<IArticleItemResponseModel> => {
    return await axiosClient
      .get(Endpoints.ArticleLoadDetailBySlug(pathParams.articleSlug + '?locale=' + i18n.language))
      .then((res) => {
        return new IArticleItemResponseModel(res.data)
      })
  }

  static delete = async (pathParams: ArticleDeleteAPIPathParam) => {
    return await axiosClient.delete(Endpoints.ArticleDelete(pathParams.articleId)).then((res) => {
      return res.data
    })
  }
}
