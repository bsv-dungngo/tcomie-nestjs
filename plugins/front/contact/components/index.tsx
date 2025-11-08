import { MainButton, MainContainer } from '@/components'
import { brand } from '@/components/colors/brand'
import { PageBGContainer } from '@/components/container/page-bg-container'
import InputField from '@/components/form-control/input-field'
import { t } from '@/utils'
import i18n from '@/utils/i18next'
import { Validation } from '@/utils/validation'
import { yupResolver } from '@hookform/resolvers/yup'
import { Home, Mail, PhoneAndroidOutlined, PhoneCallbackSharp } from '@mui/icons-material'
import { Grid, Stack, Typography } from '@mui/material'
import { FormContainer, useForm } from 'react-hook-form-mui'
import * as yup from 'yup'
import { submitContactApi } from '../api'

interface ValuesType {
  title: string
  message: string
  fullname: string
  email: string
  phone: string
}
// 電話番号を「999-9999-9999」形式にしてください。
export const ContactContainer = () => {
  const validation = () => {
    return yup.object({
      title: Validation.fullName(t('contactSubject'), 255),
      message: Validation.max(t('message'), 255),
      fullname: Validation.fullName(t('contactName'), 255),
      email: Validation.email('Email'),
      phone: Validation.fullName(t('contactTel'), 20),
    })
  }

  const initialValues: ValuesType = {
    title: '',
    message: '',
    fullname: '',
    email: '',
    phone: '',
  }

  const formContext = useForm<ValuesType>({
    defaultValues: initialValues,
    resolver: yupResolver(validation()) as any,
  })

  const handleSubmit = async (data: ValuesType) => {
    await submitContactApi(data)
    formContext.reset()
  }

  return (
    <>
      <PageBGContainer title={''} imageBG="/images/banners/contact.jpg" />
      <MainContainer>
        <Grid container spacing={{ xs: 1, md: 4 }} py={4}>
          <Grid item xs={12} md={5} order={{ xs: 1, md: 1 }}>
            <FormContainer onSuccess={handleSubmit} formContext={formContext}>
              <Typography fontSize={'1.5rem'} fontWeight={700} color={brand.dark}>
                {t('contactTitle')}
              </Typography>

              {i18n.language == 'vi' && (
                <Typography fontWeight={500}>{t('contactBody')}</Typography>
              )}

              <Stack spacing={2} pt={2}>
                <ItemRow icon={<Home fontSize="small" />} label={t('addressCompany')} />
                <ItemRow icon={<PhoneAndroidOutlined fontSize="small" />} label={t('telCompany')} />
                <ItemRow icon={<PhoneCallbackSharp fontSize="small" />} label={t('phoneCompany')} />
                <ItemRow icon={<Mail fontSize="small" />} label={t('emailTitle')} />
              </Stack>

              <Stack pt={2} spacing={2}>
                <InputField name="fullname" form={formContext} label={t('contactName')} required />
                <InputField name="email" form={formContext} label={t('email')} required />
                <InputField
                  type="number"
                  form={formContext}
                  name="phone"
                  label={t('contactTel')}
                  required
                />
                <InputField name="title" form={formContext} label={t('contactSubject')} required />
                <InputField
                  name="message"
                  form={formContext}
                  label={t('contactMessage')}
                  rows={2}
                />
              </Stack>

              <Stack py={2} display={'flex'} alignItems={'center'}>
                <MainButton roundedFull variant="contained" type="submit" maxWidth={'120px'}>
                  {t('contactBtnSubmit')}
                </MainButton>
              </Stack>
            </FormContainer>
          </Grid>

          <Grid item xs={12} md={7} order={{ xs: 2, md: 2 }} mt={3} pb={{ xs: 2, md: 0 }}>
            <iframe
              style={{ border: 0, marginBottom: '-4px' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4344780936467!2d106.69923466111553!3d10.777997409119417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f47dcc1c955%3A0x7bc0ff6fd2b5a395!2zUVBIMisyTUogVmluY29tIENlbnRlciwgNzAgxJAuIEzDqiBUaMOhbmggVMO0biwgQuG6v24gTmdow6ksIFF14bqtbiAxLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1706568882061!5m2!1svi!2s"
              width="100%"
              height="650"
              allowFullScreen={true}
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </Grid>
        </Grid>
      </MainContainer>
    </>
  )
}

interface IPropsRow {
  icon?: any
  label: string
}

const ItemRow = ({ icon, label }: IPropsRow) => {
  return (
    <Stack direction={'row'} spacing={1}>
      {icon}
      <Typography fontWeight={500} fontSize={'13px'}>
        {label}
      </Typography>
    </Stack>
  )
}
