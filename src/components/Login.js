import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Login = ({ handleAuthenticated, handleUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  
  const [users, setUsers] = useState(JSON.parse(window.localStorage.getItem('users')));
  // const [isAuthenticated, setUserAuthenticated] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let isAuthenticated = false;
    console.log(users);
    
    if(users) {
      users.map((data) => {
        if (data.username === formData.username && data.password === formData.password) {
          handleUser(data);
          isAuthenticated = true;
        }
      })
    }

    if (isAuthenticated) {
      handleAuthenticated();
      navigate('/');
    } else {
      toast.error('wrong username or password')
    }
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h3 className="card-title text-center">Login</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control" name="username" placeholder="Enter your username" onChange={handleInputChange} value={formData.username} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" name="password" placeholder="Enter your password" onChange={handleInputChange} value={formData.password} />
                </div>
                <button type="submit" className="btn btn-dark mx-2">Login</button>
                <Link to='/signup' className='btn btn-dark'>Create an account</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login