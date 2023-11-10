import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Blog from '../components/Blog'

const HomePage = ({isAuthenticated, users, user, handleUser, handleAuthenticated}) => {
  return (
    <>
      <Header isAuthenticated = {isAuthenticated} users = {users} user = {user} handleUser = {handleUser} handleAuthenticated = {handleAuthenticated} />
      <Banner />
      <main>
        <Blog user = {user} />
      </main>
    </>
  )
}

export default HomePage