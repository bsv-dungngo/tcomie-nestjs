import { ContactReadDto } from '@/config/client'
import { atom } from 'recoil'

export const contactListState = atom<ContactReadDto[]>({
  key: 'contactListState',
  default: [],
})

export const contactActiveState = atom<ContactReadDto | null>({
  key: 'contactActiveState',
  default: null,
})
