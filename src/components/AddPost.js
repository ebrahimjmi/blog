import JoditEditor from 'jodit-react';
import React, { useState, useRef, useMemo } from 'react';
import categories from './categoryData';
const AddPost = ({user}) => {
  const editor = useRef(null);
  const [formData, setFormData] = useState({
    title: '',
    post: '',
    category: 'Programming',
    blog_img: ''
  });
  const [posts, setPosts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setFormData({ ...formData, [name]: value });
  }

  const handlePost = (e) => {
    e.preventDefault();
    const tempPost = [...posts];
    setPosts([...posts, formData]);
    tempPost.push(formData);
    window.localStorage.setItem('posts', JSON.stringify(tempPost));
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Create a Post</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Post title</label>
                  <input type="text" className="form-control" name="title" placeholder="Enter title" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <textarea type="text" className="form-control" name="post" placeholder="Typing here" rows='5' onChange={handleChange} />
                </div>
                <div className='mb-3'>
                  <input type='file' className='form-control-file' name='blog_img' onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Post Category</label>
                  <select className='form-select' name='category' defaultValue={'Programming'} onChange={handleChange}>
                    {categories.map((data) => <option key={data.id}>{data.name}</option>)}
                  </select>
                </div>
                <button type="submit" className="btn btn-primary mx-2" onClick={handlePost}>Create Post</button>
                <button type="submit" className="btn btn-danger">Reset Content</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPost