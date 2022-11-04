import { useEffect, useState } from 'react'

import styles from './ProductList.module.scss'
import { useDebounce } from '@/hooks'

export const ProductListSearch = ({ onChange }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  useEffect(() => {
    onChange(debouncedSearchTerm.toLowerCase())
  }, [debouncedSearchTerm]);
  return (
    <input 
      className={styles.productListSearch} 
      placeholder="Search by brand or model" 
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  )
}
