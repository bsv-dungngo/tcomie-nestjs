export interface ProjectResponse {
  items: ProjectItemResponse[]
  page: number
  pages: number
  size: number
  total: number
}

export type ProjectItemResponse = {
  title_vi: string
  title_en: string
  description_vi: string
  description_en: string
  content_vi: string
  content_en: string
  thumbnail: string
  position: number
  is_published: boolean
  id: number
  slug_vi: string
  slug_en: string
}
