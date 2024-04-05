import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Filter from './components/Filter.tsx'
import Header from './components/Header.tsx'
import Country from './components/Country.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
  },
  {
    path: "/country/:name",
    element: (
      <>
        <Header />
        <Filter />
        <Country />
      </>
    ),
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
