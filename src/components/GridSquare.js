import React from 'react'
import { useDrop } from 'react-dnd'
import { Square } from './Square'
import { canMoveReward, moveReward } from '../config/Positioning'
import { RewardTypes } from '../config/RewardTypes'
import { Overlay } from './Overlay'

export const GridSquare = ({ x, y, children, id, observers, position, setRewards, previousValue, setPreviousValue }) => {

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: RewardTypes.REWARD,
    canDrop: () => canMoveReward(x, y, id, position),
    drop: () => moveReward((newPos) => setRewards(newPos), x, y, observers, previousValue, setPreviousValue),
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
      {isOver && !canDrop && <Overlay color="maroon" />}
      {isOver && canDrop && <Overlay color="darkseagreen" />}
    </div>
  )
}
