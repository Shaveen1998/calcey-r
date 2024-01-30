import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';


function Signup() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
      };

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!formData.email || !formData.password) {
            return setErrorMessage('Please fill out all fields.');
          }
        console.log('form submitted')
        navigate('/login')
    }


  return (
    <div>
      <h1>Signup</h1>

      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Email' onChange={handleChange}/>
        <input type="password" placeholder='Password' onChange={handleChange}/>
        <button>
        {loading ? (
                <>
                  <div/>
                  <span>Loading...</span>
                </>
              ) : (
                'Sign Up'
              )}
        </button>
        {errorMessage && (
            <div>
              {errorMessage}
            </div>)}
      </form>
    </div>
  )
}

export default Signup
