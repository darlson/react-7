import React, { useState } from 'react'
import StyleHOC from '../HOCS/StyleHOC'

const Toggle = ({ style, children }) => {
  const [on, setOn] = useState(false)
  return (
    <div style={style}>
      {on && children}
      <button onClick={() => setOn(!on)} style={style}>
        Show/Hide
      </button>
    </div>
  )
}

export default StyleHOC(Toggle)