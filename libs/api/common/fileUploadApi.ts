import { Endpoints } from '@/libs/apiUtil'
import { FileUploadAPIQuery } from '@/types/api/request/fileUploadAPIRequest'
import { axiosClientFormData } from '@/utils'

export class FileUploadAPI {
  static upload = async (FormData: FormData, query?: FileUploadAPIQuery): Promise<string> => {
    return await axiosClientFormData
      .post(Endpoints.FilesUpload, FormData, {
        params: query,
      })
      .then((res: any) => {
        return res.upload_folder
      })
  }
}
