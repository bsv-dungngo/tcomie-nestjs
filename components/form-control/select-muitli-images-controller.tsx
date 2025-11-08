import { Close } from '@mui/icons-material'
import { Grid, IconButton, InputLabel, Stack } from '@mui/material'
import Collapse from '@mui/material/Collapse'
import { isArray } from 'lodash'
import { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  Path,
  UseFormReturn,
} from 'react-hook-form'
import { brand } from '../colors/brand'
import { ImageBox } from '../image/image-box'
import { uploadFileApi } from './api'

interface IProps<V extends FieldValues> {
  formContent: UseFormReturn<V>
  name: Path<V>
  label?: string
}

export const SelectMultiImagesController = <V extends FieldValues>({
  formContent,
  name,
  label,
}: IProps<V>) => {
  const [pathFile, setPathFile] = useState<string[]>([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: async (acceptedFiles: File[]) => {
      const formData = new FormData()

      const newPathFile: any = await Promise.all(
        acceptedFiles.map((file) => {
          formData.append('file', file)
          const fileBlob: Blob | undefined = formData.get('file') as Blob | undefined
          if (fileBlob) {
            return uploadFileApi({ file: fileBlob })
          }
        })
      )

      // Append new files to the existing ones
      setPathFile((prevPathFile) => [...newPathFile, ...prevPathFile])

      // If you want to update the form control value, you can use setValue from react-hook-form
      formContent.setValue(name, [...newPathFile, ...pathFile] as any)
    },
  })

  const handleRemoveFile = (field: ControllerRenderProps<V, Path<V>>, index: number) => {
    // Get the current array of files from the form field
    const filesPath = field.value as string[]

    // Make sure the index is within bounds
    if (index >= 0 && index < filesPath.length) {
      // Create a new array excluding the file at the specified index
      const updatedFiles = [...filesPath.slice(0, index), ...filesPath.slice(index + 1)]

      // Update the form control value with the modified array
      field.onChange(updatedFiles)
      setPathFile(updatedFiles)
    }
  }

  useEffect(() => {
    // Clean up the data URIs to avoid memory leaks
    return () => pathFile.forEach((path) => URL.revokeObjectURL(path))
  }, [pathFile])

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={formContent.control}
        render={({ field }) => (
          <Stack>
            <div {...getRootProps({ className: 'dropzone cursor--pointer' })}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <Collapse
              in={isArray(field.value) && field.value.length > 0}
              sx={{ mt: isArray(field.value) && field.value.length > 0 ? 2 : 0 }}
            >
              <Grid container spacing={2}>
                {isArray(field.value) &&
                  field.value.map((path: string, index: number) => (
                    <Grid item md={2} key={index} position={'relative'}>
                      <IconButton
                        size="small"
                        onClick={() => handleRemoveFile(field, index)}
                        sx={{
                          position: 'absolute',
                          top: 2,
                          zIndex: 99,
                          right: 0,
                          marginRight: '-10px',
                          bgcolor: brand.gray300,
                        }}
                      >
                        <Close fontSize="small" />
                      </IconButton>
                      <ImageBox height="110px" width="100%" src={path} isBorder />
                    </Grid>
                  ))}
              </Grid>
            </Collapse>
          </Stack>
        )}
      />
    </>
  )
}
