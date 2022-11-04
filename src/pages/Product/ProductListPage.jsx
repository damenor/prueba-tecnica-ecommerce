import { BREADCRUMB_PAGE_LIST } from '@/constants'
import { ProductList } from '@/components'
import { useBreadcrumbs, useProducts } from '@/hooks'

export const ProductListPage = () => {
  const { products, filterProducts } = useProducts()
  useBreadcrumbs(BREADCRUMB_PAGE_LIST)

  return <ProductList products={products} filterProducts={filterProducts} />
}
