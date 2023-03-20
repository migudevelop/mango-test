import { useRef, useEffect } from 'react'
import { positionUtils } from '@/utils'
import useRangeSliderPositions from './useRangeSliderPositions'

const useRangeSliderState = ({
  isDragActive,
  max,
  min,
  minValue,
  maxValue,
  ranges,
  handleOnMinChange,
  handleOnMaxChange
}) => {
  const sliderRef = useRef(null)
  const activeRef = useRef(null)
  const maxDotRef = useRef(null)
  const minDotRef = useRef(null)

  useEffect(() => {
    positionUtils.moveToPosition(minDotRef, getPositionByValue(minValue ?? min))
    positionUtils.moveToPosition(maxDotRef, getPositionByValue(maxValue ?? max))
    updateActiveRangePosition()
  }, [minValue, maxValue])

  const {
    getMinMovedX,
    getMaxMovedX,
    getMinAllowedPosition,
    getMaxAllowedPosition,
    getPositionByValue,
    getValueByPosition,
    updateActiveRangePosition
  } = useRangeSliderPositions({
    max,
    min,
    sliderRef,
    activeRef,
    maxDotRef,
    minDotRef
  })

  const handleOnMouseMove = (e, ref) => {
    if (isDragActive) {
      let movedX = positionUtils.getRelativeMousePosition(e.clientX, sliderRef)

      if (ref === minDotRef) {
        movedX = getMinMovedX(movedX)
      } else if (ref === maxDotRef) {
        movedX = getMaxMovedX(movedX)
      }
      const valueByPosition = getValueByPosition(movedX)
      if (ref === minDotRef) {
        const value = positionUtils.getValuePosition(
          valueByPosition,
          getMaxAllowedPosition(),
          ranges
        )
        handleOnMinChange(value)
      } else if (ref === maxDotRef) {
        const value = positionUtils.getValuePosition(
          valueByPosition,
          getMinAllowedPosition(),
          ranges
        )
        handleOnMaxChange(value)
      }

      positionUtils.moveToPosition(ref, movedX)
      updateActiveRangePosition()
    }
  }

  return {
    sliderRef,
    activeRef,
    maxDotRef,
    minDotRef,
    handleOnMouseMove
  }
}

export default useRangeSliderState
