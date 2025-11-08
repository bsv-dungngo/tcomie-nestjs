import { IArticleItemResponseModel } from '@/types/models/TArticleModel'
import { atom } from 'recoil'
import { IAricleQueryFormData } from './hooks/useArticleValues'

export const articleDetailState = atom<IArticleItemResponseModel | null>({
  key: 'articleDetailState',
  default: null,
})

export const articlesListFrontState = atom<IArticleItemResponseModel[]>({
  key: 'articlesListFrontState',
  default: [],
})

export const articleQueryDataState = atom<IAricleQueryFormData>({
  key: 'articleQueryDataState',
  default: {
    page: 1,
    size: 11,
    type: 'news',
    is_published: true,
  },
})

export const articleTabActivedState = atom<string>({
  key: 'articleTabActivedState',
  default: '1',
})
