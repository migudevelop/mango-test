import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { FullPageLoader } from '../../components/UI'
import ROUTES_LINKS from '../routesLinks'
const Layout = lazy(() => import('../../components/Layout/Layout'))
const Home = lazy(() => import('../../pages/Home/Home'))
const Exercise1 = lazy(() => import('../../pages/Exercise1/Exercise1'))
const Exercise2 = lazy(() => import('../../pages/Exercise2/Exercise2'))

export default function Router() {
  return (
    <Suspense fallback={<FullPageLoader />}>
      <Routes>
        <Route path={ROUTES_LINKS.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            index
            path={ROUTES_LINKS.EXERCISES.ONE}
            element={<Exercise1 />}
          />
          <Route path={ROUTES_LINKS.EXERCISES.TWO} element={<Exercise2 />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
