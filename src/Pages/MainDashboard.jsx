import React from 'react'
import './Pages.css'

import { Link } from 'react-router-dom'

import Navbar from '../Components/Navbar/Navbar'

import Detection from '../assets/detection.png'
import Warehouse from '../assets/warehouse.png'
import Resale from '../assets/resale_profit.png'

export default function MainDashboard() {
  return (
      <div className='page-container'>
        <Navbar/>

        {/* Hero Section */}
        <div id='overview' className='section'>
          <h2>🚀 Overview</h2>
          <p>
              OptiReturn Inc. is transforming reverse logistics for e-commerce using advanced AI models.
              Our system optimizes returns management through fraud detection, warehouse allocation, and
              resale value predictions, helping companies minimize loss and maximize efficiency.
          </p>
          <img src="https://cdn-icons-png.flaticon.com/512/1995/1995470.png" alt="Logistics" class="icon" />
        </div>

        {/* Service Links Section */}

        <div>
          <h2 className="section-services-title">Explore Our Core Solutions</h2>
        </div>

        <div className="section services-grid">
          <Link to="/detection" className="service-card">
            {/* <img src="https://cdn-icons-png.flaticon.com/512/1087/1087815.png" alt="Fraud Detection" /> */}
            <img src={Detection} alt="Fraud Detection" />
            <h3>Fraud Detection</h3>
            <p>Identify suspicious return patterns and prevent fraudulent activities using AI-powered analysis.</p>
          </Link>

          <Link to="/warehouse" className="service-card">
            {/* <img src="https://cdn-icons-png.flaticon.com/512/4072/4072287.png" alt="Warehouse Allocation" /> */}
            <img src={Warehouse} alt="Warehouse Allocation" />
            <h3>Warehouse Allocation</h3>
            <p>Optimize your warehouse usage by predicting ideal product placement and restocking strategies.</p>
          </Link>

          <Link to="/resale" className="service-card">
            {/* <img src="https://cdn-icons-png.flaticon.com/512/3234/3234386.png" alt="Resale Profit" /> */}
            <img src={Resale} alt="Resale Profit" />
            <h3>Resale Profit</h3>
            <p>Estimate the resale value and potential profit margins for returned products efficiently.</p>
          </Link>
        </div>

    </div>
  )
}