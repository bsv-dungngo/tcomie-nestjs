import { ProjectReadDto } from '@/config/client'
import { atom } from 'recoil'

export const projectListState = atom<ProjectReadDto[]>({
  key: 'projectListState',
  default: [],
})

export const projectActiveState = atom<ProjectReadDto | null>({
  key: 'projectActiveState',
  default: null,
})
