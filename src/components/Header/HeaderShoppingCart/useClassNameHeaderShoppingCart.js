import { useMemo } from 'react'

import styles from './HeaderShoopingCart.module.scss'
import { getClassName } from '@/styles'

export const useClassNameHeaderShoppingCart = ({ count }) => {
  const className = useMemo(() => {
    return getClassName({
      className: styles.shoppingCart,
      optionals: [count > 0 && styles.shoppingCart_withCount],
    })
  }, [count])
  return className
}
