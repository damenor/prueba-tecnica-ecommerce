import styles from './ErrorFallback.module.scss'

export const ErrorFallback = () => {
  return (
    <div className={styles.errorFallback}>
      <h2>Ups!</h2>
      <h3>Something went wrong</h3>
    </div>
  )
}
