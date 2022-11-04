import { useQuery } from 'react-query'

import { getApiProductById } from '@/api'

export const useProductDetail = (productId) => {
  const { data: product } = useQuery(['product', productId], getApiProductById)
  return { product }
}