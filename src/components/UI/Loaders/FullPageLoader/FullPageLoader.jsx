import { memo } from 'react'
import { CircleLoader } from '../CircleLoader'
import classes from './FullPageLoader.module.css'

function FullPageLoader() {
  return (
    <div data-testid="fullpage-loader" className={classes.fullPageLoader}>
      <CircleLoader />
    </div>
  )
}

export default memo(FullPageLoader)
