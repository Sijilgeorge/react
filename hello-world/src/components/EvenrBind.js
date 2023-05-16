import React, { useState } from 'react'

const EvenrBind = () => {
    var[names,setnames]=useState('hello')
    const eventHandler=()=>{
      setnames("nvfjf")
    }
  return (
    <div>
        <div>{names}</div>
        <button onClick={eventHandler}>
            click me
        </button>
    </div>
  )
}

export default EvenrBind