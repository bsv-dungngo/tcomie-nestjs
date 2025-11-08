import { loadingState } from '@/components/loading/store'
import { ArticleCreateDto, ArticleUpdateDto, ArticlesService } from '@/config/client'
import {
  dataTableFirstLoadingState,
  dataTableParamsState,
  totalPageState,
} from '@/store/param-data'
import { DataTableParamsType } from '@/types'
import { t } from '@/utils'
import { toast } from 'react-toastify'
import { getRecoil, setRecoil } from 'recoil-nexus'
import { articleListState } from './store'

/**
 * The function is an asynchronous function that retrieves a list of articles from
 * an API and updates the Recoil state with the fetched data.
 */
export const getArticleListApi = async (formData: DataTableParamsType) => {
  const data = getRecoil(articleListState)
  setRecoil(dataTableFirstLoadingState, data?.length > 0 ? false : true)

  return await ArticlesService.readArticlesApi({
    size: formData.size,
    page: formData.page,
    type: '',
  })

    .then((res) => {
      if (res) {
        setRecoil(articleListState, res.items)
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
 * The function is an asynchronous function that sends a request to create an article
 */
export const submitCreateArticleApi = async (
  requestBody: ArticleCreateDto,
  handleCloseModal: () => void
) => {
  setRecoil(loadingState, true)

  return await ArticlesService.createArticleApi({ requestBody })
    .then(() => {
      toast.success('Created article successfully')
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
 * The function is an asynchronous function that updates an article using an
 * API call and handles success and error cases.
 */
export const submitUpdateArticleApi = async (
  articleId: number,
  requestBody: ArticleUpdateDto,
  handleCloseModal: () => void
) => {
  setRecoil(loadingState, true)
  return await ArticlesService.updateArticleApi({
    articleId,
    requestBody,
  })
    .then(() => {
      toast.success('Created article successfully')
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
 * The function is an asynchronous function that deletes an article using an API
 * call and updates the Recoil state accordingly.
 */
export const deleteArticleApi = async (articleId: number) => {
  setRecoil(loadingState, true)
  return await ArticlesService.deleteArticleApi({ articleId })
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
