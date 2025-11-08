export interface ContactResponse {
  items: ContactItemResponse[]
  total: number
  page: number
  size: number
  pages: number
}

export interface ContactItemResponse {
  fullname: string
  email: string
  phone: string
  title: string
  message: string
  id: number
}
