import { CPPrimaryButton } from '@/components/button/cp'
import { CPBlockCard } from '@/components/card/CPBlockCard'
import { ContentLoading, TabChangeLocale } from '@/components/content-type'
import { BaseSwitch } from '@/components/form-control/base-switch'
import { CPNumField, CPSelectField } from '@/components/form-control/cp'
import CPInputField from '@/components/form-control/cp/cp-input-field'
import { RichEditorField } from '@/components/form-control/rich-editor-field'
import { ServiceBannerUpload } from '@/components/form-control/service-banner-upload'
import MainModal from '@/components/modal/MainModal'
import ModalAction from '@/components/modal/ModalAction'
import { ArticleCreateDto } from '@/config/client'
import { BLOG_TYPES, onCheckError } from '@/config/const'
import { openModalDetailState } from '@/store/common'
import { currentLocaleSelectedState } from '@/store/locale'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { FormContainer } from 'react-hook-form-mui'
import { useRecoilState, useRecoilValue } from 'recoil'
import { setRecoil } from 'recoil-nexus'
import * as yup from 'yup'
import { submitCreateArticleApi, submitUpdateArticleApi } from '../api'
import { articleActiveState } from '../store'

const validation = () => {
  return yup.object().shape({
    title_vi: yup.string().required('Please enter title'),
    description_vi: yup.string().required('Please enter title'),
    title_en: yup.string().required('Please enter description'),
    description_en: yup.string().required('Please enter description'),
    type: yup.string().required('Please select type'),
  })
}

export const ModalDetail = () => {
  // Recoil
  const [openModalDetail, setOpenModalDetail] = useRecoilState(openModalDetailState)
  const [articleActive, setArticleActive] = useRecoilState(articleActiveState)
  const currentLocale = useRecoilValue(currentLocaleSelectedState)
  const [isLoadingState, setIsLoadingState] = useState(true)

  // Define form context
  const formContext = useForm<ArticleCreateDto>({
    defaultValues: { ...articleActive },
    resolver: yupResolver(validation() as any),
  })

  // function createDefaultObject<T>(existingValues: T | null): T {
  //   const defaultObject: Record<string, string> = {}

  //   if (existingValues) {
  //     Object.keys(existingValues).forEach((key) => {
  //       defaultObject[key] = existingValues[key] || ''
  //     })
  //   }

  //   return defaultObject as T
  // }

  // Handle close modal
  const handleClose = () => {
    setOpenModalDetail(!openModalDetail)
    setArticleActive(null)
    setRecoil(articleActiveState, null)
    formContext.reset()
  }

  // Handle submit
  const onHandleSubmit = async (data: ArticleCreateDto) => {
    if (articleActive && articleActive?.id > 0) {
      submitUpdateArticleApi(articleActive.id, data, handleClose)
    } else {
      submitCreateArticleApi(data, handleClose)
    }
  }

  const watchisPublished = useWatch({ name: 'is_published', control: formContext?.control })

  useEffect(() => {
    setIsLoadingState(true)

    setTimeout(() => {
      setIsLoadingState(false)
    }, 1000)
  }, [currentLocale.key])

  return (
    <MainModal
      open={openModalDetail}
      maxWidth="lg"
      title={
        articleActive && articleActive?.id > 0 ? 'Update news & events' : 'Create news & events'
      }
      onClose={handleClose}
    >
      <FormContainer onError={onCheckError} onSuccess={onHandleSubmit} formContext={formContext}>
        <Stack pb={9}>
          <TabChangeLocale />

          {!isLoadingState ? (
            <Stack spacing={2}>
              <CPBlockCard>
                <Stack spacing={1}>
                  <Stack direction={'row'} spacing={2}>
                    <CPInputField
                      form={formContext}
                      name={`title_${currentLocale.key}` as any}
                      label="Title"
                      required
                    />

                    <Box width={'100%'}>
                      <Stack direction={'row'} spacing={2}>
                        <CPSelectField
                          label="Type"
                          form={formContext}
                          name="type"
                          required
                          options={BLOG_TYPES}
                        />
                        <CPNumField
                          form={formContext}
                          name={`position` as any}
                          label="Position"
                          required
                        />

                        <Box width={'100%'}>
                          <BaseSwitch
                            formContent={formContext}
                            name="is_published"
                            label="Status"
                            controlLabel={watchisPublished ? 'Published' : 'Unpublished'}
                          />
                        </Box>
                      </Stack>
                    </Box>
                  </Stack>

                  <Stack direction={'row'} spacing={2}>
                    <CPInputField
                      form={formContext}
                      name={`description_${currentLocale.key}` as any}
                      label="Description"
                      required
                      rows={7}
                    />

                    <ServiceBannerUpload
                      formContext={formContext}
                      name="thumbnail"
                      label="Thumbnail"
                    />
                  </Stack>
                </Stack>
              </CPBlockCard>

              <RichEditorField
                label="Content"
                formContext={formContext}
                name={`content_${currentLocale.key}`}
              />

              {/* {articleActive && (
                <UserInfo
                  profile={{
                    create_user: articleActive.create_user,
                    update_user: articleActive.update_user,
                  }}
                />
              )} */}
            </Stack>
          ) : (
            <ContentLoading />
          )}
        </Stack>

        <ModalAction>
          <CPPrimaryButton color="inherit" onClick={handleClose}>
            Cancel
          </CPPrimaryButton>
          <CPPrimaryButton type="submit">Save</CPPrimaryButton>
        </ModalAction>
      </FormContainer>
    </MainModal>
  )
}
