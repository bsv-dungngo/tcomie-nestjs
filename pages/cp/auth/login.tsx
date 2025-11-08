import { HeadPage } from '@/components'
import { AuthCPLayout } from '@/layouts/cp'
import { LoginContainer } from '@/plugins/cp/auth/components/login'
import React from 'react'

export default function LoginPage() {
  return (
    <>
      <HeadPage title="Login" />
      <LoginContainer />
    </>
  )
}

LoginPage.Layout = AuthCPLayout
