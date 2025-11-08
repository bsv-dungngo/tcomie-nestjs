export const Endpoints = {
  Login: '/api/auth/agent/login',
  ArticleRegister: `/articles/`,
  ArticleUpdate: (articleId: string) => `/articles/${articleId}`,
  ArticleLoad: `/articles/`,
  ArticleLoadDetail: (id: string) => `/articles/${id}`,
  ArticleLoadDetailBySlug: (slug: string) => `/articles/${slug}`,
  ArticleDelete: (articleId: string) => `/articles/${articleId}`,

  ProjectRegister: `/projects/`,
  ProjectUpdate: (projectId: string) => `/projects/${projectId}`,
  ProjectLoad: `/projects/`,
  ProjectLoadDetail: (id: string) => `/projects/${id}`,
  ProjectLoadDetailBySlug: (slug: string) => `/projects/${slug}`,
  ProjectDelete: (projectId: string) => `/projects/${projectId}`,

  FilesUpload: `/files/upload`,

  ContactLoad: `/contacts/`,
  ContactDelete: (contactId: string) => `/contacts/${contactId}/`,
}

export const getApiQueryParams = <T>(param: T) => {
  return { params: { ...param } }
}

export const getOffset = (page: number, per_page: number) => {
  return (page - 1) * per_page
}
