import React from 'react'
import './LoginSignup.css'

// ICONS
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';




export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
  
        const data = await response.json();
        if (response.ok) {
          alert('Login successful!');
          navigate('/dashboard'); // 👉 Redirect to dashboard
        } else {
          alert(data.message);
        }
      } catch (err) {
        alert('Login failed');
      }

  }


  return (
    <div className="flex-container">

      <div className='container'>


        <form onSubmit={handleLogin}>


        <div className="header">
          <div className="text">Log In</div>
          <div className="underline"></div>
        </div>

          <div className="inputs">

            <div className="input">
              <MdEmail className='signup-icons'/>
              <input 
              type="email" 
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              />
            </div>

            <div className="input">
              <RiLockPasswordFill className='signup-icons'/>
              <input 
              type="password" 
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              />
            </div>

          </div>

          <div className="forgot-password">Lost Password? <span>Click Here!</span></div>

          <div className="submit-container">
            {/* <div className="submit">Sign Up</div> */}
            {/* <div className="submit">Log In</div> */}
            <Link to="/" className="submit">Sign Up</Link>
            <button type="submit" className="submit">Log In</button>
          </div>

        </form>

      </div>

    </div>

  )
}