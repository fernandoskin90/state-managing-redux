import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.nav`
  height: 230px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0d1f2dff;
`

export const NavBarLink = styled(Link)`
  text-decoration: none;
  margin: 10px;
`

export const Logo = styled.img`
  height: 80%;
`
