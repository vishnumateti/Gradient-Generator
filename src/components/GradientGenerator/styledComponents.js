// Style your elements here
import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientColor});
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
`
export const Paragraph = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
`

export const GradientDirectionsListContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const InputContainer = styled.div`
  display: flex;
`

export const CustomInput = styled.input`
  width: 100px;
`
export const GenerateButton = styled.button`
  outline: none;
`
