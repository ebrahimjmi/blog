import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Blog from '../components/Blog'

const HomePage = ({isAuthenticated, users, user, handleUser}) => {
  return (
    <>
      <Header isAuthenticated = {isAuthenticated} users = {users} user = {user} handleUser = {handleUser} />
      <Banner />
      <main>
        <Blog user = {user} />
      </main>
    </>
  )
}

export default HomePage