import React from 'react'
import "./Login.css"
import { useState, useEffect } from 'react';
import axios from 'axios'

function Login() {



  useEffect(() => {
    async function res() {
      let responce = await axios.get('http://localhost:5000/')
      console.log(responce.data)
    }

  }, []);
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  console.log(email);
  console.log(password);

  async function handleClick() {
    let responce = await axios.post('http://localhost:5000/test/user', { email, password })
    console.log(responce)
  }

  return (
    <div className="Login">
      <div className="uij">Enter your mail</div>
      <input type="text" className="uij1" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
      <div className="uij3">Enter your password</div>
      <input type="password" className="uij4" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} /><br />
      <button className="uij5"onClick={handleClick}>Login</button>

    </div>
  );
  
}

      
      export default Login;