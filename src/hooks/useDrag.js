import { useState } from 'react'

function useDrag(initialValue = false) {
  const [isDragActive, setIsDragActive] = useState(initialValue)

  const enableDrag = () => setIsDragActive(true)
  const disableDrag = () => setIsDragActive(false)
  return { isDragActive, enableDrag, disableDrag }
}

export default useDrag
