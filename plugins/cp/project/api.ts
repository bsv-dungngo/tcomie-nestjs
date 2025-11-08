import { loadingState } from '@/components/loading/store'
import { ProjectCreateDto, ProjectUpdateDto, ProjectsService } from '@/config/client'
import {
  dataTableFirstLoadingState,
  dataTableParamsState,
  totalPageState,
} from '@/store/param-data'
import { DataTableParamsType } from '@/types'
import { t } from '@/utils'
import { toast } from 'react-toastify'
import { getRecoil, setRecoil } from 'recoil-nexus'
import { projectListState } from './store'

/**
 * The function is an asynchronous function that retrieves a list of projects from
 * an API and updates the Recoil state with the fetched data.
 */
export const getProjectListApi = async (formData: DataTableParamsType) => {
  const data = getRecoil(projectListState)
  setRecoil(dataTableFirstLoadingState, data?.length > 0 ? false : true)

  return await ProjectsService.readProjectsApi({
    size: formData.size,
    page: formData.page,
    type: '',
  })

    .then((res) => {
      if (res) {
        setRecoil(projectListState, res.items)
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

/**
 * The function is an asynchronous function that sends a request to create an project
 */
export const submitCreateProjectApi = async (
  requestBody: ProjectCreateDto,
  handleCloseModal: () => void
) => {
  setRecoil(loadingState, true)

  return await ProjectsService.createProjectApi({ requestBody })
    .then(() => {
      toast.success('Created project successfully')
      setRecoil(dataTableParamsState, (prevState) => {
        return {
          ...prevState,
          refetchData: prevState.refetchData && prevState.refetchData + 1,
        }
      })
      handleCloseModal()
    })
    .catch(() => {
      toast.error(t('failSubmitForm'))
    })
    .finally(() => {
      setRecoil(loadingState, false)
    })
}

/**
 * The function is an asynchronous function that updates an project using an
 * API call and handles success and error cases.
 */
export const submitUpdateProjectApi = async (
  projectId: number,
  requestBody: ProjectUpdateDto,
  handleCloseModal: () => void
) => {
  setRecoil(loadingState, true)
  return await ProjectsService.updateProjectApi({
    projectId,
    requestBody,
  })
    .then(() => {
      toast.success('Created project successfully')
      setRecoil(dataTableParamsState, (prevState) => {
        return {
          ...prevState,
          refetchData: prevState.refetchData && prevState.refetchData + 1,
        }
      })
      handleCloseModal()
    })
    .catch(() => {
      toast.error(t('failSubmitForm'))
    })
    .finally(() => {
      setRecoil(loadingState, false)
    })
}

/**
 * The function is an asynchronous function that deletes an project using an API
 * call and updates the Recoil state accordingly.
 */
export const deleteProjectApi = async (projectId: number) => {
  setRecoil(loadingState, true)
  return await ProjectsService.deleteProjectApi({ projectId })
    .then((res) => {
      toast.success(res.detail)
      setRecoil(dataTableParamsState, (prevState) => {
        return {
          ...prevState,
          refetchData: prevState.refetchData && prevState.refetchData + 1,
        }
      })
    })
    .catch((err) => {
      toast.error(t('failSubmitForm'))
      return Promise.reject(err)
    })
    .finally(() => {
      setRecoil(loadingState, false)
    })
}
