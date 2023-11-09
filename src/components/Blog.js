import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BlogList from './BlogList';

const Blog =  ({user}) => {

  const blogData = JSON.parse(localStorage.getItem('posts'));
  const[data, setData] = useState(blogData);

  return (
    <>
      <BlogList blogData = {data} user = {user} />
    </>
  )
}

export default Blog