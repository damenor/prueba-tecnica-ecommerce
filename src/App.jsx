import { Header, Router } from '@/components'
import { AppProvider } from '@/contexts'
import { routes } from '@/pages'

export const App = () => {
  return (
    <AppProvider>
      <Header />
      <main>
        <Router routes={routes} />
      </main>
    </AppProvider>
  )
}
