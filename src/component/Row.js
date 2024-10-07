import React from 'react'
import './Row.css'

const Row = (props) =>{
    return <div className='container'>
    {
      props.children
    } </div>
  }

export default Row