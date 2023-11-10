import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar';

const Header = ({ isAuthenticated, users, user, handleAuthenticated }) => {

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (e) => {
    if (window.scrollY > 100) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  };

  const [isOpenSearch, setOpenSearch] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const openProfile = () => {
    setIsProfile(!isProfile);
  }
  const handleOpenSearch = (e) => {
    setOpenSearch(!isOpenSearch);
  }
  window.addEventListener("scroll", handleScroll);

  const handleLogout = () => {
    openProfile()
    handleAuthenticated(false);
  }
  return (
    <header className={`py-4 ${isScrolled ? `bg-white` : `bg-yellow`}`}>
      <div className='container position-relative'>
        <div className='row align-items-center'>
          <div className='site-log col-md-3'>
            <Link to='/'>My BLog</Link>
          </div>
          <nav className='col-md-7'>
            <ul className='d-flex justify-content-md-end align-items-center'>
              <li className={isOpenSearch ? `d-none` : `d-block`}>
                <Link className='mx-2' to="#">Our Story</Link>
                <Link className='mx-2' to="#">Membership</Link>

                {
                  isAuthenticated ? (<> <Link className='mx-2' to="/post">Write</Link><p className='d-inline-block text-dark mb-0' onClick={openProfile}><span style={{ cursor: 'pointer' }}><i class="fa fa-regular fa-user"></i><span className='mx-2'>{user.name}</span></span></p></>) : <Link className='mx-2' to="/login">Login In</Link>
                }

              </li>
              <li>
                <SearchBar handleOpenSearch={handleOpenSearch} isOpenSearch={isOpenSearch} />
              </li>
            </ul>
          </nav>
          <div className='col-md-2'>
            <button className='btn site-btn bg-dark text-white'>Get Started</button>
          </div>
        </div>
        <nav className={`profile ${isProfile ? `d-inline-block` : `d-none`}`}>
          <ul>
            <li>
              <Link to='/viewprofile'>My Profile</Link>
            </li>
            <li>
              <Link onClick={handleLogout}>Logout</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header