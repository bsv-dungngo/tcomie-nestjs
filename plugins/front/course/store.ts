import { IProjectItemResponseModel } from '@/types/models/TProjectModel'
import { atom } from 'recoil'

export const projectDetailState = atom<IProjectItemResponseModel | null>({
  key: 'projectDetailState',
  default: null,
})
