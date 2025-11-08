import { ArticleReadDto } from '@/config/client'
import { atom } from 'recoil'

export const articleListState = atom<ArticleReadDto[]>({
  key: 'articleListState',
  default: [],
})

export const articleActiveState = atom<ArticleReadDto | null>({
  key: 'articleActiveState',
  default: null,
})
