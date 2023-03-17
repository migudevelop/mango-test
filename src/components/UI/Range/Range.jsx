import { memo, useState } from 'react'
import Proptypes from 'prop-types'
import styles from './Range.module.css'
import { RangeSlider } from '../RangeSlider'
import { PriceInput } from '../inputs'

function Range({ min = 0, max = 100, minValue, maxValue }) {
  const [minPrice, setMinPrice] = useState(minValue ?? min)
  const [maxPrice, setMaxPrice] = useState(maxValue ?? max)

  const handleOnMinChange = (val) => {
    setMinPrice(val)
  }

  const handleOnMaxChange = (val) => {
    setMinPrice(val)
  }

  return (
    <div className={styles.range}>
      <PriceInput min={min} max={max} value={minPrice} onBlur={setMinPrice} />
      <RangeSlider
        min={min}
        max={max}
        minValue={minPrice}
        maxValue={maxPrice}
        handleOnMinChange={handleOnMinChange}
        handleOnMaxChange={handleOnMaxChange}
      />
      <PriceInput min={min} max={max} value={maxPrice} onBlur={setMaxPrice} />
    </div>
  )
}

Range.prototype = {
  min: Proptypes.number,
  max: Proptypes.number,
  minValue: Proptypes.number,
  maxValue: Proptypes.number
}

export default memo(Range)
