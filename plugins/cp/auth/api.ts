import { loadingState } from '@/components/loading/store'
import { IApiResponse } from '@/types'
import { axiosClient, t } from '@/utils'
import { deleteCookie, setCookie } from 'cookies-next'
import { NextRouter } from 'next/router'
import { toast } from 'react-toastify'
import { setRecoil } from 'recoil-nexus'
import { FormLoginType } from './types'

export const loginApi = async (data: FormLoginType) => {
  setRecoil(loadingState, true)
  return await axiosClient
    .post('/token', data)
    .then((res: IApiResponse | any) => {
      if (res?.status == 200) {
        const accessToken = res.data.access_token
        if (data.remember) {
          setCookie('flit_access_token', accessToken, {
            httpOnly: false,
            sameSite: 'lax',
          })
        } else {
          sessionStorage.setItem('flit_access_token', accessToken)
        }
        toast.success('Login success')
        location.href = '/cp'
      } else {
        toast.error(res.message)
      }
    })
    .catch((err) => {
      toast.error(err.response.data.detail)
    })
    .finally(() => {
      setRecoil(loadingState, false)
    })
}

/**
 * It removes the accessToken from sessionStorage and the cookie, then redirects to the home page
 * @param {NextRouter | any} router - NextRouter | any
 */
export const logoutApi = (router: NextRouter | any) => {
  setRecoil(loadingState, true)
  axiosClient
    .get('endpoint.logout')
    .then((res: IApiResponse | any) => {
      if (res.code == 200) {
        setRecoil(loadingState, true)
        sessionStorage.removeItem('erpAccessToken')
        deleteCookie('erpAccessToken')
        location.href = '/login'
      } else {
        toast.error(t('logoutMessageError'))
      }
    })
    .catch((err) => {
      toast.error(t('logoutMessageError'))
    })
    .finally(() => {
      setRecoil(loadingState, false)
    })
}

export const updateProfileApi = async (payload: any, handleClose: () => void) => {
  setRecoil(loadingState, true)
  return await axiosClient
    .post('endpoint.updateProfile', payload)
    .then((res: IApiResponse | any) => {
      if (res.code == 200) {
        toast.success(t('userUpdateMessageSuccess'))
        handleClose()
      } else {
        toast.error(res?.message)
        handleClose()
      }
    })
    .catch((err) => {
      toast.error(err?.response?.data?.message)
      handleClose()
    })
    .finally(() => {
      setRecoil(loadingState, false)
    })
}
