import { memo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './PriceInput.module.css'
import { formats } from '../../../../utils'

const getValue = ({ min, max, value }) => {
  if (value > max) return max
  if (value < min) return min
  value
}

function PriceInput({ max, min, value = 0, onBlur }) {
  const [isEditable, setIsEditable] = useState(false)
  const [currentValue, setCurrentValue] = useState(value)

  useEffect(() => {
    setCurrentValue(value)
  }, [value])

  const toggleIsEditable = () => {
    setIsEditable((prev) => !prev)
  }

  const handleOnChange = (e) => {
    const newValue = getValue({
      min,
      max,
      value: e.target.value ?? 0
    })
    setCurrentValue(newValue)
  }

  const handleOnBlur = () => {
    toggleIsEditable()
    onBlur && onBlur(currentValue)
  }

  return (
    <div className={`${styles.price_wrapper}`}>
      {isEditable && (
        <input
          type="number"
          autoFocus
          max={max}
          min={min}
          className={styles.price_input}
          value={currentValue}
          onKeyUp={(ev) => {
            if (ev.key === 'Enter') {
              handleOnBlur()
            }
          }}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
        />
      )}
      {!isEditable && (
        <span onClick={toggleIsEditable}>
          {formats.numberToCurrency({ number: currentValue })}
        </span>
      )}
    </div>
  )
}

PriceInput.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onBlur: PropTypes.func.isRequired
}

export default memo(PriceInput)
