import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './Context/StoreContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Food_Delivery">
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
)
