import styled from "styled-components"

interface IMessageProps {
  readonly background?: string
  readonly left?: string
  readonly padding?: string
  readonly margin?: string
  readonly borderRadius?: string
}

export const Message = styled.div`
  background: ${({ background }: IMessageProps) => 
    background || "linear-gradient(to right, #390057, #31034d, #2a0543, #23063a, #1d0430)" };
  width: fit-content;
  max-width: 50%;
  margin: ${({ margin }: IMessageProps) => margin || "0" };
  left: ${({ left }) => left || "0" };
  padding: ${({ padding }) => padding || ".5rem" };
  border-radius: ${({ borderRadius }) => borderRadius || ".5rem" };
`