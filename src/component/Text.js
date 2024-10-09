import React from 'react'
import './Text.css'

const Text = ({ children, variant, style, cssClass }) => {
    if(variant === "h1") {
      return <h1 className={cssClass} style={style}>{children}</h1>
    } else if(variant === "h2") {
      return <h2 className={cssClass} style={style}>{children}</h2>
    } else return <p className={cssClass} style={style}>{children}</p>
  }

export default Text