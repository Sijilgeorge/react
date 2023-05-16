import React, { useState } from 'react'

const HookCounter = () => {
    const [count,setcount]=useState(0)
    const decrement=()=>{
        setcount=count+1
    }

  return (
    <div>
        count:{count}<br></br>
        <button onClick={()=>setcount(prev=>prev+1)}>decrement</button><br></br>
        <button onClick={()=>setcount(prev=>prev+5)}>increment</button><br></br>
        <button onClick={()=>setcount(0)} >rest</button>
    </div>
  )
}

export default HookCounter