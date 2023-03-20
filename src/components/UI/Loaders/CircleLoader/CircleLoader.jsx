import { memo } from 'react'
import PropTypes from 'prop-types'
import styles from './CircleLoader.module.css'

function CircleLoader({ className }) {
  return (
    <svg className={`${styles.svg} ${className}`} viewBox="0 0 50 50">
      <circle className={`${styles.svg_circle}`} cx="25" cy="25" r="20" />
    </svg>
  )
}

CircleLoader.prototype = {
  className: PropTypes.string
}

export default memo(CircleLoader)
