import { memo } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { ROUTES_LINKS } from '@/routes'
import styles from './NavbarList.module.css'

function NavbarList({ className = '', handleOnClick }) {
  const getNavLinkClassName = ({ isActive }) => {
    const activeClass = isActive ? styles['navbar_link-active'] : ''
    return `${styles.navbar_link} ${activeClass}`
  }

  const handleOnNavLinkClick = () => {
    handleOnClick && handleOnClick()
  }

  return (
    <ul className={`${styles.navbar_list} ${className}`}>
      <li className={styles.navbar_item}>
        <NavLink
          className={getNavLinkClassName}
          to={ROUTES_LINKS.HOME}
          onClick={handleOnNavLinkClick}
        >
          Home
        </NavLink>
      </li>
      <li className={styles.navbar_item}>
        <NavLink
          className={getNavLinkClassName}
          to={ROUTES_LINKS.EXERCISES.ONE}
          onClick={handleOnNavLinkClick}
        >
          Exercise 1
        </NavLink>
      </li>
      <li className={styles.navbar_item}>
        <NavLink
          className={getNavLinkClassName}
          to={ROUTES_LINKS.EXERCISES.TWO}
          onClick={handleOnNavLinkClick}
        >
          Exercise 2
        </NavLink>
      </li>
    </ul>
  )
}

NavbarList.propTypes = {
  className: PropTypes.string
}

export default memo(NavbarList)
