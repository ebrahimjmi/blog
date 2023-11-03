import React, { useState } from 'react'

const Login = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
                  <input type="text" className="form-control" name="username" placeholder="Enter your username" onChange={handleInputChange} value={formData.username}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" name="password" placeholder="Enter your password" onChange={handleInputChange} value={formData.password} />
                </div>
                <button type="submit" className="btn bg-dark text-white">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login