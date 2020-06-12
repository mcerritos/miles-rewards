import React from 'react'
import { useDrag, DragPreviewImage } from 'react-dnd'
import { RewardTypes } from '../config/RewardTypes'
import trophy from '../images/reward.jpg'

const rewardStyle = {
  fontSize: 40,
  fontWeight: 'bold',
  cursor: 'move',
}

export const Reward = () => {
  
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: RewardTypes.REWARD },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  return (
    <>
    <DragPreviewImage connect={preview} src={trophy} />
      <div
        ref={drag}
        style={{
          ...rewardStyle,
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        Reward
      </div>
    </>
  )
}