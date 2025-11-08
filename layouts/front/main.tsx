import { FrontFooter, FrontHeader } from '@/components'
import { LayoutProps } from '@/types'
import { Box } from '@mui/material'
import { useEffect, useState } from 'react'

export const MainFrontLayout = ({ children }: LayoutProps) => {
  const [loading, setLoading] = useState(true)
  const [isShowBtnScrollTop, setIsShowBtnScrollTop] = useState(false)

  const onWindowScroll = () => {
    if (window.scrollY > 320) {
      setIsShowBtnScrollTop(true)
    } else {
      setIsShowBtnScrollTop(false)
    }
  }

  useEffect(() => {
    setLoading(false)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', onWindowScroll)
    return () => window.removeEventListener('scroll', onWindowScroll)
  }, [])

  return (
    <>
      {loading ? (
        ''
      ) : (
        <>
          <FrontHeader />

          <Box overflow={'hidden'} minHeight={'57vh'}>
            {children}
          </Box>
          <FrontFooter />
        </>
      )}

      {isShowBtnScrollTop && (
        <Box position={'fixed'} right={15} bottom={16} zIndex={999}>
          <Box
            height={'54px'}
            width={'54px'}
            display={'block'}
            className="cursor--pointer"
            sx={{ transition: 'opacity 300ms' }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <img src="/images/icon_pagetop.png" width={'100%'} height={'100%'} alt="" />
          </Box>
        </Box>
      )}
    </>
  )
}
