import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {loginStart, loginFailed, loginSuccess} from '../redux/users/userSlice'

function Login() {

    const [email, setEmail] = useState({});
    const [password, setPassword] = useState({});
    const { loading, error, loggedin } = useSelector((state) => state.user);
    const dispatch = useDispatch()

    const navigate = useNavigate()

   
    

    const handleSubmit = (e)=>{
        e.preventDefault();

        dispatch(loginStart())
        
      if (!email || !password) {
        return dispatch(loginFailed('Please fill out all fields.'));
      }else{

        const loggedUser = {
            email:email,
            passw:password
        }
        dispatch(loginSuccess(loggedUser))
        console.log('User logged in', loggedUser)
        navigate('/home')
        
      }
       
    }


  return (
    <div>
      <h1>Login</h1>

      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
        <button>
        {loading ? (
                <>
                  <div/>
                  <span>Loading...</span>
                </>
              ) : (
                'Log In'
              )}
        </button>
        {error && (
            <div>
            {error}
          </div>
        )}
      </form>
    </div>
  )
}

export default Login
