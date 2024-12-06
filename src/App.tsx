
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import AppProvider from './context'

function App() {
  

  return (
    <BrowserRouter>
      <AppProvider>
          <AppRoutes/>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
