import { uploadFileApi } from '../api'

export const handleImage = async (quillObj?: any) => {
  if (window?.document) {
    const input = document.createElement('input')

    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.click()

    input.onchange = async () => {
      if (input?.files?.length) {
        const formData = new FormData()
        formData.append('file', input.files[0])

        const fileBlob: Blob | undefined = formData.get('file') as Blob | undefined

        if (fileBlob) {
          const imageUrl = await uploadFileApi({ file: fileBlob })

          if (imageUrl) {
            const range = quillObj?.getEditorSelection()

            quillObj?.getEditor().insertEmbed(range.index, 'image', imageUrl)
          }
        }

        //remove inpit file element
        input?.remove()
      }
    }
  }
}
