import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'aos/dist/aos.css';
import { HelmetProvider } from 'react-helmet-async';

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Routes';
import AuthProvider from './authProvider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div className='max-w-screen-2xl mx-auto overflow-hidden'>
          <RouterProvider router={router}></RouterProvider>
        </div>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
