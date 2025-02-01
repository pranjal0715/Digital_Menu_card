import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import QRLanding from './QRLanding';
import Menu from './Menu';
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
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

export default main;
