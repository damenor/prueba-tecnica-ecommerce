import styles from './ProductDetail.module.scss'

const ICON_SIZE = 24

export const ProductDetailRowWithIcon = ({ Icon, value }) => {
  if (!value || value === '-') return
  return (
    <div className={styles.productDetailRowWithIcon}>
      <Icon size={ICON_SIZE} />
      <p>{value}</p>
    </div>
  )
}
