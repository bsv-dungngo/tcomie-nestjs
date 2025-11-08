import { brand } from '@/components/colors/brand'
import { t } from '@/utils'
import { Card, Stack, Typography } from '@mui/material'

const AboutContent = () => {
  return (
    <>
      <Card className="card-contact" elevation={0}>
        <ItemRow title={t('companyNameLabel')} content={t('companyNameTitle')} isBg />
        <ItemRow title={t('presidentLabel')} content={t('presidentTitle')} />
        <ItemRow title={t('emailLabel')} content={t('emailTitle')} isBg />
        <ItemRow title={t('foundedLabel')} content={t('foundedTitle')} />
        <ItemRow title={t('headquartersLabel')} content={t('headquartersTitle')} isBg />
        <ItemRow title={t('telLabel')} content={t('telTitle')} />
        <ItemRow title={t('capitalLabel')} content={t('capitalTitle')} isBg />
        <ItemRow title={t('bankReferenceLabel')} content={t('bankReferenceTitle')} />
        <ItemRow title={t('licensesLabel')} content={t('licensesTitle')} isBg />
      </Card>
    </>
  )
}

export default AboutContent

interface IPropsRow {
  title: string
  content: string
  isBg?: boolean
}

const ItemRow = ({ title = '', content = '', isBg = false }: IPropsRow) => {
  return (
    <Stack direction={'row'} bgcolor={isBg ? brand.gray200 : ''} px={1.5} py={2}>
      <Typography width={120} flexShrink={0}>
        {title}
      </Typography>
      <Typography
        fontWeight={600}
        fontSize={13}
        color={brand.primary}
        dangerouslySetInnerHTML={{ __html: content }}
      ></Typography>
    </Stack>
  )
}
