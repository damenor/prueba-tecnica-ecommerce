import styles from './header.module.scss'

import { useAppContext } from '@/contexts'
import { HeaderBreadcrumbs } from './HeaderBreadcrumbs'
import { HeaderLogo } from './HeaderLogo'
import { HeaderShoppingCart } from './HeaderShoppingCart'

export const Header = () => {

  const { shoppingCartCount } = useAppContext()
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <HeaderLogo />
        <div>
          <HeaderShoppingCart count={shoppingCartCount} />
        </div>
      </div>
      <HeaderBreadcrumbs />
    </header>
  )
}
