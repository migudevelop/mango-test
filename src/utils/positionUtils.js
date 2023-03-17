export const getOffsetLeftPosition = (ref) => ref?.current?.offsetLeft
export const getOffsetWith = (ref) => ref?.current?.offsetWidth

export const moveToPosition = (ref, position) => {
  ref.current.style.left = `${position}px`
}

export const getRelativeMousePosition = (position, ref) =>
  position - ref.current.getBoundingClientRect().left

export const getClosestValue = (rangeValues, currentValue, valueToAvoid) => {
  if (rangeValues.length) {
    let closest = rangeValues[0]
    rangeValues.forEach((val) => {
      if (
        Math.abs(currentValue - val) < Math.abs(currentValue - closest) &&
        val !== valueToAvoid
      ) {
        closest = val
      }
    })
    return closest
  }

  return currentValue
}
