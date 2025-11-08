import { Grid, Stack, Typography } from '@mui/material'

import { t } from '@/utils'

export const FrFtInfoItems = () => {
  return (
    <Grid item xs={12} sm={12} md={8}>
      <Stack spacing={1} width={'100%'}>
        <Stack>
          <Typography fontWeight={700} color={'#fff'}>
            {t('companyNameLabel')}:
          </Typography>
          <Typography color={'#fff'}>{t('companyNameTitle')}</Typography>
        </Stack>

        <Stack>
          <Typography fontWeight={700} color={'#fff'}>
            {t('headquartersLabel')}:
          </Typography>
          <Typography
            color={'#fff'}
            dangerouslySetInnerHTML={{ __html: t('headquartersTitle') }}
          ></Typography>
        </Stack>

        <Stack>
          <Typography fontWeight={700} color={'#fff'}>
            {t('telLabel')}:
          </Typography>
          <Typography color={'#fff'}>
            {t('telTitle')} - {t('telCompany')}
          </Typography>
        </Stack>

        <Stack>
          <Typography fontWeight={700} color={'#fff'}>
            {t('emailLabel')}:
          </Typography>
          <Typography color={'#fff'}>{t('emailTitle')}</Typography>
        </Stack>
      </Stack>
    </Grid>
  )
}
