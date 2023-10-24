import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Phones from './components/Phones/Phones.jsx';
import Phone from './components/Phone/Phone.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/phones',
        element: <Phones></Phones>,
        loader: ()=> fetch('http://localhost:5000/phones')
      },
      {
        path: '/phone/:id',
        element: <Phone></Phone>,
        loader: ({params})=> fetch(`http://localhost:5000/phones/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}>
   </RouterProvider>
  </React.StrictMode>,
)
