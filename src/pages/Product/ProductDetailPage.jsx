import { useParams } from 'react-router-dom'

import { BREADCRUMB_PAGE_LIST } from '@/constants'
import { useBreadcrumbs } from '@/hooks'

export const ProductDetailPage = () => {

  const { id } = useParams()

  useBreadcrumbs([
    ...BREADCRUMB_PAGE_LIST,
    { path: `product/${id}`, name: '' }
  ])

  return (
    <div>
      <h2>ProductDetailPage</h2>
    </div>
  )
}
