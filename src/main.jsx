import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
  {/**
  * main.jsx
  * Project: QuickStay
  * Developed & Maintained by: Yash Bachwani
  * © 2025 All rights reserved
  */}
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ClerkProvider>,
)
