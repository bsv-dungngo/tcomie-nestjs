import { MainButton } from '@/components'
import { CardAuth } from '@/components/card/auth'
import CPInputField from '@/components/form-control/cp/cp-input-field'
import { CPInputPasswordField } from '@/components/form-control/cp/cp-input-password-field'
import IconLogin from '@/components/icon/login'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, Stack } from '@mui/material'
import { CheckboxElement, FormContainer, useForm } from 'react-hook-form-mui'
import * as yup from 'yup'
import { loginApi } from '../api'
import { FormLoginType } from '../types'

export const LoginContainer = () => {
  const defaultValues: FormLoginType = {
    username: '',
    password: '',
    remember: false,
  }

  const validation = () => {
    return yup.object().shape({
      username: yup.string().required('Please enter username'),
      password: yup.string().required('Please enter password'),
    })
  }

  const formContext = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(validation()) as any,
  })

  // Login
  const onSubmit = async (data: FormLoginType) => {
    loginApi(data)
  }

  return (
    <CardAuth vector={<IconLogin />}>
      <Stack width={'100%'}>
        <FormContainer formContext={formContext} onSuccess={onSubmit}>
          <Stack alignItems="center" justifyContent="center">
            <Link href={'/vi/trang-chu/'}>
              <img src="/images/logo.jpg" alt="" width="100px" />
            </Link>
          </Stack>

          <Stack width={'100%'} spacing={2} paddingTop={4}>
            <CPInputField
              form={formContext}
              name="username"
              label="User Name"
              placeholder="Enter username"
            />

            <CPInputPasswordField
              name={'password'}
              label="Password"
              placeholder="Enter password ..."
            />
          </Stack>

          <Stack
            paddingTop={1}
            paddingBottom={1}
            direction={'row'}
            alignItems="center"
            justifyContent={'space-between'}
          >
            <CheckboxElement color="info" name={'remember'} label={'Remember login'} />
          </Stack>

          <Stack direction={'row'} alignItems="center" justifyContent={'center'}>
            <MainButton fullWidth variant="contained" color="blue" type="submit">
              Login
            </MainButton>
          </Stack>
        </FormContainer>
      </Stack>
    </CardAuth>
  )
}
