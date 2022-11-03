import { Fragment } from 'react'

import styles from './HeaderBreadcrumbs.module.scss'
import { useAppContext } from '@/contexts'
import { HeaderBreadcrumbsLink } from './HeaderBreadcrumbsLink'
import { HeaderBreadcrumbsSeparator } from './HeaderBreadcrumbsSeparator'

export const HeaderBreadcrumbs = () => {
  const { breadcrumbs } = useAppContext()

  if (breadcrumbs.length === 0) return <></>

  return (
    <div className={styles.headerBreadcrumbs}>
      {breadcrumbs.map((breadcrumb, index) => {
        const isLast = index === breadcrumbs.length - 1
        return (
          <Fragment key={breadcrumb.name}>
            <HeaderBreadcrumbsLink {...breadcrumb} isLast={isLast} />
            {!isLast && <HeaderBreadcrumbsSeparator />}
          </Fragment>
        )
      })}
    </div>
  )
}
