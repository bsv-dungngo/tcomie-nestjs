import {
  ContactDeleteAPIPathParams,
  ContactLoadAPIPQuery,
  ContactLoadAPIPathParams,
} from '@/types/api/request/contactAPIRequest'
import { TContactModel } from '@/types/models/TContactModel'
import { axiosClient } from '@/utils'
import { Endpoints } from '../apiUtil'

export class ContactAPI {
  static load = async (
    pathParams: ContactLoadAPIPathParams,
    query: ContactLoadAPIPQuery
  ): Promise<TContactModel> => {
    return axiosClient
      .get(Endpoints.ContactLoad, {
        params: query,
      })
      .then((res) => {
        return new TContactModel(res.data)
      })
  }

  static delete = async (pathParams: ContactDeleteAPIPathParams): Promise<any> => {
    return await axiosClient.delete(Endpoints.ContactDelete(pathParams.contactId)).then((res) => {
      return res.data
    })
  }
}
