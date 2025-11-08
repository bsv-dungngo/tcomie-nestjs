import { ReactNode } from 'react'

export type MenuSubType = {
  id: string
  label: string
  to: string
  icon: ReactNode
  parentId: string
  subParentId?: string
  submenu: any
}

export type NavCpType = {
  id: string
  label: string
  to: string
  icon: ReactNode
  submenu: MenuSubType[]
  actived?: string[]
}
