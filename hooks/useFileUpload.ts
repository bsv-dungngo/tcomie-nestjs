import { loadingState } from '@/components/loading/store'
import { FileUploadAPI } from '@/libs/api/common/fileUploadApi'
import { toast } from 'react-toastify'
import { setRecoil } from 'recoil-nexus'
import { useReactiveState } from '.'

interface FileUploadQuery {
  width: string
  height: string
}

interface IProps {
  filePath: string
  methods: {
    upload: (FormData: FormData, query: FileUploadQuery) => Promise<string>
  }
}

export default (): IProps => {
  const filePath = useReactiveState<string>('')

  const upload = async (formData: FormData, query: FileUploadQuery): Promise<string> => {
    setRecoil(loadingState, true)
    return await FileUploadAPI.upload(formData, query)
      .then((pathImage) => {
        const API_URL = process.env.API_URL
        filePath.set(`${API_URL}/${pathImage}`)
        return `${API_URL}/${pathImage}`
      })
      .catch((err) => {
        toast.error('Something went wrong')
        throw err.response
      })
      .finally(() => {
        setRecoil(loadingState, false)
      })
  }

  return {
    filePath: filePath.value,
    methods: {
      upload,
    },
  }
}
