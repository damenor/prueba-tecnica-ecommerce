import { BREADCRUMB_PAGE_LIST } from '@/constants'
import { useBreadcrumbs } from '@/hooks'

export const ProductListPage = () => {

  useBreadcrumbs(BREADCRUMB_PAGE_LIST)

  return (
    <div>
      <h2>ProductListPage</h2>
    </div>
  )
}
