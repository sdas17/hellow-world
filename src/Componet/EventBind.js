import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg:"hii my name is subham kumnar dass"
      }
    //   this.clickhandler=this.clickhandler.bind(this);
      
    }
    // clickhandler(){

    //     this.setState({
    //         msg:"welcome"
    //     })
    //     console.log(this)
    // }
    clickhandler =()=>{
        this.setState({
            msg:'Goodbye!'
        })
    }
  render() {
    return (
        <div>
             <div>{this.state.msg}</div> 
        {/* <button onClick={this.clickhandler.bind(this)}></button> */}
{/* <button onClick={()=>this.clickhandler()}>click here</button> */}
<button onClick={this.clickhandler}>Click here</button>
        </div>
    )
  }
}

export default EventBind