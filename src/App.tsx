
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import AppProvider from './context'
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  

  return (
    <BrowserRouter>
      <AppProvider>
          <AppRoutes/>
      </AppProvider>
      <SpeedInsights />
    </BrowserRouter>
  )
}

export default App
