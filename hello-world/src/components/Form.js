import React, { useState } from 'react'

const Form = () => {
    var[uname,setuname]=useState('')
   const eventHandeler=(e)=>
    {
        
        setuname(e.target.value)
    }
    var[comments,setComents]=useState('')
    const coments=(e)=>{
        setComents(e.target.value)
    }
    const display=(e)=>{
        alert(`${uname}`)
        e.preventDefault()
    }

  return (
    <div>
   <form onSubmit={display}>
     <div>
        <label>User name</label>
        <input type='text' value={uname} 
        onChange={eventHandeler}/>
    </div>
    <div>
        <label>comments</label>
        <textarea value={comments} onChange={coments}/>
    </div>
    <div>
            <button type="submit">submit</button>
        </div>
   </form>
   
   <h2>name:{uname}</h2>
        <h2>adddress:{comments}</h2>
        
   </div>
   
  )
}


export default Form