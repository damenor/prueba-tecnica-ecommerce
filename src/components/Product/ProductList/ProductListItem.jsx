import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

import styles from './ProductList.module.scss'

export const ProductListItem = forwardRef(({ id, brand, model, imgUrl, price }, ref) => {
  return (
    <Link ref={ref} className={styles.productListItem} to={`/product/${id}`}>
      <div className={styles.productListItemImage}>
        <img src={imgUrl} alt={`${brand}-${model}`} />
      </div>
      <div className={styles.productListItemData}>
        <h2>{brand}</h2>
        <h3>{model}</h3>
      </div>
      {price && <p className={styles.productListItemPrice}>{price}€</p>}
    </Link>
  )
})
