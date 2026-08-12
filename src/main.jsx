import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// FIX: Import 'Analytics' from '@vercel/analytics/react' instead of 'track'
import { Analytics } from '@vercel/analytics/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* This component will now load correctly! */}
    <Analytics />
    <App />
  </StrictMode>,
)
