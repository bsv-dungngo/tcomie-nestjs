import { loadingState } from '@/components/loading/store'
import { axiosClient, t } from '@/utils'
import { toast } from 'react-toastify'
import { setRecoil } from 'recoil-nexus'

export const submitContactApi = async (data: any) => {
  setRecoil(loadingState, true)

  return await axiosClient
    .post('/contacts/', data)
    .then((res: any) => {
      if (res.status == 200) {
        toast.success(t('submitContactSuccess'))
      } else {
        toast.error(t('submitContactError'))
      }
    })
    .catch((err) => {
      toast.error(err.response.data.message)
    })
    .finally(() => {
      setRecoil(loadingState, false)
    })
}
