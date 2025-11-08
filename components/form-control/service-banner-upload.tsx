import { AddPhotoAlternate, Delete, Edit } from '@mui/icons-material'
import { Box, IconButton, InputLabel, Stack, Typography } from '@mui/material'
import { ChangeEvent, useId, useRef } from 'react'
import { Controller, UseFormReturn } from 'react-hook-form'
import { ImageBox } from '../image/image-box'
import { uploadFileApi } from './api'
import { HelperError } from './helper-error'

interface IProps {
  name: string
  formContext: UseFormReturn<any>
  label?: string
  required?: boolean
  noticeLabel?: string
}

export const ServiceBannerUpload = (props: IProps) => {
  const {
    name,
    formContext,
    required,
    label = 'Banner',
    noticeLabel = 'Best resolution 1160px x 400px',
  } = props
  const {
    control,
    formState: { errors },
  } = formContext
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChangeInput = async (e: ChangeEvent<HTMLInputElement>, fieldOnChange: any) => {
    if (e.target.files) {
      const formData = new FormData()
      formData.append('file', e.target.files[0])

      const fileBlob: Blob | undefined = formData.get('file') as Blob | undefined

      if (fileBlob) {
        const imageUrl = await uploadFileApi({ file: fileBlob })

        if (imageUrl) {
          fieldOnChange(imageUrl)
        }
      }
    }
  }

  return (
    <Stack width={'100%'}>
      <InputLabel>
        {label} <span className="required">{required ? '※' : ''}</span>
      </InputLabel>
      <HelperError errors={errors} name={name} />

      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <>
              {field.value ? (
                <Box className="banner-upload">
                  <ImageBox src={field.value} height="100%" width="100%" borderRadius="0px" />

                  <Stack spacing={1} direction={'row'} position={'absolute'} right={6} top={6}>
                    <IconButton
                      onClick={() => inputRef.current?.click()}
                      className="banner-upload__btn-edit"
                      size="small"
                    >
                      <Edit fontSize="small" />
                    </IconButton>

                    <IconButton
                      onClick={() => {
                        formContext.setValue(name, '')
                      }}
                      className="banner-upload__btn-remove"
                      size="small"
                    >
                      <Delete fontSize="small" color="error" />
                    </IconButton>
                  </Stack>
                </Box>
              ) : (
                <Box className="banner-upload-box" onClick={() => inputRef.current?.click()}>
                  <AddPhotoAlternate fontSize="large" />
                </Box>
              )}

              <input
                type="file"
                hidden
                ref={inputRef}
                key={Date.now()}
                id={useId()}
                onChange={(e) => handleChangeInput(e, field.onChange)}
                accept="image/*"
              />
            </>
          )
        }}
      />

      {noticeLabel && (
        <Typography fontSize={'12px'} fontStyle={'italic'}>
          {noticeLabel}
        </Typography>
      )}
    </Stack>
  )
}
