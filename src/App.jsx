import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Form from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import Cart from './components/Cart'

import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  return (
    <Router>
      <div className='bg-white'>
        <Routes>
          <Route path="/signup" element={<Form />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App