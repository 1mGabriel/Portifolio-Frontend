import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Context, {StateContext} from './Context/Context.jsx'
import {RouterProvider} from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
    <App />
    </Context>
  </StrictMode>,
)
