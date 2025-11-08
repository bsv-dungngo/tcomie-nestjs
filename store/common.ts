import { BreadcrumbType } from '@/types'
import { atom } from 'recoil'

/* Creating a state with the key `openModalSearch` and the default value is `false` */
export const openModalSearchState = atom<boolean>({
  key: 'openModalSearch',
  default: false,
})
export const breadcrumbsState = atom<BreadcrumbType[]>({
  key: 'breadcrumbsState',
  default: [],
})

export const openSidebarState = atom<boolean>({
  key: 'openSidebarState',
  default: false,
})

export const openModalDeleteState = atom<boolean>({
  key: 'openModalDeleteState',
  default: false,
})

export const openModalDetailState = atom<boolean>({
  key: 'openModalDetailState',
  default: false,
})

export const openModalPreviewImageState = atom<boolean>({
  key: 'openModalPreviewImageState',
  default: false,
})

export const activedValueState = atom<any>({
  key: 'activedValueState',
  default: null,
})
