import { LangButton } from '@/components/button/lang-button'
import { t } from '@/utils'
import { Box, Stack } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import { NavItem } from '../type'
import { NavMainItem } from './nav-item'

interface IPropsNav {
  setOpenNavigation: Dispatch<SetStateAction<boolean>>
}

export const navItems: NavItem[] = [
  { title: t('navHome'), link: t('linkFrHome'), id: 'home', children: [] },
  { title: t('navInfo'), link: t('linkFrAbout'), id: 'about-us', children: [] },
  {
    title: t('navProject'),
    link: t('linkFrProject'),
    children: [],
    id: 'project',
  },
  { title: t('navArticle'), link: t('linkFrArticle'), id: 'blog', children: [] },
  { title: t('navContact'), link: t('linkFrContact'), id: 'contact', children: [] },
]

export const NavChildren = ({ setOpenNavigation }: IPropsNav) => {
  return (
    <Stack direction={'row'} alignItems={'center'} spacing={6}>
      <Stack
        className="nav-children"
        direction={{ xs: 'column', md: 'row' }}
        alignItems={'center'}
        spacing={3}
      >
        {navItems.map((item, index) => (
          <NavMainItem
            key={index}
            navItem={item}
            setOpenNavigation={setOpenNavigation}
            index={index}
          />
        ))}
      </Stack>

      <Box display={{ xs: 'none', lg: 'flex' }} mt={'-4px !important'}>
        <LangButton />
      </Box>
    </Stack>
  )
}
