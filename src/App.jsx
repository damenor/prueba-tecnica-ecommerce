import { Header, Router } from '@/components'
import { routes } from '@/pages'

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Router routes={routes} />
      </main>
    </>
  )
}
