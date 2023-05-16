import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props)
    {
        super(props)
        {
            this.state={
                count:0
            }
        }
      }
      increment(){
        this.setState(
        {
          count:this.state.count + 1

        },()=>{
          console.log('set',this.state.Count)
        })
        console.log(this.state.Count)
      }
    

      
    
  render() {
    return (
      <div>
        count-{this.state.count}
        <br></br>
        <button onClick={()=>this.increment()}>increment</button>

      </div>
    )
  }
}

export default Counter