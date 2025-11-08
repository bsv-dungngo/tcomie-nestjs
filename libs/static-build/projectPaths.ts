const PAGE_SIZE = 50

type ProjectListItem = {
  slug_vi?: string | null
  slug_en?: string | null
}

type ProjectListResponse = {
  items?: ProjectListItem[]
  pages?: number | null
}

const normalizeBaseUrl = (value?: string) => {
  if (!value) {
    return undefined
  }

  try {
    const url = new URL(value)
    return url.toString()
  } catch (error) {
    console.warn('Invalid API_URL provided. Static project paths will be empty.', error)
    return undefined
  }
}

const buildProjectsUrl = (baseUrl: string, page: number) => {
  const url = new URL('/projects/', baseUrl)
  url.searchParams.set('page', page.toString())
  url.searchParams.set('size', PAGE_SIZE.toString())
  url.searchParams.set('is_published', 'true')
  return url
}

const collectSlugs = (items: ProjectListItem[] | undefined, key: 'slug_vi' | 'slug_en') => {
  const result = new Set<string>()

  if (!Array.isArray(items)) {
    return result
  }

  items.forEach((item) => {
    const slug = item?.[key]
    if (typeof slug === 'string' && slug.trim()) {
      result.add(slug.trim())
    }
  })

  return result
}

export const fetchProjectSlugs = async (locale: 'vi' | 'en'): Promise<string[]> => {
  const baseUrl = normalizeBaseUrl(process.env.API_URL)

  if (!baseUrl) {
    return []
  }

  const slugKey = locale === 'vi' ? 'slug_vi' : 'slug_en'
  const aggregatedSlugs = new Set<string>()

  let page = 1
  let totalPages = 1

  do {
    try {
      const url = buildProjectsUrl(baseUrl, page)
      const response = await fetch(url.toString())

      if (!response.ok) {
        console.warn(`Failed to fetch project list for static paths (status: ${response.status}).`)
        break
      }

      const data = (await response.json()) as ProjectListResponse
      const pageSlugs = collectSlugs(data.items, slugKey)

      pageSlugs.forEach((slug) => aggregatedSlugs.add(slug))

      totalPages = typeof data.pages === 'number' && data.pages > 0 ? data.pages : page
      page += 1
    } catch (error) {
      console.warn('Error while fetching project slugs for static export.', error)
      break
    }
  } while (page <= totalPages)

  return Array.from(aggregatedSlugs)
}

