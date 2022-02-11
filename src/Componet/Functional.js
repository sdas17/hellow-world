import React from 'react'

function Functional() {
    function clickhandler(){
         console.log('button clicked')
    }
  return (
    <div>
        <button onClick={clickhandler}>click</button>
    </div>
  )
}

export default Functional