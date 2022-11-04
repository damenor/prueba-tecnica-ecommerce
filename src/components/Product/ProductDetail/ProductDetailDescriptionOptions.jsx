import { getClassName } from '@/styles'
import styles from './ProductDetail.module.scss'
import { ProductDetailRowWithIcon } from './ProductDetailRowWithIcon'

export const ProductDetailDescriptionOptions = ({ options, title, Icon, codeActive, onChangeOption }) => {
  const getClassNameButton = isActive =>
    getClassName({
      className: styles.productDetailDescriptionOptionsButton,
      optionals: [isActive && styles.productDetailDescriptionOptionsButton_active],
    })

  return (
    <div className={styles.productDetailDescriptionOptions}>
      <ProductDetailRowWithIcon Icon={Icon} value={title} />
      <div className={styles.productDetailDescriptionOptionsButtons}>
        {options.map(({ code, name }) => {
          const isActive = codeActive === code
          const classNameButton = getClassNameButton(isActive)
          return (
            <button key={`${title}-${code}`} className={classNameButton} onClick={() => onChangeOption(code)}>
              {name}
            </button>
          )
        })}
      </div>
    </div>
  )
}
