import { memo, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './PriceInput.module.css'
import { formats } from '../../../../utils'

function PriceInput({ value = 0, onChange }) {
  const [isEditable, setIsEditable] = useState(false)
  const [currentValue, setCurrentValue] = useState(value)

  const toggleIsEditable = () => {
    setIsEditable((prev) => !prev)
  }

  const handleOnChange = (e) => {
    const newValue = e.target.value
    setCurrentValue(newValue)
    onChange && onChange(newValue)
  }

  return (
    <div className={`${styles.price_wrapper}`}>
      {isEditable && (
        <input
          type="number"
          autoFocus
          className={styles.price_input}
          value={currentValue}
          onKeyUp={(ev) => {
            if (ev.key === 'Enter') {
              toggleIsEditable()
            }
          }}
          onBlur={toggleIsEditable}
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
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default memo(PriceInput)
