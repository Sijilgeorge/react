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
  render() {
    return (
      <div>
        count-{this.state.count}
        <br></br>
        <button>increment</button>

      </div>
    )
  }
}

export default Counter