// let rewardPosition = [0,1]
for (let i = 1; i < 6; i++) {
  var rewardPosition = [0, i]
}

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

// these check whether you can move and then move you
export function canMoveReward(toX, toY) {
  const [x, y] = rewardPosition
  const dy = toX - x
  const dx = toY - y
  return (
    (dx === 0 && dy != 0) 
  )
}

export function moveReward(toX, toY) {
  rewardPosition = [toX, toY]
  emitChange()
}