import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { BREADCRUMB_PAGE_LIST } from '@/constants'
import { ProductDetail } from '@/components'
import { useBreadcrumbs, useProductDetail } from '@/hooks'

export const ProductDetailPage = () => {
  const { productId } = useParams()
  const { product, selectedOptions, setOptionColor, setOptionStorage } = useProductDetail(productId)
  const { setBreadcrumbs } = useBreadcrumbs([])

  useEffect(() => {
    if (!product) return
    setBreadcrumbs([
      ...BREADCRUMB_PAGE_LIST,
      { path: `product/${productId}`, name: `${product.brand}-${product.model}` },
    ])
  }, [product])

  return (
    <ProductDetail
      {...product}
      selectedOptions={selectedOptions}
      onChangeColor={setOptionColor}
      onChangeStorage={setOptionStorage}
    />
  )
}
