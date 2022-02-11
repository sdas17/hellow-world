import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentname:'parent'
      }
     this.greetparent=this.greetparent.bind(this)
    }
    greetparent(childName){
        alert('Hellow ${this.state.parentname} from ${childName}')
    }
  render() {
    return (
      <div>
          <Child gridHandler={this.greetparent}/>
      </div>
    )
  }
}

export default Parent