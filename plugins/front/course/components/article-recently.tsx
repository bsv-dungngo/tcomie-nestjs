import { brand } from '@/components/colors/brand'
import { ImageBox } from '@/components/image/image-box'
import { renderTextByLocale } from '@/config/const'
import { ProjectItemResponse } from '@/types/api/response/project-response'
import { t } from '@/utils'
import { Box, Divider, Stack, Typography } from '@mui/material'
import Link from 'next/link'

interface IProps {
  articles: ProjectItemResponse[]
  display?: any
}

export const ArticleRecently = ({ articles, display }: IProps) => {
  return (
    <Box mt={1.5} display={display}>
      <Box bgcolor={brand.white} borderRadius={'10px'} px={2} pb={2}>
        <Typography fontSize={'18px'} fontWeight={600} py={2}>
          {t('recent_post')}
        </Typography>

        <Stack spacing={2}>
          {articles.length > 0 &&
            articles.slice(0, 5).map((item, index) => (
              <Link key={index} href={`${t('linkFrProject')}/${renderTextByLocale(item, 'slug')}`}>
                <Stack direction={'row'} spacing={2} className="cursor--pointer" pb={2}>
                  <ImageBox src={item?.thumbnail ?? ''} width="100px" height="100px" />

                  <Stack spacing={1}>
                    <Typography fontWeight={600} className="line-camp-1">
                      {renderTextByLocale(item, 'title')}
                    </Typography>

                    {/* <StatusBlock /> */}

                    <Typography className="line-camp-3">
                      {renderTextByLocale(item, 'description')}
                    </Typography>
                  </Stack>
                </Stack>

                {index != 4 && <Divider />}
              </Link>
            ))}
        </Stack>
      </Box>
    </Box>
  )
}
