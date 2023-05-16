import React, { useState } from 'react'

const HookCounter4 = () => {
    var person=[0,9,10]
    const[items,setitem]=useState(person)
   
    
  return (
    <div>
        
        <ul>
            {person.map((person) =>(
                <li>{person}</li>
            ))}
        </ul>
    </div>
  )
}

export default HookCounter4