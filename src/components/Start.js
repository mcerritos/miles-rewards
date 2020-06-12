import React, { useState, useEffect } from 'react'
import {Grid } from './Grid.js'
import { observe } from '../config/Positioning'

export const Start = () => {
  const [rewards, setRewards] = useState([
    {
      id: 1,
      location: [0,1],
    },
    {
      id: 2,
      location: [0,2],
    },
    {
      id: 3,
      location: [0,3],
    },
    {
      id: 4,
      location: [0,4],
    },
    {
      id: 5,
      location: [0,5],
    },
  ])

  useEffect(() => observe((newPos) => setRewards(newPos)))
  
  return (
    <div>
      <div className="Start">
        <Grid rewards={rewards} />
      </div>
    </div>
  )
}