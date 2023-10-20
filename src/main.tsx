import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast'

import App from './App.tsx'
import ReserveQueue from './ReserveQueue.tsx';
import ViewOrder from './ViewOrder.tsx';
import './index.css'
import Layout from './Layout.tsx';
import OrderDetail from './OrderDetail.tsx';
import OrderMenu from './OrderMenu.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ReserveQueue/>
  },
  {
    path: "/:customer_id",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: "view-order",
        element: <ViewOrder/>
      },
      {
        path: "view-order/:order_id",
        element: <OrderDetail/>
      },
      {
        path: "order-menu",
        element: <OrderMenu/>
      }
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div><Toaster/></div>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
