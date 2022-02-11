import React from 'react'

function Name() {
    const names=['karan','ram','hari']
    const nameLIST=names.map(name=><h2>{name}</h2>)

  return (<h2>{nameLIST}</h2>
  )
}

export default Name