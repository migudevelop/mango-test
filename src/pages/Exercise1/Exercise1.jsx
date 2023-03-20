import { FeedbackState, PriceRange } from '../../components/UI'
import { getMinMax } from '../../services/exercises'
import styles from './Exercise1.module.css'

function Exercise1() {
  const { data, isLoading, error } = getMinMax()
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
