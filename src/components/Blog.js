import React, { useEffect, useState } from 'react'
import axios from 'axios';
import blogData from './BlogData';
import BlogList from './BlogList';

const Blog =  () => {

  const[data, setData] = useState(blogData);

  return (
    <>
      <BlogList blogData = {data} />
    </>
  )
}

export default Blog