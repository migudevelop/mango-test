import { FeedbackState, PriceRange } from '../../components/UI'
import { getRanges } from '../../services/exercises'
import styles from './Exercise2.module.css'

function Exercise2() {
  const { data, isLoading, error } = getRanges()
  return (
    <section className={styles.exercise2_wrapper}>
      <h1>Price slider with ranges</h1>
      <FeedbackState isLoading={isLoading} error={error}>
        <PriceRange ranges={data} />
      </FeedbackState>
    </section>
  )
}

export default Exercise2
