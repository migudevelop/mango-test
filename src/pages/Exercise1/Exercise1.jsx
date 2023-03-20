import { FeedbackState, PriceRange } from '@/components'
import { exercisesServices } from '@/services'
import styles from './Exercise1.module.css'

function Exercise1() {
  const { data, isLoading, error } = exercisesServices.getMinMax()
  return (
    <section className={styles.exercise1_wrapper}>
      <h1>Normal price slider </h1>
      <FeedbackState isLoading={isLoading} error={error}>
        <PriceRange max={data?.max} min={data?.min} />
      </FeedbackState>
    </section>
  )
}

export default Exercise1
