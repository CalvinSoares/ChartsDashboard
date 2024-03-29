import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Rotas from './routes.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <Router>
        <Rotas />
      </Router>   

  </React.StrictMode>,
)
