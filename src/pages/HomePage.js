import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Blog from '../components/Blog'

const HomePage = ({isAuthenticated}) => {
  return (
    <>
      <Header isAuthenticated = {isAuthenticated} />
      <Banner />
      <main>
        <Blog />
      </main>
    </>
  )
}

export default HomePage