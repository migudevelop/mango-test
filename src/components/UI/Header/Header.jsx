import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES_LINKS } from '@/routes'
import { NavbarList, SideBar } from '@/components'
import styles from './Header.module.css'

function Header() {
  return (
    <header role="header">
      <nav className={styles.navbar}>
        <NavLink className={styles.navbar_logo} to={ROUTES_LINKS.HOME}>
          Range App
        </NavLink>
        <NavbarList />
        <SideBar />
      </nav>
    </header>
  )
}

export default memo(Header)
