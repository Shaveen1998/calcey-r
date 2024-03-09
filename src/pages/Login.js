import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/reducers/userSlice';

function Login() {

    const [email, setEmail] = useState({});
    const [password, setPassword] = useState({});
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault();
      //   if(!email || !password || email==='' || password===''){
      //     const error = new Error('enter fields')
      //   return  dispatch(loginFailed(error))
      // }

      const loggedInuser = {
        email,
        password
      }
      dispatch(login(loggedInuser))
      navigate('/home')
    }

  return (
    <div>
      <h1>Login</h1>

      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
