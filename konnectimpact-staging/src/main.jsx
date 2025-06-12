import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import reportWebVitals from './reportWebVitals.js';
import { AppContextProvider } from './context/AdminContext.jsx';
import { RaffleProvider } from './context/RaffleContext';
import { ToastProvider } from './context/ToastContext';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <ToastProvider>
          <RaffleProvider>
            <App />
          </RaffleProvider>
        </ToastProvider>
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>,
)

reportWebVitals()