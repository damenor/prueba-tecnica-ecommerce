import { Navigate } from 'react-router-dom'

import { ProductListPage, ProductDetailPage } from './Product'
import { HomePage } from './HomePage'

export const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/product', element: <ProductListPage /> },
  { path: '/product/:id', element: <ProductDetailPage /> },
  { path: '*', element: <Navigate to='/' replace /> },
]
