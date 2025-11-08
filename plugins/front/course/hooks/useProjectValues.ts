import { loadingState } from '@/components/loading/store'
import { ReactiveState, useReactiveState } from '@/hooks'
import { ProjectAPI } from '@/libs/api/project/projectApi'
import { ProjectItemResponse } from '@/types/api/response/project-response'
import { IProjectItemResponseModel, TProjectModel } from '@/types/models/TProjectModel'
import { toast } from 'react-toastify'
import { setRecoil } from 'recoil-nexus'
import { projectDetailState } from '../store'

export type BlogItemResponse = {
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

function forgeBlogItemResponse(data: IProjectItemResponseModel): BlogItemResponse {
  return {
    slug_en: data.slug_en ?? '',
    slug_vi: data.slug_vi ?? '',
    id: data.id ?? 0,
    is_published: data.is_published ?? false,
    position: data.position ?? 0,
    thumbnail: data.thumbnail ?? '',
    content_en: data.content_en ?? '',
    content_vi: data.content_vi ?? '',
    description_en: data.description_en ?? '',
    description_vi: data.description_vi ?? '',
    title_en: data.title_en ?? '',
    title_vi: data.title_vi ?? '',
  }
}

export type BlogItemResult = {
  items: BlogItemResponse[]
  page: number
  pages: number
  size: number
  total: number
}

function forgeBlogItemResult(data: TProjectModel): BlogItemResult {
  return {
    items: data.items.map((item: IProjectItemResponseModel) => forgeBlogItemResponse(item)) ?? [],
    page: data.page ?? 0,
    pages: data.pages ?? 0,
    size: data.size ?? 0,
    total: data.total ?? 0,
  }
}

export type BlogValuesResult = {
  result: BlogItemResult
  projects: ProjectItemResponse[]
  projectDetail: ProjectItemResponse | null
  queryFormData: ReactiveState<IQueryFormData>
  methods: {
    load: (queryFormData: IQueryFormData) => Promise<BlogItemResult>
    loadDetail: (projectSlug: string) => Promise<IProjectItemResponseModel>
  }
  states: {
    isLoadingProject: boolean
  }
}

interface IQueryFormData {
  page: number
  size: number
  is_published: boolean
}

export default (): BlogValuesResult => {
  const result = useReactiveState<BlogItemResult>({} as BlogItemResult)
  const projects = useReactiveState<ProjectItemResponse[]>([])
  const projectDetail = useReactiveState<ProjectItemResponse | null>(null)
  const isLoadingProject = useReactiveState(true)
  const queryFormData = useReactiveState({
    page: 1,
    size: 11,
    is_published: true,
  })

  const load = async (queryFormData: IQueryFormData): Promise<BlogItemResult> => {
    setRecoil(loadingState, true)
    return await ProjectAPI.load(queryFormData)
      .then((res) => {
        const data = forgeBlogItemResult(res)
        const newProjectTtems = res.items

        let totalProjectItems = [...projects.value, ...newProjectTtems]
        totalProjectItems = totalProjectItems.map((item) => ({ ...item, key: item.id }))
        projects.set(totalProjectItems)
        result.set(data)
        return data
      })
      .catch((err) => {
        toast.error(err)
        return Promise.reject(err)
      })
      .finally(() => {
        setRecoil(loadingState, false)
      })
  }

  const loadDetail = async (projectSlug: string): Promise<IProjectItemResponseModel> => {
    setRecoil(loadingState, true)
    return await ProjectAPI.loadDetailBySlug({ projectSlug: projectSlug })
      .then((res) => {
        projectDetail.set(new IProjectItemResponseModel(res))
        setRecoil(projectDetailState, new IProjectItemResponseModel(res))
        return new IProjectItemResponseModel(res)
      })
      .catch((err) => {
        return Promise.reject(err)
      })
      .finally(() => {
        setRecoil(loadingState, false)
      })
  }

  return {
    result: result.value,
    projects: projects.value,
    projectDetail: projectDetail.value,
    queryFormData,
    methods: {
      load,
      loadDetail,
    },

    states: {
      isLoadingProject: isLoadingProject.value,
    },
  }
}
