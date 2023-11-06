import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: ''
  })
  const [users, setUsers] = useState([]);
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length,
      ...formData,
    }
    const tempData = [...users];
    setUsers([...users, newUser]);
    tempData.push(newUser);
    window.localStorage.setItem('users', JSON.stringify(tempData));
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h3 className="card-title text-center">Sign Up</h3>
              <form onSubmit={handleSubmit}>
              <div className="mb-3">
                  <label htmlFor="username" className="form-label">Name</label>
                  <input type="text" className="form-control" name="name" placeholder="Enter your name" onChange={handleInputChange} value={formData.name}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control" name="username" placeholder="Enter your username" onChange={handleInputChange} value={formData.username}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" name="password" placeholder="Enter your password" onChange={handleInputChange} value={formData.password} />
                </div>
                <button type="submit" className="btn btn-dark mx-2">Signup</button>
                <Link to='/login' className='btn btn-dark'>have an coount?</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup