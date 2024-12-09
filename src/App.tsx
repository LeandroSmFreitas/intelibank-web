
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import AppProvider from './context'
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <AppProvider>
            <AppRoutes/>
            <SpeedInsights />
            <Analytics />
        </AppProvider>
      </BrowserRouter>
    </>
  )
}

export default App
