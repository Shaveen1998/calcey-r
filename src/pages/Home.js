import React from 'react'
import Counter from '../components/counter'
import {useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {logout} from '../redux/users/userSlice'

function Home() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {loggedin } = useSelector((state) => state.user);
  const user = useSelector(state => state.user.user);

  const handleSubmit = (e)=>{
      e.preventDefault();

      dispatch(logout())
      navigate('/login')
  }
  return (
    <div>
      <h1>Home Page</h1>
      <Counter />
      {user.email}
      {loggedin && (
         <button onClick={handleSubmit}>logout</button>
      )}
     
    </div>
  )
}

export default Home
