import { Chip } from '@mui/material'

interface IProps {
  isPublished: boolean
}

export const StatusLabel = ({ isPublished }: IProps) => {
  return (
    <Chip
      className="status-label"
      variant="filledTonal"
      color={isPublished ? 'success' : 'info'}
      label={isPublished ? 'Published' : 'Unpublished'}
      size="small"
    />
  )
}
