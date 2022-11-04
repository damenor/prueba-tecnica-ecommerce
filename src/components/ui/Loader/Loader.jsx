import styles from './Loader.module.scss'

export const Loader = () => (
  <div className={styles.loader}>
    <span className={styles.loaderAnimation}>Loading</span>
  </div>
)