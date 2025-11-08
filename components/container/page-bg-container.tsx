import { Box, Breadcrumbs } from '@mui/material'
import Image from 'next/image'
import { brand } from '../colors/brand'

interface IProps {
  title?: string
  imageBG?: string
  currentPageTitle?: string
}

export const PageBGContainer = ({
  imageBG = 'https://khoapham.vn/public/images/lkg2.jpg',
  title,
  currentPageTitle,
}: IProps) => {
  const breadcrumbs = [
    { title: 'Trang chủ', link: '/' },
    { title: 'Giới thiệu', link: '/' },
  ]

  return (
    <Box className="page-bg">
      {imageBG && (
        <Image
          src={imageBG}
          alt=""
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={imageBG}
        />
      )}

      <Box className="page-bg-content">
        <div>
          {title && (
            <Box
              color={brand.white}
              fontSize={{ xs: '1.4rem', md: '2.6rem' }}
              fontWeight={700}
              textTransform={'uppercase'}
              textAlign={'center'}
              lineHeight={'110%'}
              dangerouslySetInnerHTML={{ __html: title }}
              maxWidth={'1000px'}
              px={2}
            ></Box>
          )}

          <Breadcrumbs aria-label="breadcrumb">
            {/* {breadcrumbs.map((item, index) => (
              <Link href={item.link}>123</Link>
            ))} */}
            {/* <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/material-ui/react-breadcrumbs/"
          aria-current="page"
        >
          Breadcrumbs
        </Link> */}
          </Breadcrumbs>
        </div>
      </Box>
    </Box>
  )
}
