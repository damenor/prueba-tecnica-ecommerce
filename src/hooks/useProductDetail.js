import { useState } from 'react'
import { useQuery, useMutation } from 'react-query'

import { getApiProductById, addApiShoppingCart } from '@/api'
import { useAppContext } from '@/contexts'

export const useProductDetail = productId => {
  const { data: product } = useQuery(['product', productId], getApiProductById)
  const [selectedOptions, setSelectedOptions] = useState({
    storage: product.options.storages[0].code,
    color: product.options.colors[0].code,
  })
  const { setShoppingCartCount } = useAppContext()
  const { mutateAsync, isLoading } = useMutation(addApiShoppingCart)

  const addShoppingCart = async () => {
    const dataToSend = { id: productId, colorCode: selectedOptions.color, storageCode: selectedOptions.storage }
    const { count } = await mutateAsync(dataToSend)
    setShoppingCartCount(count)
  }

  const setOptionColor = code => setSelectedOptions(prevState => ({ ...prevState, color: code }))
  const setOptionStorage = code => setSelectedOptions(prevState => ({ ...prevState, storage: code }))

  return { product, selectedOptions, setOptionColor, setOptionStorage, addShoppingCart, isLoadingShoppingCart: isLoading }
}
