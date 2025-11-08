import { Body_upload_file_api, FilesService } from '@/config/client'
import { toast } from 'react-toastify'
import { setRecoil } from 'recoil-nexus'
import { loadingState } from '../loading/store'
import { FileQuery } from './type'

export const uploadFileApi = async (FormData: Body_upload_file_api, query?: FileQuery) => {
  setRecoil(loadingState, true)
  return await FilesService.uploadFileApi({
    formData: FormData,
    height: query?.height,
    width: query?.width,
  })
    .then((res) => {
      return `${process.env.API_URL}/${res.upload_folder}`
    })
    .catch((err) => {
      toast.error('Something went wrong uploading, please try again')
      return Promise.reject(err)
    })
    .finally(() => {
      setRecoil(loadingState, false)
    })
}
