import { memo, useState } from 'react'
import { MenuIcon, CloseIcon, NavbarList } from '@/components'
import styles from './SideBar.module.css'

function SideBar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)
  return (
    <div className={styles.sidebar}>
      <button className={styles.sidebar_menu_button} onClick={toggleOpen}>
        <MenuIcon />
      </button>
      <div
        className={`${styles.sidebar_conent} ${
          isOpen && styles['sidebar_conent-open']
        }`}
      >
        <div className={styles.sidebar_menu_button_wrapper}>
          <button className={styles.sidebar_menu_button} onClick={toggleOpen}>
            <CloseIcon />
          </button>
        </div>
        <NavbarList
          className={styles.sidebar_navbarlist}
          handleOnClick={toggleOpen}
        />
      </div>
    </div>
  )
}

export default memo(SideBar)
