import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Rotas from './routes.jsx'
import AuthProvider from 'react-auth-kit'
import store from './services/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider
      authName={'_auth'}
      cookieDomain={window.location.hostname}
      cookieSecure={true}
      store={store}
    >
        <Rotas />
    </AuthProvider>
  </React.StrictMode>,
)
