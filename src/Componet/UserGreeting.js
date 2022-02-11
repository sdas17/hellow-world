import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLogin:true
      }
    }
  
  render() {
    //   return this.state.isLogin?(  <div>welcome</div>):(
    //   <div>my name is subham</div>)
       return this.state.isLogin && <div>welcome page</div>
    //   let message
    //   if (this.state.isLogin) {
    //       message=<div>welcome vishwaas</div>
    //   } else {
    //       message=<div>welcome guest</div>
    //   }
    //   return <div>{message}</div>

    //   if (this.state.isLogin) {
    //       return <div>welcome miracle</div>
          
    //   } else {
    //       return <div>my name is subham kumar das</div>
    //   }
    // return (
    //   <div>
    //       <h1>welcome miracle</h1>
    //   </div>
    // )
  }
}

export default UserGreeting