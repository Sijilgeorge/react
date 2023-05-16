import React from 'react'

const NameList = () => {
    const person=[{name:'sijil',age:18},{name:'arun',age:9}]
  return (
    <div>
       {
        person.map((person)=>(
            <h2>my name is {person.name} my age is.{person.age}</h2>
        ))
        }
    </div>
  )
}

export default NameList