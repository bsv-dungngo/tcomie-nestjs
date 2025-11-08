import { RoleType } from './common'

type DepartmentType = {
  id: number
  title: string
}

export type UserType = {
  address: string
  canApproved: boolean
  code: string
  createdAt: string
  department: DepartmentType
  email: string
  id: number
  name: string
  phone: string
  qrcode: string
  role: RoleType
}
