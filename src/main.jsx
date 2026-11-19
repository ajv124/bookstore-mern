import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ShareContext from './contextAPI/ShareContext.jsx'
import RouteGuard from './contextAPI/RouteGuard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId='661621378919-3rhpv9j4cpv2tf7ukv0rh5ssfp1eftfi.apps.googleusercontent.com'>
        <ShareContext>      
          <RouteGuard>
            <App />
          </RouteGuard>
        </ShareContext>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
