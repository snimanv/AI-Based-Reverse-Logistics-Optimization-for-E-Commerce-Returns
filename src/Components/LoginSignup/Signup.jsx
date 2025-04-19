import React from 'react'
import './LoginSignup.css'

// ICONS
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';

export default function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    const userData = { name, email, password };

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });

      const data = await response.json();
      if (response.ok) {
        alert('Signup successful!');
        navigate('/login');
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert('Signup failed');
    }

  };




  return (
    <div className="flex-container">

      <div className='container'>

        <form onSubmit={handleSignup}>

          <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
          </div>

          <div className="inputs">


              <div className="input">
                <FaUser className='signup-icons'/>
                <input 
                type="text" 
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
              </div>

              <div className="input">
                <MdEmail className='signup-icons'/>
                <input 
                type="email" 
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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
                // minLength="8"
                // maxLength="16"
                />
              </div>


          </div>

          <div className="forgot-password">Lost Password? <span>Click Here!</span></div>

          <div className="submit-container">
            {/* <button type='submit'><div className="submit">Sign Up</div></button> */}
            {/* <div className="submit"><button type="submit">Sign Up</button></div> */}
            {/* <div className="submit">Log In</div> */}
            <button type="submit" className="submit">Sign Up</button>
            <Link to="/login" className="submit gray">Log In</Link>
          </div>

        </form>

      </div>


    </div>

  )
}