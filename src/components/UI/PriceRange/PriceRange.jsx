import { memo } from 'react'
import Proptypes from 'prop-types'
import styles from './PriceRange.module.css'
import { RangeSlider } from '../RangeSlider'
import { PriceInput } from '../inputs'
import { usePriceRangeState } from './hooks'

function PriceRange({ min = 0, max = 100, minValue, maxValue, ranges = [] }) {
  const { minPrice, maxPrice, handleOnMinChange, handleOnMaxChange } =
    usePriceRangeState({ min, max, minValue, maxValue, ranges })

  const disabledInputs = ranges.length > 0

  return (
    <div className={styles.price_range}>
      <PriceInput
        min={min}
        max={max}
        disabled={disabledInputs}
        value={minPrice}
        onBlur={handleOnMinChange}
      />
      <RangeSlider
        min={min}
        max={max}
        ranges={ranges}
        minValue={minPrice}
        maxValue={maxPrice}
        handleOnMinChange={handleOnMinChange}
        handleOnMaxChange={handleOnMaxChange}
      />
      <PriceInput
        min={min}
        max={max}
        disabled={disabledInputs}
        value={maxPrice}
        onBlur={handleOnMaxChange}
      />
    </div>
  )
}

PriceRange.prototype = {
  min: Proptypes.number,
  max: Proptypes.number,
  minValue: Proptypes.number,
  maxValue: Proptypes.number
}

export default memo(PriceRange)
