import { formatDate } from '@/utils'
import { Box, Stack, Typography } from '@mui/material'

interface IProps {
  profile: {
    create_user: any
    update_user: any
  }
}

export const UserInfo = ({ profile }: IProps) => {
  return (
    <Stack justifyContent={'space-between'} direction={'row'}>
      <Box>
        <RowItem
          title="Created"
          subTitle={profile?.create_user ? formatDate(profile?.create_user?.updated_at ?? '') : '_'}
        />
      </Box>
      <Box>
        <RowItem
          title="By"
          subTitle={profile?.create_user ? profile?.create_user?.fullname : '_'}
        />
      </Box>
      <Box>
        <RowItem
          title="Last update"
          subTitle={profile?.update_user ? formatDate(profile?.update_user?.updated_at ?? '') : '_'}
        />
      </Box>
      <Box>
        <RowItem
          title="By"
          subTitle={profile?.update_user ? profile?.update_user?.fullname : '_'}
        />
      </Box>
    </Stack>
  )
}

interface IRowProps {
  title: string
  subTitle: string
}

const RowItem = ({ subTitle, title }: IRowProps) => {
  return (
    <Stack direction={'row'}>
      <Typography fontWeight={600}>{title}:</Typography>
      <Typography sx={{ textTransform: 'capitalize' }}>{subTitle}</Typography>
    </Stack>
  )
}
