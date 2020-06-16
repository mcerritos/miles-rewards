import React, { useState, useEffect } from 'react'
import {Grid } from './Grid.js'
import { observe, emitChange } from '../config/Positioning'
import TopGrid from './TopGrid.js'
import Header from './Header'

export const Start = () => {
  const [previousValue, setPreviousValue] = useState([])

  function undo (o, previousValue, observers) {
    emitChange(o, previousValue, observers)
  }

  const [rewards1, setRewards1] = useState([0,1])
  const [rewards2, setRewards2] = useState([0,2])
  const [rewards3, setRewards3] = useState([0,3])
  const [rewards4, setRewards4] = useState([0,4])
  const [rewards5, setRewards5] = useState([0,5])

  const [observers1, setObservers1] = useState([])
  const [observers2, setObservers2] = useState([])
  const [observers3, setObservers3] = useState([])
  const [observers4, setObservers4] = useState([])
  const [observers5, setObservers5] = useState([])

  // whenever it renders observe it and then set it to the new position 
  useEffect(() => observe((newPos) => setRewards1(newPos), observers1, rewards1, previousValue, setPreviousValue))
  useEffect(() => observe((newPos) => setRewards2(newPos), observers2, rewards2, previousValue, setPreviousValue))
  useEffect(() => observe((newPos) => setRewards3(newPos), observers3, rewards3, previousValue, setPreviousValue))
  useEffect(() => observe((newPos) => setRewards4(newPos), observers4, rewards4, previousValue, setPreviousValue))
  useEffect(() => observe((newPos) => setRewards5(newPos), observers5, rewards5, previousValue, setPreviousValue))

  return (
    <div>
      <div className="Start">
        <TopGrid/>
        <Grid id={1} observers={observers1} rewards={rewards1} setRewards={setRewards1} undo={undo} previousValue={previousValue} setPreviousValue={setPreviousValue}/>
        <Grid id={2} observers={observers2} rewards={rewards2} setRewards={setRewards2} undo={undo} previousValue={previousValue} setPreviousValue={setPreviousValue}/>
        <Grid id={3} observers={observers3} rewards={rewards3} setRewards={setRewards3} undo={undo} previousValue={previousValue} setPreviousValue={setPreviousValue}/>
        <Grid id={4} observers={observers4} rewards={rewards4} setRewards={setRewards4} undo={undo} previousValue={previousValue} setPreviousValue={setPreviousValue}/>
        <Grid id={5} observers={observers5} rewards={rewards5} setRewards={setRewards5} undo={undo} previousValue={previousValue} setPreviousValue={setPreviousValue}/>
      </div>
    </div>
  )
}