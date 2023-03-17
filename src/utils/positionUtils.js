export const getOffsetLeftPosition = (ref) => ref?.current?.offsetLeft
export const getOffsetWith = (ref) => ref?.current?.offsetWidth

export const moveToPosition = (ref, position) => {
  ref.current.style.left = `${position}px`
}

export const getRelativeMousePosition = (position, ref) =>
  position - ref.current.getBoundingClientRect().left

const isMinorThanAcumulateValue = (value, currentValue) => value < currentValue

const isValueInUse = (current, valueInUse) => current !== valueInUse

const getRangeValue = (currentValue, valueInUse, rangeValues) =>
  rangeValues.reduce((acum, current) =>
    isMinorThanAcumulateValue(
      Math.abs(currentValue - current),
      Math.abs(currentValue - acum)
    ) && isValueInUse(current, valueInUse)
      ? current
      : acum
  )

export const getValuePosition = (currentValue, valueInUse, rangeValues) => {
  if (rangeValues.length) {
    return getRangeValue(currentValue, valueInUse, rangeValues)
  }
  return currentValue
}
