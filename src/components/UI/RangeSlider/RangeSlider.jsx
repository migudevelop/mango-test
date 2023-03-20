import { memo } from 'react'
import Proptypes from 'prop-types'
import { useDrag } from '@/hooks'
import styles from './RangeSlider.module.css'
import { useRangeSliderState } from './hooks'

function RangeSlider({
  min = 0,
  max = 100,
  ranges = [],
  minValue,
  maxValue,
  handleOnMinChange = () => null,
  handleOnMaxChange = () => null
}) {
  const { isDragActive, enableDrag, disableDrag } = useDrag()
  const {
    sliderRef,
    activeRef,
    maxDotRef,
    minDotRef,
    handleOnMouseMove,
    handleOnMinMove,
    handleOnMaxMove
  } = useRangeSliderState({
    isDragActive,
    max,
    min,
    minValue,
    maxValue,
    ranges,
    handleOnMinChange,
    handleOnMaxChange
  })

  return (
    <div
      className={styles.slider}
      onMouseEnter={disableDrag}
      onMouseLeave={disableDrag}
    >
      <div ref={sliderRef} className={styles.slider_wrapper}>
        <div ref={activeRef} className={styles.slider_active_range} />
        <span
          ref={minDotRef}
          className={styles.slider_dot}
          onMouseDown={enableDrag}
          onMouseUp={disableDrag}
          onMouseLeave={disableDrag}
          onMouseMove={(e) => handleOnMouseMove(e, handleOnMinMove)}
        />
        <span
          ref={maxDotRef}
          className={styles.slider_dot}
          onMouseDown={enableDrag}
          onMouseUp={disableDrag}
          onMouseLeave={disableDrag}
          onMouseMove={(e) => handleOnMouseMove(e, handleOnMaxMove)}
        />
      </div>
    </div>
  )
}

RangeSlider.prototype = {
  min: Proptypes.number,
  max: Proptypes.number,
  ranges: Proptypes.arrayOf(Proptypes.number),
  minValue: Proptypes.number,
  maxValue: Proptypes.number,
  handleOnMinChange: Proptypes.number,
  handleOnMaxChange: Proptypes.number
}

export default memo(RangeSlider)
