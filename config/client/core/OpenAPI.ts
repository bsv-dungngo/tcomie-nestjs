/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { getCookie } from 'cookies-next'
import type { ApiRequestOptions } from './ApiRequestOptions'

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>
type Headers = Record<string, string>

// Get access token
const ISSERVER = typeof window === 'undefined'
let accessToken = getCookie('flit_access_token')

if (!ISSERVER) {
  if (!accessToken) {
    accessToken = sessionStorage.getItem('flit_access_token')
  }
}

export type OpenAPIConfig = {
  BASE: string
  VERSION: string
  WITH_CREDENTIALS: boolean
  CREDENTIALS: 'include' | 'omit' | 'same-origin'
  TOKEN?: string | Resolver<string> | undefined
  USERNAME?: string | Resolver<string> | undefined
  PASSWORD?: string | Resolver<string> | undefined
  HEADERS?: Headers | Resolver<Headers> | undefined
  ENCODE_PATH?: ((path: string) => string) | undefined
}

export const OpenAPI: OpenAPIConfig = {
  BASE: process.env.API_URL as string,
  VERSION: '0.1.0',
  WITH_CREDENTIALS: false,
  CREDENTIALS: 'include',
  TOKEN: accessToken + '',
  USERNAME: undefined,
  PASSWORD: undefined,
  HEADERS: undefined,
  ENCODE_PATH: undefined,
}
