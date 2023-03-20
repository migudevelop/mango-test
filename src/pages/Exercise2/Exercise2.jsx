import { FeedbackState, PriceRange } from '@/components'
import { exercisesServices } from '@/services'
import styles from './Exercise2.module.css'

function Exercise2() {
  const { data: ranges, isLoading, error } = exercisesServices.getRanges()
  return (
    <section className={styles.exercise2_wrapper}>
      <h1>Price slider with ranges</h1>
      <FeedbackState isLoading={isLoading} error={error}>
        <PriceRange
          min={ranges?.at(0)}
          max={ranges?.at(ranges.length - 1)}
          ranges={ranges}
        />
      </FeedbackState>
    </section>
  )
}

export default Exercise2
