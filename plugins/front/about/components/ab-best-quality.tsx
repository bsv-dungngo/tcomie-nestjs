import { FadeIn } from '@/components'
import { SectionTitle } from '@/components/container/section-title'
import { Check } from '@mui/icons-material'
import { Grid, Stack, Typography } from '@mui/material'
import { t } from 'i18next'

export const AbBestQualityContainer = () => {
  return (
    <>
      <Grid item xs={12} md={5}>
        <FadeIn yInitial={100} yAfter={0}>
          <SectionTitle
            align={{ xs: 'center', md: 'start' }}
            subTitle=""
            description={t('vison_mission_desc') ?? ''}
            title={
              <span>
                <span className="gradient-text">{t('vison_mission')}</span>
              </span>
            }
          />

          <Stack spacing={1} pt={2} zIndex={99}>
            <Stack direction={'row'} spacing={1}>
              <Check color="primary" />
              <Typography fontWeight={600} fontSize={'16px'}>
                {t('vison_mission1')}
              </Typography>
            </Stack>
            <Stack direction={'row'} spacing={1}>
              <Check color="primary" />
              <Typography fontWeight={600} fontSize={'16px'}>
                {t('vison_mission2')}
              </Typography>
            </Stack>
            <Stack direction={'row'} spacing={1}>
              <Check color="primary" />
              <Typography fontWeight={600} fontSize={'16px'}>
                {t('vison_mission3')}
              </Typography>
            </Stack>
          </Stack>
        </FadeIn>
      </Grid>
    </>
  )
}
