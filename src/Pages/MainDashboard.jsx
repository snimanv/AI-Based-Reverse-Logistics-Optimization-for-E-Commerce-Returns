import React from 'react'
import './Pages.css'

import Navbar from '../Components/Navbar/Navbar'

export default function MainDashboard() {
  return (
    <div className='page-container'>
        <Navbar/>
        <div id='overview' className='section'>
        <h2>🚀 Company Overview</h2>
        <p>
            OptiReturn Inc. is transforming reverse logistics for e-commerce using advanced AI models.
            Our system optimizes returns management through fraud detection, warehouse allocation, and
            resale value predictions, helping companies minimize loss and maximize efficiency.
        </p>
        <img src="https://cdn-icons-png.flaticon.com/512/1995/1995470.png" alt="Logistics" class="icon" />
        </div>
    </div>
  )
}