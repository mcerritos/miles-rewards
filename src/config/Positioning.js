let rewardPosition = [1, 1]

let observers = []
function emitChange() {
  observers.forEach((o) => o && o(rewardPosition))
}
export function observe(o) {
  observers.push(o)
  emitChange()
  return () => {
    observers = observers.filter((t) => t !== o)
  }
}
export function canMoveReward(toX, toY) {
  const [x, y] = rewardPosition
  const dx = toX - x
  const dy = toY - y
  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  )
}
export function moveReward(toX, toY) {
  rewardPosition = [toX, toY]
  emitChange()
}