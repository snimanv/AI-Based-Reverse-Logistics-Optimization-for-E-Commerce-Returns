import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import './App.css'

import Signup from './Components/LoginSignup/Signup.jsx'
import Login from './Components/LoginSignup/Login.jsx'

import MainDashboard from './Pages/MainDashboard'
import FraudDetection from './Pages/FraudDetection.jsx';
import Warehouse from './Pages/Warehouse.jsx';
import ResaleProfit from './Pages/ResaleProfit.jsx';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="dashboard" element={<MainDashboard/>} />
      <Route path="/detection" element={<FraudDetection/>} />
      <Route path="/warehouse" element={<Warehouse/>} />
      <Route path="/resale" element={<ResaleProfit/>} />
    </Routes>

  )
}

export default App