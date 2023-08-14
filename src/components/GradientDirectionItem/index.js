// Write your code here
import {ListContainer, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {displayDirection} = props
  const {displayText} = displayDirection

  return (
    <ListContainer>
      <DirectionButton>{displayText}</DirectionButton>
    </ListContainer>
  )
}
export default GradientDirectionItem
