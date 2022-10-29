import { Link } from 'react-router-dom'

import './header.scss'
import ImageLogo from '@/assets/logo.png'

export const Header = () => {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img width="40px" src={ImageLogo} alt="logo" />
        </Link>
      </div>
      <nav>
        <Link to="/product">Products</Link>
      </nav>
    </header>
  )
}
