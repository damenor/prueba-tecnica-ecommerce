import { BREADCRUMB_PAGE_LIST } from '@/constants'
import { ProductList } from '@/components'
import { useBreadcrumbs } from '@/hooks'

export const ProductListPage = () => {

  useBreadcrumbs(BREADCRUMB_PAGE_LIST)

  return <ProductList />
}
