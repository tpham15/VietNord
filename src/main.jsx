// src/main.jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter }      from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import ShopContextProvider    from './context/ShopContextProvider'
import App                    from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <I18nextProvider i18n={i18n}/>
    <ShopContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShopContextProvider>
  </React.StrictMode>
)
