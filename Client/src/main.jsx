import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import ContexProvider from './context/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContexProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContexProvider>
  </React.StrictMode>,
)
