import { Box } from '@mui/material'
import Image from 'next/image'
import { brand } from '../colors/brand'

interface IProps {
  src: string
  height?: string
  width?: string
  objectFit?: 'cover' | 'contain'
  borderRadius?: string
  isBorder?: boolean
}

export const ImageBox = ({
  src,
  height = '200px',
  width = '200px',
  objectFit = 'cover',
  borderRadius = '10px',
  isBorder,
}: IProps) => {
  return (
    <>
      {src && (
        <Box
          height={height}
          width={width}
          position={'relative'}
          borderRadius={borderRadius}
          overflow={'hidden'}
          flexShrink={0}
          border={isBorder ? 1 : 0}
          borderColor={brand.gray300}
        >
          <Image
            src={src}
            alt=""
            layout="fill"
            objectFit={objectFit}
            placeholder="blur"
            blurDataURL={src}
          />
        </Box>
      )}
    </>
  )
}
