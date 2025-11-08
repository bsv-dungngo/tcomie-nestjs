import { HoverIn } from '@/components'
import { ImageBox } from '@/components/image/image-box'
import { renderTextByLocale } from '@/config/const'
import { t } from '@/utils'
import { Grid, Typography } from '@mui/material'
import Link from 'next/link'
import { setRecoil } from 'recoil-nexus'
import { BlogItemResponse } from '../hooks/useArticleValues'
import { articlesListFrontState } from '../store'

interface IProps {
  item: BlogItemResponse
  size: number
  smSize: number
  imageHeight?: any
}

export const ArticleItem = ({ item, size, imageHeight, smSize }: IProps) => {
  return (
    <Grid item xs={12} sm={smSize} md={size} className="cursor--pointer">
      <HoverIn>
        <Link
          href={`${t('linkFrArticle')}${renderTextByLocale(item, 'slug')}`}
          onClick={() => {
            setRecoil(articlesListFrontState, [])
          }}
        >
          <ImageBox
            src={item.thumbnail ? item.thumbnail : '/images/blog.avif'}
            width="100%"
            height={imageHeight ?? '200px'}
          />

          {/* <StatusBlock /> */}

          <Typography fontWeight={700} mt={1} className="line-camp-1">
            {renderTextByLocale(item, 'title')}
          </Typography>

          <Typography className={'line-camp-2'}>
            {renderTextByLocale(item, 'description')}
          </Typography>
        </Link>
      </HoverIn>
    </Grid>
  )
}
