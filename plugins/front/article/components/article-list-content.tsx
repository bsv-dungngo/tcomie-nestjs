import { Grid } from '@mui/material'
import { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useRecoilValue } from 'recoil'
import { setRecoil } from 'recoil-nexus'
import useArticleValues, { BlogItemResponse } from '../hooks/useArticleValues'
import { articleQueryDataState, articlesListFrontState } from '../store'
import { ArticleItem } from './article-item'

interface IProps {
  type: string
}

export const ArticleListContent = ({ type }: IProps) => {
  const { methods, result } = useArticleValues()
  const queryFormData = useRecoilValue(articleQueryDataState)
  const articles = useRecoilValue(articlesListFrontState)

  // Handle clean up when unmounted
  const handleReset = () => {
    setRecoil(articlesListFrontState, [])
    setRecoil(articleQueryDataState, (prev) => {
      return {
        ...prev,
        page: 1,
      }
    })
  }

  // Handle fetch more data
  const fetchMoreData = () => {
    if (result.total === articles.length) {
      return
    }

    setTimeout(() => {
      setRecoil(articleQueryDataState, (prev) => {
        return {
          ...prev,
          page: prev.page + 1,
        }
      })
    }, 400)
  }

  // Watch API
  useEffect(() => {
    if (result.total === articles.length) {
      return
    }

    const query = {
      ...queryFormData,
      type: type,
    }

    methods.load(query)
  }, [queryFormData, type])

  // Initial value
  useEffect(() => {
    return () => handleReset()
  }, [])

  return (
    <>
      <Grid container pt={2} pb={{ xs: 2, md: 6 }} spacing={4}>
        <Grid item md={12} position={'relative'}>
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={true}
            loader={''}
          >
            <Grid container spacing={2} rowSpacing={4}>
              {articles.length > 0 &&
                articles
                  .slice(0, 1)
                  ?.map((item: BlogItemResponse, index: number) => (
                    <ArticleItem
                      key={index}
                      item={item}
                      smSize={12}
                      size={9}
                      imageHeight={{ xs: '200px', md: '490px' }}
                    />
                  ))}

              <Grid item md={3}>
                <Grid container spacing={2}>
                  {articles.length > 0 &&
                    articles
                      .slice(1, 3)
                      ?.map((item: BlogItemResponse, index: number) => (
                        <ArticleItem key={index} smSize={6} size={12} item={item} />
                      ))}
                </Grid>
              </Grid>

              {articles.length > 0 &&
                articles
                  ?.slice(3, articles.length)
                  .map((item: BlogItemResponse, index: number) => (
                    <ArticleItem key={index} smSize={6} item={item} size={3} />
                  ))}
            </Grid>
          </InfiniteScroll>
        </Grid>

        {/* <Grid item md={4} sx={{ position: 'sticky !important', top: 0, left: 0 }}>
          <RecentPosts />
          <BlogCategories />
          <BlogTags />
        </Grid> */}
      </Grid>
    </>
  )
}
