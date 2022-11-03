import styles from './HeaderBreadcrumbs.module.scss'

const SEPARATOR = '/'

export const HeaderBreadcrumbsSeparator = () => {
  return (
    <div className={styles.headerBreadcrumbsSeparator}>{SEPARATOR}</div>
  )
}
