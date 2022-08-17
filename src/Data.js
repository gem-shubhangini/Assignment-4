import React from 'react'
import { useState } from 'react';

const Data = () => {
    const[Word,setWord]=useState("");
    const[Temp,setTemp]=useState("")
    const[Wordcount,setWordcount]=useState(0);
    const handleChange=(e)=>{
        
        setTemp(e.target.value)
        
        console.warn("temp",Temp);
    }
    
    const handleClick=()=>{
        
        setWord(Temp);
      
        setWordcount(Wordcount+1);
        
     
    }
    
    

   
    
   return (
     <div>
        <div>
      <input className="form-control"type="text" onChange={handleChange} />
         <button onClick={handleClick} type="button" className='btn btn-outline-success m-3' >Add</button>
         </div>
        
           <p className="text-light"style={{backgroundColor: Wordcount % 5 === 0 ? 'blue' : ''}}>{Word}</p>
         
     </div>
   )
}

export default Data
