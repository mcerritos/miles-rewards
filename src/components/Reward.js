import React, {useEffect} from 'react'
import { useDrag, DragPreviewImage } from 'react-dnd'
import { RewardTypes } from '../config/RewardTypes'
import {observe, reset} from '../config/Positioning'
import trophy from '../images/reward.png'

const rewardStyle = {
  fontSize: 'x-large',
  fontWeight: 'bold',
  cursor: 'move',
}

export const Reward = ({id, observers, setRewards, setPreviousValue, previousValue, coordinates }) => {

  // useEffect(() => {
  //   setPreviousValue(previousValue.concat(coordinates))
  //   return () => {
  //   }
  // },[observers])

  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: RewardTypes.REWARD },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  return (
    <>
      <DragPreviewImage id="preview" connect={preview} src={trophy} />
      <div ref={drag} style={{...rewardStyle, opacity: isDragging ? 0.5 : 1,}}> 
      R{id}
      </div>
      <button className="reset" onClick={ reset.bind(reset, (newPos) => setRewards(newPos), id, observers) } id={id}>x</button>
    </>
  )
}

