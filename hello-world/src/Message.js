import React, { Component } from "react";
class Message extends Component
{
    constructor(){
        super()
        this.state={
            message:'welcome visitor'
        }
    }
    changeMethod(){
        this.setState(
            {
                message:'thank you'
            }
        )
    }
    render()
    {
        return(
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMethod()}>subscribe</button>
      </div>
      )
    }
}
export default Message