import React from 'react'

import Logo from '../../assets/logo.png'
import './Navbar.css'

import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar'>

      <div className="logo">
        <img src={Logo} alt="OptiReturn Logo" />
      </div>
      <ul className="nav-links">
        {/* <li><Link to="/dashboard" className="active">Company</Link></li>
        <li><Link to="/detection">Fraud Detection</Link></li>
        <li><Link to="/warehouse">Warehouse</Link></li>
        <li><Link to="/resale">Resale Profit</Link></li> */}

        <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>Company</NavLink></li>
        <li><NavLink to="/detection" className={({ isActive }) => isActive ? "active" : ""}>Fraud Detection</NavLink></li>
        <li><NavLink to="/warehouse" className={({ isActive }) => isActive ? "active" : ""}>Warehouse</NavLink></li>
        <li><NavLink to="/resale" className={({ isActive }) => isActive ? "active" : ""}>Resale Profit</NavLink></li>
      </ul>

    </div>
  )
}