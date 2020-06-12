import React from 'react'
import { GridSquare } from './GridSquare'
import { Reward } from './Reward'


/** Styling properties applied to each square element */
const squareStyle = { width: '16.6%' }

export const Grid = ({ observers, rewards, setRewards, id }) => {
  function renderSquare(i) {
    const x = i % 6
    const y = id
    return (
      <div key={i} style={squareStyle}>
        <GridSquare id={id} observers={observers} rewards={rewards} setRewards={setRewards} x={x} y={y}>
          {renderPiece(x, y)}
        </GridSquare>
      </div>
    )
  }

  function renderPiece(x, y) {
    try {
      for (let i = 0; i < rewards.length; i++) {
        if (rewards[i] === x && rewards[i] === y ) {
          return <Reward />
        }
        else {
          return null
        }
        
      }
    }
    catch {
      for (let i = 0; i < rewards.length; i++) {
        if (rewards[0] === x && rewards[1] === y ) {
          return <Reward />
        }
        else {
          return null
        }
      }
    }
    
  }

  const squares = []
  for (let i = 0; i < 6; i += 1) {
    squares.push(renderSquare(i))
  }

  return <div className="Grid" >{squares}</div>
}
