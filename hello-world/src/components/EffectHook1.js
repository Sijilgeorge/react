import React, { useEffect, useState } from 'react'

const EffectHook1 = () => {
    const [count,setcount]=useState(0)
    const[state,setstate]=useState('')
    useEffect(()=>{
        console.log('updated')
        document.title=`you clicked= ${count} times`
    },[count])
  return (
    <div>
        name
        <input type='text' value={state}onChange={(e)=>
        setstate(e.target.value)}></input>
        <button onClick={()=>setcount(
            count+1
        )}>Buttton</button>
        count:{count}
    </div>
  )
}

export default EffectHook1