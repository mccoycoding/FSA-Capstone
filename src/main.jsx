import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import routes from './Routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(routes);

root.render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
