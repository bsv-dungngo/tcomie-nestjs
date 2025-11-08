import { LOCALES } from '@/config/const'
import { currentLocaleSelectedState } from '@/store/locale'
import { Box, Button, Stack } from '@mui/material'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { setRecoil } from 'recoil-nexus'

export interface LocaleValue {
  label: string
  key: string
}

export const TabChangeLocale = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentLocale = useRecoilValue(currentLocaleSelectedState)

  const handleChangeTab = (locale: LocaleValue) => {
    setRecoil(currentLocaleSelectedState, locale)
  }

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  useEffect(() => {
    router.push(pathname + '?' + createQueryString('locale', currentLocale.key))
    localStorage.setItem('locale', currentLocale.key)
  }, [currentLocale])

  return (
    <>
      <Box pb={1}>
        <Stack className="cp-tab-change-locale">
          {LOCALES.map((item, index) => (
            <Button
              key={index}
              onClick={() => handleChangeTab(item)}
              className={`${currentLocale.key == item.key && 'cp-tab-change-locale__actived'}`}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </Box>
    </>
  )
}
