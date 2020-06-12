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

// these check whether you can move and then move you
export function canMoveReward(toX, toY, position, id) {
  const [x, y] = position
  const dx = toX - x
  const dy = toY - y
  return (
    ( dx !== 0 && dy === id) 
  )
}

export function moveReward(o, toX, toY, observers) {
  let position = [toX, toY]
  emitChange(o, position, observers)
}