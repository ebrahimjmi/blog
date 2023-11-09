import React, { useEffect, useState } from 'react'
import TruncatedContent from './TruncatedContent'

const BlogList = ({ blogData, user }) => {

  // const [img, setImg] = useState([]);
  // useEffect(() => {
  //   const tempData = blogData.map((data) => {
  //     const fullPath = data.blog_img;
  //     const pathArray = fullPath.split("\\");
  //     const fileName = pathArray[pathArray.length - 1];
  //     return fileName;
  //   })
  //   setImg(tempData);
  // }, [])

  // const getImageName = (file) => {
  //   const fullPath = file;
  //   const pathArray = fullPath.split("\\");
  //   const fileName = pathArray[pathArray.length - 1];
  //   return fileName;
  // }

  
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8'>
          {
            blogData ? blogData.map((data) => <div className="card border border-0 mb-3" key={data.id}>
              <div className="row no-gutters flex-row-reverse">
                <div className="col-md-4">
                  <img src={`../images/${data.blog_img.split("\\")[data.blog_img.split("\\").length -1 ]}`} alt="Image" className="card-img" style={{ maxHeight: '200px' }} />
                </div>
                <div className="col-md-8">
                  <div className='px-3 mt-3'>
                    <div className="d-flex align-items-center">
                      <div>
                        <img src={data.img} alt="" style={{ width: '25px', height: '25px', borderRadius: `100%` }} />
                      </div>
                      <div className='mx-2'>
                        <h6 className='mb-0'>{data.author}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5>{data.title}</h5>
                    <p className="card-text truncate-text">
                      <TruncatedContent content={data.post} maxLength={150} />
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>) : <>no post</>
          }
        </div>
        <div className='col-md-4'>
          <h5>Category</h5>
          <div className='d-flex flex-wrap'>
            <div className='btn bg-light m-2'>Programming</div>
            <div className='btn bg-light m-2'>Data Science</div>
            <div className='btn bg-light m-2'>Technology</div>
            <div className='btn bg-light m-2'>Self Improvement</div>
            <div className='btn bg-light m-2'>Writing</div>
            <div className='btn bg-light m-2'>Relationship</div>
            <div className='btn bg-light m-2'>Machine Learning</div>
            <div className='btn bg-light m-2'>Productivity</div>
            <div className='btn bg-light m-2'>Politics</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogList