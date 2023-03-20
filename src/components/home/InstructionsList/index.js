import { default as InstructionsListHOC } from './InstructionsList'
import { default as InstructionsListItem } from './InstructionsListItem'

const InstructionsList = Object.assign(InstructionsListHOC, {
  ListItem: InstructionsListItem
})

export default InstructionsList
