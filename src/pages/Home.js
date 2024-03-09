import React from 'react'
import Counter from '../components/counter'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/reducers/userSlice';

function Home() {

  const {user, loggedin} = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = ()=>{
    dispatch(logout())
    navigate('/login')
  }

  return (
    <div>
      <h1>Home Page</h1>
      <Counter />
      {user? (user.email):(<p>No User</p>)}
      
      <button onClick={handleLogout}>logout</button>
    
     
    </div>
  )
}

export default Home
