import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter basename="/team_sea">
    <div className='w-full h-screen flex justify-center items-center'>
    <App />
    </div>
    </HashRouter>

  </React.StrictMode>,
)
