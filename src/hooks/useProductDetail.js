import { useState } from 'react'
import { useQuery } from 'react-query'

import { getApiProductById } from '@/api'

export const useProductDetail = productId => {
  const { data: product } = useQuery(['product', productId], getApiProductById)
  const [selectedOptions, setSelectedOptions] = useState({
    storage: product.options.storages[0].code,
    color: product.options.colors[0].code,
  })

  const setOptionColor = code => setSelectedOptions(prevState => ({ ...prevState, color: code }))
  const setOptionStorage = code => setSelectedOptions(prevState => ({ ...prevState, storage: code }))

  return { product, selectedOptions, setOptionColor, setOptionStorage }
}
