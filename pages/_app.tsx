import { GlobalComponent } from '@/components/global'
import { AppPropsWithLayout } from '@/types'
import { createEmotionCache, theme } from '@/utils'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { RecoilRoot } from 'recoil'
import 'styles/global.scss'

import { ErrorFallback, Loading } from '@/components'
import { MainFrontLayout } from '@/layouts/front'
import i18n from '@/utils/i18next'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { I18nextProvider } from 'react-i18next'
import RecoilNexus from 'recoil-nexus'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

function MyApp(props: AppPropsWithLayout) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const Layout = Component.Layout ?? MainFrontLayout

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <ToastContainer theme="colored" autoClose={1500} />
        <RecoilRoot>
          <RecoilNexus />
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Loading open={true} />}>
              <I18nextProvider i18n={i18n}>
                <Layout>
                  <CssBaseline />
                  <Component {...pageProps} />
                  <GlobalComponent />
                </Layout>
              </I18nextProvider>
            </Suspense>
          </ErrorBoundary>
        </RecoilRoot>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
