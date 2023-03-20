import { memo } from 'react'
import PropTypes from 'prop-types'
import styles from './InstructionsList.module.css'

function InstructionsList({ children, title }) {
  return (
    <article className={styles.instructions_article}>
      <h2 className={styles.instructions_title}>{title}</h2>
      <ul className={styles.instructions_list}>{children}</ul>
    </article>
  )
}

InstructionsList.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
}

export default memo(InstructionsList)
