import styles from './header.module.scss'

import { HeaderBreadcrumbs } from './HeaderBreadcrumbs'
import { HeaderLogo } from './HeaderLogo'
import { HeaderShoppingCart } from './HeaderShoppingCart'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <HeaderLogo />
        <div>
          <HeaderShoppingCart count={0} />
        </div>
      </div>
      <HeaderBreadcrumbs />
    </header>
  )
}
