import React from 'react'
import  './TextConatiner.css'
import Text from './Text'

const TextConatiner = ({headline1, headline2, body  }) => {
    return  <div className='textcontainer'>
    {headline1 && <Text variant={"h2"}>{headline1}</Text>}
    {headline2 && <Text variant={"h1"}>{headline2}</Text>}
    {body && <Text>{body}</Text>}
     
    
  </div>
  }

export default TextConatiner