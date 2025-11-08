import { ArticleItemResponse, ArticleResponse } from '../api/response/article-response'

export class TArticleModel implements ArticleResponse {
  items: ArticleItemResponse[]
  page: number
  pages: number
  size: number
  total: number

  constructor(data: any) {
    this.items = data.items.map((item: any) => new IArticleItemResponseModel(item))
    this.page = data.page
    this.pages = data.pages
    this.size = data.size
    this.total = data.total
  }
}

export class IArticleItemResponseModel implements ArticleItemResponse {
  title_vi: string
  title_en: string
  description_vi: string
  description_en: string
  content_vi: string
  content_en: string
  thumbnail: string
  position: number
  is_published: boolean
  type: 'recruitment' | 'news' | ''
  id: number
  slug_vi: string
  slug_en: string

  constructor(data: any) {
    this.slug_en = data.slug_en
    this.slug_vi = data.slug_vi
    this.id = data.id
    this.type = data.type
    this.is_published = data.is_published
    this.position = data.position
    this.thumbnail = data.thumbnail
    this.content_en = data.content_en
    this.content_vi = data.content_vi
    this.description_en = data.description_en
    this.description_vi = data.description_vi
    this.title_en = data.title_en
    this.title_vi = data.title_vi
  }
}
