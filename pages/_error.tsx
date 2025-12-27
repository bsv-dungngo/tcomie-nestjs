import { ErrorFallback } from '@/components/error-fallback'
import { MainFrontLayout } from '@/layouts/front'
import { NextPageContext } from 'next'

interface ErrorProps {
  statusCode: number
  hasGetInitialPropsRun?: boolean
  err?: Error
}

function Error({ statusCode, err }: ErrorProps) {
  // Format error for ErrorFallback component
  let error: any
  if (err) {
    // If it's an Error object, convert it to the expected format
    if (err instanceof Error) {
      error = {
        code: statusCode || 500,
        message: err.message || 'An error occurred',
      }
    } else {
      // If it already has code and message, use it as is
      error = err
    }
  } else {
    // No error object, create one from status code
    error = {
      code: statusCode || 500,
      message:
        statusCode === 404
          ? 'Page not found'
          : statusCode === 500
          ? 'Internal server error'
          : 'An error occurred',
    }
  }

  const handleReset = () => {
    // Reset error boundary - reload page
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

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? (err as any).statusCode : 404
  return { statusCode, err }
}

export default Error
