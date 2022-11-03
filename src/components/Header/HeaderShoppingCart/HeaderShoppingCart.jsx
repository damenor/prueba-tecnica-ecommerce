import { HiOutlineShoppingBag } from 'react-icons/hi'

import { IconButton } from '@/components/ui'
import { useClassNameHeaderShoppingCart } from './useClassNameHeaderShoppingCart'

export const HeaderShoppingCart = ({ count }) => {
  const className = useClassNameHeaderShoppingCart({ count })
  return (
    <IconButton 
      className={className} 
      data-content={count}
      Icon={HiOutlineShoppingBag}
    />
  )
}
