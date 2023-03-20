import { memo } from 'react'
import { CircleLoader } from '../Loaders/CircleLoader'
import styles from './FeedbackState.module.css'

function FeedbackState({ children, isLoading, error = null }) {
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

export default memo(FeedbackState)
