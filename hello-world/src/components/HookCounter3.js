import React, { useState } from 'react'

const HookCounter3 = () => {
    const[name,setName]=useState({firstName:'',lastName:''})
  return (
    <div>
        <form>
        <input type='text'value={name.firstName} onChange={(e)=>
        setName({ ...name ,firstName:e.target.value})}></input>
        <input type="text"value={name.lastName} onChange={(e)=>
        setName({...name,lastName:e.target.value})}></input>
        <h2>first name:{name.firstName}</h2>
        <h2>last name:{name.lastName}</h2>
        </form>
    </div>
  )
}

export default HookCounter3