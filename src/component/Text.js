import React from 'react'
import './Text.css'

const Text = ({ children, variant }) => {
    if(variant === "h1") {
      return <h1>{children}</h1>
    } else if(variant === "h2") {
      return <h2>{children}</h2>
    }
    return <p>{children}</p>
  }

export default Text