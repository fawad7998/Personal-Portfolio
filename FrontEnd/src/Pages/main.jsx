import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { DataProvider } from '../ContextApi/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataProvider>

)
