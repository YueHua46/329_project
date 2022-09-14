import {useRoutes} from 'react-router-dom'
import {lazy, Suspense} from 'react'
const Home = lazy(() => import('../Page/Home'))
const GeeklistHot = lazy(() => import('../Page/GeeklistHot'))
const RpgGeek = lazy(() => import('../Page/RpgGeek'))
const ShopGeekMarket = lazy(() => import('../Page/ShopGeekMarket'))

const routes = [
  {
    path: '/',
    element: (
      <Suspense fallback={<h1>Home Loading...</h1>}>
        <Home />
      </Suspense>
    ),
  },
  {
    index: true,
    path: '/home',
    element: (
      <Suspense fallback={<h1>Home Loading...</h1>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/rpggeek',
    element: (
      <Suspense fallback={<h1>RpgGeek Loading...</h1>}>
        <RpgGeek />
      </Suspense>
    ),
  },
  {
    path: '/geeklistHot',
    element: (
      <Suspense fallback={<h1>GeeklistHot Loading...</h1>}>
        <GeeklistHot />
      </Suspense>
    ),
  },
  {
    path: '/shopGeekMarket',
    element: (
      <Suspense fallback={<h1>ShopGeekMarket Loading...</h1>}>
        <ShopGeekMarket />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: <Error />,
  },
]

export default routes
