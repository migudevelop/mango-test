import { positionUtils } from '../../../../utils'

export default function useRangeSliderPositions({
  sliderRef,
  activeRef,
  maxDotRef,
  minDotRef,
  min,
  max
}) {
  const updateActiveRangePosition = () => {
    activeRef.current.style.left = `${positionUtils.getOffsetLeftPosition(
      minDotRef
    )}px`
    activeRef.current.style.right = `${
      sliderRef?.current?.offsetWidth -
      positionUtils.getOffsetLeftPosition(maxDotRef)
    }px`
  }

  const getPositionByValue = (value) => {
    const valueDifference = max - min
    const selectableValue = value - min
    return Math.round(
      (selectableValue * positionUtils.getOffsetWith(sliderRef)) /
        valueDifference
    )
  }

  const getValueByPosition = (position) => {
    const positionPercentage =
      (position * 100) / positionUtils.getOffsetWith(sliderRef)
    const valueDifference = max - min
    const value = min + (valueDifference * positionPercentage) / 100
    return Math.round(value * 100) / 100
  }

  const getMinHandlerMaxAllowedPosition = () => {
    const securityMargin = positionUtils.getOffsetWith(minDotRef) / 2
    const maxHandlerPosition = positionUtils.getOffsetLeftPosition(maxDotRef)
    return maxHandlerPosition - securityMargin
  }

  const getMaxHandlerMinAllowedPosition = () => {
    const securityMargin = positionUtils.getOffsetWith(maxDotRef) / 2
    const minHandlerPosition = positionUtils.getOffsetLeftPosition(minDotRef)
    return minHandlerPosition + securityMargin
  }

  const getMinMovedX = (movedX) => {
    let minMovedX = movedX
    const minHandlerMaxAllowedPosition = getMinHandlerMaxAllowedPosition()
    if (minMovedX >= minHandlerMaxAllowedPosition) {
      minMovedX = minHandlerMaxAllowedPosition
    }

    if (minMovedX < 0) {
      minMovedX = 0
    }
    return minMovedX
  }

  const getMaxMovedX = (movedX) => {
    let maxMovedX = movedX
    const parentOffsetWidth = positionUtils.getOffsetWith(sliderRef)
    const maxHandlerMinAllowedPosition = getMaxHandlerMinAllowedPosition()
    if (maxMovedX <= maxHandlerMinAllowedPosition) {
      maxMovedX = maxHandlerMinAllowedPosition
    }

    if (maxMovedX > parentOffsetWidth) {
      maxMovedX = parentOffsetWidth
    }
    return maxMovedX
  }

  return {
    getMinMovedX,
    getMaxMovedX,
    getPositionByValue,
    getValueByPosition,
    updateActiveRangePosition
  }
}
