import { Link } from 'react-router-dom'

import ImageLogo from '@/assets/logo.png'

export const HeaderLogo = () => {
  return (
    <Link to="/">
      <img width="32px" src={ImageLogo} alt="logo" />
    </Link>
  )
}
