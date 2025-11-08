import { Stack } from '@mui/material'
import { CmpContent } from './cmp-content'
import { CmpIntroSlider } from './cmp-intro-slider'

export const CompanySection = (props: any) => {
  return (
    <Stack
      display={{ xs: 'none', lg: 'flex' }}
      direction={'row'}
      position={'relative'}
      bgcolor="#051650"
      minHeight={'400px'}
    >
      <CmpContent showViewMore={props.showViewMore} isHome={props.isHome} />

      <CmpIntroSlider />
    </Stack>
  )
}
