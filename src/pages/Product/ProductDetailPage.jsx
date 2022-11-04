import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { BREADCRUMB_PAGE_LIST } from '@/constants'
import { ProductDetail, Loader } from '@/components'
import { useBreadcrumbs, useProductDetail } from '@/hooks'

export const ProductDetailPage = () => {
  const { productId } = useParams()
  const { 
    product, 
    selectedOptions, 
    setOptionColor, 
    setOptionStorage, 
    addShoppingCart, 
    isLoadingShoppingCart 
  } = useProductDetail(productId)
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
      isLoadingShoppingCart={isLoadingShoppingCart}
      onAddShoppingCart={addShoppingCart}
      onChangeColor={setOptionColor}
      onChangeStorage={setOptionStorage}
    />
  )
}
