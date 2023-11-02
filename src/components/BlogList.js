import React, { useState } from 'react'
import TruncatedContent from './TruncatedContent'

const BlogList = ({ blogData }) => {

  return (
    <div className='container'>
      {
        blogData.map((data) => <div key={data.id}>
          <div>
            <div className="card border border-0 mb-3">
              <div className="row no-gutters flex-row-reverse">
                <div className="col-md-4">
                  <img src={data.img} alt="Image" className="card-img" style={{maxHeight: '200px'}}/>
                </div>
                <div className="col-md-8">
                  <div className='px-3 mt-3'>
                    <div className="d-flex align-items-center">
                      <div>
                        <img src={data.img} alt="" style={{width: '25px', height: '25px', borderRadius: `100%`}} />
                      </div>
                      <div className='mx-2'>
                        <h6 className='mb-0'>{data.author}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5>{data.title}</h5>
                    <p className="card-text truncate-text">
                      <TruncatedContent content={data.content} maxLength={150} />
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)
      }
    </div>
  )
}

export default BlogList