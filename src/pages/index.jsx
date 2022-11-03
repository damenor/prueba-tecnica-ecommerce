import { Navigate } from 'react-router-dom'

import { ProductListPage, ProductDetailPage } from './Product'

export const routes = [
  { path: '/product', element: <ProductListPage /> },
  { path: '/product/:id', element: <ProductDetailPage /> },
  { path: '*', element: <Navigate to='/product' replace /> },
]
