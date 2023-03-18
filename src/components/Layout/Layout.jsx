import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../UI'

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default memo(Layout)
