import { InputLabel, Stack } from '@mui/material'
import { useMemo, useRef } from 'react'
import { Controller, UseFormReturn } from 'react-hook-form'

import 'react-quill/dist/quill.snow.css'
import { HelperError } from '../../helper-error'
import { handleImage } from '../handle'

/**
 * @property {string} name - The name of the input field. This is used to identify the field in the form.
 * @property {string} label - The label for the input field
 * @property {boolean} required - This is a boolean value that indicates whether the field is required or not.
 * @property {string} placeholder - The text that will be displayed when the input is empty.
 */
type IRichEditorFieldProps = {
  name: string
  label?: string
  required?: boolean
  placeholder?: string
  formContext: UseFormReturn<any>
}

/* This is a way to import a component that is not supported by SSR. */
// const ReactQuill = dynamic(() => import('react-quill'), {
//   ssr: false,
// })

export const RichEditorField = (props: IRichEditorFieldProps) => {
  const { name, label = '', required = false, placeholder = '', formContext } = props

  const {
    control,
    formState: { errors },
  } = formContext

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const ReactQuill = require('react-quill')

  const quillRef = useRef<any>()

  /* Defining the quill toolbar. */
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, false] }, { font: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
          [{ color: [] }, { background: [] }],
          [{ script: 'sub' }, { script: 'super' }],
          [
            { align: [] },
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ],
          ['link', 'image', 'video'],
        ],
        handlers: {
          image: () => handleImage(quillRef.current),
        },
      },
      clipboard: {
        // Disable Quill's default handling of line breaks
        matchVisual: false,
      },
    }),
    []
  )

  return (
    <Stack>
      {label && (
        <InputLabel>
          {label} <span className="required">{required ? '*' : ''}</span>
        </InputLabel>
      )}

      <HelperError name={name} errors={errors} />
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <ReactQuill
              ref={quillRef}
              placeholder={placeholder}
              value={value}
              modules={modules}
              onChange={onChange}
              className="wrap-quill"
            />
          )
        }}
      />
    </Stack>
  )
}
