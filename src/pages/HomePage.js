import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Blog from '../components/Blog'

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <Blog />
      </main>
    </>
  )
}

export default HomePage