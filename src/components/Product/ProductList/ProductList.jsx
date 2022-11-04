import { AnimatePresence, motion } from 'framer-motion'

import styles from './ProductList.module.scss'

import { ProductListItem } from './ProductListItem'
import { ProductListSearch } from './ProductListSearch'
import { useProducts } from './useProducts'

const variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const variantsItem = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8 },
  },
}

const MotionProductListItem = motion(ProductListItem)

export const ProductList = () => {
  const { products, filterProducts } = useProducts()

  return (
    <div className={styles.productList}>
      <ProductListSearch onChange={filterProducts} />
      <motion.div className={styles.productListContainer} variants={variants} initial="hidden" animate="show">
        {products.map(product => (
          <MotionProductListItem
            key={`product-${product.brand}-${product.model}`}
            variants={variantsItem}
            initial="hidden"
            animate="show"
            {...product}
          />
        ))}
      </motion.div>
    </div>
  )
}
