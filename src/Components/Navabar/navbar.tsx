import { Header, Logo, NavBarLink } from './navbar.styles'
import logo from '@/assets/logo.png'

export const NavBar = () => {
  return (
    <Header>
      <NavBarLink to='/'>
        <Logo src={logo} />
      </NavBarLink>
    </Header>
  )
}
