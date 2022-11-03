import { Link } from 'react-router-dom'

import styles from './HeaderBreadcrumbs.module.scss'

export const HeaderBreadcrumbsLink = ({ path, name, isLast }) => {
  return (
    <Link className={isLast ? styles.headerBreadcrumbsLink_active : styles.headerBreadcrumbsLink} to={path}>{name}</Link>
  )

}
