import { LocalesSelectField } from '@/components'
import { CPBlockCard } from '@/components/card/CPBlockCard'
import { brand } from '@/components/colors/brand'
import { UserModel } from '@/config/client'
import { DateViewFormat } from '@/config/const'
import { formatDate } from '@/utils'
import { Divider, Stack, Typography } from '@mui/material'
import dayjs from 'dayjs'

interface IProps {
  item: {
    create_user: UserModel
    update_user: UserModel
  } | null
}

export const ContentInfomationBlock = ({ item }: IProps) => {
  return (
    <CPBlockCard>
      <Typography fontWeight={600} color={brand.gray600} pb={0.5}>
        INFORMATION
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Stack spacing={1}>
        <RowItem
          title="Created"
          subTitle={item?.create_user ? formatDate(item?.create_user?.updated_at ?? '') : '_'}
        />
        <RowItem title="By" subTitle={item?.create_user ? item?.create_user?.fullname : '_'} />
        <RowItem
          title="Last update"
          subTitle={
            item?.update_user ? dayjs(item?.update_user?.updated_at).format(DateViewFormat) : '_'
          }
        />
        <RowItem title="By" subTitle={item?.update_user ? item?.update_user?.fullname : '_'} />
      </Stack>

      <Typography fontWeight={600} color={brand.gray600} pb={0.5} pt={2}>
        INTERNATIONALIZATION
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <LocalesSelectField fullWidth isConfirmAlert />
    </CPBlockCard>
  )
}

interface IRowProps {
  title: string
  subTitle: string
}

const RowItem = ({ subTitle, title }: IRowProps) => {
  return (
    <Stack direction={'row'} justifyContent={'space-between'}>
      <Typography fontWeight={600}>{title}</Typography>
      <Typography sx={{ textTransform: 'capitalize' }}>{subTitle}</Typography>
    </Stack>
  )
}
