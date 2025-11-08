import { LangButton } from '@/components/button/lang-button'
import { MainContainer } from '@/components/container'
import { LocalPhone, LocationOn } from '@mui/icons-material'
import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material'
import { t } from 'i18next'

export const FontTopHeader = () => {
  return (
    <AppBar position="static" className="fr-top-header">
      <Toolbar disableGutters>
        <MainContainer>
          <Stack
            py={1}
            direction={'row'}
            spacing={2}
            justifyContent={'flex-end'}
            width={'100%'}
            alignItems={'center'}
          >
            <Stack direction={'row'} spacing={1} className="button-link">
              <LocalPhone fontSize="small" />

              <a href="tel:+8497888878">
                <Typography>(028) 62883088 - {t('telCompany')}</Typography>
              </a>
            </Stack>

            {/* <Stack direction={'row'} spacing={1} className="button-link">
              <Mail fontSize="small" />

              <a href="mailto:tdb@gmail.com">
                <Typography>tcomie@gmail.com</Typography>
              </a>
            </Stack> */}

            <Stack direction={'row'} spacing={1} className="button-link">
              <LocationOn fontSize="small" />

              <Typography>{t('addressCompany')}</Typography>
            </Stack>

            <Box display={{ xs: 'none', md: 'flex' }}>
              <LangButton />
            </Box>
          </Stack>
        </MainContainer>
      </Toolbar>
    </AppBar>
  )
}
