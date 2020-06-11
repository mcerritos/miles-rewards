import React, { useState, useEffect } from 'react'
import { Grid } from './components/Grid'
import { observe } from './Game'
const containerStyle = {
  width: 500,
  height: 500,
  border: '1px solid gray',
}

export const Start = () => {
  const [knightPos, setKnightPos] = useState([1, 7])
  // the observe function will return an unsubscribe callback
  useEffect(() => observe((newPos) => setKnightPos(newPos)))
  return (
    <div>
      <div style={containerStyle}>
        <Grid knightPosition={knightPos} />
      </div>
    </div>
  )
}