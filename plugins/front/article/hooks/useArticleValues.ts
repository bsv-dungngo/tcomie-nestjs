import { loadingState } from '@/components/loading/store'
import { useReactiveState } from '@/hooks'
import { ArticleAPI } from '@/libs/api/article/articleApi'
import { ArticleItemResponse } from '@/types/api/response/article-response'
import { IArticleItemResponseModel, TArticleModel } from '@/types/models/TArticleModel'
import { toast } from 'react-toastify'
import { getRecoil, setRecoil } from 'recoil-nexus'
import { articleDetailState, articlesListFrontState } from '../store'

export type BlogItemResponse = {
  title_vi: string
  title_en: string
  description_vi: string
  description_en: string
  content_vi: string
  content_en: string
  thumbnail: string
  position: number
  is_published: boolean
  type: string
  id: number
  slug_vi: string
  slug_en: string
}

function forgeBlogItemResponse(data: IArticleItemResponseModel): BlogItemResponse {
  return {
    slug_en: data.slug_en ?? '',
    slug_vi: data.slug_vi ?? '',
    id: data.id ?? 0,
    type: data.type ?? '',
    is_published: data.is_published ?? false,
    position: data.position ?? 0,
    thumbnail: data.thumbnail ?? '',
    content_en: data.content_en ?? '',
    content_vi: data.content_vi ?? '',
    description_en: data.description_en ?? '',
    description_vi: data.description_vi ?? '',
    title_en: data.title_en ?? '',
    title_vi: data.title_vi ?? '',
  }
}

export type BlogItemResult = {
  items: BlogItemResponse[]
  page: number
  pages: number
  size: number
  total: number
}

function forgeBlogItemResult(data: TArticleModel): BlogItemResult {
  return {
    items: data.items.map((item: IArticleItemResponseModel) => forgeBlogItemResponse(item)) ?? [],
    page: data.page ?? 0,
    pages: data.pages ?? 0,
    size: data.size ?? 0,
    total: data.total ?? 0,
  }
}

export type BlogValuesResult = {
  result: BlogItemResult
  articles: ArticleItemResponse[]
  articleDetail: ArticleItemResponse | null
  methods: {
    load: (queryFormData: IAricleQueryFormData) => Promise<BlogItemResult>
    loadDetail: (articleSlug: string) => Promise<IArticleItemResponseModel>
  }
  states: {
    isLoadingArticle: boolean
  }
}

export interface IAricleQueryFormData {
  page: number
  size: number
  type: string
  is_published: boolean
}

export default (): BlogValuesResult => {
  const result = useReactiveState<BlogItemResult>({} as BlogItemResult)
  const articles = useReactiveState<ArticleItemResponse[]>([])
  const articleDetail = useReactiveState<ArticleItemResponse | null>(null)
  const isLoadingArticle = useReactiveState(true)

  const load = async (queryFormData: IAricleQueryFormData): Promise<BlogItemResult> => {
    setRecoil(loadingState, true)
    return await ArticleAPI.load(queryFormData)
      .then((res) => {
        const data = forgeBlogItemResult(res)
        const newArticleTtems = res.items
        const articlesListFront = getRecoil(articlesListFrontState)

        const totalArticleItems = [...articlesListFront, ...newArticleTtems]

        const arrayUniqueByKey: any = Array.from(
          new Set(totalArticleItems.map((item) => item.id))
        ).map((id) => totalArticleItems.find((item) => item.id === id))

        setRecoil(articlesListFrontState, arrayUniqueByKey)
        articles.set(newArticleTtems)
        result.set(data)
        return data
      })
      .catch((err) => {
        toast.error(err)
        return Promise.reject(err)
      })
      .finally(() => {
        setRecoil(loadingState, false)
      })
  }

  const loadDetail = async (articleSlug: string): Promise<IArticleItemResponseModel> => {
    setRecoil(loadingState, true)
    return await ArticleAPI.loadDetailBySlug({ articleSlug: articleSlug })
      .then((res) => {
        articleDetail.set(new IArticleItemResponseModel(res))
        setRecoil(articleDetailState, new IArticleItemResponseModel(res))
        return new IArticleItemResponseModel(res)
      })
      .catch((err) => {
        return Promise.reject(err)
      })
      .finally(() => {
        setRecoil(loadingState, false)
      })
  }

  return {
    articles: articles.value,
    result: result.value,
    articleDetail: articleDetail.value,
    methods: {
      load,
      loadDetail,
    },

    states: {
      isLoadingArticle: isLoadingArticle.value,
    },
  }
}
