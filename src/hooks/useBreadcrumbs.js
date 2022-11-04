import { useEffect } from 'react'

import { useAppContext } from '@/contexts'

export const useBreadcrumbs = breadcrumbs => {
  const { setBreadcrumbs } = useAppContext()

  useEffect(() => {
    setBreadcrumbs(breadcrumbs)
  }, [])

  return { setBreadcrumbs }

}
