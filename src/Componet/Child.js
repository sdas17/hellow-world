import React from 'react'

function Child(props) {
  return (
    <div>
        <button onClick={()=>props.gridHandler('child')}>click here</button>
    </div>
  )
}

export default Child