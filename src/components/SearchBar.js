import React, { useState } from 'react'

const SearchBar = ({handleOpenSearch, isOpenSearch}) => {

  
  return (
    <div className='form-group' style={{position: 'relative'}}>
      <input type="text" placeholder="Search" className={`form-control ${isOpenSearch ? `d-block` : `d-none`}`} />
      <i className={`fa fa-search text-dark ${isOpenSearch ? `d-none` : `d-block`}`} style={{cursor: 'pointer'}} onClick={handleOpenSearch}></i>
      <span className={` text-dark ${isOpenSearch ? `d-bock` : `d-none`}`} style={{cursor: 'pointer', position: 'absolute', top: '6px', right: '10px'}} onClick={handleOpenSearch}>X</span>
    </div>
  )
}

export default SearchBar