import { Suspense } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ErrorBoundary } from 'react-error-boundary'

import { ErrorFallback, Header, Router, Loader } from '@/components'
import { AppProvider } from '@/contexts'
import { routes } from '@/pages'
import { toMilliseconds } from '@/tools'

const queryClientOptions = {
  queries: {
    suspense: true,
    cacheTime: toMilliseconds(1, 0, 0),
    staleTime: toMilliseconds(1, 0, 0),
  }
}

const queryClient = new QueryClient({ defaultOptions: queryClientOptions })

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loader />}>
        <ErrorBoundary fallback={<ErrorFallback />}>
          <AppProvider>
            <Header />
            <main>
              <Router routes={routes} />
            </main>
          </AppProvider>
        </ErrorBoundary>
      </Suspense>
    </QueryClientProvider>
  )
}
