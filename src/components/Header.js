import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='py-4 bg-yellow'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='site-log col-md-3'>
            <Link to='/'>My BLog</Link>
          </div>
          <nav className='col-md-7'>
            <ul className='d-flex justify-content-md-end'>
              <li>
                <Link className='mx-2' to="#">Our Story</Link>
                <Link className='mx-2' to="#">Membership</Link>
                <Link className='mx-2' to="#">Write</Link>
                <Link className='mx-2' to="#">Sign In</Link>
              </li>
            </ul>
          </nav>
          <div className='col-md-2'>
            <button className='btn site-btn bg-dark text-white'>Get Started</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header