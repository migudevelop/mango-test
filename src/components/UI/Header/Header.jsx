import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES_LINKS } from '@/routes'
import styles from './Header.module.css'

function Header() {
  const getNavLinkClassName = ({ isActive }) => {
    const activeClass = isActive ? styles['navbar_link-active'] : ''
    return `${styles.navbar_link} ${activeClass}`
  }

  return (
    <header>
      <nav className={styles.navbar}>
        <NavLink className={styles.navbar_logo} to={ROUTES_LINKS.HOME}>
          Logo
        </NavLink>
        <ul className={styles.navbar_list}>
          <li className={styles.navbar_item}>
            <NavLink className={getNavLinkClassName} to={ROUTES_LINKS.HOME}>
              Home
            </NavLink>
          </li>
          <li className={styles.navbar_item}>
            <NavLink
              className={getNavLinkClassName}
              to={ROUTES_LINKS.EXERCISES.ONE}
            >
              Exercise 1
            </NavLink>
          </li>
          <li className={styles.navbar_item}>
            <NavLink
              className={getNavLinkClassName}
              to={ROUTES_LINKS.EXERCISES.TWO}
            >
              Exercise 2
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default memo(Header)
