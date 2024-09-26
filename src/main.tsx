import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './state/store.ts'
import Cart from './components/pages/Cart.tsx'
import ProductPage from './components/pages/ProductPage.tsx'
import NotFound from './components/pages/NotFound.tsx'
import FullProducts from './components/pages/FullProducts.tsx'
import ShopPage from './components/pages/ShopPage.tsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/product/:category/:productId',
    element: <ProductPage />,
  },
  {
    path: '/category/:category',
    element: <FullProducts />,
  },
  {
    path: '/shop',
    element: <ShopPage />,
  },

  {
    path: '*',
    element: <NotFound />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <QueryClientProvider client={new QueryClient()}>
      <RouterProvider router={router} />
      <ToastContainer />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </Provider>
)
