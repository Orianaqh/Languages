import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import LanguageContextProvider from './components/LanguageChooser'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <App />
    </LanguageContextProvider>
  </React.StrictMode>
)
