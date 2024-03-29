import StandardPage from "./components/StandardPage"
import { Routes, Route } from 'react-router-dom'
import DashBoard from "./pages/Dashboard"
import Login from "./pages/Login"

const Rotas = () => {
  return (

      <Routes>
          <Route element={<StandardPage />}>
            <Route path="/dashboard" element={<DashBoard />} />
          </Route>
          
        <Route path="/" element={<Login />} />
      </Routes>

  )
}

export default Rotas
