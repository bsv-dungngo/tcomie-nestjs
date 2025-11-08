import { LOCALES } from '@/config/const'
import { currentLocaleSelectedState } from '@/store/locale'
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import { Menu, MenuItem } from '@mui/material'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { setRecoil } from 'recoil-nexus'
import { CPPrimaryButton } from '../button/cp/cp-primary-button'

export interface LocaleValue {
  label: string
  key: string
}

interface IProps {
  fullWidth?: boolean
  isConfirmAlert?: boolean
}

export const LocalesSelectField = ({ fullWidth, isConfirmAlert }: IProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentLocale = useRecoilValue(currentLocaleSelectedState)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (e: any, locale?: LocaleValue) => {
    setAnchorEl(null)
    if (locale) {
      if (isConfirmAlert) {
        if (confirm('Do you want switch anthoer locale?')) {
          console.log('Confirm')
        } else {
          console.log('Cancel')
          return
        }
      }

      setRecoil(currentLocaleSelectedState, locale)
    }
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
      <CPPrimaryButton
        variant="outlined"
        endIcon={open ? <ArrowDropUp /> : <ArrowDropDown />}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        fullWidth={fullWidth}
      >
        <strong>{currentLocale.label}</strong>{' '}
      </CPPrimaryButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={(e) => handleClose(e)}
        className="menu-locales"
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {LOCALES.map((locale, index) => (
          <MenuItem
            key={index}
            onClick={(e) => handleClose(e, locale)}
            className={`${currentLocale.key == locale.key && 'actived'}`}
          >
            {locale.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
