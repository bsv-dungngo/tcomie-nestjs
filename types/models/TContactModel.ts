import { ContactItemResponse, ContactResponse } from '../api/response/contact-response'

export class TContactModel implements ContactResponse {
  items: ContactItemResponse[]
  total: number
  page: number
  size: number
  pages: number

  constructor(data: any) {
    this.items = data.items
    this.total = data.total
    this.page = data.page
    this.size = data.size
    this.pages = data.pages
  }
}

export class TContactItemsResponseModel implements ContactItemResponse {
  fullname: string
  email: string
  phone: string
  title: string
  message: string
  id: number

  constructor(data: any) {
    this.fullname = data.fullname
    this.email = data.email
    this.phone = data.phone
    this.title = data.title
    this.message = data.message
    this.id = data.id
  }
}
