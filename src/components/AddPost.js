import JoditEditor from 'jodit-react';
import React, { useState, useRef, useMemo } from 'react';
const AddPost = () => {

  const editor = useRef(null);
  const [content, setContent] = useState('');
  const handleChange = (e) => {
    const pValue = e;
    console.log('Value from <p>:', pValue.text);
  }
  return (
    <div class="container mt-5">
      <div class="row">
        <div class="">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">Create a Post</h2>
              <form>
                <div class="mb-3">
                  <label for="title" class="form-label">Post title</label>
                  <input type="text" class="form-control" id="title" name="title" placeholder="Enter title" />
                </div>
                <JoditEditor className='mb-4' ref={editor} value={content} onChange={handleChange} />
                <div class="mb-3">
                  <label for="title" class="form-label">Post Category</label>
                  <input type="text" class="form-control" id="title" name="title" placeholder="Enter Category" />
                </div>
                <button type="submit" class="btn btn-primary mx-2">Create Post</button>
                <button type="submit" class="btn btn-danger">Reset Content</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPost