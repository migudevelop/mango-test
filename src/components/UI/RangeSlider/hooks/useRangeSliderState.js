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

  const handleOnMinMove = (movedX) => {
    const movedPosition = getMinMovedX(movedX)
    const valueByPosition = getValueByPosition(movedPosition)
    const value = positionUtils.getValuePosition(
      valueByPosition,
      getMaxAllowedPosition(),
      ranges
    )
    handleOnMinChange(value)
    paintUI(minDotRef, movedPosition)
  }

  const handleOnMaxMove = (movedX) => {
    const movedPosition = getMaxMovedX(movedX)
    const valueByPosition = getValueByPosition(movedPosition)
    const value = positionUtils.getValuePosition(
      valueByPosition,
      getMinAllowedPosition(),
      ranges
    )
    handleOnMaxChange(value)
    paintUI(maxDotRef, movedPosition)
  }

  const paintUI = (ref, position) => {
    positionUtils.moveToPosition(ref, position)
    updateActiveRangePosition()
  }

  const handleOnMouseMove = (e, movedFn) => {
    if (isDragActive) {
      let movedX = positionUtils.getRelativeMousePosition(e.clientX, sliderRef)
      movedFn(movedX)
    }
  }

  return {
    sliderRef,
    activeRef,
    maxDotRef,
    minDotRef,
    handleOnMouseMove,
    handleOnMinMove,
    handleOnMaxMove
  }
}

export default useRangeSliderState
