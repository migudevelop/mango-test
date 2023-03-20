import { memo } from 'react'
import { CircleLoader } from '../CircleLoader'
import classes from './FullPageLoader.module.css'

function FullPageLoader() {
  return (
    <div className={classes.fullPageLoader}>
      <CircleLoader />
    </div>
  )
}

export default memo(FullPageLoader)
