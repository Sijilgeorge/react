import React, { Component } from 'react'

 class ClassClick extends Component {
    eventHandler(){
        console.log("button clicked")

    }
  render() {
    return (
      <div>
        <button onClick={this.eventHandler}>click</button>
      </div>
    )
  }
}

export default ClassClick