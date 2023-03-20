import { memo } from 'react'
import PropTypes from 'prop-types'
import styles from './PriceInput.module.css'
import { formats } from '@/utils'
import { usePriceInputState } from './hooks'

function PriceInput({ disabled = true, max, min, value = 0, onBlur }) {
  const {
    isEditable,
    currentValue,
    toggleIsEditable,
    handleOnChange,
    handleOnBlur
  } = usePriceInputState({ disabled, min, max, value, onBlur })

  return (
    <div className={`${styles.price_wrapper}`}>
      {isEditable && (
        <input
          data-testid="price-input"
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
        <span className={styles.price_span} onClick={toggleIsEditable}>
          {formats.numberToCurrency({ number: currentValue })}
        </span>
      )}
    </div>
  )
}

PriceInput.propTypes = {
  disabled: PropTypes.bool,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onBlur: PropTypes.func.isRequired
}

export default memo(PriceInput)
