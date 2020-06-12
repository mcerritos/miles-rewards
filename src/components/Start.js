import React, { useState, useEffect } from 'react'
import {Grid } from './Grid.js'
import { observe } from '../config/Positioning'



export default function Start () {
  const [rewardPos, setRewardPos] = useState([1, 1])
  // the observe function will return an unsubscribe callback
  useEffect(() => observe((newPos) => setRewardPos(newPos)))
  return (
    <div>
      <div className="Start">
        <Grid rewardPosition={rewardPos} />
      </div>
    </div>
  )
}