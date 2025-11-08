export type ProjectRegisterAPIPathParam = {
  //
}

export type ProjectRegisterAPIQuery = {
  title_vi: string
  title_en: string
  content_vi: string
  content_en: string
  description_vi: string
  description_en: string
  thumbnail: string
  position: number
  is_published: boolean
}

export type ProjectLoadAPIQuery = {
  page: number
  size: number
  is_published: boolean | undefined
}

// Details
export type ProjectLoadDetailsAPIPathParam = {
  projectId: string
}

// Update
export type ProjectUpdateAPIPathParam = {
  projectId: string
}

// Queries update
export type ProjectUpdateAPIQuery = {
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
export type ProjectDeleteAPIPathParam = {
  projectId: string
}

// Details By Slug
export type ProjectLoadDetailsBySlugAPIPathParam = {
  projectSlug: string
}
