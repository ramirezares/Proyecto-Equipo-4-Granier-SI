import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { WebRouter } from './router/WebRouter.jsx'
import {RouterProvider} from "react-router-dom"
//import Register from './pages/Register.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={WebRouter}/>
  </React.StrictMode>
)
