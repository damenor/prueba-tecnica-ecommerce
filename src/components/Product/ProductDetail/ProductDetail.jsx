import { BiMemoryCard } from 'react-icons/bi'
import { IoMdColorPalette } from 'react-icons/io'

import styles from './ProductDetail.module.scss'
import { ProductDetailDescriptionData } from './ProductDetailDescriptionData'
import { ProductDetailDescriptionOptions } from './ProductDetailDescriptionOptions'

export const ProductDetail = ({
  brand,
  model,
  imgUrl,
  options: { colors, storages },
  primaryCamera,
  secondaryCamera,
  price,
  selectedOptions,
  isLoadingShoppingCart,
  onAddShoppingCart,
  onChangeColor,
  onChangeStorage,
  ...productData
}) => {
  return (
    <div className={styles.productDetail}>
      <div className={styles.productDetailImage}>
        <img src={imgUrl} alt={`${brand}-${model}`} />
      </div>
      <div className={styles.productDetailDescription}>
        <h2>
          {brand}-{model}
        </h2>
        <ProductDetailDescriptionData {...productData} />
        <ProductDetailDescriptionOptions
          title="Storage"
          options={storages}
          Icon={BiMemoryCard}
          codeActive={selectedOptions.storage}
          onChangeOption={onChangeStorage}
        />
        <ProductDetailDescriptionOptions
          title="Colors"
          options={colors}
          Icon={IoMdColorPalette}
          codeActive={selectedOptions.color}
          onChangeOption={onChangeColor}
        />
        <button 
          className={styles.productDetailDescriptionButtonBuy} 
          onClick={onAddShoppingCart}
          disabled={isLoadingShoppingCart}
        >
          Buy for {price}€
        </button>
      </div>
    </div>
  )
}
