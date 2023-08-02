import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/'
import Survey from './components/Survey'
import Header from './components/Header'

import Error from './components/Error'
import Freelance from './pages/Freelances'
import { createRoot } from 'react-dom/client'
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/freelances" element={<Freelance/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
/*
import ClientForm from './components/ClientForm'
import FreelanceForm from './components/FreelanceForm'
<Route path="client" element={<ClientForm />} />
          <Route path="freelance" element={<FreelanceForm />} />
)*/