import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import ROUTES_LINKS from '../routesLinks'
const Layout = lazy(() => import('../../components/Layout/Layout'))
const Home = lazy(() => import('../../pages/Home'))
const Exercise1 = lazy(() => import('../../pages/Exercise1'))
const Exercise2 = lazy(() => import('../../pages/Exercise2'))

export default function Router() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path={ROUTES_LINKS.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES_LINKS.EXERCISES.ONE} element={<Exercise1 />} />
          <Route path={ROUTES_LINKS.EXERCISES.TWO} element={<Exercise2 />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
