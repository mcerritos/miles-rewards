export function emitChange(o, position, observers, previousValue, setPreviousValue) {
  observers.forEach((o) => o && o(position))
  // setPreviousValue(previousValue.concat(position))
}

export function observe(o, observers, position, previousValue, setPreviousValue) {
  observers.push(o)
  emitChange(o, position, observers, previousValue, setPreviousValue)
  return () => {
    observers = observers.filter((t) => t !== o)
  }
}

export function canMoveReward(toX, toY, id, position) {
  let [x,y] = position
  let dx = toX - x
  const dy = toY - y
  id = Number(id)

  if (id === 4) {
    dx = Math.abs(dx)
    return ( ( dx !== 0 && (dx === 4)) && dy === 0)
  }

  else {
    return (
      ( toX <= id && dx !== 0 && dy === 0) 
    )
  }
}

export function moveReward(o, toX, toY, observers, previousValue, setPreviousValue) {
  let position = [toX, toY]
  emitChange(o, position, observers, previousValue, setPreviousValue)
}

export function reset (o, id, observers, previousValue, setPreviousValue) {
  let position = [0, id]
  emitChange( o, position, observers, previousValue, setPreviousValue)
}
