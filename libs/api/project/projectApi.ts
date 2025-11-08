import { Endpoints } from '@/libs/apiUtil'
// import { ProjectRegisterAPIQuery } from '@/types/api/request/projectAPIRequest'
import {
  ProjectDeleteAPIPathParam,
  ProjectLoadAPIQuery,
  ProjectLoadDetailsAPIPathParam,
  ProjectLoadDetailsBySlugAPIPathParam,
  ProjectRegisterAPIQuery,
  ProjectUpdateAPIPathParam,
  ProjectUpdateAPIQuery,
} from '@/types/api/request/projectAPIRequest'
import { IProjectItemResponseModel, TProjectModel } from '@/types/models/TProjectModel'
import { axiosClient } from '@/utils'
import i18n from '@/utils/i18next'

export class ProjectAPI {
  static register = async (query: ProjectRegisterAPIQuery): Promise<IProjectItemResponseModel> => {
    return await axiosClient.post(Endpoints.ProjectRegister, { ...query }).then((res) => {
      return new IProjectItemResponseModel(res.data)
    })
  }

  static update = async (
    pathParams: ProjectUpdateAPIPathParam,
    query: ProjectUpdateAPIQuery
  ): Promise<IProjectItemResponseModel> => {
    return await axiosClient
      .put(Endpoints.ProjectUpdate(pathParams.projectId), { ...query })
      .then((res) => {
        return new IProjectItemResponseModel(res.data)
      })
  }

  static load = async (query: ProjectLoadAPIQuery): Promise<TProjectModel> => {
    console.log({ query })
    return await axiosClient
      .get(Endpoints.ProjectLoad, {
        params: query,
      })
      .then((res) => {
        return new TProjectModel(res.data)
      })
  }

  static loadDetail = async (
    pathParams: ProjectLoadDetailsAPIPathParam
  ): Promise<IProjectItemResponseModel> => {
    return await axiosClient.get(Endpoints.ProjectLoadDetail(pathParams.projectId)).then((res) => {
      return new IProjectItemResponseModel(res.data)
    })
  }

  static loadDetailBySlug = async (
    pathParams: ProjectLoadDetailsBySlugAPIPathParam
  ): Promise<IProjectItemResponseModel> => {
    return await axiosClient
      .get(Endpoints.ProjectLoadDetailBySlug(pathParams.projectSlug + '?locale=' + i18n.language))
      .then((res) => {
        return new IProjectItemResponseModel(res.data)
      })
  }

  static delete = async (pathParams: ProjectDeleteAPIPathParam) => {
    return await axiosClient.delete(Endpoints.ProjectDelete(pathParams.projectId)).then((res) => {
      return res.data
    })
  }
}
