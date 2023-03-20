import { memo } from 'react'
import PropTypes from 'prop-types'

function InstructionsListItem({ children }) {
  return <li>{children}</li>
}

InstructionsListItem.propTypes = {
  children: PropTypes.node.isRequired
}

export default memo(InstructionsListItem)
