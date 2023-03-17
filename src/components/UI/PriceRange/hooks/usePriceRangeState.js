import { useState } from 'react'

const getMinPrice = ({ maxPrice, price }) => {
  if (price >= maxPrice) {
    return maxPrice - 1
  }
  return price
}

const getMaxPrice = ({ minPrice, price }) => {
  if (price <= minPrice) {
    return minPrice + 1
  }
  return price
}

export default function usePriceRangeState({ min, max, minValue, maxValue }) {
  const [minPrice, setMinPrice] = useState(minValue ?? min)
  const [maxPrice, setMaxPrice] = useState(maxValue ?? max)

  const handleOnMinChange = (val) => {
    setMinPrice(getMinPrice({ price: val, maxPrice }))
  }

  const handleOnMaxChange = (val) => {
    setMaxPrice(getMaxPrice({ price: val, minPrice }))
  }
  return { minPrice, maxPrice, handleOnMinChange, handleOnMaxChange }
}
