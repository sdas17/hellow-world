import React, { Component } from 'react'

export class ClassClick extends Component {
    clickhander(){
        console.log('clicked the button')
    }
  render() {

    return (
      <div>
          <button onClick={this.clickhander}></button>
      </div>
    )
  }
}

export default ClassClick