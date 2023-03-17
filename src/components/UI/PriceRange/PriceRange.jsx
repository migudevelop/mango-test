import { memo } from 'react'
import Proptypes from 'prop-types'
import styles from './PriceRange.module.css'
import { RangeSlider } from '../RangeSlider'
import { PriceInput } from '../inputs'
import { usePriceRangeState } from './hooks'

function PriceRange({ min = 0, max = 100, minValue, maxValue }) {
  const { minPrice, maxPrice, handleOnMinChange, handleOnMaxChange } =
    usePriceRangeState({ min, max, minValue, maxValue })

  return (
    <div className={styles.price_range}>
      <PriceInput
        min={min}
        max={max}
        value={minPrice}
        onBlur={handleOnMinChange}
      />
      <RangeSlider
        min={min}
        max={max}
        minValue={minPrice}
        maxValue={maxPrice}
        handleOnMinChange={handleOnMinChange}
        handleOnMaxChange={handleOnMaxChange}
      />
      <PriceInput
        min={min}
        max={max}
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
