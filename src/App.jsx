import { BrowserRouter as Router } from "react-router-dom"
import Rotas from "./routes"

function App() {

  return (  
      <Router>
        <div className="main-container">
           <Rotas />
        </div>
       
      </Router>
  )
}

export default App
