import { useEffect, useState } from 'react'

const getValue = ({ min, max, value }) => {
  if (value > max) return max
  if (value < min) return min
  return value
}

export default function usePriceInputState({ min, max, value, onBlur }) {
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
  return {
    isEditable,
    currentValue,
    toggleIsEditable,
    handleOnChange,
    handleOnBlur
  }
}
