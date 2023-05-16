import React from 'react'

const Fetch = () => {
    const apiGet=()=>{
        fetch('')
        .then((response)=>response.json())
        .then((json)=>console.log(json))
    }
  return (
    <div>
        My api <br></br>
        <button onClick={apiGet}>click</button>
    </div>
  )
}

export default Fetch