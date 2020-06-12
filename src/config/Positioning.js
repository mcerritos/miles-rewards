function emitChange(o, position, observers) {
  observers.forEach((o) => o && o(position))
}

export function observe(o, observers, position) {
  observers.push(o)
  emitChange(o, position, observers)
  return () => {
    observers = observers.filter((t) => t !== o)
  }
}

export function canMoveReward(toX, toY, id, position) {
  let [x,y] = position
  const dx = toX - x
  const dy = toY - y
  id = Number(id)

  if (id === 4) {
    return ( (dx === 4 || dx === 0) && dy === 0)
  }

  else {
    return (
      ( dx <= id && dx !== 0 && dy === 0) 
    )
  }
}

export function moveReward(o, toX, toY, observers) {
  let position = [toX, toY]
  emitChange(o, position, observers)
}