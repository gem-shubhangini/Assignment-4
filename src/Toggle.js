import React from 'react'
import { useState } from 'react';
const Toggle = () => {
   const [Display, setDisplay] = useState(false);
   const [count, setCount] = useState(0);
   
   const setParagraph=()=>{
       setDisplay(!Display)
       setCount(count+1)
   }
   
  return (
    <div>
        <p>You clicked {count} times</p>
      <button onClick={setParagraph} type="button" className="btn btn-outline-primary">Display Details</button>
      {Display && (
        <div className='para'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Aliquam etiam erat velit scelerisque in dictum non consectetur. Rhoncus dolor purus non enim praesent elementum. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Sit amet justo donec enim diam. Consectetur purus ut faucibus pulvinar elementum integer. Mattis rhoncus urna neque viverra justo. </p>
        </div>
      )}
     
    </div>
  )
}

export default Toggle
