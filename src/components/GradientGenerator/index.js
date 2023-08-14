import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  AppContainer,
  Heading,
  Paragraph,
  GradientDirectionsListContainer,
  InputContainer,
  CustomInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    activeButtonValue: gradientDirectionsList[0].value,
    gradientColor: `to ${gradientDirectionsList[0].value},#8ae323,'#014f7b`,
  }

  generateColor = () => {
    const {firstColor, secondColor, activeButtonValue} = this.state
    this.setState({
      gradientColor: `to ${activeButtonValue},${firstColor},${secondColor}`,
    })
  }

  chooseFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  chooseSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  render() {
    const {firstColor, secondColor, gradientColor} = this.state
    return (
      <AppContainer
        data-testid="gradientGenerator"
        gradientColor={gradientColor}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <GradientDirectionsListContainer>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              key={eachDirection.directionId}
              displayDirection={eachDirection}
            />
          ))}
        </GradientDirectionsListContainer>
        <Paragraph>Pick the Colors</Paragraph>
        <InputContainer>
          <CustomInput
            type="color"
            onChange={this.chooseFirstColor}
            value={firstColor}
          />
          <CustomInput
            type="color"
            onChange={this.chooseSecondColor}
            value={secondColor}
          />
        </InputContainer>
        <GenerateButton type="button" onClick={this.generateColor}>
          Generate
        </GenerateButton>
      </AppContainer>
    )
  }
}

export default GradientGenerator
