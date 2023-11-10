import React from 'react'

const MyProfile = () => {

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    avatar: 'https://via.placeholder.com/150', // Replace with the URL of the user's avatar image
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src={user.avatar} alt={user.name} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">{user.email}</p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">About Me</h5>
              <p className="card-text">{user.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile