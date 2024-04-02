import StandardPage from "./components/StandardPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthOutlet from '@auth-kit/react-router/AuthOutlet'
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AuthOutlet fallbackPath="/login" />}>
          <Route element={<StandardPage />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    
  )
}

export default Rotas
