import React from 'react'

export default function MsgBox({userName, textColor="blue"}) {
    return (
    <div>
      <h1 style= {{color: textColor}}>Hello {userName}</h1>
    </div>
  )
}
