import { InstructionsList } from '@/components'
import styles from './Home.module.css'

function Home() {
  return (
    <section className={styles.home_wrapper}>
      <h1 className={styles.home_title}>Exescise instructions:</h1>
      <InstructionsList title="Exercise 1:">
        <InstructionsList.ListItem>
          Clicked in the dot and move mouse to left or right
        </InstructionsList.ListItem>
        <InstructionsList.ListItem>
          Clicked in the price to change value
        </InstructionsList.ListItem>
      </InstructionsList>
      <InstructionsList title="Exercise 2:">
        <InstructionsList.ListItem>
          Clicked in the dot and move mouse to left or right
        </InstructionsList.ListItem>
      </InstructionsList>
    </section>
  )
}

export default Home
