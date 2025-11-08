export type ArticleRegisterAPIPathParam = {
  //
}

export type ArticleRegisterAPIQuery = {
  title_vi: string
  title_en: string
  content_vi: string
  content_en: string
  description_vi: string
  description_en: string
  thumbnail: string
  position: number
  is_published: boolean
  type: 'recruitment' | 'news' | ''
}

export type ArticleLoadAPIQuery = {
  page: number
  size: number
  type: string | undefined
}

// Details
export type ArticleLoadDetailsAPIPathParam = {
  articleId: string
}

// Update
export type ArticleUpdateAPIPathParam = {
  articleId: string
}

// Queries update
export type ArticleUpdateAPIQuery = {
  title_vi: string
  title_en: string
  content_vi: string
  content_en: string
  description_vi: string
  description_en: string
  thumbnail: string
  position: number
  is_published: boolean
  type: 'recruitment' | 'news' | ''
}

// Delete
export type ArticleDeleteAPIPathParam = {
  articleId: string
}

// Details By Slug
export type ArticleLoadDetailsBySlugAPIPathParam = {
  articleSlug: string
}
