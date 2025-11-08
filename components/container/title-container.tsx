import { Box, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { brand } from '../colors/brand'

interface IProps {
  subTitle?: any
  title: string
  id?: string
  subTitleColor?: string
}

export const TitleContainer = ({ id = '', subTitle, title, subTitleColor }: IProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Stack id={id} spacing={1}>
          <Typography
            fontSize={{ xs: '1.3rem', md: '2.2rem' }}
            textAlign={'center'}
            fontWeight={800}
            lineHeight={'120%'}
            textTransform={'uppercase'}
          >
            <span className="gradient-text">{title}</span>
          </Typography>

          {subTitle && (
            <Typography
              textAlign={'center'}
              lineHeight={'100%'}
              fontWeight={600}
              textTransform={'uppercase'}
              color={subTitleColor}
            >
              {subTitle}
            </Typography>
          )}

          {subTitle && (
            <Box display={'flex'} justifyContent={'center'}>
              <Box width={'50px'} textAlign={'center'} height={'1px'} bgcolor={brand.primary}></Box>
            </Box>
          )}
        </Stack>
      </motion.div>
    </>
  )
}
