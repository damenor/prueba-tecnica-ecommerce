import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'

import { getApiProducts } from '@/api'

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const { data } = useQuery('products', getApiProducts)
  const filterProducts = searchTerm => {
    if(!data) return
    const productsFiltered = data.filter(product => {
      return product.brand.toLowerCase().includes(searchTerm) || product.model.toLowerCase().includes(searchTerm)
    })
    setProducts(productsFiltered)
  }
  useEffect(() => data && setProducts(data), [data])
  return { products, filterProducts }
}