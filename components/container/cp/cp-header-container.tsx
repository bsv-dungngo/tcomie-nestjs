import { CPPrimaryButton } from '@/components/button/cp/cp-primary-button'
import { totalPageState } from '@/store/param-data'
import { Add } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'

interface IProps {
  linkCreate?: string
  textLink?: string
  headTitle?: string
}

export const CPHeaderContainer = ({ linkCreate, textLink, headTitle }: IProps) => {
  const totalRow = useRecoilValue(totalPageState)

  return (
    <Stack direction={'row'} width={'100%'} justifyContent={'space-between'}>
      <Stack>
        <Typography fontSize="20px" lineHeight={'1'} fontWeight={600}>
          {headTitle}
        </Typography>

        <Typography>{totalRow} entries found</Typography>
      </Stack>

      {textLink && (
        <Link href={linkCreate ?? ''}>
          <CPPrimaryButton startIcon={<Add />}>{textLink}</CPPrimaryButton>
        </Link>
      )}
    </Stack>
  )
}
