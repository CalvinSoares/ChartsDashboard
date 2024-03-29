import { Routes, Route } from "react-router-dom"
import StandardPage from "./components/StandardPage"
import DashBoard from "./pages/Dashboard"

const Rotas = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<StandardPage />}>
                <Route path="/dashboard" element={<DashBoard />}/>
            </Route>
        </Routes>
    </>
  )
}

export default Rotas
