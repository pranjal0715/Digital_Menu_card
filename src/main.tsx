import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import QRLanding from './QRLanding';
import Menu from './Menu';
import CartPage from './Cart';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <QRLanding />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);