import { loadingState } from '@/components/loading/store'
import { ContactsService } from '@/config/client'
import {
  dataTableFirstLoadingState,
  dataTableParamsState,
  totalPageState,
} from '@/store/param-data'
import { DataTableParamsType } from '@/types'
import { t } from '@/utils'
import { toast } from 'react-toastify'
import { getRecoil, setRecoil } from 'recoil-nexus'
import { contactListState } from './store'

export const getContactListApi = async (formData: DataTableParamsType) => {
  const data = getRecoil(contactListState)
  setRecoil(dataTableFirstLoadingState, data?.length > 0 ? false : true)
  return await ContactsService.readContactListApi({
    page: formData.page,
    size: formData.size,
  })
    .then((res) => {
      if (res) {
        setRecoil(contactListState, res.items)
        setRecoil(totalPageState, res.pages ? res.pages : 0)
      }
    })
    .catch((err) => {
      toast.error(t('failSubmitForm'))
      return Promise.reject(err)
    })
    .finally(() => {
      setRecoil(dataTableFirstLoadingState, false)
    })
}

export const deleteContactApi = async (contactId: number) => {
  setRecoil(loadingState, true)
  return await ContactsService.deleteContactApi({ contactId: contactId })
    .then((res) => {
      toast.success('Contact deleted successfully')
      setRecoil(dataTableParamsState, (prevState) => {
        return {
          ...prevState,
          refetchData: prevState.refetchData && prevState.refetchData + 1,
        }
      })
    })
    .catch((err) => {
      toast.error(t('failSubmitForm'))
    })
    .finally(() => {
      setRecoil(loadingState, false)
    })
}
