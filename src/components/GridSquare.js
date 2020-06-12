import React from 'react'
import { useDrop } from 'react-dnd'
import { Square } from './Square'
import { canMoveReward, moveReward } from '../config/Positioning'
import { ItemTypes } from '../config/RewardTypes'
import { Overlay } from './Overlay'

export const GridSquare = ({ x, y, children }) => {

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.REWARD,
    canDrop: () => canMoveReward(x, y),
    drop: () => moveReward(x, y),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  })

  return (
    <div
      ref={drop}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Square>{children}</Square>
      {isOver && !canDrop && <Overlay color="red" />}
      {!isOver && canDrop && <Overlay color="yellow" />}
      {isOver && canDrop && <Overlay color="green" />}
    </div>
  )
}
