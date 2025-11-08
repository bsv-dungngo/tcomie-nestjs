import { ReactNode } from 'react'

export type MenuType = {
  id: string
  label: string
  to: string
  icon: ReactNode
  submenu: MenuSubType[]
  actived?: string[]
}

export type MenuSubType = {
  id: string
  label: string
  to: string
  icon: ReactNode
  parentId: string
  subParentId?: string
  submenu: any
}

export interface NavItemChild {
  title: string
  id: string
  link: string
}
export interface NavItem {
  title: string
  link: string
  id: string
  children: NavItemChild[]
}
