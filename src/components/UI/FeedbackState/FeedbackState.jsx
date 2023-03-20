import { memo } from 'react'
import PropTypes from 'prop-types'
import { CircleLoader } from '../Loaders/CircleLoader'
import styles from './FeedbackState.module.css'

function FeedbackState({ children, isLoading = false, error = null }) {
  const hasError = error != null
  return (
    <>
      {(isLoading || hasError) && (
        <section>
          {isLoading && (
            <CircleLoader className={styles.feedbackstate_loader} />
          )}
          {!isLoading && hasError && (
            <div>
              <span>{error}</span>
            </div>
          )}
        </section>
      )}
      {!isLoading && !hasError && children}
    </>
  )
}

FeedbackState.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.number,
  error: PropTypes.string
}

export default memo(FeedbackState)
