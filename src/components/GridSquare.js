import React from 'react'
import { useDrop } from 'react-dnd'
import { Square } from './Square'
import { canMoveReward, moveReward } from '../config/Positioning'
import { RewardTypes } from '../config/RewardTypes'
import { Overlay } from './Overlay'

export const GridSquare = ({ x, y, children, observers, rewards, setRewards }) => {

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: RewardTypes.REWARD,
    canDrop: () => canMoveReward(x, y, rewards),
    drop: () => moveReward((newPos) => setRewards(newPos), x, y, observers),
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
