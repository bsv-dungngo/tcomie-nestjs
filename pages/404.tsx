import { ErrorFallback } from '@/components/error-fallback'
import { MainFrontLayout } from '@/layouts/front'

export default function Custom404() {
  const error = {
    code: 404,
    message: 'Page not found',
  }

  const handleReset = () => {
    // Redirect to homepage
    if (typeof window !== 'undefined') {
      window.location.href = '/vi/trang-chu'
    }
  }

  return (
    <MainFrontLayout>
      <ErrorFallback error={error} resetErrorBoundary={handleReset} />
    </MainFrontLayout>
  )
}

