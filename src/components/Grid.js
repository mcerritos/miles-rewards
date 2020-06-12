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
        <GridSquare id={id} observers={observers} position={rewards} setRewards={setRewards} x={x} y={y}>
          {renderPiece(x, y)}
        </GridSquare>
      </div>
    )
  }

  function renderPiece(x, y) {
    const isRewardHere = x === rewards[0] && y === rewards[1]
    return isRewardHere ? <Reward /> : null
  }

  const squares = []
  for (let i = 0; i < 6; i += 1) {
    squares.push(renderSquare(i))
  }

  return <div className="Grid" >{squares}</div>
}
