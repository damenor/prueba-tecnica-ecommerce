import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { BREADCRUMB_PAGE_LIST } from '@/constants'
import { useBreadcrumbs, useProductDetail } from '@/hooks'

export const ProductDetailPage = () => {

  const { productId } = useParams()
  const { product } = useProductDetail(productId)
  const { setBreadcrumbs } = useBreadcrumbs([])

  useEffect(() => {
    if(!product) return
    setBreadcrumbs([
      ...BREADCRUMB_PAGE_LIST,
      { path: `product/${productId}`, name: `${product.brand}-${product.model}` }
    ])
  }, [product])

  return (
    <div>

    </div>
  )
}
