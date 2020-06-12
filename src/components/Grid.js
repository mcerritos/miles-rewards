import React from 'react'
import { GridSquare } from './GridSquare'
import { Reward } from './Reward'

const boardStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
}

/** Styling properties applied to each square element */
const squareStyle = { width: '16.6%', height: '16.6%' }
/**
 * The chessboard component
 * @param props The react props
 */

export const Grid = ({ rewards }) => {

  function renderSquare(i) {
    const x = i % 6
    const y = Math.floor(i / 6)
    return (
      <div key={i} style={squareStyle}>
        <GridSquare x={x} y={y}>
          {renderPiece(x, y)}
        </GridSquare>
      </div>
    )
  }

  function renderPiece(x, y) {
    console.log(rewards)
    try {
      for (let i = 0; i < rewards.length; i++) {
        if (rewards[i].location[0] === x && rewards[i].location[1] === y ) {
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
  for (let i = 0; i < 36; i += 1) {
    squares.push(renderSquare(i))
  }

  return <div className="Grid" style={boardStyle}>{squares}</div>
}
